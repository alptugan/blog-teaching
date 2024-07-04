---
title: Tutorial - Cloudflare Tunneling
date: 2024-05-24
modfification date: Friday 24th May 2024 14:54:02
description: Shows subdomain tunneling to a local hosted web site.
tags:
  - ubuntu
  - cloudflare
  - casaos
  - tutorial
aliases: 
draft: true
---
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


## Create Free DNS on Cloudns
Follow the instruction on the blog post [[Tutorial - ClouDNS Free Domain Registration]] to create your own domain name.

## Register Cloudns hostname on Cloudflare
Follow the instructions on the blog post [[Tutorial - Cloudflare Domain Register]] showing how to register your domain on Cloudflare. Additionally, check the great [video](https://www.youtube.com/watch?v=X-TzodpqbWE) for full walk-through.

Since there are no records on the cloudDNS domain name, Cloudflare doesn't display any information other than NS (Name Server) records. We need to configure clouDNS NS records with the ones Cloudflare provided for us. 

Delete all the clouDNS NS records and add two NS address provided by Cloudflare.
![[clouDNS_04.png]]

Then add the Cloudflare NS records.
![[clouDNS_05.png]]

After you added the provided Cloudflare NS to ClouDNS, goto your Cloudflare account and hit `Continue`. You should see the following message.
![[cloudflare-2_01.png]]


## Disable Tunnelling
1. Delete the tunnel from cloudflare
2. Goto host machine run `sudo cloudflared service uninstall` to remove its instance


# ENerjisa
06/2024: 339 TL