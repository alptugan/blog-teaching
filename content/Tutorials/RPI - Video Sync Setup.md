---
title: RPI - Video Sync Setup
date: 2025-02-06
modfification date: Thursday 6th February 2025 15:53:12
description: 
tags:
  - raspberrypi
  - video
  - sync
aliases: 
draft: false
---
## Download Image
1. Goto link and download the Raspberry Pi image -> [download](https://github.com/andrewintw/rpi-video-sync-looper?tab=readme-ov-file#latest-release)
2. Format the SD Card in EXFAT format.
![[merve01.png]]
1. Burn the image to SD card.

## Single Video Loop
1. Prepare the video in mov or mp4 format.
2. Copy the video file into a USB disk.
3. Plug the USB to RPI.
4. Power ON monitor.
5. Power ON the RPI and you will see the video playing in loop.

## Multiple Video Sync Loop
1. Burn the image to the SD card.
2. Plug it to the computer again.
3. Open the `video-sync.conf` file in nano editor.
4. On Mac, open the Terminal App. Run `cd /Volumes/boot`
5. `sudo nano video-sync.conf`
6. For master device
	1. You don't need to update the .conf file.
	2. Insert the SD card to the n.th RPI.
	3. You must insert the USB flash drive before powering on.
7. For slave devices, do the followings;
	1. video.player.role='master' to video.player.role='slave'
	2. Save the conf file `Control + O` 
	3. Insert the SD card to the n.th RPI.
	4. You must insert the USB flash drive before powering on.
	5. Power On and wait. 20seconds or more...

## To Replace the Playback Videos (USB Flash Drive)
The SD card contains the Raspberry Pi's customized operating system, and the USB flash drive is where video files are stored. To replace videos:
1. **Power off the device** (never forcibly remove the USB flash drive while it's running).
2. Insert the USB flash drive into your computer and replace the video file.
3. Insert the USB flash drive back into the playback device.
4. Power on the playback device.

## References
[Github Repository](https://github.com/andrewintw/rpi-video-sync-looper?tab=readme-ov-file#latest-release)

## Trouble Shoot
> [!scale]- Videos are not synced.
> 1. The video must be at least 60 seconds long.
> 2. The file names must be the same on the `master` and `slave`
> For example, if the Master plays a video with the name GK5.mp4, the other two devices should also play a video named GK5.mp4. However, the size of the mp4 files played by these three devices may be different because their content is different.

> [!scale]- Resolution/aspect ratio of the video displaying wrong size
> 1. Turn off Raspberry Pi.
> 2. Turn off monitor.
> 3. First turn on the monitor, then boot up the Raspberry Pi.

> [!error]- RPI throws error "Cannot read the video" from USB disk.
> Remove USB from the RPI
>Connect to Mac. 
>Open Disk Utility, format the USB disk with `EXFAT`
![[merve01.png]]
> Convert the video file to MP4 `H264` format via Handbrake App.

> [!HELP]- 7 inch HDMI LCD (C) WaveShare Not Showing
> ```
> hdmi_group=2
> hdmi_mode=87
> hdmi_cvt 1024 600 60 6 0 0 0
> hdmi_drive=1
> ```
> [reference](https://www.waveshare.com/wiki/7inch_HDMI_LCD_(C))

> [!HELP]- Monitor related issues
> https://forums.raspberrypi.com/viewtopic.php?t=370251
> 
> https://downloads.raspberrypi.com/raspios_oldstable_armhf/images/raspios_oldstable_armhf-2023-05-03/
> 
> https://www.raspberrypi.com/documentation/computers/configuration.html#kernel-command-line-cmdline-txt
> 
> ![[rapi-screen-rot.png]]
