---
title: P5JS - ml5 Sound Training
date: 2025-03-17
description: 
tags:
  - ml5
  - AI
  - creativecoding
  - cod208
  - tutorial
  - sound
aliases: 
draft: false
---
## Introduction
In this guide, we'll learn how to train models using sounds, which opens up many possibilities for creative projects. For example, you can make a game where players control characters with voice commands in their own language. You could also create an app that helps kids practice pronouncing words correctly. Another idea is making advergames to catch customers' attention by challenging them to mimic the sound of a movie star, with prizes for those who succeed.

## Training the Model
Follow the steps in the [[P5JS - ml5 and Teachable Machine Integration]] tutorial. Goto [Teachable Machine](https://teachablemachine.withgoogle.com/train/audio) audio training section to start.

Start by capturing the background noise of your environment. Doing this increases the accuracy of our model because background noise is always present. If there are no voice commands by the user and only background noise, it may lead to incorrect detections. By feeding the model with background noise, we aim to prevent such false inferences during our sample detection process.

![[week8_sound_ml01.jpeg|-center|400]]

The training process is more or less same with `image classifier` method. Even we record our sound samples, the webpage converts sound to image data using [sound spectrums](https://newt.phys.unsw.edu.au/jw/sound.spectrum.html) processing.

![[week8_sound_ml02.jpeg|-center|400]]
## Case Study
The following [code](https://editor.p5js.org/alptugan/sketches/m5Mio3D4E) is a demonstration of a simple game. I've trained the model using two words "sol" (left) and "sağ" (right) in Turkish. The circle on the canvas tends to move right, and the challenge is to keep it within the canvas. Otherwise, you fail. This can work as a game to improve pronunciation of the Turkish language. Actually, it could be for any language. As long as you train the model with sufficient data, it can adapt to anything.

Even though I've trained the model using just three samples—one for background noise and the others being two different words with 20 samples on each—it still works. Some incorrect detections add an interesting twist to the game, almost as if the computer is trying to challenge the player.

![[week8_sound_ml.mp4]]

### Source Code index.html
```html
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sound classification using SpeechCommands18w and p5.js</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js"></script>
    <script src="https://unpkg.com/ml5@1/dist/ml5.min.js"></script>
  </head>

  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

### Source Code sketch.js
```js
// A variable to initialize the Image Classifier
let classifier;

// Variable for displaying the results on the canvas
let label = "Model loading...";

let soundModelURL = "https://teachablemachine.withgoogle.com/models/XicRv7--q/";

let words = ["sol", "Background Noise"];

let xx;
// Variable for displaying the results on the canvas
let predictedWord = "";

function preload() {
  // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
  let options = { probabilityThreshold: 0.5 ,overlapFactor: 0.05};
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(650, 450);
  // Classify the sound from microphone in real time
  classifier.classifyStart(gotResult);

  // set x position
  xx = width / 2;
}

function draw() {
  background(250);
  // Call function for displaying background words
  displayWords();

  // Once the model outputs results start displaying the predicted word on the canvas
  if (predictedWord !== "") {
    fill(211, 107, 255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text(predictedWord, width / 2, 90);
  }

  // move the circle if the word == sol
  if(predictedWord === "sol") {
    xx = xx - 1;
  }else{
    xx = xx + 1;
  }
  
  if(xx > width) {
    classifier.classifyStop();
    predictedWord = "Pronounce better 😉";
  }
  
  fill(200, 0, 0);
  circle(xx, height / 2, 50);
}

// Function to display the 18 words on the canvas
function displayWords() {
  textAlign(CENTER, CENTER);
  textSize(22);
  fill(96);
  text("Say sol in Turkish language to keep the circle in the canvas", width / 2, 40);

  let x = 125;
  let y = 150;
}

// A function to run when we get any errors and the results
function gotResult(results) {
  // The results are in an array ordered by confidence
  console.log(results);
  // Load the first label to the text variable displayed on the canvas
  predictedWord = results[0].label;
}
```


## References
- [What is a Sound Spectrum?](https://newt.phys.unsw.edu.au/jw/sound.spectrum.html), 2025
- [Audio Model - Teachable Machines](https://teachablemachine.withgoogle.com/train/audio)