---
title: Slidev - Setup and Run
date: 2025-02-17
modification date: Monday 17th February 2025 16:23:04
description: 
tags:
  - presentation
aliases: 
draft: false
---
## Setup & Install	
Official [Slidev](https://sli.dev/guide/) suggests to use `pnpm` instead of `npm` for optimum performance and less headache during the updates.

### Latest Version: 51.1.2
```bash
# If you haven't installed pnpm
npm i -g pnpm

# Goto Root folder where you want to create a new slidev presentation
pnpm create slidev

# Select pnpm as package manager
# Slidev should start automatically
```


> [!WARNING] The latest slidev version *51.1.1* have some bugs. It does not display components `<Toc />`, `<Youtube />`, `magic-move`, etc... Downgrade slidev to fix this issue.

### Downgrade Slidev
```bash
# Goto Root folder where you want to create a new slidev presentation
pnpm create slidev

# Open package.json file and change the version of slidev dependency
"@slidev/cli": "^0.51.0-beta.4"

# Run the installation again
pnpm install

# Compile slidev
pnpm run dev

```

## Publishing 
```bash
pnpm run build --base /Slidev_Presentations/week03_cod_208/dist/

# if it throws error related to chromium do the following
pnpm add -D playwright-chromium
pnpm approve-builds

# test again
pnpm run build --base /Slidev_Presentations/week03_cod_208/dist/

# before uploading to Github, open .gitignore file and remove <dist> folder line.
```


## Themes 
- Academic Style Theme with tons of features [Neversink](https://github.com/gureckis/slidev-theme-neversink)
- Apple Style [Apple Basic](https://github.com/slidevjs/themes/tree/main/packages/theme-apple-basic)
- Academic style with footnote component and pagination [Academic](https://github.com/alexanderdavide/slidev-theme-academic)
- Another academic theme, but bad interface [Academic 2](https://github.com/AvencastF/slidev-theme-hep)