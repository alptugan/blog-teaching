---
title: Linux - Crontab Automation
date: 2026-06-09 07:53:47
description:
tags:
  - linux
  - ubuntu
  - automation
aliases:
draft: false
---
## Scheduled System Reboot
```bash
# Set system date correctly
sudo timedatectl set-timezone Europe/Istanbul

# Open crontab
sudo crontab -e

# While `/sbin/reboot` usually works, standard Linux best practice for automated server reboots is to use the `shutdown` command, which is much better at gracefully telling Docker and your databases to save their work before pulling the plug.

# Append the following line to the end of the document
# Restart computer everyday at 5 A.M.
0 5 * * * /sbin/shutdown -r now
```