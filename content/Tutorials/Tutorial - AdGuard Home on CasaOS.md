---
title: Tutorial - AdGuard Home on CasaOS
date: 2024-05-24
modfification date: Friday 24th May 2024 12:39:24
description: 
tags:
  - casaos
  - ubuntu
  - adguard
aliases: 
draft: false
---
1. Open CasaOS app store.
2. Install AdGuard Home.
3. Open settings of the installed AdGuard app.![[adguard_01.png]]
4. Type the ports as follows![[adguard_02.png]]

>[! Warning] Troubleshoot
>If you cannot set port 531 to 53, probably your OS uses the port 53. You can temporarily open the blocked port via Terminal → [ref](https://raspberrypi.stackexchange.com/questions/128288/how-to-resolve-port-53-conflict-between-systemd-resolved-and-pihole-dnscrypt-do)
```
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```

5. Restart CasaOS.
6. Check the settings of AdGuard Home. It should look like the image below![[adguard_03.jpg]]

