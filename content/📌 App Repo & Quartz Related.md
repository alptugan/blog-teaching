---
title: Things to do
draft: true
tags:
---
```bash

# upload to Github
npx quartz sync

# update Quartz -> https://quartz.jzhao.xyz/upgrading
npx quartz update

# test
npx quartz build --serve

# Run the script 
sh /Users/alptugan/Documents/DEVS/scripts/update_blog

```
- [ ] google Analytics implementation [link](https://quartz.jzhao.xyz/configuration)
- [ ] Mobile Explorer Issue

# Remote Open Source Alternatives
https://www.youtube.com/watch?v=DZ0Ocwga43w
[Mesh Central](https://meshcentral.com/downloads.html) vs. RustDesk
Tailscale
Headscale
Guacamole


# AI Data Analysis tools
[Microsoft Lida](https://microsoft.github.io/lida/)

# Design
[Open Foundry](https://open-foundry.com/fonts) Fonts
[FontJoy](https://fontjoy.com/) Determine Font Pairs, Typography
# Node Packages
## PNPM

```
sudo npm install -g pnpm

git clone https://github.com/Ethan-C-Honzik/P5-Typescript-Parcel-Template.git

# if dependency error, use pnpm add <package_name>
```

## PM2 
[source](https://pm2.keymetrics.io/docs/usage/monitoring/) It helps stay up your node service whenever there occurs a problem.


# Front-end UI Frameworks
[Mantine](https://mantine.dev/)
[Pico](https://picocss.com/) ⭐️
[Daisy UI](https://daisyui.com/components/) ⭐️⭐️ (Ready-made UI elements)
[Bootstrap](https://getbootstrap.com/)
[Universe.io](https://uiverse.io/cards?page=5)
## JS Libraries
[AOS](https://michalsnik.github.io/aos/) Animate on scroll
[Isotope](https://isotope.metafizzy.co/layout) Responsive Grid layout 
[Swiper Gallery](https://swiperjs.com/) Touch enabled slideshow
[Glightbox](https://biati-digital.github.io/glightbox/#examples) Lightweight 11 KB gallery
[lightGallery](https://github.com/sachinchoolur/lightGallery)
[Infinite scroll](https://infinite-scroll.com/)
[Debounce](https://github.com/sindresorhus/debounce) Set delay for functions to be triggered.
[VantaJs](https://www.vantajs.com/) Background animated js animations.
[Konfeti animasyonları](https://particles.js.org/), [Particles](https://vincentgarreau.com/particles.js/)

## CSS Animation
[Pure CSS Curves](https://cubic-bezier.com/#.17,.67,.83,.67), [AnimatiCSS](https://xsgames.co/animatiss/), [Animista](https://animista.net/play/text/pop-up/text-pop-up-top) CSS animation only. Can be used for css animations. No need to install & download anything. It generates required css codes.
[Hamburger](https://jonsuh.com/hamburgers/) Menu css. Can be used for my website. When works opened, menu circle goes top right. Menu icon turns into cross sign if user want to return back to the content
[Loader](https://whirl.netlify.app/) animations, [Loader 2](https://epic-spinners.epicmax.co/)
[Loader Animation](https://ianlunn.github.io/Hover/), [Loader Animation](https://uiball.com/ldrs/)
[Text Animations](https://angrytools.com/css/animation/), [Moving Letters](https://tobiasahlin.com/moving-letters/)
[CSS patterns for background](https://heropatterns.com/), [Create Your Own Patterns](http://www.patternify.com/)
[Backrougnd Gradient animation](https://sarcadass.github.io/granim.js/) Elidor işinde kullandığım
[Several Animated bg animations](https://animatedbackgrounds.me/), [animated BG patterns](https://www.magicpattern.design/tools/css-backgrounds)
[CSS Gradient](https://cssgradient.io/), [Sample Gradients](https://www.grabient.com/)
[Thumbnail hover animations](https://imagehover.io/)
[Neomorphism](https://neumorphism.io/#e0e0e0)
[Glass Morphisim](https://hype4.academy/tools/glassmorphism-generator)
[Glow Generator](https://cssbud.com/css-generator/css-glow-generator/)
[Clipping Masks](https://bennettfeely.com/clippy/)
[CSS Filters](https://www.cssfilters.co/)
[Convert to Base64 Images](https://www.base64-image.de/)
[CSS Color Palettes](https://colorhunt.co/)
[Color Related Tools](https://colordesigner.io/tools)
[CSS Grid Generator](https://cssgrid-generator.netlify.app/)
[CSS Layout Generator](https://layout.bradwoods.io/)
[CSS Properties](https://codepen.io/carolineartz/full/ogVXZj)

## Browser Compatibility
[Can I Use?](https://caniuse.com/webp) Checks which features compatible with which browsers? 

# HOME SERVER
## Operating Systems
https://www.youtube.com/watch?v=n3T2J0WQH10
[Casa OS](https://casaos.io/) Single line installation. Supports even RPI 3. The best part is it supports custom docker installs → [Tutorial1](https://www.youtube.com/watch?v=PTSJIFjiCyE&list=TLPQMDYwNTIwMjQy-r8hmED16A&index=4)
[Umbrel](https://umbrel.com/umbrelos) Similar to Casa OS. Requires more system resources. Looks betters. 
[RunTipi](https://runtipi.io/) More similar to Casa OS. Requires more system 
[Cosmos](https://cosmos-cloud.io/) More similar to Casa OS. Bad in design. More functional than Casa OS. It allows also custom docker image installations.
[Homarr](https://homarr.dev/) Dashboard for servers.
[Homer](https://github.com/bastienwirtz/homer) Simple static page as a dashboard for your home server. 
[Heimdall](https://heimdall.site/) 
Homepage dev

## Media Server
[Jellyfin](https://jellyfin.org/)

## NAS 
[Rockstro](https://rockstor.com/)
[OpenMediaVault](https://www.openmediavault.org/download.html)
[Webmin](https://webmin.com/) (It is not a NAS but works efficiently as NAS)
## Server Security
[Pi-Hole](https://pi-hole.net/) DNS Server
AdGuard Home

## VPN
[Tailscale](https://login.tailscale.com/admin/acls/file) VPN service to access home network.
→ [Docker image](https://hub.docker.com/r/tailscale/tailscale)
[Headscale](https://headscale.net/) safer approach to Tailscale ←|→ [Taillock](https://tailscale.com/kb/1226/tailnet-lock)
[WireGuard](https://www.wireguard.com/) VPN
## Surveillance Systems
[Custom Script from Make Zine](https://www.youtube.com/watch?v=zfBHD4v8hD0)
[MotionEye Cam OS](https://www.youtube.com/watch?v=JXxGwSLLAGs)
[iSpy](https://www.ispyconnect.com/)
[Frigate](https://docs.frigate.video/frigate/hardware) Docker support

## LAN to WAN
[Traefik](https://traefik.io/pricing/)
[ophiuchi](https://www.ophiuchi.dev/#) → Mac App
[Nginx Proxy Manager](https://nginxproxymanager.com/)
[ddev](https://github.com/ddev/ddev?tab=readme-ov-file) → PHP, NodeJs
[Yunohost](https://yunohost.org/en/install/hardware:vps_debian) Türk çocuğun tutorialları var
# AI Related
[OpenUI](https://github.com/wandb/openui?tab=readme-ov-file) Front-end UI for customized GPT systems. 
[DevGPT](https://www.getdevkit.com/dashboard) GPT trained for coding tasks.
[Typeframes](https://www.typeframes.com/tools) AI supported video creation via text....
## Text to Image
[Flux Labs](https://github.com/black-forest-labs/flux) Opensource Midjourney alternative.

## Personal Assistant
[mem0](https://github.com/mem0ai/mem0)Mem0 provides a smart, self-improving memory layer for Large Language Models, enabling personalized AI experiences across applications.
> [!NOTE] Bunu kendi küçük robotuma entegre etmeye çalşabilirim.

[kotaemon](https://github.com/Cinnamon/kotaemon) An open-source RAG-based tool for chatting with your documents.
[ZoteroScholar](https://github.com/sanketsabharwal/ZoteroScholar)
## Tutorial
[How to use Ollama and openWebUI and chat with documents](https://www.youtube.com/watch?v=Lb5D892-2HY)
[Private Chat with your Documents with Ollama and PrivateGPT | Use Case | Easy Set up](https://www.youtube.com/watch?v=lhQ8ixnYO2Y)[Automated research and download paper from arxiv](https://www.youtube.com/watch?v=f1ihg20fQiU)

# Automation
[ChangeDetection](https://github.com/dgtlmoon/changedetection.io) Track website textual content changes...
[Dagu](https://dagu.readthedocs.io/) Powerful Cron alternative with a Web UI. It allows you to define dependencies between commands as a Directed Acyclic Graph (DAG) in a declarative YAML format.
[Healthchekcs](https://healthchecks.io/)
[Huginn](https://github.com/huginn/huginn)Allows you to build agents that monitor and act on your behalf.
[Leon](https://getleon.ai/) Open-source personal assistant who can live on your server. AI
[Matchering](https://github.com/sergree/matchering) A containerized web app for automated music mastering (alternative to LANDR, eMastered, and MajorDecibel).
[MeTube](https://github.com/alexta69/metube) Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites.
[nefarious](https://github.com/lardbit/nefarious) Web application that automates downloading Movies and TV Shows.
[OliveTin](https://github.com/OliveTin/OliveTin)OliveTin is a web interface for running Linux shell commands. (Web arayüzünden komutlar çalıştırma ve kompleks komutlar için düğmeler yapma. Filika da işe yarar.)

# Bookmarks
[linkding](https://github.com/sissbruecker/linkding)
[linkwarden](https://linkwarden.app/)
[readeck](https://readeck.org/en/) Kampsamlı bir bookmarking, not alma falan var.
[slash](https://github.com/boojack/slash) Chrome extension'ı da var.

# Communication
[Apprise](https://github.com/caronc/apprise) Apprise allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc.
[hyphanet](https://hyphanet.org/)Anonymously share files, browse and publish _freesites_ (web sites accessible only through Hyphanet) and chat on forums.
# DEV Tools
[DevToys](https://devtoys.app/) Set of utility applications that can be helpful for developers. It includes conversion tools, text operations, base64 converters, etc... for Windows OS.
[ScreenshotToCode](https://screenshottocode.com/) Transform screenshots to html using AI.
[Mintlfy](https://github.com/mintlify/writer) Generate documentation by selecting code snippets.
[Litlyx](https://github.com/Litlyx/litlyx) Open-source analytics tool for web applications.

# File Managers
[FileGator](https://filegator.io/) Nice interface. Better than fileBrowser
[Directorylister](https://www.directorylister.com/) Olny View mode. Available for download
[Filestash](https://www.filestash.app/)
[Gossa](https://github.com/pldubouilh/gossa)Very fast, simple, file server

# Genealogy
[grampsweb](https://www.grampsweb.org/) Soyağacı vs...


# Miscellaneous
[asciinema](https://github.com/asciinema/asciinema-server) Record Terminal command screen

# Online Dev Tools
[JSON Editor - Validator](https://jsoneditoronline.org/)
[RegEx Test](https://regex101.com/)
[Mockup](https://shots.so/) take image, choose bg for social media, or devices...
# Password Managers
[KeePassX](https://github.com/keepassxreboot) Mac OS X app, docker support on CasaOS → Linuxserver.io
[Bitwarden](https://github.com/bitwarden)
[Vaultwarden](https://github.com/dani-garcia/vaultwarden)
# Personal Dashboard
[linkstack](https://linkstack.org/) Linktree alternative

# Synching Alternatives
[RClone](https://rclone.org/)

# Uncategorized Apps
llamafile → local image analysis, GPT
rofi-tdk
Freetar → akor tab
dead-man-message → öldükten sonra sevdiğin kişilere hesap bilgilerini göster
Explainshell → Explains Shell commands.
Gigabrain → Summarize Reddit posts AI
whiz → AI assisted Terminal
[Store.app](https://store.app/) → Web app store.
wavacity → online Audacity
workout.lol → Health care with daily objects at home to work out specific parts of your body.
Metadata Cleaner → Remove meta data from any file.

# Hosting & Domain
[Pro Free Hosting](https://profreehost.com/register/) Free hosting, 5GB, subdomains
[Free DNS](https://freedns.afraid.org/domain/add.php)
[DuckDNS](https://www.duckdns.org/)
[freedomain](https://freedomain.one/)
# Routers
[Port Forwarding](https://portforward.com/zyxel/) Shows port forwarding instructions for several router brands. 

# Raspberry Pi & Remote Access
[RPI-Connect](https://www.raspberrypi.com/news/raspberry-pi-connect/)

# Server Management
[YunoHost](https://www.youtube.com/watch?v=-XsmwqzC3l4) ÜCretsiz domain name verip cihazı internete açıyor.
[Self Hosting Tutorial](https://www.youtube.com/watch?v=tv4A39yDDXs) Bu adam guacamole kurmuş lokalde. Onu dışarı açıyor.

https://github.com/cheatsnake/backend-cheats?tab=readme-ov-file#working-with-shell

one last try for mesh central
https://www.youtube.com/watch?v=T8LllCqCRG0&list=PLjLkaXQ35320c0N3ADd_ZAaJeWOnXxsh4


---


# Digital Signage 
[TooLoop](https://github.com/Tooloop/Tooloop-OS) Tooloop OS is a platform for media artists to safely and easily develop and deploy multimedia installations. Tooloop OS is based on Ubuntu Server 24.04 LTS and the super lightweight window manager Openbox. Both are customized to fit the needs of live and public multimedia installations.
# My CasaOS Fundamentals
[Portainer Dockers](https://portainer-templates.as93.net/) Ready to use docker images might be useful CasaOS
Şu adamı izle güzel örnekleri var NTFY için;
https://www.youtube.com/watch?v=poDIT2ruQ9M
``` bash
#!/bin/bash

# Replace with your Telegram bot token
TELEGRAM_BOT_TOKEN="YOUR_BOT_TOKEN"

# Replace with your Telegram chat ID
TELEGRAM_CHAT_ID="YOUR_CHAT_ID"

# Function to send a message to Telegram
send_telegram_message() {
    local message="$1"
    curl -s -X POST \
         -H 'Content-Type: application/json' \
         -d "{\"chat_id\":\"$TELEGRAM_CHAT_ID\",\"text\":\"$message\"}" \
         https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage > /dev/null
}

# Monitor Docker events and send a message on container stop/failure
docker events --filter 'event=stop' --filter 'event=die' | while read -r event; do
    container_name=$(echo "$event" | jq -r '.Actor.Attributes.name')
    send_telegram_message "Docker container '$container_name' is down!"
done
```

## Nginx & Node
install npm via apk. Login to nginx docker Terminal and type
`apk update`
`apk add npm`

goto node-server folder and run
`node index.js`

Changing the ownership
`chown -R 1000:1000 config/`

default.conf file
```nginx
server {
    listen *:80;
    # listen *:443 ssl;
    # listen 80;
    server_name _;

    location / {
        root /config/www;
        index index.html index.htm;
    }

    location /node-server/ {
        proxy_pass http://localhost:3000;  # Forward requests to Node.js server
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
## Healthchecks
![[healthchecks.png]]
```
# To send pings and control them add cronjob use sudo
crontab -e
```

Paste the following content;
```
@reboot sudo sh -c 'sleep 240 && curl -m 10 --retry 20 http://192.168.1.247:8000/ping/8fedd5ad-218>

0 */3 * * * python3 /home/alptugan/check.py

49 3 * * * curl -m 10 --retry 5 http://192.168.1.247:8000/ping/8fedd5ad-2185-4477-bcdd-0a3116b3150>

```

```
# ping manually from Telegram
curl -m 10 --retry 5 http://filika-healthchecks.damp-server.org/ping/55e701f3-3968-4958-947a-850da1a9a0d0
```


> [!NOTE] Re-assign a Telegram Bot
> 1. Connect Cloudflare to the self-hosted ip
> 2. Enter the domain name as it is into the docker variable https://filika-healthchecks.damp-server.org
> 3. Goto CasaOS docker Settings → open Terminal
> 4. `cd app/healthchecks`
> 5. Run `./manage.py settelegramwebhook`
> 6. Notification will appear on Telegram App
## NextCloud
→ /etc/apache2/sites-enabled is editted with the following lines;
```bash
ServerName filika_cloud.damp-server.org
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains"
</IfModule>
```

→ /var/www/html
.htaccess files
```bash
php_value upload_max_filesize 16G
php_value post_max_size 16G
php_value max_input_time 3600
php_value max_execution_time 3600
php_value memory_limit 1024M
```

→ nextcloud admin web ui; goto Basic Settings; Background jobs
First ping the address https://filika_cloud.damp-server.org/cron.php
If it works
Then add the ping link to a cronjob that runs every 5 mins
```bash
*/5 * * * * curl https://filika_cloud.damp-server.org/cron.php

```

## NFTY.sh
Open casaOS Appstore 
Search for "nfty" 
Use big-bear- distro...
Install the app
Configure Cloudflare Tunnel
Set NFTY_BASE_URL to your Cloudflare domain
Create attachments dir inside casaOS
``` bash
# Send Attachment from local dir
# Ref: [https://filika-ntfy.damp-server.org/docs/publish/#attachments]
curl -T /Users/alptugan/Desktop/ozyegin-univ-map-2022.png -H "Filename: ozu.png" https://server_name/test
```
![[nfty_docker_settings_01.png|Keep other settings same, add ENV vars to point server]]

## MariaDB and PhpMyAdmin Installation
- Install dockers on CASAOS
- `sudo chown -R filika:filika mariadb`
- `sudo chown -R filika:filika phpmyadmin`

## Stable-Diffusion
https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Troubleshooting
[GTX 1660 Super config](https://www.andreszsogon.com/fix-stable-diffusion-automatic1111-webui-on-geforce-gtx-16xx/()
### CLI Settings
- By default: `--medvram` is given, which allow you to use this model on a 6GB GPU, you can also use `--lowvram` for lower end GPUs. Remove these arguments if you are using a (relatively) high end GPU, like 40XX series cards, as these arguments will slow you down.

### Docker Containers
[Official 1](https://github.com/AbdBarho/stable-diffusion-webui-docker?tab=readme-ov-file)

- To add custom commands you need to include default COMMAND_LINE_ARGS and add additional parameters to the end in the `webui-user.sh`

### Current Config
https://github.com/universonic/docker-stable-diffusion-webui

## Casa OS App Stores
https://github.com/eudard/CasaOS-LocalAI-AppStore/archive/refs/tags/latest.zip

## ⛔️ Cronicle
configs → /opt/cronicle/conf/config.json

## Cronjobs
```shell
#!/bin/sh
# Backup homepage...
cp -r /DATA/AppData/big-bear-homepage /mnt/SAMSUNG_500GB_HDD/DOCKER_COMPOSE_FILES/

```