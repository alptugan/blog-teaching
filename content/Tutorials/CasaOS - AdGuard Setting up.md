---
title: CasaOS - AdGuard Setting up
date: 2024-05-24
modfification date: Friday 24th May 2024 12:39:24
description: 
tags:
  - casaos
  - ubuntu
  - adguard
  - tutorial
aliases: 
draft: false
---
Open CasaOS app store.

Install AdGuard Home.

Open settings of the installed AdGuard app.<br>
![[adguard_01.png]]

Type the ports as follows<br>
![[adguard_02.png]]

>[! Warning] Troubleshoot
>If you cannot set port 531 to 53, probably your OS uses the port 53. You can temporarily open the blocked port via Terminal → [ref](https://raspberrypi.stackexchange.com/questions/128288/how-to-resolve-port-53-conflict-between-systemd-resolved-and-pihole-dnscrypt-do)
```
sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved
```


Restart CasaOS.

It is imperative to verify the functionality of AdGuard. If no errors are present, updating the router's DNS address to direct incoming internet traffic towards AdGuard is essential.<br>
![[adguard_04.jpg]]️

Check the settings of AdGuard Home. It should look like the image below.<br>
![[adguard_03.jpg]]

