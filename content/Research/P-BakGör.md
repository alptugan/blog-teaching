---
title: P-BakGör
date: 2026-05-09 11:41:10
description:
tags:
  - MacOS
  - extension
aliases:
draft: true
---
# Bak.Gör (Alpha)
<p style="margin-top:20px" align="center">

<img src="file:///Users/alptugan/Documents/DEVS/XCode/Bak/docs/bak-gor-v2.png" width="30%">

</p>

<p style="margin-top:20px" align="left">

(WIP) MacOS quicklook extension to preview markdown (md) files via space key. More file types will be added in the future release of the extension.

</p>


## Motivation
Whenever I need to quickly check markdown files, I have to double-click and wait for VS Code to initialized, etc... I've just wanted to hit Space key and see what is inside of the README files quickly. To overcome this tedious process, I've developed Bak.gör. The name of the of the extensin is in Turkish.

Bak = Look
Gör = See

## Installation
The repository is not suitable for non-programmers. It's a little bit tricky to deploy extension according to regular software. I'll get over this issue in the future releases.

### The "Terminal Bypass" Method
1. Copy **Bak.app** to the `/Applications` folder of the new Mac.
    
2. Open **Terminal** on the new Mac.
    
3. Run this command to strip away the Apple quarantine flag (which is attached automatically when the file is downloaded or transferred):

```bash
xattr -cr /Applications/Bak.app
```
    
4. Run this command to force a fresh Ad-Hoc signature onto the app using the new Mac's internal security credentials:
 
```bash
codesign --force --deep --sign - /Applications/Bak.app
```

Once they run those two lines, the app will open perfectly on their machine and live forever without expiring.

![GitHub commit activity](https://img.shields.io/github/commit-activity/t/alptugan/Bak)

![GitHub commit activity|120](https://img.shields.io/github/commit-activity/t/alptugan/Bak?style=plastic&label=Commit%20History&labelColor=ffcc00&color=444&link=https%3A%2F%2Fgithub.com%2Falptugan%2FBak%2Fcommits%2Fmain%2F)

![GitHub commit activity](https://img.shields.io/github/commit-activity/t/alptugan/Bak?style=plastic&label=Commit%20History&color=ffcc00&link=https%3A%2F%2Fgithub.com%2Falptugan%2FBak%2Fcommits%2Fmain%2F)


# Github Issues
## 1. Massive Memory Heap (Syntax Highlighter)
Yes, replacing a JavaScript-based highlighter (`JavaScriptCore`) with a **native Swift or C-based engine** is one of the single best architectural upgrades you can make for a macOS Quick Look extension.

In Quick Look extensions (`.appex`), running `JavaScriptCore` introduces heavy hidden costs: spin-up latency, JIT compilation overhead, and catastrophic regex backtracking that can balloon memory usage from megabytes to gigabytes.

## Why JavaScript-Based Highlighting Fails in Quick Look

|**Feature**|**JavaScriptCore (JSValue / Web View)**|**Native Swift Engine**|
|---|---|---|
|**Startup Overhead**|High (boots JS runtime engine per preview)|Near zero|
|**Memory Footprint**|Heavy (JS heap + garbage collection overhead)|Minimal (direct stack & stack/heap memory)|
|**Parsing Mechanism**|Complex Regex backtracking (`Yarr::Interpreter`)|AST / Linear token scanning|
|**Quick Look Limits**|Frequently hits system CPU/RAM throttle limits|Stays well within system sandbox quotas|

## Top Native Swift Alternatives

Depending on how many programming languages you need to support, here are the best native options for macOS:

### 1. Tree-Sitter (`SwiftTreeSitter`) — _Best Overall_

- **How it works:** Uses C-based grammar parsers compiled directly into your app.
    
- **Why it wins:** It builds a concrete **Abstract Syntax Tree (AST)** instead of running regex. It **cannot** suffer from catastrophic regular expression backtracking, no matter how malformed or massive the file is.
    
- **Usage:** Used heavily by modern macOS code editors like **CodeEdit** and Nova.
    

### 2. Splash (by John Sundell) — _Lightweight & Fast_

- **How it works:** A pure Swift syntax highlighter designed specifically for low-overhead rendering.
    
- **Why it wins:** Extremely fast with zero external dependencies, perfect for simple preview extensions.
    
- **Limitation:** Best suited for Swift and web-adjacent syntaxes; less extensible for obscure languages.
    

### 3. Native Swift Regex with `NSTextStorage` / `AttributedText`

- **How it works:** Use Swift's native `Regex` engine (introduced in Swift 5.7) to scan tokens line-by-line and apply styling directly to an `NSAttributedString`.
    
- **Why it wins:** Direct integration with macOS Cocoa/AppKit text rendering (`NSTextView` / `NSTextStorage`) without intermediate serialization layers.
    

## Recommended Quick Look Strategy

Even with a native highlighter, Quick Look previews must prioritize **speed and stability** over complete rendering. Implement these guardrails in your extension:

1. **Hard Size Limit:** If the file is larger than **150 KB**, skip syntax highlighting entirely and display it as plain text. Quick Look is meant for quick scanning, not heavy reading.
    
2. **Line Count Cap:** Truncate highlighting after the first **1,000 lines**. If a user previews a 50,000-line generated script, only highlight the visible portion.
    
3. **Asynchronous Tokenization:** Parse tokens off the main thread (`DispatchQueue.global(qos: .userInitiated)`), then apply `NSAttributedString` attributes on the main thread.ıp