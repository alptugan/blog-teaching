---
title: P5JS - ml5 and Teachable Machine Integration
date: 2025-03-17
description: 
tags:
  - p5js
  - tutorial
  - ml5
  - cod208
  - creativecoding
  - AI
aliases: 
draft: false
---
## Introduction
Before we start coding, it's helpful to first understand how computers use machine learning to recognize images. Check out this video for a good introduction.

<iframe title="How we teach computers to understand pictures | Fei Fei Li" src="https://www.youtube.com/embed/40riCqvRoMs?feature=oembed" height="113" width="200" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;" allowfullscreen="" allow="fullscreen"></iframe>

## Collect Samples
Goto [Teachable Machine](https://teachablemachine.withgoogle.com/) web site. Hit <span style="background:#40a9ff">Get Started</span>. Then choose <span style="background:#40a9ff">Image Project</span> to train your model with a specific image that you want to identify in your project. It can be an object, a human face or any other visual thing that you want to make your app identifies whenever the camera see it.
![[p5js-week07-teachable01.jpeg|-center|400]]

On the following screen, choose <font color="#0070c0">Standart image model</font> option to proceed training section.

![[p5js-week07-teachable02.jpeg|-center|400]]

You will see the following screen;
![[p5js-week07-teachable03.jpeg|-center|400]]

I use two different objects to make my app identify them. The first is a book titled "Object Oriented Ontology" and the second one the starfish character called Patrick from the Sponge Bob cartoon series. 

In order to train a model with a specific image, 
1. Hit the Webcam to capture the image in real-time. If you have images prepared beforehand you can upload them one by one. 
2. Record or upload at least 100 sample of the object from different angles and distances. 

![[p5js-week07-teachable04.png|-center|400]]


## Train the Model
In the node graph, next step is <font color="#0070c0">Training</font> the `MobileNet` pre-trained model with our custom samples. You can leave the settings with default values. You can get more information about the settings by hover over the <font color="#595959">?</font> icon. For basic information, 
- **Epoch:** Increase this value to increase accuracy of image detection.
- **Batch Size:** You can leave it with default value. 
- **Learning Rate:** You can leave it with default value. Even small changes on that value may create dramatic effects. 

During the model training process do not close the page, wait until it ends.
![[p5js-week07-teachable05.jpeg|-center|400]]

> [!WARNING] During the training, it is a good practice to capture the background as a default image sample. Name the class as "background" to keep it separate from your images.

When the training is done, you can test model to see, if it works good enough. If you are satisfied with the results you can hit <font color="#4f81bd">Export Model</font>. 

When you hit the export button, you will see a new pop-up page. You can upload the data to google cloud and use the link to load your trained samples over `MobilNet` model.
![[p5js-week07-teachable06.jpeg|-center|400]]

The copied URL is your trained model's location on Google server. In order to load the customized model into your project, use the following code as a boiler plate. Replace the URL of `imageModelURL` variable with yours.

![[p5js-week07-teachable07.jpeg|-center|400]]

```js
// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

let imageModelURL = "https://teachablemachine.withgoogle.com/models/gUUabHWuV/";

function preload() {
  ml5.setBackend('webgl');
  classifier = ml5.imageClassifier(imageModelURL, {flipped:true});
}

function setup() {
  createCanvas(640, 480);

  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  // Start detecting objects in the video
  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(0, 255, 0);
  textSize(32);
  text(label, 20, 50);
}

// A function to run when we get the results
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
  
  //  console.log(results)
}
```

[Click to open in p5JS editor](https://editor.p5js.org/alptugan/sketches/ENPpHqEUi)
## Troubleshoot
> [!TIP]- It doesn't identify the image correctly
> You need to keep the environment same. Otherwise it cannot respond accurately. For instance; if you capture the image of the sample in a dark room, this means that you model is trained for dark room.That being said, it doesn't know what does you image look like in day light. 

> [!TIP]- When nothing is pointed to the camera, it displays wrong label.
> During the training, it is a good practice to capture the background as well of the your sampling area.

## References
- [Reference \| ml5 - A friendly machine learning library for the web.](https://docs.ml5js.org/#/reference/image-classifier-tm)
- [Image Classification / The Coding Train](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/1-classification/image-classification)

## Examples
- [Hand pose Painting](https://editor.p5js.org/codingtrain/sketches/InzaVXI-R)
- [Hand Pose Detection with ml5.js - Daniel Shiffman](https://www.youtube.com/watch?v=vfNHdVbE-l4&t=170s)
- [Hand Pose Thumbs Up or Down](https://editor.p5js.org/codingtrain/sketches/0_qPHtsF_)
- [Identify Uploaded Images](https://editor.p5js.org/codingtrain/sketches/A2W-0ayI5)
