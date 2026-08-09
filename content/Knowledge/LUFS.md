---
title: LUFS
date: 2026-07-29 09:48:56
description:
tags:
  - audio
  - sound
  - vst
  - cod323
  - cod412
  - DavinciResolve
  - soundscape
  - sounddesign
  - soundart
aliases:
draft: false
---
UFS stands for *Loudness Units Full Scale*. It is a standard unit used to measure perceived loudness in audio. Unlike traditional volume measurements, LUFS takes into account how humans perceive sound across different frequencies, making it a more accurate representation of loudness.

## Importance of LUFS
LUFS is crucial in various audio applications, including:

- Broadcasting: Ensures consistent loudness levels across different programs and channels.
- Streaming Services: Helps maintain uniform playback levels for songs and podcasts, preventing drastic volume changes between tracks.

## How LUFS Works
LUFS measurements are based on a K-weighting filter that adjusts for human sensitivity to different frequencies. This means that LUFS values reflect how loud a sound feels to listeners rather than just its electrical signal strength.

### Key Metrics of LUFS
LUFS can be measured in different ways, each serving a specific purpose:

|Metric|Description|
|---|---|
|Integrated LUFS|Average loudness over the entire track.|
|Short-term LUFS|Average loudness over a short period (3 seconds).|
|Momentary LUFS|Loudness measured over a very brief window (400 ms).|

## LUFS in Practice
Most streaming platforms, like Spotify and Apple Music, use LUFS to set loudness normalization targets. For example, Spotify typically targets around -14 LUFS for its tracks, ensuring a consistent listening experience across its library.


## Tools for Monitoring LUFS
The free version of [Youlean Loudness Meter](https://youlean.co/youlean-loudness-meter/) [[VST]] plugin is convenient enough to monitor loudness. 

You need to carefully mix the tracks on your project to keep overall LUFS in a specific threshold. You can refer to compressor and limiter VST plugins to balance your project's average loudness level. You can refer to [[COD 323 Sound Design#Compressor|Compressor]] and [[COD 323 Sound Design#Loudness|Loudness]] section for relevant VST plugins.


## References
[Waves](https://www.waves.com/what-is-lufs-why-it-matters-in-mastering-music)
