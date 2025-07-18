---
title: Wordclock
date: 2024-12-02
modification date: 2025-03-10T00:17:00
description: 
tags:
  - Arduino
  - RTC
  - LedMatrix
aliases: 
draft: true
---
## Todos
- [ ] Review Blender Tutorials for creating 3D prints.
- [x] Print new cases in thinkercad app in the [link](https://www.tinkercad.com/things/bV6nCrkgWzI/edit)
	- [x] 3D print must be black
	- [x] 3D print with only case to hold clear acrylic. Do not include letter cutout.
- [ ] Try filikaboard v3 with different standart module type
- [ ] Replace key_switch lib with the new version
	- [ ] install the lib, [github](https://github.com/MajicDesigns/MD_UISwitch)
	- [ ] Test example first, [example](https://github.com/MajicDesigns/MD_UISwitch/blob/main/examples/MD_UISwitch_Example/MD_UISwitch_Example.ino)
- [ ] Ön panel pirinç deneme baskısı [cadcut](https://cadcut.co/materyaller/pirin)
- [ ] Automatic time-adjustment, [tutorial](https://projecthub.arduino.cc/hibit/keeping-time-with-ds1302-real-time-clock-on-arduino-07d30b)
## Current Configuration (Arduino Nano, RTC 1307, Push Button)
![[wordclock-v2.png|Wokwi Diagram, logged in with protonmail account, [link](https://wokwi.com/projects/417064040238274561)]]
[Link to Wokwi diagram](https://wokwi.com/projects/417064040238274561)

Source Code for current configuration on disk, [Wordclock Source Code with Animations](file:///Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2-animations)
Folder includes source files for the project, [Project Files, Layouts, Prints, 3D Prints](file:///Users/alptugan/Documents/Personal/webpage/wordclock)

Following line sets the 8x8 Led Matrix orientation. Check `MD_MAX72XX::PAROLA_HW` other options to quick fix.
```C
MD_MAX72XX clock = MD_MAX72XX(MD_MAX72XX::PAROLA_HW, DATA_PIN, CLK_PIN, CS_PIN, 1); // Arbitrary pins
```
<br>
![[wordclock_v2.jpg|-right|300]] From left to right pins are as follows;

| Cable  | PIN                   |
| ------ | --------------------- |
| White  | VCC (+5V)             |
| Black  | GND (GROUND)          |
| Gray   | DIN (DATA IN or MOSI) |
| Red    | CS (LOAD or SS)       |
| Orange | CLK (CLOCK or SCK)    |

RTC Module;  
→ GND, VCC, SDA (<font color="#245bdb">A4</font>), SCL (<font color="#de7802">A5</font>)

Animations are changing according to following line;
```C
if (millis() - timeLastUpdateDig >= 30 * 1000UL) // Every 30 seconds change animation
state = SR_TIME;
```

Rotating the Content;
```C
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
clock.control(MD_MAX72XX::UPDATE, MD_MAX72XX::ON);
```


## Mini configuration DS1302 RTC
/Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2_animations-RTC1302-miniboard
transfrom problemli

## Online Version HTML + JS + CSS
This is a wordclock designed to run in a browser, [github](https://github.com/Snapstromegon/wordclock)
Another online version. It animates back and forth between row distribution and circular distribution, [github](https://github.com/simonheys/wordclock)

## Other Codes
[Wordclock Source Code](file:///Users/alptugan/Documents/Arduino/WordClock_MAX7219_v2)

## Layouts
Turkish layout 11 x 1, [github](https://github.com/bk1285/rpi_wordclock/blob/main/wordclock_layouts/turkish_11x10/stancil_front.png)

## Wemos D1 Mini Pro Wi-Fi
[Video Tutorial](https://www.youtube.com/watch?v=q2k3CzT5qE0) Shows how to install with Arduino IDE.
[Documentation](https://docs.wemos.cc/en/latest/d1/d1_mini_pro.html) Detailed documentation about the board.
[Instructable - Wordclock](https://www.instructables.com/WORK-IN-PROGRESS-Ribba-Word-Clock-With-Wemos-D1-Mi/) The tutorial shows how to create led matrix out of addressable led strips. 
Neo Matrix 8x8 AdaFruit Tutorial, [link](https://learn.adafruit.com/neomatrix-8x8-word-clock/enclosure-assembly) 

## Data sheets and Circuit Diagrams
![[RTC.webp|-left|300]]

![[tiny_rtc-arduino.webp|300]]

![[tiny_rtc.jpg|200]]
## Debounce Circuit
![-left|200](debounce_pull-up.png)
![-left|200](debounce_pull-down.png)

## References
1. DIY Word Clock on single MAX7219 driven 8x8 Matrix, [video](https://www.youtube.com/watch?v=fKetfeaBWGE), [article](https://www.hackster.io/mircemk/diy-word-clock-on-single-max7219-driven-8x8-matrix-8379ed)
2. RGB Matrix Word Clock, [instructables article](https://www.instructables.com/Arduino-RGB-Matrix-Word-Clock/)
3. MAX7219 LED Matrix Module Micro Word Clock, [article](https://arduinoplusplus.wordpress.com/2016/04/28/max7219-led-matrix-module-mini-word-clock/)
4. DIY Wordclock, example projects, and sources, fonts, etc...  [article](https://www.jeremyblum.com/2016/02/03/wordclock/)
5. Wordclock with Green Matrix Effect, [article](https://tinkerman.cat/post/wordclock/) 
7. Wordclock 16x16 leds, [github](https://github.com/wouterdevinck/wordclock) 
8. Circuit Designers Free, [cirkitdesigner](cirkitdesigner.com) (not registered), [Wokwi](https://wokwi.com) (protonmail)
9. FastLED library for addressable leds and matrix, [github](https://github.com/FastLED/FastLED), [video](https://www.youtube.com/watch?v=D_QBlFIQk-o&t=4s), [article](https://www.instructables.com/Make-Your-Own-10x10-LED-Matrix/)
10. Wristwatch wordclock, includes 3D print files. Font cut-out seems better [github](https://github.com/andydoro/Wordclock-Wristwatch/tree/master)
11. NeoMatrix (Adafruit) wordclock tutorial, [github](https://github.com/andydoro/WordClock-NeoMatrix8x8/tree/master) 