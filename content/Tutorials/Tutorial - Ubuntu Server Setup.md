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
draft: true
---
1. Download `Ubuntu-server` image.
2. Install with default UI instructions. Just enable the SSH option to connect remotely.
3. After the installation done, the hard disk space might be showed lower. Run the following commands to fix;
``` bash
lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

