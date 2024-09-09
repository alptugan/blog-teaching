---
title: Tutorial - Disable Gate Keeper on Mac OS
date: 2024-09-09
modfification date: Monday 9th September 2024 18:00:37
description: Shows how to disable gate keeper on Mac OS to install apps from unidentified developers.
tags:
  - tutorial
  - MacOS
aliases: 
draft: false
---
## Check Current Status
### Option 1
Open `System Preferences`. Goto `Privacy & Security` tab. Scroll down on the right pane. If the you see the image below, it means that your Gate Keeper is activated. 
![[gate_keeper_01.png]]
### Option 2
Open `Terminal`. Type `spctl --status`. If the output says `assessments enabled`, it means that your Gate Keeper is activated.
![[gate_keeper_terminal_01.png]]

## Disable The Gate Keeper
Open `Terminal`. Type `sudo spctl --master-disable` command will prompt you to enter your admin password which is the one you use while login your computer.
![[gate_keeper_terminal_02.png]]

Now close the `System Preferences` window, if it is opened. 
Open it again. Then goto `Privacy & Security` tab. Scroll down and you should see a third option is appeared and selected. 
![[gate_keeper_02.png]]

## Enable The Gate Keeper
To return back to the default state type;
`sudo spctl --master-enable`


