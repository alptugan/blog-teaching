---
title: Cloudflare - Server Setup
date: 2026-06-07 09:15:25
description:
tags:
  - server
  - homeserver
  - cloudflare
aliases:
draft: false
---
## Step 1: Install Cloudflared on Ubuntu

Open your Mac terminal and SSH into your server locally (`ssh filika@ip_addres`). Run these exact commands to download and install the official package:

```bash
# 1. Download the latest Cloudflare package for Ubuntu
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb

# 2. Install the package
sudo dpkg -i cloudflared.deb
```

## Step 2: Connect Your Token
You need the exact same massive authentication token you used in your Docker Compose file (it usually starts with `ey...`).

Run this command, replacing `<YOUR_TOKEN_HERE>` with your actual token:

```Bash
sudo cloudflared service install <YOUR_TOKEN_HERE>
```

## Step 3: Start the Service
Now, tell Ubuntu to turn the tunnel on and ensure it automatically starts every time the server boots up (even before Docker loads).

```bash
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
```

## The Result
That's it! Your tunnel is now permanently anchored to the server's bedrock.

You can check if it's running perfectly at any time by typing:

```bash
sudo systemctl status cloudflared
```

If it says **"active (running)"** in green, you are good to go. You can now safely break Docker from a coffee shop halfway across the world, and you will always be able to get back in to fix it!
