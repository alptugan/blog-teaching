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


