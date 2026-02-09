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
## Update Existing Project
1. Copy files from the old project except the node folder.
2. Replace package.json with the new one
3. `pnpm install`
4. Follow instruction if there are any of them.
5. `pnpm dev`


> [!TIP] To view the content on windowless browser use `broz`
> [antfu/broz:](https://github.com/antfu/broz) A simple, frameless browser for screenshots.
> `npx broz alptugan.com`


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


## Publishing With GitHub Actions
⚠️ Do not forget to edit actions files for each slide project.

```yml title="deploy.yml"
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: 2025-2026/week05_cod_207-Randomness-Repetetion

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /Slidev_Presentations/2025-2026/week05_cod_207-Randomness-Repetetion/

      - name: Create deployment structure
        working-directory: .
        run: |
          mkdir -p deploy/2025-2026/week05_cod_207-Randomness-Repetetion
          cp -r 2025-2026/week05_cod_207-Randomness-Repetetion/dist/* deploy/2025-2026/week05_cod_207-Randomness-Repetetion/
          touch deploy/.nojekyll

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: deploy

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
## Publishing as SAAS
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
