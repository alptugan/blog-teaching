---
title: CasaOS - Custom Docker Setup
date: 2024-06-26T01:00:00
description: Installation of docker images that are not served in Casa OS app store.
tags:
  - tutorial
  - casaos
  - docker
aliases: 
draft: false
---

# 1. Creat Folder
```shell
cd /DATA/AppData/

# Create a folder for the custom docker compose file
mkdir rustdesk

cd rustdesk

# Create config folder
mkdir config

cd config
```


# 2. Install Docker Image
Generally there are two fundamental methods to up and run a docker image. **Method 1** showcases installation via `docker-compose.yml`, **Method 2** exemplifies `docker run ...` command.

## Method 1: Custom docker-compose file
Goto Casa OS default AppData directory. 
```bash
# Create the docker-compose.yml file
nano docker-compose.yml

# Copy and paste the docker-compose.yml content into your created file
# Hit Ktrl+o to save
# Hit Ktrl+x to quit from nano editor
# Run docker inside the config folder

docker compose up -d
```

## Method 2: Custom Installation Command
```shell
docker run -d \
  --name deepstream \
  -p 6020:6020 \
  -p 8080:8080 \
  -v /DATA/AppData/deepstream/config:/usr/src/app/config \
  -v /DATA/AppData/deepstream/data:/usr/src/app/data \
  --restart unless-stopped \
  deepstreamio/deepstream.io:latest
```


> [!WARNING] Run docker command without sudo
> If your current user does not have privileges to run the docker command, follow the instructions in the [link](https://fossguides.com/run-docker-without-sudo-in-linux/) to resolve the problem.



