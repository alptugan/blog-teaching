---
title: FFMPEG - Video Export for Social Media
date: 2025-03-02T02:00:00
modification date: 2025-03-07T12:44:00
description:
tags:
  - ffmpeg
  - video
  - script
  - p5js
aliases:
draft: false
---
You can convert sequence of images in a folder via [[Cheat Sheets#FFmpeg|cheat sheet]] document. Specifically check the `# Covert image sequence to high-quality mp4 video`  commented one.

## Screen Capture Process
I capture my draft sketches mostly using P5js to quickly visualize the idea. Because it is fast and built on Javascript. The important part to avoid X (Twitter) shreds your video quality, set the `pixelDensity(2)`. It makes your captured images 2 times in resolution. E.g. the if the `createCanvas(1080, 1080)`, the recorded image size will be `2160x2160`.  

I use [p5.capture](https://github.com/tapioca24/p5.capture) library. It is minimal and perfect if you want to record each frame one-by-one. After the recording done, the library creates a folder of images with an ordered file names in the following format `0000001.png`, `0000002.png`, `0000003.png`, and so on...

Finally, I use the following FFMPEG script for creating hi-quality H.264 mp4 video from the folder of images that `p5.capture` generated. You can check more FFMPEG script that might be useful in the above link. 

```shell
# Covert image sequence to high-quality mp4 video 
# -preset veryslow causes glitches on video
# -preset slow works better
ffmpeg -framerate 60 -i %07d.png -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -vf "scale=iw:ih:flags=lanczos" loop11.mp4
```

Finally, since writing down or copy/paste the script every time is a tedious task. I create shell script and assign the script to an Automator `Quick Action` app. So, I can directly right-click on the folder and execute the FFMPEG command on the context menu. 