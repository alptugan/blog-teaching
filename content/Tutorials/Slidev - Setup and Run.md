---
title: Slidev - Setup and Run
date: 2025-02-17T02:00:00
description: 
tags:
  - presentation
  - slidev
aliases: 
draft: false
---
## Setup & Install	
Official [Slidev](https://sli.dev/guide/) suggests to use `pnpm` instead of `npm` for optimum performance and less headache during the updates.
### Slidev Project
```bash
# Goto Root folder where you want to create a new slidev presentation
pnpm create slidev

# Open package.json file and change the version of slidev dependency
"@slidev/cli": "^0.51.0-beta.4"

# Run the installation again
pnpm install

```

## Developing The Presentation
```shell
# Compile slidev
pnpm run dev
```

## Publishing 
```bash
pnpm run build --base /Slidev_Presentations/week03_cod_208/dist/

# if it throws error related to chromium do the following
pnpm add -D playwright-chromium
pnpm approve-builds

# install Logos `<logos-[name] />`
pnpm add @iconify-json/logos

# test again
pnpm run build --base /Slidev_Presentations/2025-2026/week03_cod_207-Computational_Thinking/dist --wait-until none

# before uploading to Github, open .gitignore file and remove <dist> folder line.
```

## Exporting
```shell
# Export as pdf - if there are missing contents
slidev export --wait 1000
```

## Themes 
- Academic Style Theme with tons of features [Neversink](https://github.com/gureckis/slidev-theme-neversink)
- Apple Style [Apple Basic](https://github.com/slidevjs/themes/tree/main/packages/theme-apple-basic)
- Academic style with footnote component and pagination [Academic](https://github.com/alexanderdavide/slidev-theme-academic)
- Another academic theme, but bad interface [Academic 2](https://github.com/AvencastF/slidev-theme-hep)