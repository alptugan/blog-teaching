---
title: MCU - ESP32-C3 SPI OLED
date: 2025-12-24 10:38:43
description:
tags:
  - OLED
  - MCU
  - programming
aliases:
draft: false
---
1.3 inch SH1106

```C
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_MOSI     6 // SDA // Refer to GPIO pins no digital pins
#define OLED_CLK      4 // SCLK
#define OLED_DC       7
#define OLED_CS       2
#define OLED_RESET    10 // RES


// Note the class name change to SH1106G
// OLED 1.3 inch SPI model
Adafruit_SH1106G display = Adafruit_SH1106G(SCREEN_WIDTH, SCREEN_HEIGHT, &SPI, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  delay(250); // Critical for some displays to stabilize power
  SPI.begin(OLED_CLK, -1, OLED_MOSI, OLED_CS);

  if(!display.begin(0, true)) { // SH110X uses different begin parameters
    for(;;);
  }

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SH110X_WHITE);
  display.setCursor(0,0);
  display.println("Trying SH1106 Driver");
  display.display();
}

void loop() {}
```
