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
# TOC
[[#Unix General]]
[[#Docker Basics]]
[[#Locations]]
[[#Run docker container's command]]




# Unix General

| <div style="width:78px">Name</div> | <div style="width:300px">Command</div>                                          | **Description**                                                                                                                                                                                                                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| awk                                |                                                                                 | awk is used to filter and manipulate output from other programs and functions. Slices the line from empty spaces and assign them to vars. Patterns are enclosed in curly braces ({}). Together, a pattern and an action form a rule. The entire awk program is enclosed in single quotes ('). |
|                                    | who \| awk '{print $1, $4}'                                                     | $0: Represents the entire line of text.<br>$1: Represents the first field.<br>$2: Represents the second field.<br>$7: Represents the seventh field.<br>$45: Represents the 45th field.<br>$NF: Stands for "number of fields," and represents the last field.                                  |
|                                    | date \| awk 'OFS="/" {print$2,$3,$6}'                                           | OFS (output field separator) variable to put a separator between the month, day, and year.                                                                                                                                                                                                    |
|                                    | cat /etc/passwd -n \| awk -F: '{print $1}'                                      | Separate the lines using ":"                                                                                                                                                                                                                                                                  |
| cat                                |                                                                                 |                                                                                                                                                                                                                                                                                               |
|                                    | cat /proc/cpuinfo                                                               | Display CPU information.                                                                                                                                                                                                                                                                      |
|                                    | cat > FILE_NAME                                                                 | enter text into the file (overwrite)                                                                                                                                                                                                                                                          |
|                                    | cat >> FILE_NAME                                                                | enter text at the end of the file (append)                                                                                                                                                                                                                                                    |
| caffeinate                         | caffeinate -dis                                                                 | Stay awake your Mac.                                                                                                                                                                                                                                                                          |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |
| curl                               |                                                                                 |                                                                                                                                                                                                                                                                                               |
|                                    | https://www.youtube.com/watch?v=BuEYquQweGo                                     |                                                                                                                                                                                                                                                                                               |
| date                               | date                                                                            | Check the current date-time                                                                                                                                                                                                                                                                   |
| du                                 |                                                                                 | list directories (folders)                                                                                                                                                                                                                                                                    |
|                                    | du -h -d1                                                                       | use human-readable sizes                                                                                                                                                                                                                                                                      |
|                                    | du -h -d3 -t10G                                                                 | look down 3 levels and only show folders above a threshold size                                                                                                                                                                                                                               |
|                                    | du -h \| sort -hr                                                               | list directories and sort by size                                                                                                                                                                                                                                                             |
|                                    | du -h \| sort -hr \| head -n10                                                  | only show top 10                                                                                                                                                                                                                                                                              |
|                                    | du -h -d1 -t10G \| sort -hr \| head -n 10                                       | list directories in current folder, threshold 10G, sort with human-readable sizes, top 10                                                                                                                                                                                                     |
|                                    | ,find . -size +200M -exec ls -lh {} \;                                          | find files larger than a size, list with details                                                                                                                                                                                                                                              |
|                                    | find . -size +200M -exec du -hs {} \;                                           | find files and folders, list with details                                                                                                                                                                                                                                                     |
|                                    | find . -size +200M -exec du -hs {} \; \| sort -hr \| head -n 10                 | find files and folders, list with details, sort, top 10                                                                                                                                                                                                                                       |
| find                               |                                                                                 | Find files and folders                                                                                                                                                                                                                                                                        |
|                                    | sudo find . -iname FILE_OR_FOLDER-NAME                                          | Find files starting at current location and containing text in name                                                                                                                                                                                                                           |
|                                    | sudo find /var/lib -iname "webui-user" -type d                                  | Find "webui-user" folder in the "/var/lib" location. Non-case sensitive                                                                                                                                                                                                                       |
|                                    | sudo find . -iname FILE_OR_FOLDER-NAME -d 3                                     | find case insensitive                                                                                                                                                                                                                                                                         |
|                                    | sudo find . -size +200M                                                         | find files over a certain size                                                                                                                                                                                                                                                                |
|                                    | sudo find /var/lib -iname "webui-user"                                          | Find "webui-user" file in the "/var/lib" location.                                                                                                                                                                                                                                            |
| gcc                                | gcc --version                                                                   | Display c++ compiler                                                                                                                                                                                                                                                                          |
| grep                               |                                                                                 |                                                                                                                                                                                                                                                                                               |
| head / tail                        |                                                                                 | Display the first/last lines of a file                                                                                                                                                                                                                                                        |
|                                    | head -n 1 FILE_NAME                                                             | View the first line of the file                                                                                                                                                                                                                                                               |
|                                    | tail -n 1 FILE_NAME                                                             | View the last line of the file                                                                                                                                                                                                                                                                |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |
| lm-sensors                         | sudo apt install lm-sensors                                                     | Install Mainboard sensor drivers                                                                                                                                                                                                                                                              |
|                                    | sudo sensors-detect                                                             | List sensors                                                                                                                                                                                                                                                                                  |
|                                    | watch sensors\|                                                                 | Monitor sensor values                                                                                                                                                                                                                                                                         |
| ls                                 |                                                                                 | List files                                                                                                                                                                                                                                                                                    |
|                                    | ls -lh                                                                          | List files with human readable file size on disk.                                                                                                                                                                                                                                             |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |
| lscpu                              | lscpu                                                                           | Display CPU information.                                                                                                                                                                                                                                                                      |
| lsblk                              | lsblk                                                                           | Display list of HDD block devices.                                                                                                                                                                                                                                                            |
| nvidia-smi                         |                                                                                 | Display NVIDIA GPU information.                                                                                                                                                                                                                                                               |
|                                    | nvidia-smi -q                                                                   |                                                                                                                                                                                                                                                                                               |
|                                    | nvidia-smi --query-gpu=gpu_name,gpu_uuid --format=csv                           |                                                                                                                                                                                                                                                                                               |
| scp                                |                                                                                 | Secure Copy Files Between Remote Devices                                                                                                                                                                                                                                                      |
|                                    | `scp Remote.It-Installer-x64.exe filika@192.168.1.100:C:\\Users\\ASUS\\Desktop` | Copy a file from Mac to Windows                                                                                                                                                                                                                                                               |
| rsync                              |                                                                                 | Clone files, copy, sync                                                                                                                                                                                                                                                                       |
|                                    | rsync -av source_folder/ target_location                                        | display copied file names                                                                                                                                                                                                                                                                     |
|                                    | rsync -ah --progress  source_folder/ target_location                            | Display progress                                                                                                                                                                                                                                                                              |
|                                    | rsync -ah --progress  –partial source_folder/ target_location                   | Copy large files, stop and resume from the last state.                                                                                                                                                                                                                                        |
|                                    | rsync -ahP source_folder user@192.168.1.247:/user/                              | remote                                                                                                                                                                                                                                                                                        |
| uname                              |                                                                                 | 32-Bit: armv6l,armv7l,armv8,armhf<br>64-Bit: arm64, aarch64                                                                                                                                                                                                                                   |
|                                    | uname -m                                                                        | Get dist name                                                                                                                                                                                                                                                                                 |
|                                    | uname -p                                                                        | Processor architecture.                                                                                                                                                                                                                                                                       |
|                                    | uname -m && cat /etc/*release                                                   | Get dist name and release name                                                                                                                                                                                                                                                                |
| ufw                                |                                                                                 | firewall, port                                                                                                                                                                                                                                                                                |
|                                    | ufw allow 22                                                                    |                                                                                                                                                                                                                                                                                               |
|                                    | ufw deny 22                                                                     |                                                                                                                                                                                                                                                                                               |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |
| udisksctl                          | udisksctl status                                                                | Display HDD brand names withing /dev                                                                                                                                                                                                                                                          |
| timedatectl                        | timedatectl list-timezones                                                      | List time zone names                                                                                                                                                                                                                                                                          |
|                                    | sudo timedatectl set-timezone Europe/Istanbul<br>                               | Set time zone                                                                                                                                                                                                                                                                                 |
|                                    | sudo timedatectl set-ntp on                                                     | Enable the service                                                                                                                                                                                                                                                                            |
|                                    | timedatectl                                                                     | Check the current date-time                                                                                                                                                                                                                                                                   |
| watch                              |                                                                                 | Execute a program periodically, showing output fullscreen.                                                                                                                                                                                                                                    |
|                                    | watch -n 60 command                                                             | Re-run a command every 60 seconds:                                                                                                                                                                                                                                                            |
|                                    | watch command                                                                   | Repeatedly run a command and show the result:                                                                                                                                                                                                                                                 |
|                                    | watch -d ls -l                                                                  | Monitor the contents of a directory, highlighting differences as they appear:                                                                                                                                                                                                                 |
|                                    | watch 'command_1 \| command_2 \| command_3'                                     | Repeatedly run a pipeline and show the result:                                                                                                                                                                                                                                                |
|                                    | watch -n 1 nvidia-smi                                                           | Monitor GPU usage realtime, update every second                                                                                                                                                                                                                                               |
|                                    |                                                                                 |                                                                                                                                                                                                                                                                                               |


# Docker Basics

| Command                                  | Description                                       |
| ---------------------------------------- | ------------------------------------------------- |
| docker ps                                | List docker images                                |
| docker exec -it <container_id> /bin/bash | Login docker image folder. Type `exit` to log-out |
| docker inspect dc87f8ea23aa              | Display docker-compose content                    |
| docker stop docker_name                  | Stop running docker                               |
| sudo systemctl restart docker            | Restart docker containers                         |
### Locations:
/etc/docker/daemon.json
/var/lib/docker/containers → include casaos failed folders as well
/var/lib/casaos/www → webpage location
/var/lib/casaos/apps → docker-compose.yml

.ssh/config file
`ProxyCommand docker exec -i cloudflared cloudflared access ssh --hostname %h`
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

| Command                                                                                                             | Description                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Expand disk space after installation (1)                                                                          vextend -l +100%FREE /dev/ubuntu-vg/ubuntu                                                |
| Expand disk space after installation (2)                                                                        esize2fs /dev/mapper/ubuntu--vg-ubunt                                                       |
| safe-mode                                                                                                     ld down shift key to log in to recovery mode o                                                |
| VS Code Remote SSH file write access issue<br>`# NoPermissions (FileSystemError): Error: EACCES: permission Login to remote device via SSH and type `sudo chown -R <username> <path_to_folder>` st/'  st/'  |

## Temporary failure resolving 'archive.ubuntu.com'
Here are some steps to diagnose and resolve the issue:
1. **Check Network Connectivity**:
    - Run `ping 8.8.8.8` to check if your system can connect to the Google DNS server. If this fails, it could indicate a broader network issue. 
2. **Check System Services**:
    - Run `sudo systemctl status systemd-resolved` to check the status of the systemd-resolved service. If it is stopped, start it using `sudo systemctl start systemd-resolved`.    
3. **Check Current DNS Servers**:
    - Run `sudo resolvectl` to see your current upstream DNS servers.
    
By following these steps, you should be able to identify and resolve the issue causing the "Temporary failure resolving 'archive.ubuntu.com'" error.


## SSH Keys
I generated these keys on my local machine
.ssh/id_rsa  → the private key
.ssh/id_rsa.pub  → public key
https://www.youtube.com/watch?v=_FXyQso1H50 (guacamole)
### Run docker container's command
```
# Go to .ssh/ folder 
# edit the config file as follows
Host ssh-filika.damp-server.org
#  ProxyCommand /usr/local/etc/cloudflared access ssh --hostname %h
ProxyCommand docker exec -i cloudflared cloudflared access ssh --hostname %h
```


## Uninstall package on Debian
```
sudo apt autoremove --purge Stremio
```

NVIDIA Encoding/Decoding codecs → [link](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)

/etc/docker/daemon.json
{
  "hosts": [
    "tcp://0.0.0.0:2375",
    "unix:///var/run/docker.sock"
  ],
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "/usr/bin/nvidia-container-runtime",
      "runtimeArgs": [
        "--gpus",
        "all"
      ]
    }
  }
}