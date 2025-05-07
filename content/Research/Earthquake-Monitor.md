---
title: Untitled
date: 2025-05-01 05:58:04
description: 
tags: 
aliases: 
draft: true
---
## Project Setup
To convert your current plain HTML project into a **Vite + Tailwind + PNPM** setup, here's a step-by-step guide to modernize it while keeping your Tailwind styling, Lucide icons, and JavaScript logic intact.

---

### ✅ Step 1: Create a Vite Project with PNPM

```bash
pnpm create vite earthquake-monitor --template vanilla
cd earthquake-monitor
```

Choose the `vanilla` template (not React/Vue/etc.) since you're using plain HTML + JS.

---

### ✅ Step 2: Install Packages

```bash
pnpm add tailwindcss @tailwindcss/vite

```

#### And include Lucide locally via npm:

```bash
pnpm add lucide
```

Then in your `main.js` (or rename `app.js` to `main.js` and place it in `src/`), add:

```js
import { createIcons } from 'lucide';

createIcons();
```

Update your `index.html` `<script src="app.js">` to:

```html
<script type="module" src="/src/main.js"></script>
```

---

### ✅ Step 6: Start Vite

```bash
pnpm dev
```

Vite will serve your project on `http://localhost:5173`.

---

### ✅ Step 7: Update `package.json` scripts

Add:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

Would you like me to give you a complete working `vite` project template in a ZIP or copy/paste form?


## Backend
[[REST API#Json-server]] can be used as quick database to handle information.


## Deploying
[Web Developer Checklist - Chrome Web Store](https://chromewebstore.google.com/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp)