---
title: Tutorial - Homepage CasaOS Integration
date: 2024-07-04
modfification date: Thursday 4th July 2024 14:53:23
description: Access CasaOS docker containers on Homepage dashboard.
tags:
  - tutorial
  - casaos
  - docker
  - homepagedev
aliases: 
draft: false
---
## 1. Edit the `daemon.json` File
If it doesn't exist goto `/etc/docker` folder and create `daemon.json` file. Paste the following lines;
```json
 {"hosts": ["tcp://0.0.0.0:2376", "unix:///var/run/docker.sock"]}
```

## 2. Edit the `override.conf` File
Goto `/etc/systemd/system/docker.service.d/override.conf`. If the folder and the file don't exist, you can create the folder and file respectively and paste the following;
```
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd
```

## 3. Reload the daemon and Restart the Docker
```shell
# Reload daemon
sudo systemctl daemon-reload

# Restart docker containers
sudo systemctl restart docker.service
```

## 4. Edit `docker.yaml` File
Open CasaOS file explorer, and goto `config` folder.
![[homepage_docker_01.jpg|docker.yaml]]
Configure the file as follows;
```yml
my-docker:
	host: 192.168.1.247
	port: 2376
```
- `my-docker` is the name of your origin docker. It can be anything.
- `host` is the ip address of your docker containers. If they are in the same IP type it explicitly. 
- `port` The port number must be same as it is in the `daemon.json` file.

## 5. Edit the `Services.yaml` File
Refer to the list of available widgets that are compatible with `Homepage` Dashboard via the [link](https://gethomepage.dev/main/widgets/services/). The `services.yaml` should look like as follows;
![[homepage_docker_02.jpg | AdGuard setup in `services.yaml` file]]
