---
title: Tutorial - CasaOS Custom Docker Setup
date: 2024-06-26
modfification date: Wednesday 26th June 2024 18:52:31
description: Installation of docker images that are not served in Casa OS app store.
tags:
  - tutorial
  - casaos
  - docker
aliases: 
draft: false
---
# Create Directory
Goto Casa OS default AppData directory. 
```bash
cd /DATA/AppData/

# Create a folder for the custom docker compose file
mkdir rustdesk

cd rustdesk

# Create config folder
mkdir config

cd config

# Create the docker-compose.yml file
nano docker-compose.yml

# Copy and paste the docker-compose.yml content into your created file
# Hit Ktrl+o to save
# Hit Ktrl+x to quit from nano editor
# Run docker inside the config folder

docker compose up -d
```


> [!WARNING] Run docker command without sudo
> If your current user does not have privileges to run the docker command, follow the instructions in the [link](https://fossguides.com/run-docker-without-sudo-in-linux/) to resolve the problem.



