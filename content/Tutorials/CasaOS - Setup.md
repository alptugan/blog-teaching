---
title: CasaOS - Setup
date: 2025-03-13T12:00:00
description:
tags:
  - server
  - casaos
  - tutorial
aliases:
draft: false
banner: "[[casaos-setup-01.jpeg]]"
---
## 1. Hardware
- Grab a space old desktop PC with at least 4GB RAM and SSD hard disk.
- Connect to home network via CAT5 cable.
- Attach keyboard, mouse and display for the setup...

## 2. Software
- Install Ubuntu Server. Refer to the [[Linux - Ubuntu Server Setup]].
- Goto [CasaOS](https://casaos.io/) page and follow the instructions as stated copy the curl command `curl -fsSL https://get.casaos.io | sudo bash` and run it on Ubuntu server machine.
- After the installation is done, open the provided link in the browser.

## 3. CasaOS Appstore
It is a good place to start to install docker images easily on your server. There are community app stores as well worth to check. Follow the [link](https://github.com/eudard/CasaOS-LocalAI-AppStore)


## 4. CasaOS Paths
Check the following folder for docker-compose.yml files. 
Move `.env` files to that directory to allow GUI reads secrets.
`/var/lib/casaos/apps/`
## Using Specific Docker Images
### Piper
```bash
# Goto CasaOS from the browser
# open terminal
# Run the code to generate in EN
# librit english is not bad...
sudo docker exec -ti piper-tts sh -c 'echo "Test Voice" | /usr/share/piper/piper --model /config/en_US-lessac-medium.onnx --output_file /config/output/welcome.wav'

# Turkish - tr_TR-dfki-medium (Telafuz biraz bozuk, yumuşak a yok)
sudo docker exec -ti piper-tts sh -c 'echo "Merhaba, bu bir Türkçe deneme yazısı." | /usr/share/piper/piper --model /config/tr_TR-dfki-medium.onnx --output_file /config/output/TR-test.wav'

# Turkish - tr_TR-fahrettin-medium
# Turkish - tr_TR-fettah-medium (Çocuk sesi, aksanlı, organik)


```

#### Piper Training
- [Create your AI digital voice clone locally with Piper TTS \| Tutorial - YouTube](https://www.youtube.com/watch?v=b_we_jma220)
- [How to Clone a Voice (Open-Source) :: Terminal](https://blog.networkchuck.com/posts/how-to-clone-a-voice/)
- [Train / Finetune Custom Voice With Piper TTS - YouTube](https://www.youtube.com/watch?v=67QvWOp3dkU)

### phpMyAdmin
Use phpMyAdmin web interface in order to set user accounts and passwords. 
By default use provided phpMyAdmin credentials.

Leave as it is for the CasaOS env values. 
Add only ip address.