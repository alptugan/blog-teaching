---
title: MacOS - Creating Bootable Disk
date: 2025-10-13 10:43:22
description:
tags:
  - MacOS
  - Terminal
aliases:
draft: false
---
The following tutorial showcases how to burn `*.iso` image to an external USB drive.
## 1. Determine The External Disk
```shell
diskutil list
```


The following output prints the available disks on the OS. The one with `/dev/disk4 (external, physical):` in the end of the output is the attached USB drive. 

```console
user@mbp ~ % diskutil list
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *1.0 TB     disk0
   1:             Apple_APFS_ISC Container disk1         524.3 MB   disk0s1
   2:                 Apple_APFS Container disk3         994.7 GB   disk0s2
   3:        Apple_APFS_Recovery Container disk2         5.4 GB     disk0s3

/dev/disk3 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +994.7 GB   disk3
                                 Physical Store disk0s2
   1:                APFS Volume macOS - Data            547.9 GB   disk3s1
   2:                APFS Volume macOS                   11.2 GB    disk3s3
   3:              APFS Snapshot com.apple.os.update-... 11.2 GB    disk3s3s1
   4:                APFS Volume Preboot                 7.2 GB     disk3s4
   5:                APFS Volume Recovery                1.0 GB     disk3s5
   6:                APFS Volume VM                      3.2 GB     disk3s6

/dev/disk4 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *62.7 GB    disk4
   1:       Microsoft Basic Data                         62.7 GB    disk4s1

user@mbp ~ %
```


> [!WARNING] Be sure not to erase system drive. 
> Run the code before attaching the USB drive and after the USB drive is attached. Compare the outputs and determine which one is your external USB thumb drive.


## 2. Unmount The Drive
(assuming, for this example, the USB drive is **/dev/disk4** - _do **not** simply copy this, verify the correct path on your own system!_):

```console
diskutil unmountDisk /dev/disk4
```


## 3. Burn Image to USB Disk
Replace “/dev/diskX” with “/dev/**r**diskX” _(extra `r`)_ **to improve the write speeds**.

```console
$ sudo dd if=kali-linux-2025.3-live-amd64.iso of=/dev/rdiskX bs=4M status=progress
```


> [!WARNING] Troubleshoot
> There is a chance you may receive an error when running the above command: `dd: invalid number: '4M'` or `dd: bs: illegal numeric value`.  
If this is the case, please change the `4M` to be `4m`.  
Additionally, increasing the blocksize (bs) will speed up the write progress, but will also increase the chances of creating a bad USB drive. Using the given value on macOS/OS X has produced reliable images consistently.  
>  
>Another potential error will be that `status=progress` does not work on your version of macOS. If this is the case, remove this section and instead use `CTRL+T` to measure status.

Once dd has finished imaging the drive, it will output something that looks like this:

```shell
893+1 records in
893+1 records out
3748147200 bytes transferred in 915.043994 secs (4096139 bytes/sec)
```


After DD completes, macOS/OS X may try to remount the USB device again. If so, you will get the same pop-up as before. You can safely remove the burned USB external disk.

## Reference
- [Making a Kali Bootable USB Drive (macOS/OS X) \| Kali Linux Documentation](https://www.kali.org/docs/usb/live-usb-install-with-mac/)
