---
title: Hexadecimal
date: 2026-07-22 12:05:17
description:
tags:
  - words
  - physicalComputing
  - electronics
  - computational_thinking
aliases:
draft: false
---
**Hexadecimal** (often shortened to **hex**) is a **base-16 number system** used in computing to represent [[Binary Data]] in a compact, human-readable form. (ref: [en.wikipedia](https://en.wikipedia.org/wiki/Hexadecimal))

Unlike the decimal system (base-10) which uses 10 symbols (0–9), hexadecimal uses **16 symbols**:

- Digits **0–9** for values zero to nine
- Letters **A–F** (or a–f) for values ten to fifteen (A=10, B=11, C=12, D=13, E=14, F=15)[freecodecamp](https://www.freecodecamp.org/news/hexadecimal-number-system/)

```
0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  (Hexadecimal)
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 (Indices)
```


## Key Properties
- **One hex digit = 4 bits**: Since 24=162^4 = 1624=16, each hexadecimal digit represents exactly 4 binary [[Bit]]s (a “nibble”). This makes conversion between binary and hex straightforward. (ref: [electronics-tutorials](https://www.electronics-tutorials.ws/binary/bin_3.html))
    
- **Compact notation**: A [[Byte]] (8 bits) can be written as just **2 hex digits**. For example, binary `10110111` becomes `B7` in hex. (ref: [ionos](https://www.ionos.com/digitalguide/server/know-how/hexadecimal-system/))
    
- **Prefix convention**: In programming, hex numbers are often prefixed with **`0x`** to distinguish them (e.g., `0xFF` = 255 in decimal). (ref: [freecodecamp](https://www.freecodecamp.org/news/hexadecimal-number-system/))


## Common Uses in Computing
- **Memory addresses**: RAM locations displayed in hex (e.g., `0x7FFE`)
    
- **Color codes**: Web colors like `#FF5733`
    
- **MAC addresses**: Network hardware IDs like `00:1A:2B:3C:4D:5E`
    
- **Machine code & debugging**: [[Assembly]] and binary data shown in hex for readability. (ref: [en.wikipedia](https://en.wikipedia.org/wiki/Hexadecimal))

Hexadecimal bridges the gap between human-friendly notation and machine-level binary, making it essential for low-level programming, debugging, and system design.
