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
