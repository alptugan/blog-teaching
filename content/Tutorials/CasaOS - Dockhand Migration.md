---
title: CasaOS - Dockhand Migration
date: 2026-05-29 10:24:52
description:
tags:
  - docker
  - server
  - homeserver
aliases:
draft: true
---
- [ ] Install DietPi Bios Mode to new drive

### 1. Persistent App Data
This is the most critical data. It contains the actual saved states, media, and configurations of your running apps. CasaOS stores this data in two different locations depending on how the app was built.

**Copy these folders from CasaOS:**

- `/var/lib/docker/volumes/` _(This contains all standard Docker "named volumes".)_
    
- `/DATA/AppData/` _(CasaOS automatically creates this directory at the root of your drive for standard App Store bind-mounts.)_
    

**Where to put them on the Portainer System:**

- **Volumes:** Paste the contents of the copied volumes folder directly back into the exact same path on your new server: `/var/lib/docker/volumes/`.
    
- **Bind Mounts:** Paste the `AppData` folder onto your new server. You can keep it at `/DATA/AppData/` or move it to a standard Linux location like `/opt/appdata/`. Just ensure that when you deploy the app in Portainer, the file path in the configuration matches where you placed this folder.
    

### 2. Docker Compose Configurations

Portainer needs the exact configuration parameters to resurrect your apps exactly as they were. In CasaOS (versions 0.4.4 and newer), every app installed from the store automatically generates a standard Compose file.

**Copy this folder from CasaOS:**

- `/var/lib/casaos/apps/`
    
    _(Inside this directory, there is a sub-folder for every app you installed, each containing a `docker-compose.yml` file. For example: `/var/lib/casaos/apps/plex/docker-compose.yml`)_.
    

**Where to put them in Portainer CE:**

You **do not** copy these files into a system folder on the new server. Portainer manages configurations entirely through its web interface database.

Instead, use these files as your deployment blueprints:

1. Open a `docker-compose.yml` file from your CasaOS backup in any text editor.
    
2. Copy the raw text.
    
3. Open your Portainer CE Web Dashboard.
    
4. Navigate to **Stacks** > **Add stack**.
    
5. Give it a name, paste the copied text directly into the web editor, and click **Deploy the stack**.
    

As long as the volumes are in the correct place on the hard drive, Portainer will read the CasaOS configuration, spin up the container, and immediately connect it to your old data.
