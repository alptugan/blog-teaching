---
title: Tutorial - Davinci Resolve Generate Signal
date: 2024-09-24
modfification date: Tuesday 24th September 2024 22:12:45
description: Article covers how to generate sine or noise signal in Davinci Resolve Fairlight
tags:
  - video
  - DavinciResolve
  - signal
aliases: 
draft: false
---
Davinci Resolve's Fairlight sound editing section is capable of creating sound signals in specific hertz. 

In order to generate signal we need to define an input virtual device using the sound mixer on the right.
1. Click on the sound track that you want to generate signal
2. Click on "No Input"
3. Select "Input..."

![[davinci_Generate-Signal_01.png]]

---

You will see Patch window pops out. On the left there is **Source**, on the right **Destination**. We use "Signal Generator" as sound input source and route the input to our selected Track 4.
![[davinci_Generate-Signal_02.png]]

---

Select one of the signal generators on left. 
Select Track 4's left and right channels on right.
Hit "Patch" button on bottom right.
![[davinci_Generate-Signal_03.png]]

---

After you "Patch" the routing, close the Patching window. Goto your track (mine was Track 04) and enable "Arm For Recording" toggle shown as `R`. You instantly hear the signal depending on the type of generator. 
![[davinci_Generate-Signal_04.png]]

---

You can adjust the parameters of the relevant signal from the top menu "Fairlight." Click on "Test Tones Settings..." menu.
![[davinci_Generate-Signal_05.png]]

---

You can adjust parameters of "Noise" signal from the right section on pop-up menu window. You can adjust parameters of the sine signal from the left menu as follows.
![[davinci_Generate-Signal_06.png]]

----

Hit record button on the Timeline panel to instantly record the signal to the armed track. After you are done with recording you can disable `R`  (Arm for Recording) option to make the track silence when you are not playing anything.
![[davinci_Generate-Signal_07.png]]
