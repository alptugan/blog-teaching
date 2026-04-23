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
The seller marks the display as SSD1106. But, with a little research and some tests, I found that most 1.3 inch OLED screens are generally SH1106 mode.

> [!NOTE] Software vs. Hardware SPI
> When you connect any pin to any input, you activated the Software SPI which is slower. When you connect OLED pins to the defined Hardware SPI pins, you activated the hardware version. According to your practice, the constructor functions arguments change. [reference](https://www.youtube.com/watch?v=ICXznCN3NOI)


![[Excalidraw/esp32c3_SPI-OLED.excalidraw|90%|center]]

```C
/*-----------------------------------------------------------------------------
- Initial code for ESP32-C3 module

   MISO, GPI05 +------\_/------+ 5V
   MOSI, GPIO6 +               + GND
     SS, GPI07 +               + 3V3
    SDA, GPIO8 +   ESP32-C3    + GPIO4, ADC1_4, SCK
    SCL, GPI09 +               + GPIO3, ADC1_3
        GPIO10 +               + GPIO2, ADC1_2
   TXD, GPIO20 +               + GPIO1, ADC1_1
   RXD, GPIO21 +---------------+ GPIO0, ADC1_0

------------------------------------------------------------------------------*/
```

```C
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_CLK      4 // SCLK
#define OLED_MOSI     3 // SDA // Refer to GPIO pins no digital pins
#define OLED_RESET    2 // RES
#define OLED_DC       1
#define OLED_CS       0


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
