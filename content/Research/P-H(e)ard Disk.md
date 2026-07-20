---
title: H(e)ard Disk
date: 2025-06-06 11:13:00
description:
tags:
  - Art
  - sound
  - soundart
  - impedance
  - electronics
  - audio
aliases:
draft: true
---

Check the source about impedance and connection details from the [instructables](https://www.instructables.com/Musical-Hard-Drives/) post.

## to-do
- [ ] Test with PAM8403 amplifier, [link](https://youtube.com/shorts/lp0Jb1hmI5I?si=5zHoePe1so-lqNcS)

## Impedance of a Speaker
Informative [video](https://www.youtube.com/watch?v=uum1gQXz5mA)

- Use a multi-meter
- Set it to the lowest resistance meter (200)
- Place the probs of the multimeter to the poles of the speaker

> [!NOTE] Traditional Speakers vs. HDD
> - In a speaker you have a permanent magnet and a coil (impedance can be 4 / 6 / 8 / 16 / 32 Ohms).
> - In a HDD you have an actuator with permanent magnet and a coil (its impedance is around 7-11 Ohms).

- Two 12 Ohms HDD connected in <font color="#00b0f0">parallel</font> = 6 Ohms
- Two 8 Ohms HDD in <font color="#00b0f0">serial</font> = 16 Ohms 
- Serial makes the impedance x 2
- Parallel make the impedance / 2


> [!NOTE] Speaker Impedance vs. Amplifier Impedance
> If speaker impedance > Amplifier Impedance = <font color="#9bbb59">SAFE</font>
> If speaker impedance < Amplifier Impedance = <font color="#c00000">DANGER</font>
> 
> ☠️ Because a speaker with lower impedance than the amplifier's rated impedance will draw more current from the amplifier than it is designed to handle. This can cause the amplifier to work harder, potentially overheating or becoming damaged, especially in tube amplifiers with output transformers or solid-state amps not designed for low-impedance loads


## How Impedance Relates to The Current in The Context of Audio Signals
In the context of audio signals, impedance relates to current through Ohm's Law, which states that impedance ($Z$) is the ratio of voltage ($V$) to current ($I$), expressed as $Z=V / I$. Impedance is a measure of total opposition to the alternating current ($AC$) flow in audio circuits, combining resistance, inductive reactance, and capacitive reactance components. This means the audio signal current is affected not just by resistance but also by how the impedance varies with frequency due to inductive and capacitive effects.

In audio systems, impedance influences how much current flows for a given audio voltage signal. Higher impedance means less current flows at the same voltage, while lower impedance allows more current flow. Understanding this relationship is critical for optimizing sound quality, matching devices like headphones and speakers, and ensuring efficient power transfer without distortion.

Thus, impedance determines how audio signals, which are $AC$, behave in circuits through its combined resistive and reactive properties, fundamentally controlling the current flow and ultimately affecting sound reproduction fidelity.

## Tips
- The sound is louder when actuator arm is close to center or edge of the platter.
- The sound is quieter when actuator arm is in between those positions.
- You'll need to use an audio amplifier / Hi-fi / car radio with audio output impedance that match your HDDs. It's written next to the speakers output (standard values are 4 / 6 / 8 / 16 Ohms).
- You need to have your speaker impedance that is equal or superior to the impedance written at the back of your audio amplifier if you don't want to overload (and eventually fry) it.
- HDDs in <font color="#00b0f0">parallel sound louder</font> than HDDs in <font color="#00b0f0">serial</font>.
- Increase sound level via [LM386](https://www.youtube.com/watch?v=4ObzEft2R_g&t=17s) or [2N6292](https://www.youtube.com/watch?v=ByDwXwShEY0) transistor.

## References
- Hard disk drive - [Wikipedia](https://en.wikipedia.org/wiki/Hard_disk_drive)
- Speaker Impedance - [Video](https://www.youtube.com/watch?v=tTk_Xf5S6ns)
- How To Tell The Impedance of A Speaker - [Article](https://soundcertified.com/how-to-tell-impedance-of-speaker/)
- LM3856 Amplifier Assembly - [Video](https://www.youtube.com/watch?v=XHkKIEAo1vc)
- Hi-Z vs Low-Z: What's the Difference? - [Video](https://www.youtube.com/watch?v=sMsgqQZ-DhY&t=21s)