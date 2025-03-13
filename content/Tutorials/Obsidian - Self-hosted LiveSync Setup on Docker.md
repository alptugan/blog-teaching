---
title: Obsidian - Self-hosted LiveSync Setup on Docker
date: 2025-03-13
description: 
tags:
  - Obsidian
  - sync
  - tutorial
aliases: 
draft: false
---
## 1. Prepare Server
- Install CasaOS to a spare old computer. If you don't have server machine
- 
```shell
# The following script creates required ini file for the CouchDB 
bash -c "$(wget -qLO - https://raw.githubusercontent.com/bigbeartechworld/big-bear-scripts/master/generate-obsidian-livesync-local-ini/run.sh)"
```

## 2. Prepare Clients
### Main Computer
I use my Macbook Pro as the main device when using Obsidian. Adjust settings, Server URI, username, password and database name.
![[obsidian_livesync.png]]

Then move to settings and run <font color="#00b050">Manual Setup</font> method. After the setup wizard done on your main machine, hit <font color="#00b050">Copy</font> next to `Copy the current settings to a Setup URI`. It will ask for <font color="#c00000">password</font>. Set a password that you can remember. We will use that `URI` to sync our content to the mobile device or any other client that shares the same Obsidian vault.
![[obsidian_livesync02.jpeg]]
### Android Mobile Device
- Create a directory for Obsidian vault. I manually, create a folder and set it as my Obsidian vault.
- Download and install Obsidian app from App Store.
- Install community plugin [obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync/)
- Open the plugin settings.
- Goto 🧙🏻‍♂️wizard option.
- Select <font color="#00b050">Connect with Setup URI</font>. 
- Paste the `URI` copied above. 
- When prompted enter the <font color="#c00000">password</font> you set on the previous step.

## 3. Customization and Workflow
Disable hidden files synchronization to avoid issues caused by different community plugins. 

## 4. Webdav Synchronization 
[How to Obsidian Sync for FREE ! (ALL PLATFORMS) (macOS+iOS+Linux+Windows+Android) - YouTube](https://www.youtube.com/watch?v=yOZ08d0UQqg)
