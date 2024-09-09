---
title: Tutorial - SSH without Password
date: 2024-06-32
description: Login to remote host without password via SSH
tags:
  - ssh
  - tutorial
aliases: 
draft: false
---
## 1. Check Available SSH Key
```
ls -l ~/.ssh/id*
```
The command should generate output alike the following;
```
.rw-------@ 2.6k user_name 30 Aug  2023 /Users/user_name/.ssh/id_rsa
.rw-------@  585 user_name 30 Aug  2023 /Users/user_name/.ssh/id_rsa.pub
```
If you get the above message, you can skip **step 2**
## 2. Generate SSH Key on the Host Device
Execute the following command on your computer not in the target computer (if you already have an SSH key, you can skip this step). When prompted, do not enter password, just hit <kbd>Return</kbd>;
```
ssh-keygen
```

## 3. Copy the Generated Key to The Remote Device
```
ssh-copy-id user@server_ip

## or if your server uses custom port no:
ssh-copy-id "user@server_ip -p 1234"
```
Enter the SSH password for the `user` for one last time.

## 4. Test Your Login Process
From now on, you won't be asked for password again.
```
ssh user@server_ip
```

## Example Walk-through 
```
alptugan@MacbookPro:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/alptugan/.ssh/id_rsa):
Created directory '/home/alptugan/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/alptugan/.ssh/id_rsa.
Your public key has been saved in /home/alptugan/.ssh/id_rsa.pub.
The key fingerprint is:
b1:25:04:21:1a:38:73:38:3c:e9:e4:5b:81:e9:ac:0f alptugan@MacbookPro
The key's randomart image is:
+--[ RSA 2048]----+
|.o= . oo.        |
|*B.+ . .         |
|*=o .   o .      |
| = .     =       |
|. o     S        |
|E.               |
| o               |
|  .              |
|                 |
+-----------------+

alptugan@MacbookPro:~$ ssh-copy-id user@server_ip
user@server_ip's password:
Now try logging into the machine, with "ssh 'user@server_ip'", and check in:

  ~/.ssh/authorized_keys

to make sure we haven't added extra keys that you weren't expecting.
```
