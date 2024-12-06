---
title: Wordclock
date: 2024-12-02
modfification date: Monday 2nd December 2024 23:11:56
description: 
tags:
  - Arduino
  - RTC
aliases: 
draft: true
---
## Current Configuration
[Wordclock Source Code with Animations](file:///Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2-animations)

Following line sets the 8x8 Led Matrix orientation. Check `MD_MAX72XX::PAROLA_HW` other options to quick fix.
```
MD_MAX72XX clock = MD_MAX72XX(MD_MAX72XX::PAROLA_HW, DATA_PIN, CLK_PIN, CS_PIN, 1); // Arbitrary pins
```
![[wordclock_v2.jpg|-right|300]] From left to right pins are as follows;

| Cable  | PIN           |
| ------ | ------------- |
| White  | VCC (+5V)     |
| Black  | GND (GROUND)  |
| Gray   | DIN (DATA IN) |
| Red    | CS (LOAD)     |
| Orange | CLK (CLOCK)   |

RTC Module;  
→ GND, VCC, SDA (A4), SCL (A5)

Animations are changing according to following line;
```
if (millis() - timeLastUpdateDig >= 30 * 1000UL) // Every 30 seconds change animation
state = SR_TIME;
```

Rotating the Content;
```
// Available tranformations;
// TSL, ///< Transform Shift Left one pixel element
// TSR, ///< Transform Shift Right one pixel element
// TSU, ///< Transform Shift Up one pixel element
// TSD, ///< Transform Shift Down one pixel element
// TFLR, ///< Transform Flip Left to Right
// TFUD, ///< Transform Flip Up to Down
// TRC, ///< Transform Rotate Clockwise 90 degrees
// TINV ///< Transform INVert (pixels inverted)

clock.transform(MD_MAX72XX::TRC); // rotate 
```


## Mini configuration DS1302 RTC
/Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2_animations-RTC1302-miniboard
transfrom problemli

## Other Codes
[Wordclock Source Code](file:///Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2)


## Wemos D1 Mini Pro Wi-Fi
[Video Tutorial](https://www.youtube.com/watch?v=q2k3CzT5qE0) Shows how to install with Arduino IDE.
[Documentation](https://docs.wemos.cc/en/latest/d1/d1_mini_pro.html) Detailed documentation about the board.

## Data sheets and Circuit Diagrams

![[RTC.webp]]
## References
1. DIY Word Clock on single MAX7219 driven 8x8 Matrix, [video](https://www.youtube.com/watch?v=fKetfeaBWGE), [article](https://www.hackster.io/mircemk/diy-word-clock-on-single-max7219-driven-8x8-matrix-8379ed)
2. RGB Matrix Word Clock, [instructables article](https://www.instructables.com/Arduino-RGB-Matrix-Word-Clock/)
3. MAX7219 LED Matrix Module Micro Word Clock, [article](https://arduinoplusplus.wordpress.com/2016/04/28/max7219-led-matrix-module-mini-word-clock/)