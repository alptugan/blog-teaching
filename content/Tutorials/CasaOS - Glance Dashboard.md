---
title: CasaOS - Glance Dashboard
date: 2025-09-15 11:00:28
description:
tags:
  - casaos
  - docker
aliases:
draft: false
---
## Docker-compose
Goto [Github-Glance](https://github.com/glanceapp/glance/tree/main) for detailed information.

```yaml
name: sharp_renee
services:
  glance:
    cpu_shares: 90
    command: []
    container_name: glance
    deploy:
      resources:
        limits:
          memory: 906M
    hostname: glance
    image: glanceapp/glance:latest
    labels:
      icon: https://raw.githubusercontent.com/glanceapp/glance/refs/heads/main/docs/logo.png
    ports:
      - target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: /DATA/AppData/glance/app/config
        target: /app/config
    devices: []
    cap_add: []
    environment: []
    network_mode: bridge
    privileged: false
x-casaos:
  author: self
  category: self
  hostname: ""
  icon: https://raw.githubusercontent.com/glanceapp/glance/refs/heads/main/docs/logo.png
  index: /
  is_uncontrolled: false
  port_map: "8080"
  scheme: http
  store_app_id: sharp_renee
  title:
    custom: ""
    en_us: glance

```


## Configuration
In order to set markets goto Yahoo Finance and find the name of the coin, then write it exactly to the name.


> [!NOTE] For passwords including non-latin chars and punctuations include <kbd>'</kbd> sign 


### Widgets
You can embed [iframe](https://github.com/glanceapp/glance/blob/main/docs/configuration.md#iframe) and custom [html](https://github.com/glanceapp/glance/blob/main/docs/configuration.md#html). 

### Icons
```yml
icon: si:immich # si for Simple icons https://simpleicons.org/
icon: sh:immich # sh for selfh.st icons https://selfh.st/icons/
icon: di:immich # di for Dashboard icons https://github.com/homarr-labs/dashboard-icons
icon: mdi:camera # mdi for Material Design icons https://pictogrammers.com/library/mdi/
```


## .env Configuration


## Remote Server Conf
[GitHub - kubakubakuba/glance-serverstatus-agent: A flask endpoint for Glance serverstatus widget for remote servers](https://github.com/kubakubakuba/glance-serverstatus-agent)

1. Remote: login to remote server
```bash
sudo nano /etc/docker/daemon.json
```

2. Remote: Add the following lines
```json
{
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
}
```

3. Local: Update the Glance Dashboard `glance.yml` File. The following one shows every docker with default icon.
```yaml
        - type: docker-containers
            hide-by-default: false
            sock-path: tcp://192.168.1.247:2375

```
## Community Widgets
[community-widgets/widgets/astronomy-picture-of-the-day-by-Saisamarth21/README.md at main · glanceapp/community-widgets · GitHub](https://github.com/glanceapp/community-widgets/blob/main/widgets/astronomy-picture-of-the-day-by-Saisamarth21/README.md)