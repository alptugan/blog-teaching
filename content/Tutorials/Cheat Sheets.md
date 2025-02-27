---
title: Cheat Sheets
date: 2024-05-13
modfification date: 2024-02-20
description: Cheat Sheet for Linux Webmin Interface
tags:
  - linux
  - webmin
  - casaos
  - brew
  - ffmpeg
aliases: 
draft: false
---
# TOC
1. [[#Linux General Commands]]
2. 🍺 [[#Brew]]
3. 🐳 [[#Docker Basics]]
4. 🎞️ [[#FFmpeg]]
5. [[#Run docker container's command]]
6. [[#Locations]]
7. [[#Troubleshooting]]

## Links to external resources
- https://cheatsheets.zip/cpp
- [The Book of Secret Knowledge](https://github.com/trimstray/the-book-of-secret-knowledge?tab=readme-ov-file) The repo includes variety of tools, shell commands related to CLI.
- https://quickref.me/
- https://devhints.io/
## Linux General Commands
### awk
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

### cat
```bash
# Display CPU information.
cat /proc/cpuinfo

# enter text into the file (overwrite)
cat > FILE_NAME

# enter text at the end of the file (append)
cat >> FILE_NAME
```

### caffeinate
```bash
# Stay awake your Computer (on Mac OS)
caffeinate -dis
```

### curl
https://www.youtube.com/watch?v=BuEYquQweGo

### date
``` bash

# Display current date
date
```

### du
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

### echo 
You can either use it for verbose operations and debugging or writing data in files
```bash
# remove all text context in a file
echo "" > file_name.txt

# List content of $PATH output line-by-line
echo $PATH | tr : '\n'

# Export file names in the current directory to a txt file
for f in *.mp4; do echo "file '$f'" >> videos.txt; done
```

### find
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

### gcc
```bash
# Display C++ compiler
gcc --version
```

### grep
tool used for searching and manipulating text patterns within files.
```bash
# List running process including teamviewer.. and rest of possible characters
sudo ps -e | grep 'teamviewer*'

# List files including "input" word
ls | grep "input" 
# output -> .rw-r--r--@ 3.0M alptugan 29 Nov 00:39 input.pdf

```

### head / tail
```bash
# View the first line of the file
head -n 1 FILE_NAME

# View the last line of the file
tail -n 1 FILE_NAME
```

### lm-sensors
```bash
# List sensors
sudo sensors-detect

# Monitor sensor values
watch sensors|

```

### ls
```bash
# List files with human readable file size on disk.
ls -lh

# Display CPU information.
lscpu

# Display list of HDD block devices.
lsblk
```

### nvidia-smi
```bash
# Display NVIDIA GPU information.
nvidia-smi -q

# Display in a table. For continous update check watch
nvidia-smi --query-gpu=gpu_name,gpu_uuid --format=csv
```

### pkill
```bash
# Kill a running app by calling its absolute path
sudo pkill -f -9 /home/filika/Desktop/irlz540.py

```

### ps
```bash
# list running process with name
sudo ps -e | grep 'mysqld'

# list running scripts with prefix
ps -ef | grep "irlz*"
```


### rm
```shell
# Delete the folder_name directory and file_name document
rm -rf folder_name/ file_name
```


### rsync
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


### scp
```shell
# Copy a file from Mac to Windows
scp Remote.It-Installer-x64.exe filika@192.168.1.100:C:\Users\ASUS\Desktop
```


### sed
[Reference]( https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)
```
# The ****SED (Stream Editor)**** command in Unix/Linux is a powerful utility used to process and manipulate text in files. It can perform a variety of operations such as searching, find-and-replace, insertion, deletion, and more, without the need to open the file in an editor.
```

### systemctl
```bash
# Grep anything that has prefix `teamwiever`
systemctl | grep "teamviewer*"

# Disable and remove service from autostart.
sudo systemctl disable teamviewerd.service

# Enable and add service from autostart.
sudo systemctl enable teamviewerd.service
```


### tar
```shell
# Compress html folder at the /var/www/html location
# -C tells the script to go to /var/www directory and zip the html folder. 
# The zipped folder will appear in the current directory path where the user works
tar -zcf backup.tar.gz -C /var/www html

# Execute command in an another command via $() syntax... to add date as suffix
tar -zcf /home/tony/backup/daily/backup-$(date +%Y%m%d).tar.gz -C /var/www/ html

# Extract compressed files
tar -xzvf backup.tar.gz
```


### timedatectl
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

### uname
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

### ufw
```bash
# Set firewall and port accesibility
ufw allow 22

# Disable port 22
ufw deny 22

```

### udisksctl
```bash
# Display HDD brand names within /dev
udisksctl status
```


### watch
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

[Documentation on basic usage](https://dev.to/meghasharmaaaa/dockerfile-explain-jd4) Blog-post on DEV site.
#### Docker Locations File Paths
/etc/docker/daemon.json
/var/lib/docker/containers → include casaos failed folders as well
/var/lib/casaos/www → webpage location
/var/lib/casaos/apps → docker-compose.yml

```bash
# Autostart application on desktop startup for Raspberry Pi 
/etc/xdg/autostart/
sudo nano starter.desktop
```

#### NVIDIA Encoding/Decoding codecs → [link](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new)
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

#### .ssh/config file
`ProxyCommand docker exec -i cloudflared cloudflared access ssh --hostname %h`

## Bash Cheat Sheet
![[bash-cheatsheet.jpg]]
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

## Brew 
```bash
#########################################
# GENERAL
#########################################
# Listing Installed Packages
brew list

# Upgrade packages
brew update && brew upgrade

# If you want to keep a formula not updated, you can use `unpin` command
brew pin <formula>
# To make it upgradable again use `unpin`
brew unpin <formula>

# Uninstalling a Single Package
brew uninstall packageName

# Checking for Unused dependencies
# The `--dry-run` flag shows what would be removed, without actually doing it.
brew cleanup --dry-run
brew cleanup --prune-prefix

# Search Available Version
brew search <package-name>

# Once you find the specific version you need, you might want to get more information about that version:
brew info node@14

#########################################
# SERVICES
#########################################
# Starting/Stopping/Restarting a Service
brew services start mysql
brew services stop mysql
brew services restart mysql

# List Running Services
brew services list

# Running Services on User Login
# Homebrew allows you to run services on user login instead of immediately on boot. For this, use the ‘run’ command:
brew services run <service>

# Cleaning Up Unused Services
brew services cleanup

# Troubleshoot Services
brew services restart --verbose mysql
```


## FFmpeg
```shell
# Covert image sequence to high-quality mp4 video
ffmpeg -framerate 60 -i %07d.png -c:v libx264 -preset veryslow -crf 18 -pix_fmt yuv420p -vf "scale=iw:ih:flags=lanczos" loop11.mp4

# %07d -> filename includes 7 digits...
# -preset veryslow -> takes more time but better quality
# -crf 18 -> This value determines the quality of images 18 to 25 safe. Lower the better

# TRIM Video
# ffmpeg -i input.mp4 -ss start_time -t duration -c copy output.mp4
ffmpeg -i scott-ko.mp4 -ss 00:00:10 -t 5 -c copy trimmed.mp4

# CROP Video
# ffmpeg -i input.mp4 -filter:v "crop=w:h:x:y" output.mp4
ffmpeg -i scott-ko.mp4 -filter:v "crop=640:640:900:50" cropped.mp4
ffmpeg -i scott-ko.mp4 -filter:v "crop=1080:1080" cropped.mp4

# RESIZE Video
ffmpeg -i input.mp4 -vf "scale=w:h" resized.mp4

# RESIZE Video with aspect ratio
ffmpeg -i scott-ko.mp4 -vf "scale=-1:720" resized.mp4

# SPEED UP Video
ffmpeg -i input.mp4 -filter:v "setpts=0.5*PTS" fast.mp4

# SPEED DOWN Video
ffmpeg -i input.mp4 -filter:v "setpts=2.0*PTS" slow.mp4

# AUDIO Extract
ffmpeg -i input.mp4 -vn output.mp3

# AUDIO Mute
ffmpeg -i input.mp4 -an -c:v copy output.mp4

# CONVER tO GIF
ffmpeg -i input.mp4 -vf "fps=10,scale=320:-1:flags=lanczos" -c:v gif animation.gif

```

#### Use FFmpeg concat to merge videos
Use the for loop script in the [[#echo]] section. It will generate the following result:
```bash
# videos.txt
file 'input1.mp4'
file 'input2.mp4'
file 'input3.mp4'
```

Then run the following script to create merged video
```bash
ffmpeg -f concat -i videos.txt -c copy output8.mp4
```

Or write the video order in the command:
```bash
ffmpeg -i "concat:input1.mp4|input2.mp4|input3.mp4|input4.mp4" -c copy output10.mp4
```

## Default Mac OS Paths
> [!NOTE]- Custom Services created via Automator App
> /Users/alptugan/Library/Services/Convert PNG Sequence to Video.workflow
