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

| **Name**    | **Command**                                       | **Description**                    |
| ----------- | ------------------------------------------------- | ---------------------------------- |
| awk         |                                                   |                                    |
| cat         | cat /proc/cpuinfo                                 | Display CPU information.           |
| caffeinate  | caffeinate -dis                                   | Stay awake your Mac.               |
| date        | date                                              | Check the current date-time        |
| gcc         | gcc --version                                     | Display c++ compiler               |
| grep        |                                                   |                                    |
| lm-sensors  | sudo apt install lm-sensors                       | Install Mainboard sensor drivers   |
|             | sudo sensors-detect                               | List sensors                       |
|             | watch sensors\|                                   | Monitor sensor values              |
| lscpu       | lscpu                                             | Display CPU information.           |
| lsblk       | lsblk                                             | Display list of HDD block devices. |
| nvidia-smi  | nvidia-smi -q                                     | Display NVIDIA GPU information.    |
| uname       | uname -m                                          | Get dist name                      |
|             | uname -p                                          | Processor architecture.            |
|             | uname -m && cat /etc/*release                     | Get dist name and release name     |
| timedatectl | timedatectl list-timezones                        | List time zone names               |
|             | sudo timedatectl set-timezone Europe/Istanbul<br> | Set time zone                      |
|             | sudo timedatectl set-ntp on                       | Enable the service                 |
|             | timedatectl                                       | Check the current date-time        |
|             |                                                   |                                    |



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


# Troubleshooting

| Command                                  | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| Expand disk space after installation (1) | `lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv`         |
| Expand disk space after installation (2) | `resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv`            |
| safe-mode                                | Hold down shift key to log in to recovery mode on Linux. |

## Temporary failure resolving 'archive.ubuntu.com'
Here are some steps to diagnose and resolve the issue:
1. **Check Network Connectivity**:
    - Run `ping 8.8.8.8` to check if your system can connect to the Google DNS server. If this fails, it could indicate a broader network issue. 
2. **Check System Services**:
    - Run `sudo systemctl status systemd-resolved` to check the status of the systemd-resolved service. If it is stopped, start it using `sudo systemctl start systemd-resolved`.    
3. **Check Current DNS Servers**:
    - Run `sudo resolvectl` to see your current upstream DNS servers.
    
By following these steps, you should be able to identify and resolve the issue causing the "Temporary failure resolving 'archive.ubuntu.com'" error.