---
title: Docker Related
date: 2024-10-26T01:00:00
modification date: 2025-03-07T12:49:00
description: Includes docker related content.
tags:
  - docker
aliases: 
draft: false
---

## Portainer Install
### 1. Update & Upgrade OS
```shell
sudo apt update
sudo apt upgrade -y
```

### 2. Install Docker 
```shell
curl - sSL https://get.docker.com | sh
sudo usermod -aG docker $USER
docker run hello-world
```

### 3. Install Portainer
```shell
docker pull portainer/portainer-ce:latest

docker volume create portainer_data

docker run -d -p 8000:8000 -p 9443:9443 --name=kovahpi --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest

``` 


## Dashboard Apps
[Glanceapp](https://github.com/glanceapp/docker-compose-template/blob/main/root/docker-compose.yml)


## Photo Management
[Ente](https://github.com/ente-io/ente/blob/main/server/compose.yaml) 
[Memories](https://github.com/pulsejet/memories) Nextcloud based app
[Nextcloud Photos](https://github.com/nextcloud/photos/)  Nextcloud

# Self-hosted App List
[Awesome Self-hosted](https://github.com/awesome-selfhosted/awesome-selfhosted) Hundreds of self-hosted apps.