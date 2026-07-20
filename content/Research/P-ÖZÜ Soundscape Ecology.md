---
title: ÖZÜ Soundscape Ecology
date: 2024-10-23T00:01:00
description: 
tags:
  - sound
  - soundscape
  - ecology
  - cod412
aliases: 
draft: true
---
## Reference links
https://earth.fm/nature-soundmap/
The following website is the same idea, it can be implemented for ÖZÜ.
Also it includes academic writing about the project...

## Front-end
[My Audiomoth Sessions](https://audiomoth.ivo-bathke.name/)

## Context
I am currently working on several side projects, including course-related tools and research-oriented applications. At present, I am conducting research in the field of soundscape ecology. For this purpose, I am developing an application that identifies soundscape elements contextualized within Murray Schafer’s acoustic ecology framework. The application generates appropriate soundscape elements based on users’ textual inputs using AI. For example, when an environment is defined with its physical attributes, the application suggests the types of sound samples that should be present in that environment. In addition to its research applications, the tool can also be used to support my sound design classes.

# Music Concrete Player
## spectrogram view
When the user clicks on the Spectrogram button, It must show the spectrogram view of the audio in place of wave form view. When the user clicks on the Spectrogram button second time, it must remove the spectrogram view and display the waveform of the audio. 



Google Drive links won't work on GitHub Pages since there's no proxy. For production, either:

- Host audio files locally in [public/audio/](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html)
- Set up a Cloudflare Worker as a CORS proxy (free tier)