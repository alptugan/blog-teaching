---
title: Linux - Ubuntu Server Setup
date: 2024-05-15T00:03:00
modification date: 2025-03-07T12:45:00
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
   - **Storage configuration** menu
   - Disable LVM option
   - If you enabled the LVM, then you can fix the free space issue after the installation
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

```bash
# List available drivers
sudo ubuntu-drivers list --gpgpu

sudo ubuntu-drivers install --gpgpu nvidia:535-server
```
[reference](https://ubuntu.com/server/docs/nvidia-drivers-installation)


> [!WARNING] NVIDIA-SMI has failed because it couldn't communicate with the NVIDIA driver. Make sure that the latest NVIDIA driver is installed and running.
> If you get this message when you run `nvidia-smi` It is recommended that to install CUD drivers.

```bash
# Check cuda
nvcc --version

# If the above command outputs;
# Command 'nvcc' not found, but can be installed with:
sudo apt install nvidia-cuda-toolkit

sudo ubuntu-drivers devices | grep recommended
sudo ubuntu-drivers autoinstall

# Required for docker containers to run properly
sudo apt-get install -y nvidia-container-runtime

# Check permissions of the runtime
ls -l /usr/bin/nvidia-container-runtime
# -rwxr-xr-x 1 root root 3911656 Apr 15 16:38 **/usr/bin/nvidia-container-runtime**

```



## 2.1. Uninstall NVIDIA drivers
```bash
# List all drivers on the system
dpkg -l | grep -i nvidia

# Remove everything related to NVIDIA
sudo apt-get remove --purge '^nvidia-.*'
sudo apt-get remove --purge '^libnvidia-.*'
sudo apt-get remove --purge '^cuda-.*'
```


## 3. Install Docker
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Once the installation finishes, add your user account to the Docker group so you don't have to type `sudo` for every command:
sudo usermod -aG docker $USER


```



## 4. Attach Network Drive
To connect your Ubuntu server to your NAS at `192.168.1.2`, you need to "mount" it. Since most NAS devices (like Synology, QNAP, or TrueNAS) default to using standard SMB/CIFS (Windows-style) network shares, that is the best and most reliable method to use.

### Step 1: Install the Required Tools
Ubuntu doesn't speak the SMB network language out of the box, so we need to install a tiny utility package first.

```bash
sudo apt update
sudo apt install cifs-utils -y
```

### Step 2: Create a Landing Zone (Mount Point)
You need an empty folder on your Ubuntu server where the NAS files will actually appear. The standard practice is to put this in the `/mnt` directory.

Run this command to create a folder called `nas` (you can name it whatever you like):

```bash
sudo mkdir -p /mnt/nas
```

### Step 3: Create a Secure Credentials File
Instead of typing your NAS password directly into the system configuration files where anyone could read it, we are going to create a hidden, locked file just for your username and password.

1. Create and open a new file:
```bash
sudo nano /etc/.nas-credentials
```

2. Type in your NAS login details exactly like this (replace with your actual NAS username and password): 
```bash
username=your_nas_username
password=your_nas_password
```
    
3. Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).
    
4. Lock the file so only the root system can read it:
```bash
sudo chmod 600 /etc/.nas-credentials
```


### Step 4: Add the Drive Permanently
Now we tell Ubuntu to automatically bridge the connection to the NAS every time the server turns on.

1. Open the master drives file (`fstab`):    
```bash
sudo nano /etc/fstab
```
    
2. Use your arrow keys to scroll to the absolute bottom of the file. Do not touch anything else in this file!
    
3. Paste the following line at the bottom. **You must replace `ShareName` with the actual name of the shared folder on your NAS:**
```bash
//192.168.1.2/ShareName /mnt/nas cifs credentials=/etc/.nas-credentials,uid=1000,gid=1000,iocharset=utf8,vers=3.0,dir_mode=0777,file_mode=0777 0 0
```    

_(Note: The `uid=1000,gid=1000` part is crucial! It ensures that your `filika` user account—and your Docker containers—actually have permission to read and write to the NAS, rather than just the `root` admin)._

4. Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).


### Step 5: Test the Connection
Instead of restarting the whole server to see if it worked, you can tell Ubuntu to reload that file and mount the drive immediately:

```bash
sudo mount -a
```

If that command produces no errors and simply returns you to a blank prompt, it worked perfectly!

You can verify that your files are there by running:

```bash
ls -l /mnt/nas
```

### 🐳 Using it in Docker
Now that your NAS is physically mounted to the host server at `/mnt/nas`, you can treat it exactly like a local folder.

If you want to plug this NAS into your Nextcloud, qBittorrent, or Filebrowser containers, you don't need complex network commands anymore. You just bind the `/mnt/nas` folder to them in Dockhand, like this:

```yaml
    volumes:
      - /mnt/nas:/srv/NAS
```
