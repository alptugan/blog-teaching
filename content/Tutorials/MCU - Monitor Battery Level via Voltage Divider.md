---
title: MCU - Monitor Battery Level via Voltage Divider
date: 2026-07-11 08:09:16
description:
tags:
aliases:
draft: false
---
![[MCU - Monitor Battery Level via Voltage Divider.png|-center|400]]

Voltage dividers are useful to measure raw voltage values using [[MCU]]s. For instance ESP32 GPIO pins works with 3.3V signals, sending higher values probably fries the ESP32 boards. 

> [!DANGER] 
> DO NOT USE VOLTAGE DIVIDERS as DC-DC converters

They can be handy and cheap way to determine battery level of your ESP32 or Arduino projects. Since most ESP32 or Arduino boards do not include such functionality, it can be handy to use a voltage divider. 

The circuit is easy for beginners as well. To create a battery monitor circuit you only need two resistors. 



## Reference
- [Battery Indicator with ESP32](https://ece-196.github.io/docs/tutorials/team13tutorial/)