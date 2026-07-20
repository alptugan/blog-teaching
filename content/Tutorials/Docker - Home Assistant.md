---
draft: false
title: Docker - Home Assistant
date: 2026-06-10 10:54:05
description:
tags:
  - docker
  - ubuntu
  - automation
aliases:
---
The following configuration is optimized for using [[MCU]] devices like Arduino that communicate via serial data with a Docker container. Refer to the original [documentation](https://www.home-assistant.io/installation/linux/#docker-compose) for further information.

## Compose File
```yaml
services:
  homeassistant:
    container_name: homeassistant
    image: "ghcr.io/home-assistant/home-assistant:stable"
    volumes:
      # Adjusted to match your server's structured app data folder
      - /DATA/AppData/homeassistant:/config
      - /etc/localtime:/etc/localtime:ro
      - /run/dbus:/run/dbus:ro
    restart: unless-stopped
    privileged: true
    network_mode: host
    devices:
      # This is the crucial bridge for your Arduino! 
      # (We will verify this exact path in Step 1 below)
      - /dev/ttyACM0:/dev/ttyACM0
    environment:
      TZ: Europe/Istanbul
```

### Step 1: Find Your Arduino's Exact Address
Before you deploy this in Dockhand, we need to make sure `/dev/ttyACM0` is actually the correct name for your Arduino. Depending on the specific Arduino board (Uno, Mega, Nano) and its serial chip, Ubuntu might name it differently.

1. Plug the Arduino into a USB port on your server.
    
2. Open your Mac terminal, SSH into your server (`ssh filika@192.168.1.6`), and run this command to list attached serial devices:

    ```bash
    ls /dev/ttyA* /dev/ttyU*
    ```

3. You will see a result like `/dev/ttyACM0` or `/dev/ttyUSB0`.

4. Update the `devices:` block in the YAML code above to match exactly what your terminal outputs.

### Step 2: Deploy in Dockhand
1. Go to your **Dockhand Dashboard**.
    
2. Create a **New Stack** and name it something like `home-assistant`.
    
3. Paste the completed YAML code into the raw text editor.
    
4. Click **Deploy**.

### How to Connect it Inside Home Assistant
Because we kept `network_mode: host` and `privileged: true` (which are officially required by Home Assistant for auto-discovery features), and explicitly mapped the USB device, your Arduino is fully exposed to the container.

Once Home Assistant boots up (access it at `http://<ip_address>:8123`):

1. Go to **Settings** -> **Devices & Services**.
    
2. Click **Add Integration**.
    
3. Search for the specific protocol you are using to flash/control the Arduino. The most popular and powerful integrations for this are **ESPHome** or **Firmata**.
    
4. When it asks for the serial port, you can select the `/dev/tty...` path you mapped!
