---
draft: true
title: MCU - Big Fonts
date: 2026-06-13 10:51:19
description:
tags:
  - physicalComputing
  - creativecoding
  - MCU
  - Display
aliases:
---
## Introduction
This is a highly ambitious project. It merges native Bluetooth, hardware interrupts, an I2C screen, and a custom UI menu system into a single microcontroller to push boundaries of creativity. The motivation behind the project came from a basic question to push creativity. What if utilizing the whole LCD screen to display custom designed fonts. The two example works implement the idea however none of them implement the whole English Latin charset 
## Inspiration
### BigFonts
The following [repository](https://github.com/upiir/character_display_big_digits) showcases how to utilize LCD 16x2 displays in a creative way. It combines 4 individual char space to display a single numeric digit. The repo includes an Excel document acts as a software to design the individual numbers.

There is another repository provides an online designer. But it needs to be more user friendly such as drag and draw lines while pressing down mouse.

<div class="two-columns" style="--column-count: 2; display: flex; gap: 2%; align-items: stretch;">

  <div style="flex: 1;">
  <a href="https://github.com/nonnullish/screenduino" target="_blank">Glyph Generator Original</a>
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="https://github.com/nonnullish/screenduino/blob/main/sc1.png?raw=true" alt="">
  </div>

  <div style="flex: 1;">
  <a href="https://github.com/alvaro-ruizg/animator-for-arduino-screens" target="_blank">Glyph Generator Fork</a>
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="https://github.com/alvaro-ruizg/animator-for-arduino-screens/raw/main/sc-duck.gif" alt="">
  </div>
</div>

### LCD Alarm Clock
Project by John Bradnam built in 2020 on [hackers.io page](https://www.hackster.io/john-bradnam/lcd-alarm-clock-with-many-faces-f18af6) as
## Hardware
<div class="two-columns" style="--column-count: 2; display: flex; gap: 2%; align-items: stretch;">

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="MCU - Big Fonts01.jpg" alt="">
  </div>

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="MCU - Big Fonts02.jpg" alt="">
  </div>
</div>

More information about the I2C and multiple displays [here](https://lastminuteengineers.com/esp32-i2c-lcd-tutorial/)


![[MCU - Big Fonts04.webp]]

[ESP32-C6 Super Mini](https://www.espboards.dev/esp32/esp32-c6-super-mini/) is the main controller unit. It has built-in battery charger module. It eliminates one more external component to charge li-po battery. 


## Hardware Connection Guide
### How to safely calibrate it:
1. Solder your battery (via the switch) to **`VIN+`** and **`VIN-`** on the MT3608.
2. **Leave the `VOUT+` and `VOUT-` pins completely disconnected from everything else.**
3. Turn the battery switch ON.
4. Take a multimeter, set it to DC Voltage, and place the probes on `VOUT+` and `VOUT-`.
5. Take a small screwdriver and turn the brass screw **counter-clockwise**.
> 💡 *Note: You may have to turn the screw 10 to 20 full rotations before the voltage number on your multimeter finally begins to drop. Don't worry, it isn't broken—the factory setting just has a lot of "dead travel."*

6. Keep turning until your multimeter reads exactly **`5.0V`**. Turn the switch off. Now it is safe to wire to the rest of your system.

### The Complete System Integration Map
Now that your MT3608 is dialed into a safe 5V, connect everything together following this master layout:

#### 1. Power Distribution
 **Grounds (GND):** Connect all the following points to a single shared ground wire/rail:
* Battery (-)
* ESP32-C6 `BAT-`
* MT3608 `VIN-`
* MT3608 `VOUT-`
* Old SparkFun Shifter `GND`
* LCD Backpack `GND`

**Battery Power (3.7V Line):** 
* Battery (+) ➡️ Switch Input.
* Switch Output ➡️ Splits into two lines:
	1. One line goes to ESP32-C6 **`BAT+`**
	2. The other line goes to MT3608 **`VIN+`**

**Boosted Power (5V Line):**
* MT3608 **`VOUT+`** (5V) ➡️ Splits into two lines:
	1. One line goes to LCD Backpack **`VCC`**
	2. The other line goes to the Old Shifter **`HV`** pin

**Microcontroller Reference (3.3V Line):**
* ESP32-C6 **`3.3V`** pin ➡️ Old Shifter **`LV`** pin

#### 2. Data Signals (Using the Old Shifter's Bi-directional TX lanes)
Leave the `RXI` and `RXO` pins on your old level shifter completely disconnected.
* **SDA (Data) Line:**
* ESP32-C6 `SDA` (GPIO 6) ➡️ Shifter Low Side **`TXI` (Left)**
* LCD `SDA` ➡️ Shifter High Side **`TXO` (Left)**

* **SCL (Clock) Line:**
* ESP32-C6 `SCL` (GPIO 7) ➡️ Shifter Low Side **`TXI` (Right)**
* LCD `SCL` ➡️ Shifter High Side **`TXO` (Right)**


## Improvement
My idea is to implement all charset to create a name tag or event a simple digital clock. 📟

## Limitations
Almost all 16x2 text LCDs are based on the **Hitachi HD44780** controller chip (or a clone of it). Here is why the limit exists:

1. **CGRAM (Character Generator RAM)**: The chip has a tiny amount of built-in volatile memory called CGRAM dedicated to storing custom characters.
2. **Memory Size**: The CGRAM is exactly 64 bytes in size.
3. **Character Size**: Each character on these displays is drawn in a 5x8 pixel grid. It takes 8 bytes of data to define one complete 5x8 character (1 byte per row).
4. **The Math**: `64 bytes / 8 bytes per character = exactly 8 characters`.

Because the physical RAM on the controller chip is completely full after 8 characters, there is literally nowhere else on the screen's hardware to store a 9th custom shape.

If you tell the library to write to address `8`, the chip's internal address pointer mathematically wraps around to `0`, which is why your "A" was being overwritten by "C" earlier!

### So How does it handle all characters when we utilize built-in features?
The reason you can fill the entire screen with regular text (letters, numbers, and punctuation) is because the LCD chip actually has **two different types of memory** inside it:

#### 1. CGROM (Character Generator ROM) - The Built-In Alphabet
"ROM" stands for Read-Only Memory. When the LCD chip was manufactured in the factory, the standard alphabet (A-Z, a-z, 0-9, and symbols) was permanently etched into the silicon.

There are usually around 240+ hardcoded characters in this permanent memory. When your code says [lcd.print("Hello");](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html), it doesn't send pixel shapes to the screen. It just sends an ID number (like sending the number 65 to tell the screen to draw its pre-built "A"). Because the pixel blueprints are permanently burnt into the hardware, they don't take up any space in your tiny custom RAM.

#### 2. CGRAM (Character Generator RAM) - The Custom Area
"RAM" stands for Random Access Memory, which is temporary memory that _you_ can write to.

Because the manufacturer assumed you would mostly use the built-in alphabet, they only included a tiny sliver of blank RAM specifically for shapes that aren't in the factory dictionary (like your giant letters, battery icons, or smiley faces). That tiny blank space (64 bytes) can only hold exactly 8 custom blueprints.

## Code Test
```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// 1. PIN DEFINITIONS CORRECTED
#define I2C_SDA 6 // Matches your physical wire to the shifter
#define I2C_SCL 7 // Matches your physical wire to the shifter

// 2. LCD CONFIGURATION (Address 0x27, 16 Columns, 2 Rows)
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  delay(1000); 
  Serial.println("Initializing Battery Powered ESP32-C6 System...");

  // 3. INITIALIZE CUSTOM I2C BUS WITH PINS 6 AND 7
  Wire.begin(I2C_SDA, I2C_SCL);
  
  // 4. INITIALIZE THE LCD SCREEN
  lcd.begin();
  lcd.backlight(); 
  
  // Print initial splash screen
  lcd.setCursor(0, 0);         
  lcd.print("ESP32-C6 Mini");
  lcd.setCursor(0, 1);         
  lcd.print("Pins 6 & 7 Ready");
  
  Serial.println("System successfully online.");
}

void loop() {
  static unsigned long lastUpdate = 0;
  if (millis() - lastUpdate >= 1000) {
    lastUpdate = millis();
    
    lcd.setCursor(14, 1); 
    lcd.print("  "); 
    
    lcd.setCursor(0, 1);
    lcd.print("Uptime: ");
    lcd.print(millis() / 1000);
    lcd.print("s...");
  }
}
```
## Casing
[3D dummy 16x2 LCD module.](https://www.tinkercad.com/things/fHqu6zUVYFK-lcd-1602-i2c)

## Design Iteration 1
To ease the process of font design, I decided to create an application that can run on the browser. Javascript was preferred because of accessibility and avoid complex installation instructions for non-developer users.

![[MCU - Big Fonts001.jpeg]]

The systematic development of the interface progressed through three distinct design iterations.

The first design iteration focused on structural modularization. The primary workspace was expanded into an array of 29 individual output canvases. Each canvas is subdivided into a 2 by 2 matrix where every quadrant contains a 5 by 8 pixel grid. This granular architecture supports complex sprite composition and facilitates simultaneous visual comparison of multiple drawing states to manipulate 16x2 LCD displays. 

However drawing each character one-by-one and memorizing the glyphs was distracting. The design process is slow and it required constantly check the figures.  Seeing all of the glyphs make the process more convenient. 

The second design iteration introduced a referential memory buffering system to optimize user workflow. Eight auxiliary memory panels were situated at the upper boundary of the interface to serve as reusable pixel storage configurations. There are eight number of glyph options because of the hardware limitations. A standard 16x2 LCD display has such a limitation. To link these storage units with the primary workspace, four numeric input variables were integrated beneath each of the 29 output canvases. Users can project the saved pixel patterns from a specific memory panel into an exact quadrant of an output canvas by inputting the corresponding memory integer. This dynamic mapping synchronizes graphical elements and minimizes redundant rendering operations.


## Design Iteration 2: User Interface Improvement
The third design iteration addressed interactive usability and structural state management. Recognizing the interactive friction of manual pixel erasure, a consolidated clear component was implemented adjacent to each memory panel label. This control executes a rapid state reset by neutralizing the local memory buffer while instantaneously propagating the erasure command across all associated output projections. This cascading deletion mechanism strictly maintains referential integrity across the application and significantly accelerates the overall prototyping sequence correction. 

### Clear Buttons
When the user needs to erase a pixel, clicking on the grid square is easy. But when the user wants to wipe of a glyph, it becomes a tedious task to point and click on each painted grid item. Clear button eliminates this tedious process. The clear GUI elements inserted next to charter panels as well to allow users clear character glyphs instantly.

<div class="two-columns" style="--column-count: 2; display: flex; gap: 2%; align-items: stretch;">

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="MCU - Big Fonts002.jpeg" alt="">
  </div>

  <div style="flex: 1;">
    <img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="MCU - Big Fonts003.jpg" alt="">
  </div>
</div>


### SaveLoad Settings
Using "Save Panels" the user can save MEM set and relevant character set design as `*.json` file. "Load Panels" loads saved settings. "Clear All Panels" clears MEM and Char panels instantly. Finally, "Clear Char Panels" keeps MEM panel pixel location, but clears Char panels for fresh start. 



### Sticky Memory Pane


## Design Iteration 3
Generating the codes is another tedious task. When developing the code, the user had to note down each character byte array order. 


## Design Iteration 4
Content update over network. 
[ESP32 - LED Matrix via Web \| ESP32 Tutorial](https://esp32io.com/tutorials/esp32-led-matrix-via-web)


## Design Iteration 5
Increased stimuli sound
Online tone composer, [Arduino Tone Melody Designer & Simulator](https://tgjohnst.github.io/arduino-tone-composer/)

![[Excalidraw/Pager-Prototype-2026-07-10.excalidraw.md#^group=6DoWy_uiFWyoezW5IMKDj|100%]]


## Design Iteration 6
The main application on the [[MCU]] exceeded 1000 lines of code. It became hard for development of the application while adding new menu items and so on. Since we dependent on three buttons, the functionality became same for nearly each menu item. To get rid of the complexity and make the sustainable development environment, a base class for menu items were created. So whenever a new menu added, the implementation on the code base became less time confusing. The new approach on the MCU software allowed developers to customize the content for their specific purposes.

As the number of features on the device grew across previous iterations — from a basic clock display to eight distinct functions including a timer, name tag, battery monitor, and connectivity controls — the underlying software became increasingly difficult to manage. All application logic resided in a single file exceeding 900 lines of code, where the behaviour of each menu item was distributed across multiple scattered functions and shared variables. This monolithic structure made it impractical to modify, extend, or debug individual features without risking unintended side-effects on others.

In this iteration, the software was restructured around a modular, object-oriented architecture. Each menu item — Clock, Timer, Name Tag, BLE Configuration, Wi-Fi Status, Sound, Battery, and Display Timeout — was encapsulated as an independent, self-contained module with its own file. A common template was established so that every module follows the same structure: what to display, how to respond to button input, and what to do upon entry. A shared context mechanism was introduced to give each module access to hardware resources such as the display, speaker, and real-time clock without creating rigid dependencies between them.

This restructuring reduced the main application file from 933 to approximately 500 lines and, more importantly, transformed the process of adding or removing features. Introducing a new menu item now requires creating a single file and adding two lines of code to the main program — a significant improvement over the previous approach, which required modifying logic in multiple locations across the codebase. The change was motivated not by a need for new functionality, but by the recognition that the design process itself was being slowed by accumulated software complexity. By investing in architectural clarity at this stage, future iterations — whether adding new display modes, sensor integrations, or user-configurable settings — can proceed with substantially less friction and a lower risk of introducing errors.
