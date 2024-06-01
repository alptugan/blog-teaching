---
title: Tutorial - Cloudflare Tunneling
date: 2024-05-24
modfification date: Friday 24th May 2024 14:54:02
description: Shows subdomain tunneling to a local hosted web site.
tags:
  - ubuntu
  - cloudflare
  - casaos
aliases: 
draft: true
---
[Cloudflare DNS ekleme](https://www.youtube.com/watch?v=j9S9ufbCiyQ)
[Github üzerinden güvenlik](https://www.youtube.com/watch?v=Z1A22UPQQt4&t=400s)
[Subdomain EKleme](https://www.youtube.com/watch?v=_j8JbuwmYT8)

Cloudflare dns servers → [cloudflare alp](https://dash.cloudflare.com/325c765e34d39348bca557a0849d2a48/alptugan.com/dns/records)


# Tunnelling

>[!warning] In order to activate tunneling you must add your main domain to the Cloudflare first. Refer to the [[Tutorial - Cloudflare Domain Register|tutorial]].

If you have the process already, you can continue.

1. Goto Cloudflare [dashboard](https://one.dash.cloudflare.com/)
2. Choose Network→Tunnels on the left menu.
3. Hit Create 
4. Give a name of your choice and Save tunnel ![[cloudflare_03.png]]
5. Choose your environment. For our case, since we are on CasaOS, we will setup using Docker. ![[cloudlare_04.png]] 
6. Copy the generated command to a safe place. Log-in to your server machine via ssh. You can use casaOS built-in Terminal.
7. Paste the code you saved in the previous step, edit as follows and run.
```
docker run -d --restart always cloudflare/cloudflared:latest tunnel run --token <your_unique_token>
```
9. Goto the Cloudflare dashboard and check if you see the following connection information. If the Cloudflare displays healthy for the connection, then you are good to go.

## Disable Tunnelling
1. Delete the tunnel from cloudflare
2. Goto host machine run `sudo cloudflared service uninstall` to remove its instance