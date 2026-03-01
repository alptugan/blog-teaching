---
title: TD - Research
date: 2025-03-14
description: 
tags:
  - touchdesigner
aliases: 
draft: true
---

## Tutorials
- [Okamirufu Vizualizer - YouTube](https://www.youtube.com/@OkamirufuV)
- [Easily Train Pose, Image, & Audio Detection AI in TouchDesigner (No Code): Teachable Machine Plugin - YouTube](https://www.youtube.com/watch?v=fWYebJ9B1iE)
- [Absolute Beginner TouchDesigner \| From Zero to Hero with Examples and Assignments - YouTube](https://www.youtube.com/watch?v=qbupHTeJCeU)
- Touch Designer beginner tutorials, [youtube](https://www.youtube.com/playlist?list=PLFrhecWXVn5862cxJgysq9PYSjLdfNiHz)
- Touch Designer, point cloud, web cam, [youtube](https://www.youtube.com/watch?v=NnrWjQ_zO-s)
- 3D Model load, display and animate using Shader Helper Tool, [yTube](https://www.youtube.com/watch?v=7ko8zgE5q3U)
- Golan Levin's lecture [notes](https://github.com/golanlevin/60-120/tree/main/2025/lectures/touchdesigner)
- https://generativemedia.club/blog/5-youtube-channels-to-learn-touchdesigner-1-edition/


### 01 - Set Text Editor
![[TD - Research01.jpeg|-center|500]]

### 02- Terminology
**Array:** Collection of data elements.

**Shader:** A program runs on the [[GPU]].

**Thread:** A stream of data (pixels or vertices) and instructions (a Shader) that is assigned to a GPU core for computation.

**Sample Buffer:** A one-dimensional array of data elements, typically used to store data that is passed between the CPU and [[GPU]].

**Texture:** A two-dimensional array of data elements, typically representing and image or a grid of data. Often stored in the [[GPU]] memory for faster access.

**Uniform:** A constant value that is passed the shader from the CPU and shared bu every thread/element in the shader.

**Texel:** A single element in a texture (e.g. a pixel in an image)

**Function:** A reusable block of code containing commonly repeated logic, usable across shaders.

**Variable:** A bit of memory allocated to store a specific value, and reference to that memory location.


### 03 - Shader Setup
<div class="three-columns" style="--column-count: 3; display: flex; gap: 20px; align-items: stretch;">

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="TD - shader01.jpeg" alt="Shader 1">
  </div>

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="TD - shader02.jpeg" alt="Shader 2">
  </div>

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="TD - shader03.jpeg" alt="Shader 3">
  </div>

</div>


#### `absTime.seconds`
Define uTime as uniform on shader variables menu. Be sure that `glslmulti1` is selected with green borders. Follow the instructions in the following image to grab current time in milliseconds from TD by typing `absTime.seconds`.

![[TD - shader04.jpeg]]


#### `sTD2DInputs[INPUT_INDEX]`
![[TD - shader21.jpg]]


### 03.1. Texture
[reference](https://www.youtube.com/watch?v=JsbiOyrw5Cs)




### 04 - Video Export
![[TD - video 01.jpeg|-center|500]]



#### Where I left (feb 26)
[Mastering GLSL in TouchDesigner, Lesson 1: Writing your First Shader in TouchDesigner!](https://www.youtube.com/watch?v=kfI56H9bjLA)
- watch lesson two
- Tado'nun shaderlarını dene - [GitHub - tado/1000fragments](https://github.com/tado/1000fragments)

###  Serial Arduino Communication
[Arduino multiple data to TouchDesigner \| Details \| Hackaday.io](https://hackaday.io/project/174967-arduino-muliple-data-to-touchdesigner/details)
[Arduino to TouchDesigner Part 1: Button - YouTube](https://www.youtube.com/watch?v=29WhN269TZ4)
[Arduino to TouchDesigner Part 2: Potentiometer - YouTube](https://www.youtube.com/watch?v=WSHXiU78ULg)

[Local Files Path:]: /Users/alptugan/Documents/Arduino/Arduino-TouchDesigner-Communication


### Stream Diffusion
- [Real-time diffusion in TouchDesigner - StreamdiffusionTD Setup + Install + Settings - YouTube](https://www.youtube.com/watch?v=X4rlC6y1ahw)
- Using with iPad as source image, [iPad drawing into StreamDiffusion - Touchdesigner Tutorial - YouTube](https://www.youtube.com/watch?v=sNKisEli3o0)
- Magic Mirror, [TouchDesigner & StreamDiffusion: Your First Project - TouchDesigner Tutorial 207 - YouTube](https://www.youtube.com/watch?v=LCar8AIcRto)
- [How to install StreamDiffusionTD to M1 mac. Realtime Stable Diffusion](https://www.youtube.com/watch?v=eQ4e_l5OFzo)


## Github Repos
- [GitHub - cacheflowe/haxlib: A personal TD toolkit](https://github.com/cacheflowe/haxlib)
- [GitHub - cacheflowe/td-docs-mcp: TouchDesigner Docs MCP server](https://github.com/cacheflowe/td-docs-mcp)

## Touchdesigner Components
[GitHub - hku-ect/TouchDesignerComponents: This is a collection of commonly used TouchDesigner components](https://github.com/hku-ect/TouchDesignerComponents)