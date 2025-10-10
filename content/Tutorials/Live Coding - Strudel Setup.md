---
title: Live Coding - Strudel Setup
date: 2025-10-03 03:45:05
description:
tags:
  - livecoding
  - music
  - sound
aliases:
draft: false
---
This tutorial showcases the installation of Strudel Live Coding tool on your local device.
## 1. Dependencies
1. Install [Node.js](https://nodejs.org/)
2. Install [pnpm](https://pnpm.io/installation)
3. Instal `git`

## 2. Download the Source Code
Download the [source code](https://codeberg.org/uzu/strudel) from Codeberg repository server using `git`.

```bash
git clone https://codeberg.org/uzu/strudel.git
```


## 3. Install Packages via pnpm

```bash
# Navigate into the download repo
cd strudel

# Run pnpm installation script 
pnpm i

# It will take several minutes. Wait patiently

```

## 4. Run Strudel

```bash
# Run the dev server to use Strudel app on your local device
pnpm dev

```

After the `pnpm dev` command a server started for you. Open your browser and navigate to the specified local ip address and port `http://localhost:4321/` as follows;

![[strudel-setup.jpg|-center|500]]

## 5. Sample Loading
1. To disable preloaded samples goto `...~/strudel/website/src/repl/prebake.mjs`
Edit the `samples()` function

2. Refresh the strudel on browser.


### Samplepack Creation
[GitHub - smaudd/strudel-samplepack-template](https://github.com/smaudd/strudel-samplepack-template?tab=readme-ov-file)