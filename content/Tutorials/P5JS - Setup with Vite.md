---
title: P5JS - Setup with Vite
date: 2024-12-25
modfification date: Wednesday 25th December 2024 19:29:39
description: Shows how to create p5js projects inside a dedicated folder
tags:
  - p5js
  - vite
  - webdev
aliases: 
draft: true
---
A step-by-step guide to set up a **Global Development Tool Across All Daily Folders** for your Genuary2025 challenge using **Vite** and the **p5.js library**. Since the last three years I've been attending the Genuary challenge, I thought It would be much more easier to manage daily sketches. Sometimes I need to check older sketches for code snippets, or preivew the older projects quickly to remember about what they are look like. Such setup help me to keep all sketches run via adding a parameter to the local url and execute other days during the current day's challenge.

---

### **1. Install Node.js and npm**
Make sure you have **Node.js** installed, as it includes `npm` (Node Package Manager), which you’ll use to install Vite.

- [Download and install Node.js](https://nodejs.org/) if it’s not already installed.
- Verify installation:
    
    ```bash
    node -v
    npm -v
    ```
    

---

### **2. Initialize the Project**
1. Create the project folder:
    ```bash
    mkdir Genuary2025
    cd Genuary2025
    ```
    
2. Initialize a new npm project:
    ```bash
    npm init -y
    ```
    
    This creates a `package.json` file.


---

### **3. Install Vite**
Install Vite as a development dependency:

```bash
npm install vite --save-dev
```

---

### **5. Create the Project Structure**

Set up the folder structure for the daily projects:

```bash
mkdir day1 day2 day3 # Create folders for the first few days
```

Inside each `dayX` folder, create the following files:

#### **File: `day1/sketch.js`**

```javascript
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(255, 0, 0);
    circle(width / 2, height / 2, 50);
}

window.setup = setup;
window.draw = draw;
```

#### **File: `day1/style.css`**

```css
canvas.p5Canvas {
    display: block;
}
```

---

### **6. Create a Global `index.html`**

At the root of `Genuary2025`, create a single `index.html` file that dynamically loads the day's project based on a query parameter:

#### **File: `index.html`**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genuary 2025</title>
  <link rel="stylesheet" href="./global-style.css">
  <!-- Load p5.js globally -->
  <script src="https://cdn.jsdelivr.net/npm/p5@1.11.2/lib/p5.min.js"></script>
  <script>
    const params = new URLSearchParams(window.location.search);
    const day = params.get('day') || 'day1'; // Default to day1
    document.write(`<script src="./${day}/sketch.js"><\/script>`);
    document.write(`<link rel="stylesheet" href="./${day}/style.css">`);
  </script>
</head>

<body>
  <h1>Genuary 2025</h1>

  <p>Use ?day=day1, day2, etc., in the URL to load specific projects.</p>
</body>

</html>
```

---

### **7. Add a Vite Configuration**

Create a `vite.config.js` file at the root of `Genuary2025`:

#### **File: `vite.config.js`**

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Use the root folder for index.html
  server: {
    open: true, // Automatically open the browser
    port: 5173, // Default port
  },
});
```

---

### **8. Add Global Styles (Optional)**

For consistent global styling, create a `global-style.css` file at the root:

#### **File: `global-style.css`**

```css
body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full viewport height */
}

h1,
p {
    margin: 0;
    text-align: center;
    padding: 20px 0;
}

main {
    flex: 1; /* Occupy the remaining space */
    display: flex;
    justify-content: baseline; /* Center canvas horizontally */
    align-items: center; /* Center canvas vertically */
    flex-direction: column;
}
```

---

### **9. Update `package.json` Scripts**

Modify the `scripts` section in `package.json` to include a development command for Vite:

#### **`package.json`**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

### **10. Start the Development Server**

Run the Vite development server:

```bash
npm run dev
```

The server will start, and the browser will open at:

```
http://localhost:5173/
```

---

### **11. Access Daily Projects**

To load a specific day’s project, append `?day=dayX` to the URL:

- Day 1: `http://localhost:5173/?day=day1`
- Day 2: `http://localhost:5173/?day=day2`

---

### **12. Add More Days**

When creating new daily folders:

1. Duplicate the `day1` folder structure.
2. Update the `sketch.js` file with the new day’s project code.
3. Access it using `?day=dayX` in the browser.

---

### **13.  Build for Production**

If you want to generate production-ready files for deployment:

```bash
npm run build
```

The optimized files will be available in the `dist` folder.

---

### **Benefits of This Setup**

- **Centralized Management**: One server handles all daily projects.
- **Dynamic Loading**: Switch projects by changing the URL query.
- **p5.js Integration**: Modern ES module support for p5.js.
- **Performance**: Vite ensures fast development and optimized builds.

Enjoy your Genuary 2025 challenge! 🎨

