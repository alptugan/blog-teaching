---
title: NPM - Basics
date: 2025-02-17
modfification date: Monday 17th February 2025 16:46:43
description: 
tags:
  - npm
aliases: 
draft: false
---
## Commands
> [!WARNING] DO NOT install nvm via another package manager like brew.

```bash
# 1. Install NVM (https://github.com/nvm-sh/nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 2. Install node
nvm install node

# 3. Install pnpm global 
npm install -g pnpm

# list oudated global packages
npm -g outdated

# list oudated local packages
npm outdated
```
