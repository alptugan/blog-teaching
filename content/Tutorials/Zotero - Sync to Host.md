---
title: Zotero - Sync to Host
date: 2025-03-07
description: 
tags:
  - zotero
  - sync
  - script
  - brew
  - shell
aliases: 
draft: false
---
I use [Zotsite: A Zotero Export Utility](https://plandes.github.io/zotsite/index.html)  to sync my local Zotero content to my personal web server hosted on a third part provider A2Hosting. It supports webdav .

```shell
# single-line automation
cd /Users/<username>; 
zotsite print; 
zotsite export -o /Users/<username>/zotCloud; 
rsync -avzP --delete -e "ssh -p 7822 " /Users/<username>/zotCloud/ <username>@alptugan.com:/home/<username>/public_html/zotsite/

# Goto Zotero Location
cd /Users/<username>

# Check database for any corruptions
zotsite print

# Create site
zotsite export -o /Users/<username>/zotCloud

# Upload to the server
rsync -avzP --delete -e "ssh -p 7822 " /Users/<username>/zotCloud/ <username>@hostname.com:/home/<username>/public_html/zotsite/

# Goto browser
https://www.hostname.com/zotsite
```
 