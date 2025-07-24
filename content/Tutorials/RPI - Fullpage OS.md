---
title: RPI - Fullpage OSUntitled
date: 2025-06-05 11:49:37
description: 
tags:
  - raspberrypi
aliases: 
draft: false
---
You can create image of the OS directly using [Raspberry Pi Imager](https://www.raspberrypi.com/software/) tool. Prefer the stable version. The last update is committed at 2022 but it still works. 

Setup process is straight forward. Follow the instructions when the update is done.

It can also run local pages. By default it comes with a server running.

> [!NOTE] If the setup screen freezes, reboot system

[GitHub - guysoft/FullPageOS: A raspberrypi distro to display a full page browser on boot](https://github.com/guysoft/FullPageOS)

## Setup Guide
Refer to the following [link](https://raspberrytips.com/fullpageos-raspberry-pi/)

## SSH to Fullpage OS
```shell
# ping the host
ping fullpageos.local

# if you receive ping times, then you are good to go
# pass: raspberry
ssh pi@fullpageos.local
```

## Directories