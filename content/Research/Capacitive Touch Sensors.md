---
title: Capacitive Touch Sensors
date: 2025-06-01 04:37:31
description: 
tags:
  - physicalComputing
  - Arduino
aliases: 
draft: true
---
ESP32 has built-in touch pins. Refer to the following [tutorial](https://www.youtube.com/watch?v=40tyJfvpcxw).

Arduino capacitive touch using digital pins, [link](https://www.youtube.com/watch?v=pTSBXSCFBPs).

DIY simple Capacitive Proximity sensor, [project](https://projecthub.arduino.cc/mircemk/diy-simple-capacitive-proximity-sensor-1ab262)

Refer to the following [code](file:////Users/alptugan/Documents/Arduino/touch_sensors) as a library for capacitive touch.

How to Make Touch Switch Sensor Circuit on a Breadboard without an MCU (BC547 Transistor), [link](https://www.youtube.com/watch?v=RUPeLwXn51g)

[Capacitive Touch Sensing Grid - Hackster.io](https://www.hackster.io/gatoninja236/capacitive-touch-sensing-grid-f98144) Afranın grid sistemine benziyor

Bareconductive uses <font color="#ffc000">MPR121</font> as well, [Bareconductive Github Lib](https://github.com/BareConductive/mpr121) , [fork](https://github.com/hku-ect/BareConductive?tab=readme-ov-file)
datastream the touch threshold'u iyice düşürürsen proximity sensor gibi davranıyor.

## Debouncing
- The article showcases several debouncing techniques to prevent ghost triggers, [Arduino Button Debouncing Techniques](https://deepbluembedded.com/arduino-button-debouncing/)
- 