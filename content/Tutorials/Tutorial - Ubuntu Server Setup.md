---
title: Tutorial - Ubuntu Server Setup
date: 2024-05-15
modfification date: Wednesday 15th May 2024 15:21:19
description: 
tags:
  - tutorial
  - ubuntu
  - linux
aliases: 
draft: false
---
## 1. Download and Install from USB Stick
1. Download `Ubuntu-server` image.
2. Burn the image to a USB stick at least 8GB space via tools like [unetbootin](https://unetbootin.github.io/), [Raspberry Pi Imager](https://github.com/raspberrypi/rpi-imager), or [Balenea Etcher](https://etcher.balena.io/)
3. Boot your computer with the USB.
4. Install with default UI instructions. Just enable the SSH option to connect remotely.
5. After the installation done, the hard disk space might be showed lower. Run the following commands to fix;
``` bash
lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

## 2. Install NVIDIA drivers
If you have external GPU card installed on your machine, you can install relevant driver packs bundled with Ubuntu.
1. Check the available drivers packed with Ubuntu-server 
   `ubuntu-drivers devices`
2. Before installing the driver, you can check whether any GPU driver is installed or not.
   `nvidia-smi`
3. You can search drivers to install via `apt search nvidia-driver` or  `apt-cache search nvidia-driver`.
4. If you are OK with the Ubuntu-server defaults you can use `sudo ubuntu-drivers autoinstall` command. If you want to install a specific driver you can use `sudo apt install nvidia-driver-xxx`. Replace the `xxx` with appropriate driver version number listed in the step `3`.




