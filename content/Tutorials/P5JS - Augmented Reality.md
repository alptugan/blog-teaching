---
title: P5JS - Augmented Reality
date: 2025-03-01
modification date: Saturday 1st March 2025 22:41:08
description: 
tags:
  - p5js
  - tutorial
  - creativecoding
  - augmentedReality
aliases: 
draft: false
---
## What is augmented reality?
Augmented reality (AR) is a technology that overlays computer-generated images onto the real world, providing an enhanced or altered view of reality. Think of it as blending digital content with your physical surroundings.

![[p5js-ar00012.png]]

Designers can combine digital information with the physical world to create immersive experiences using AR. Within the creative coding domain, AR extends beyond basic applications like QR codes into more complex interactive environments.

Examples of AR in creative coding include:
1. **Interactive Projections**: For instance, a designer can enhance the customer experience using AR technologies. Imagine a brand identity representing a static images of the customer's company. When user points the smart phone camera onto the poster, the viewer can display animated version of the design, or give extra information about the company that can not be included in the identity.
   
   ![[p5js-ar00014.jpg]]

2. **Architecture**: People can view the rendered 3D version of a building in planning phase. Or they can customize the inner design of a house before buying it.
   
   ![[p5js-ar00001.jpg]]
   ![[p5js-ar00004.jpg]]
   ![[p5js-ar00011.jpg]]

3. **Interactive Games**: Imagine a traditional treasure hunt game. A set of markers can be distributed in closed or opened space, and players try to find the quests in correct order via scanning the markers. Or in a card game, the characters can be displayed in 3D and interact with the user.
   
   ![[p5js-ar00003.jpg]]
   ![[p5js-ar00007.jpg]]

Designers can utilize AR in creative coding for several purposes:

- **Prototyping**: They test designs in virtual environments without physical models, allowing them to visualize and refine concepts efficiently.
  ![[p5js-ar00009.jpg]]![[p5js-ar00005.jpg]]![[p5js-ar00002 1.png]]
  
- **Immersive Experiences**: Designers create experiences that respond to the user's presence within their environment. For example, a virtual art gallery where each exhibit reacts to movement, providing an interactive and engaging experience.
  ![[p5js-ar00008.jpg]]

- **Interior Architectural Design:** Designer or clients can determine required colors and object before buying it. By doing that customers have chance to experience how does the item look like in their space. 
  ![[p5js-ar00013.jpg]]![[p5js-ar00010.jpg]]

## p5.SimpleAR Library Installation
**p5.simpleAR** is a simple JavaScript supplement (mini-library) file to easily convert existing sketches into AR for PCs and smart devices. It includes 64 different marker patterns. Watch the [video](https://www.youtube.com/watch?v=I2mgpdLRX3g).
<iframe title="p5.simpleAR key visual" src="https://www.youtube.com/embed/I2mgpdLRX3g?feature=oembed" height="113" width="200" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;" allowfullscreen="" allow="fullscreen"></iframe>

1. Initially, a fiducial marker must be printed for use in an augmented reality application. A selection of suitable markers is available via a provided link. The chosen marker should be printed on A4-sized paper, with scaling considerations to ensure it remains within the focal range of the webcam. This marker will be programmatically associated with a p5JS sketch. Upon camera detection of the marker, specific digital content will be rendered to the viewer. The numerical identifier (ID) of the selected marker must be recorded, as this ID will be employed within the p5JS sketch to trigger the display of the designated content when the application recognizes the marker. For example, if the selected marker's image filename is "48wFrame.png," the corresponding ID is "48." The marker should then be printed, maintaining the white borders, at a size of 5 x 5 cm.
   🔗 [Link to diducial markers](https://github.com/tetunori/p5.simpleAR/tree/main/markers)
   
   ![[p5js-ar00015.jpeg]]
   
   Click on the png file, and download the image. Fiducial markers are just a simple black and white graphics.
   ![48wFrame.png](https://github.com/tetunori/p5.simpleAR/blob/main/markers/48wFrame.png?raw=true)
2. Copy the following library link
   `https://tetunori.github.io/p5.simpleAR/dist/latest/p5SimpleAR.js` and paste in `<script>` element. Import the library after the `p5.js` library. The overall `index.html` should look like the following:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/addons/p5.sound.min.js"></script>
    <script src="https://tetunori.github.io/p5.simpleAR/dist/latest/p5SimpleAR.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
```

3. Open the `sketch.js` file and change `createCanvas` -> `createARCanvas` in your `setup()` function as follows;
```js
function setup() {
  createARCanvas(240, 240);
}
```

4. Write some code that displays and image or draws an animated content in `draw()` function. For example I write an animated circle rotates around another circle as follows;
```js {lineNumbers:true}
function setup() {
  createARCanvas(240, 240);
}

function draw() {
  background(220);
  fill(0);
  circle(cos(frameCount * 0.02) * 83 + width / 2, sin(frameCount * 0.02) * 83 + height / 2, 33);
}
```

5. Now run the sketch, your computer may ask for permission to use your computer's webcam. You must allow the browser, otherwise the camera cannot be initialized. Show the marker to the camera, and you will see your p5JS sketch as if it was generated on the marker. 
   ![[cod208_week4_simpleAR.mp4]]
## Final Remarks
You can also navigate to your sketch link using your phones browser and display the content with on your phone. Actually, anyone with the link and the marker can view the content using their own devices. Here is [link](https://editor.p5js.org/alptugan/sketches/8Y-ykeDOF) to running code.

## Augmented Reality with ML5 Library
<br>
<iframe title="Create AR filters in the browser with ML5.js and P5.js | Creative Coding Tutorial" src="https://www.youtube.com/embed/9WywDPOV5nA?feature=oembed" height="113" width="200" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;" allowfullscreen="" allow="fullscreen"></iframe>
