---
title: Untitled
date: 2024-06-09
modfification date: Sunday 9th June 2024 01:55:03
description: 
tags:
  - ubuntu
  - tutorial
  - backup
  - clone
aliases: 
draft: false
---
## 1. Preparation
1. Switch to root user `sudo su`
2. Check the current available HDD sizes `df -h` ![[clone_HDD_01.png|The HDD to be cloned `/dev/mapper/ubuntu--vg-ubuntu--lv`]]
3. Check if the system supports SSD or not using the following command. Most Linux distributions support SSD hardware. It would be a good practice to avoid compatibility issues. You can read the documentation of your Linux distro requirements using the `HOME_URL` text. Use the following command
    `cat /etc/os-release` ![[clone_HDD_02.png|Check the website the `HOME_URL` points to. ]]
4. Backup the host HDD using the `dd` command. Firstly, **we should check which disk and partitions hold the Linux system**. This is especially so if we have more than one disk on the machine. For that purpose, we can use `cfdisk` command. Follow the [[Tutorial - Clone Raspberry Pi OS to an SD Card|blog post]] to create image of your entire HDD to avoid data loss.![[clone_HDD_03.png|sda3 is my boot drive. The interface may be different according to your Linux distro.]]
## 2. Creating clone of the old HDD to the SSD
Shut down the computer. Connect the SSD to the computer where the HDD to be cloned. Open Terminal check the destination SSD path using the `cfdisk` command. 

> [!Warning] Be aware, dd command is dumb!
> It copies the whole partition block to another drive as it is. E.g: You have source, 500GB HDD with 200GB available space. The target device must be identical to the source device. Otherwise you will have issues.  

Copy the destination path of the SSD and type the following command;
`sudo dd if=/dev/sda3 of=/path/to/destination_SSD status=progress`

After the `dd` command wait until the process finished. Then, you can shutdown the computer and use your cloned device. If you need to shrink the size of your source drive to make it fit into the target device, it would be better to prefer third party apps like [GParted](https://gparted.org/download.php). If you need to shrink the source drive size, you can refer to the [video](https://www.youtube.com/watch?v=YmFuBiKtes0) tutorial.