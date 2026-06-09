---
title: P-OLED Mirror Display
date: 2025-12-24 12:51:14
description:
tags:
  - OLED
aliases:
draft: true
---
## Background & Motivation
### Experience Prototyping
Experience prototypes[^1] represent a specialized form of prototyping in interaction design and human-computer interaction (HCI) that emphasizes experiential engagement over mere functional representation. They enable designers, users, and stakeholders to actively interact with mock-ups or simulations of systems, facilitating a firsthand appreciation of contextual, sensory, social, and cognitive aspects of proposed designs.

Tiny OLED screens are great for physical computing projects. Also they are cheap and accessible for everyone. But the problem is they are mostly in low resolution. Depending on manufacturer and there are plenty of options available. They are mostly 128x64 pixel resolution with mono color option. They are good for physical computing projects to provide visual feedback for the user. In the context of user interface design, a designer can use any image editor tool like Photoshop or open-source online alternative Photopea. However, the process of previewing the visuals on the OLED requires a tedious workflow. Another issue is the scale and hardware related differences causing too many iterations. The process of previewing the design on the OLED includes too many time consuming repetitive steps. Converting the image into machine code and updating the microcontroller code. This article focuses on a simple question. How can we discard that time consuming repetitive tasks in order to improve design process for general purpose cheap tiny OLED displays. This article contains a custom application built with openframeworks, a C++ toolkit, that captures pixels at the cursor's current position with a specific resolution required by the tiny display hardware. Captured pixels are sent to the micro controller unit which passes the pixel data to the OLED display. 


## Actual Workflow
There are two types of workflows when talking about using tiny OLED screens. 
1. Working with Static Images
2. Working with Dynamic Images

Working with static images is relatively easier compared to dynamic content. 


## Case Study: OLED Mirror Display 
MirrorOLED a specialized tool designed to bridge the gap between user interface (UI) designers and embedded hardware.


## Related Work
[Using OLED display as external monitor - Hackster.io](https://www.hackster.io/lemio/using-oled-display-as-external-monitor-afda57)
The ESPScreenMirror project by lemio provides a firmware solution to mirror a computer's screen onto a LILYGO T-Display S3 AMOLED module using an ESP32-S3 microcontroller. The system relies on a PlatformIO and Visual Studio Code development environment, where users utilize a Python-based workflow to capture and transmit display data to the external device via USB. Limitations of the project include its strict dependency on specific LILYGO hardware and potential USB connectivity or power stability issues, as indicated by the documentation's troubleshooting advice for resolving device flashing errors.

[Moddable Blog \| Pushing PNG Images to a Display](https://www.moddable.com/blog/pngdisplay/)
The `pngdisplay` utility facilitates the rapid verification of user interface designs on embedded hardware by enabling the direct transmission of PNG images via HTTP and mDNS protocols, utilizing scan-line decoding to manage memory resources. However, the project is subject to notable technical limitations, primarily its dependency on the ESP32 platform due to the significant RAM requirements of the `zlib` decompression algorithm, which renders the ESP8266 incompatible. Furthermore, the system necessitates that input images be non-interlaced, strictly bounded in file size (ideally under 50 KB) and resolution to prevent memory exhaustion, and stripped of excessive metadata.

## Rerefences
[^1]: [Experience prototyping](https://dl.acm.org/doi/epdf/10.1145/347642.347802)
