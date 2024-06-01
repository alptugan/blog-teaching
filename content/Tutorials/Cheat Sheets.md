---
title: Cheat Sheet - Webmin
date: 2024-05-13
description: Cheat Sheet for Linux Webmin Interface
tags:
  - linux
  - webmin
  - casaos
aliases: 
draft: true
---
# Unix General

| Command Name | Command                                           | Description                      |
| ------------ | ------------------------------------------------- | -------------------------------- |
| grep         |                                                   |                                  |
| awk          |                                                   |                                  |
| lm-sensors   | sudo apt install lm-sensors                       | Install Mainboard sensor drivers |
|              | sudo sensors-detect                               | List sensors                     |
|              | watch sensors\|                                   | Monitor sensor values            |
| uname        | uname -m                                          | Get dist name                    |
|              | uname -m && cat /etc/*release                     | Get dist name and release name   |
| gcc          | gcc --version                                     | Display c++ compiler             |
| timedatectl  | timedatectl list-timezones                        | List time zone names             |
|              | sudo timedatectl set-timezone Europe/Istanbul<br> | Set time zone                    |
|              | sudo timedatectl set-ntp on                       | Enable the service               |
|              | timedatectl                                       | Check the current date-time      |
| date         | date                                              | Check the current date-time      |
| nvidia-smi   | nvidia-smi -q                                     | Lists NVIDIA GPU properties.     |







# Webmin
![![blog-teaching/content/Tutorials/#^Table6]]

# CasaOS

| Command                 | Description                |
| ----------------------- | -------------------------- |
| `casaos-uninstall`      | Uninstall from the system. |
| http://192.168.1.111:81 | Access webUI.              |
|                         |                            |

[This link includes the file to be changed](https://github.com/IceWhaleTech/CasaOS/blob/0883f5f3aa7a3ce0753891c0835f8f633557892d/service/system.go#L454)
Description is here about how to edit the file [link](https://github.com/IceWhaleTech/CasaOS/issues/1126)


# Ubuntu-server
| Command                                  | Description                                      |
| ---------------------------------------- | ------------------------------------------------ |
| Expand disk space after installation (1) | `lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv` |
| Expand disk space after installation (2) | `resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv`    |
