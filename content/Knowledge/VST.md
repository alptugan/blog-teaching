---
title: VST
date: 2026-08-09 11:56:20
description:
tags:
  - sound
  - audio
  - vst
  - terminology
aliases:
draft: false
---
![[500px-VST_Logo.jpg|-center]]

**VST (Virtual Studio Technology)** is an audio plugin software interface that simulates traditional recording studio hardware right inside your computer. It allows virtual instruments (like synthesizers or samplers) and audio effects (like reverb, compression, or EQ) to run seamlessly within a [[DAW]] like Ableton Live, Logic, or Reaper.

**How VSTs Work inside a Host (DAW)**.
Think of your Digital Audio Workstation (like Ableton Live or Logic) as a **digital recording studio building**, and the VST as a specialized **rack-mounted gear or instrument** brought into that studio. The DAW acts as the "host"—it provides the electricity, audio routing, and clock timing, while the VST processes the actual sound or generates audio from MIDI notes.

Here is how the digital signal flows in real time:
1. **Input / Trigger:** You press a key on a MIDI keyboard or play an audio track.
    
2. **Host Processing:** The DAW passes MIDI data (like note pitch and velocity) or digital audio streams directly to the VST plugin.
    
3. **Buffer & Latency:** The VST calculates the sound output in tiny time chunks called **audio buffers**. Smaller buffer sizes mean lower latency (less delay), but put more strain on your CPU!
    
4. **Output:** The VST sends the processed digital audio back to the DAW track, where it flows through the master channel to your speakers or headphones.


```
[MIDI Keyboard / Track] ──> [DAW Host] ──(Buffer)──> [VST Plugin] ──> [DAW Master Out] ──> [Speakers]
```

**Fun Fact:** When Steinberg invented the VST standard in 1996, it completely revolutionized music making by allowing producers to replace physical racks worth thousands of dollars with lightweight software code!