---
title: NPM - Basics
date: 2025-02-17T00:01:00
modification date: 2025-03-07T12:50:00
description: 
tags:
  - npm
  - nodejs
  - script
  - nvm
aliases: 
draft: false
---
## Commands
> [!WARNING] DO NOT install nvm via another package manager like brew.

```bash
# 1. Install or update NVM (https://github.com/nvm-sh/nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 2. Install node
nvm install node

# 3. Install pnpm global 
npm install -g pnpm

# list oudated global packages
npm -g outdated

# list oudated local packages
npm outdated

#--------------------------------------------
# UPDATE GLOBAL PACKAGES
#--------------------------------------------
# Update NPM global
npm install -g npm@latest

# Update PNPM global
npm install -g pnpm@latest  # or pnpm add -g pnpm@latest

# Verify
node -v
npm -v
pnpm -v
```

