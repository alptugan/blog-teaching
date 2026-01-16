---
title: OLED Robot Eyes
date: 2024-12-02
description: 
tags:
  - Arduino
  - OLED
aliases: 
draft: true
---

For Oled Instructions refer to → [⁉️FAQ & SHORTCUT & HOWTO](https://www.notion.so/FAQ-SHORTCUT-HOWTO-8a0c0ddd2f8a426990c1e50b5cfd0d6c?pvs=21)

Cython ultra fast video playing [30 FPS Video on SSD1106 OLED Display - Hackster.io](https://www.hackster.io/saadsaif0333/30-fps-video-on-ssd1106-oled-display-fe7b32)

UI library - [GitHub - olikraus/u8g2: U8glib library for monochrome displays, version 2](https://github.com/olikraus/u8g2)

# Dasai Mochi v2
- [\| Build your own Dasai Mochi robot \| \|cute, kind, angry, perfect......\| ESP32 C3\| #tech#robots#mochi - YouTube](https://www.youtube.com/watch?v=8js1jpKyz38)
- [GitHub - huykhoong/gif2cpp: Gif2cpp is a simple tool based on image2cpp to change gif images into byte arrays (or arrays back into an images) for use with (monochrome) displays such as OLEDs on your Arduino or Raspberry Pi.](https://github.com/huykhoong/gif2cpp)
- Full [build](https://www.youtube.com/watch?v=8goPUs0yEig)

## Emotions
For testing purposes it is grabbed from the [link](https://github.com/HARAJIT05/XERO).
Step by step to design emojisi → [Make your own Dasai Mochi (with ESP32 and OLED display) - YouTube](https://www.youtube.com/watch?v=QOoszpg0BsM)

## Sound 
Check the [link](https://github.com/dzonder/mochi-server/blob/main/main.go) for create R2D2 like buzzer sounds. Get the prompt template and check how they sound.

For the sound we don't need audio drive, etc... A piezo can be directly connected. Check your old Nokia phone speaker.

## Tools
- Convert gif files to frames, [link](https://convertandedit.com/split)
- Convert each frame to cpp hex code, [link](https://javl.github.io/image2cpp/)
- Lopaka, online designer with presets, [link](https://lopaka.app/projects)
- Rive, online animation tool, [link](https://editor.rive.app/file/untitled/1951499)


# Connection v1
```shell
ssh pi@raspberrypi.local
p: raspberry
```

## Enable Internet Connection
![[rpi-internet-sharing.jpg|-center|500]]

## Alias Commands
Aliases are hosted at `.bashrc` file

kill
backup (backups scripts and friend folder to `/Users/alptugan/Documents/DEVS/friend_ai`)
  

- [x] Oled Animation Arduino
    - [x] [https://raw.githubusercontent.com/Picaio/roboteyes/master/eyes.h](https://raw.githubusercontent.com/Picaio/roboteyes/master/eyes.h)
- [x] Potentiometer brightness adjustment
- [x] Create a new project
- [ ] [Displaying images on OLED screens (mfitzp.com)](https://www.mfitzp.com/displaying-images-oled-displays/)
- [ ] [Convert image to PPM - JSFiddle - Code Playground](http://jsfiddle.net/ntim/jjqmee1z/)
- [ ] Add photocell to make it sleep at night
- [ ] Add vibration sensor.
- [ ] When there is no vibration make it sleep also.
- [ ] Visualize eyes array to understand it
- [ ] Edit eyes array to make it more retro look…
- [ ] Blinking message
- [ ] hostaname display on yellow area
- [ ] Check this lib, [github](https://github.com/lexus2k/ssd1306)

  

# Hadrware
[https://www.thingiverse.com/thing:3506189](https://www.thingiverse.com/thing:3506189)

[https://www.thingiverse.com/thing:5881326](https://www.thingiverse.com/thing:5881326)


# OLED Scripts
## Arduino
[https://github.com/arvivirkkunen/GifToByteArray](https://github.com/arvivirkkunen/GifToByteArray)
[https://github.com/educ8s/Python-GIF-to-Sprite-sheet](https://github.com/educ8s/Python-GIF-to-Sprite-sheet)


# C
[https://github.com/LowkeyCoding/qmk-animation](https://github.com/LowkeyCoding/qmk-animation)

## RPI
MAIN LIB: [https://github.com/adafruit/Adafruit_CircuitPython_SSD1306?tab=readme-ov-file](https://github.com/adafruit/Adafruit_CircuitPython_SSD1306?tab=readme-ov-file)

[https://github.com/2wenty2wo/pi-dvd-screensaver/blob/main/pi-dvd-screensaver.py](https://github.com/2wenty2wo/pi-dvd-screensaver/blob/main/pi-dvd-screensaver.py)

pico: [https://github.com/jmdeejay/screen-wl](https://github.com/jmdeejay/screen-wl)
pico: [https://github.com/SwannSchilling/ItsyBitsy_M4_Oled_Eyes?tab=readme-ov-file](https://github.com/SwannSchilling/ItsyBitsy_M4_Oled_Eyes?tab=readme-ov-file)
pico: [https://github.com/make2explore/RaspberryPi-Pico-OLED-Animations](https://github.com/make2explore/RaspberryPi-Pico-OLED-Animations)
c++ python: [https://github.com/LowkeyCoding/qmk-animation?tab=readme-ov-file](https://github.com/LowkeyCoding/qmk-animation?tab=readme-ov-file)
[https://github.com/straut12/rpi0_oled_and_ws281x/blob/master/oled.py](https://github.com/straut12/rpi0_oled_and_ws281x/blob/master/oled.py)
[https://github.com/AskMeAboutBirds/qmk-oled-animation-compressor/tree/main?tab=readme-ov-file](https://github.com/AskMeAboutBirds/qmk-oled-animation-compressor/tree/main?tab=readme-ov-file)

service: [https://github.com/crismc/rpi_i2c_oled](https://github.com/crismc/rpi_i2c_oled)
luma venv : [https://github.com/rm-hull/luma.oled](https://github.com/rm-hull/luma.oled)

  

kofti-robot: [https://github.com/doganayyildiz/robot_kofti/blob/main/kofti.py](https://github.com/doganayyildiz/robot_kofti/blob/main/kofti.py)

## Ada-Fruit-Lib

[https://github.com/straut12/rpi0_oled_and_ws281x/blob/master/oled.py](https://github.com/straut12/rpi0_oled_and_ws281x/blob/master/oled.py)

✅ video player webm: [https://github.com/souviksaha97/oled-video-player/blob/master/oled-viewer.py](https://github.com/souviksaha97/oled-video-player/blob/master/oled-viewer.py)

  

## Codes

```Python
board_type = os.uname().machine

print(f"Board: {board_type}")
```

# Eyes
[Building a Tiny Desktop Toy Pet with Xiao ESP32‑S3 & JUSTWAY - Hackster.io](https://www.hackster.io/pradeeplogu0/building-a-tiny-desktop-toy-pet-with-xiao-esp32-s3-justway-518845)

![[beccfad12996e441c04fcd507a8439cf.jpg]]

![[93a0d37b766a831ca2a3954bfecbf7794c492223.png]]

  

![[da0f0e6cb1d7f5f7d611600f3c141bc36f4cf95c.png]]