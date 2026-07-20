---
title: Reaper - Use a Track as Input to Another Track
date: 2025-08-27 12:35:25
description:
tags:
  - sounddesign
  - sound
  - tutorial
aliases:
draft: false
---
## 1. Set ROUTE Options on The Source Track
First things first create an empty track next to your source track. In the following image, "Kopuz" is the source track with an exiting audio and "Kopuz Clone" is the target audio track. Hit the `ROUTE` button on the source track that you want to clone.

![[reaper-clone-track01.jpeg|-center|500]]

A pop-up window opens. Locate the `Send` section. Choose the target track that you want to record the sound output of the source track.

![[reaper-clone-track02.jpeg|-center|500]]

![[reaper-clone-track03.jpeg|-center|500]]

Next, check the `ROUTE` options of the target track. You will see the `Receive` section is set automatically.

> [!TIP] If you had first selected the source track's "receive" on the target audio track, the "Send" section would have been created automatically on the source track.

![[reaper-clone-track04.jpeg|-center|500]]

## 2. Adjust Input Settings on The Target Track
Set the input of the target track to "Input: None" to disable microphone for this audio track as input source. 

![[reaper-clone-track05.jpeg|-center|500]]

Next, set the "Record: output" to "Read output (stereo)" option. If you had a mono audio on the Source track, you can select the "Read output (mono)" option. 

![[reaper-clone-track06.jpeg|-center|500]]

Arm the target track for recording by hitting the round shaped red pale button before the track name. Then, hit the main record button to start recording. 

![[reaper-clone-track07.gif]]

## Additional Sources
You can refer to [REAPER Mania](https://www.youtube.com/watch?v=AGezozwHTzw) YouTube video to get more information in action. 