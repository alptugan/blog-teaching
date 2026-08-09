---
title: Compressor Make-up Gain vs Output Gain
date: 2026-07-29 09:28:53
description:
tags:
  - audio
  - sound
  - sounddesign
  - DavinciResolve
  - vst
aliases:
draft: false
---
Makeup gain and output gain on VST compressor plugins both raise the output level, but makeup gain specifically compensates for the level lost during compression, while output gain is a general output level control that may or may not be tied to the compression process.


## Understanding Makeup Gain and Output Gain
Makeup gain and output gain are both used in VST compressor plugins to adjust the output level of audio signals, but they serve different purposes.

### Makeup Gain
- Purpose: Specifically compensates for the level lost during compression.
- Functionality: Automatically adjusts the output level to match the input level after compression, ensuring that the overall loudness remains consistent.
- Usage: Essential for maintaining gain staging in a mix, as it helps recover the volume that was reduced by the compressor.

### Output Gain
- Purpose: A general control for adjusting the output level of the signal.
- Functionality: Can be used to increase or decrease the output level without necessarily compensating for compression effects.
- Usage: Offers flexibility in adjusting the final output level, but does not specifically account for the gain reduction caused by compression.

### Key Differences

|Feature|Makeup Gain|Output Gain|
|---|---|---|
|Compensates for Compression Loss|Yes|No|
|Adjusts Overall Loudness|Yes|Yes|
|General Level Control|No|Yes|

Makeup gain is crucial for ensuring that the sound remains balanced after compression, while output gain provides broader control over the final output level.
