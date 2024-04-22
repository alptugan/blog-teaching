---
title: Tutorial - Netatalk Module on Webmin
date: 2024-04-18
description: Shows how to install and use Netatalk for Webmin on Raspberry Pi to enable AFP file sharing and backup
tags:
  - timemachine
  - tutorial
  - netatalk
  - webmin
  - AFP
  - file-sharing
aliases: 
draft: true
---

# Tutorials to check
https://gist.github.com/agrlh/7618ed3e46fb02388022
https://pimylifeup.com/raspberry-pi-afp/

# Below steps failed
1. Install Webmin.
2. Open Webmin from the remote machine on the browser.
3. Download [Netatalk-webmin](https://github.com/Netatalk/netatalk-webmin/) module to the remote computer.
4. Open Webmin > Webmin Configuration > Webmin Modules
5. Select "From uploaded file," select downloaded file on the remote machine. It will upload the downloaded module file to the Raspberry Pi and install for you.
6. When the installation is done, go to Webmin > Servers > Netatalk Mac File Sharing
7. You will see `The /usr/local/sbin/netatalk program was not found on your system. Either Netatalk is not installed, or your [module configuration](https://raspiserver.local:10000/config.cgi?netatalk3) is incorrect.`message. Hit **module configuration.**
8. Attach the hardware in appropriate format...
9. Restart the remote machine.
10. Copy the file path for the configuration file. 
11. Open Terminal from the Webmin > Tools > Terminal
12. Type `sudo nano /usr/local/etc/afp.conf` edit the file.



![[Screenshot 2024-04-18 at 10.48.31.png | Figure 7. Configure module settings.]]

![[Screenshot 2024-04-18 at 10.59.04.png | Figure 8. Configuration View.]]