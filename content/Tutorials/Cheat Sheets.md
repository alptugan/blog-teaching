---
title: Cheat Sheet - Linux
date: 2024-05-13
description: Cheat Sheet for Linux Webmin Interface
tags:
  - linux
  - webmin
  - casaos
aliases: 
draft: false
---
# TOC
1. [[#Linux General Commands]]
2. [[#Docker Basics]]
3. [[#Locations]]
4. [[#Run docker container's command]]
5. [[#Troubleshooting]]

## Linux General Commands
## awk
awk is used to filter and manipulate output from other programs and functions. Slices the line from empty spaces and assign them to vars. Patterns are enclosed in curly braces `{}`. Together, a pattern and an action form a rule. The entire awk program is enclosed in single quotes `'`.
```bash
# $0: Represents the entire line of text.
# $1: Represents the first field.
# $2: Represents the second field.
# $7: Represents the seventh field.
# $45: Represents the 45th field.
# $NF: Stands for "number of fields," and represents the last field.
who | awk '{print $1, $4}'

# OFS (output field separator) variable to put a separator between the month, day, and year.
date | awk 'OFS="/" {print$2,$3,$6}'

# Separate the lines using ":"
cat /etc/passwd -n | awk -F: '{print $1}'
```

## cat
```bash
# Display CPU information.
cat /proc/cpuinfo

# enter text into the file (overwrite)
cat > FILE_NAME

# enter text at the end of the file (append)
cat >> FILE_NAME
```


## caffeinate
```bash
# Stay awake your Computer (on Mac OS)
caffeinate -dis
```


## curl
https://www.youtube.com/watch?v=BuEYquQweGo


## date
``` bash

# Display current date
date
```


## du
`du` command lists directories (folders) and files
```bash
# use human-readable sizes
du -h -d1

# look down 3 levels and only show folders above a threshold size
du -h -d3 -t10G

# list directories and sort by size
du -h | sort -hr

# only show top 10 directories
du -h | sort -hr | head -n10

# list directories in current folder, threshold 10G, sort with human-readable sizes, top 10
du -h -d1 -t10G | sort -hr | head -n 10

# find files larger than a size, list with details
find . -size +200M -exec ls -lh {} \;

# find files and folders, list with details
find . -size +200M -exec du -hs {} \;

# find files and folders, list with details, sort, top 10
find . -size +200M -exec du -hs {} \; | sort -hr | head -n 10
```


## echo
```bash
# remove all text context in a file
echo "" > file_name.txt
```


## find
```bash
# Find files starting at current location and containing text in name
sudo find . -iname FILE_OR_FOLDER-NAME

# Find "webui-user" folder in the "/var/lib" location. Non-case sensitive
sudo find /var/lib -iname "webui-user" -type d

# find case insensitive
sudo find . -iname FILE_OR_FOLDER-NAME -d 3

# find files over a certain size
sudo find . -size +200M

# Find "webui-user" file in the "/var/lib" location.
sudo find /var/lib -iname "webui-user"
```

## gcc
```bash
# Display C++ compiler
gcc --version
```

## grep
tool used for searching and manipulating text patterns within files.

## head / tail
```bash
# View the first line of the file
head -n 1 FILE_NAME

# View the last line of the file
tail -n 1 FILE_NAME
```

## lm-sensors
```bash
# List sensors
sudo sensors-detect

# Monitor sensor values
watch sensors|

```

## ls
```bash
# List files with human readable file size on disk.
ls -lh

# Display CPU information.
lscpu

# Display list of HDD block devices.
lsblk
```

## nvidia-smi
```bash
# Display NVIDIA GPU information.
nvidia-smi -q

# Display in a table. For continous update check watch
nvidia-smi --query-gpu=gpu_name,gpu_uuid --format=csv
```

## ps
```bash
# list running process with name
sudo ps -e | grep 'mysqld'

# list running scripts with prefix
ps -ef | grep "irlz*"
```

## scp
```shell
# Copy a file from Mac to Windows
scp Remote.It-Installer-x64.exe filika@192.168.1.100:C:\Users\ASUS\Desktop
```

## systemctl
```bash
# Grep anything that has prefix `teamwiever`
systemctl | grep "teamviewer*"

# Disable and remove service from autostart.
sudo systemctl disable teamviewerd.service

# Enable and add service from autostart.
sudo systemctl enable teamviewerd.service
```

## rsync
```bash
# display copied file names
rsync -av source_folder/ target_location

# Display progress
rsync -ah --progress  source_folder/ target_location

# Copy large files, stop and resume from the last state.
rsync -ah --progress  –partial source_folder/ target_location

# remote copy
rsync -ahP source_folder user@192.168.1.247:/user/
```

## uname
```bash
# 32-Bit: armv6l,armv7l,armv8,armhf
# 64-Bit: arm64, aarch64

# Get dist name
uname -m

# Processor architecture.
uname -p

# Get dist name and release name
uname -m && cat /etc/*release
```

## ufw
```bash
# Set firewall and port accesibility
ufw allow 22

# Disable port 22
ufw deny 22

```

## udisksctl
```bash
# Display HDD brand names within /dev
udisksctl status
```

## timedatectl
```bash
# List time zone names
timedatectl list-timezones

# Set time zone
sudo timedatectl set-timezone Europe/Istanbul

# Enable the service
sudo timedatectl set-ntp on

# Check the current date-time
timedatectl
```

## watch
```bash title="watch"
# Execute a program periodically, showing output fullscreen.

# Re-run a command every 60 seconds:
watch -n 60 command

# Repeatedly run a command and show the result:
watch command

# Monitor the contents of a directory, highlighting differences as they appear:
watch -d ls -l

# Repeatedly run a pipeline and show the result:
watch 'command_1 | command_2 | command_3'

# Monitor GPU usage realtime, update every second
watch -n 1 nvidia-smi
```

## Docker Basics
```shell
# List docker images
docker ps

# Login docker image folder. Type `exit` to log-out
docker exec -it <container_id> /bin/bash

# Display docker-compose content
docker inspect dc87f8ea23aa

# Stop running docker
docker stop docker_name

# Restart docker containers
sudo systemctl restart docker
```

### Locations
/etc/docker/daemon.json
/var/lib/docker/containers → include casaos failed folders as well
/var/lib/casaos/www → webpage location
/var/lib/casaos/apps → docker-compose.yml

.ssh/config file
`ProxyCommand docker exec -i cloudflared cloudflared access ssh --hostname %h`

## Troubleshooting
### Temporary failure resolving 'archive.ubuntu.com'
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

### NVIDIA Encoding/Decoding codecs → [link](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
```json
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
```