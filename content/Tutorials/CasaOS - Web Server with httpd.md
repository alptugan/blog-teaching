---
title: CasaOS - Web Server with httpd and nodejs
date: 2025-10-06 03:57:38
description:
tags:
  - docker
  - server
  - homeserver
  - webdev
  - Static-Website
aliases:
draft: false
---
Use the following docker-compose.yml file to install httpd server

```yml
name: clever_nico
services:
  main_app:
    cpu_shares: 50
    command: []
    container_name: apache-app
    deploy:
      resources:
        limits:
          memory: 256M
    hostname: apache-app
    image: httpd:latest
    labels:
      icon: https://icon.casaos.io/main/all/httpd.png
    ports:
      - target: 80
        published: "8282"
        protocol: tcp
    restart: always
    volumes:
      - type: bind
        source: /DATA/AppData/apache-app/config/website
        target: /usr/local/apache2/htdocs
    devices: []
    cap_add: []
    environment: []
    network_mode: bridge
    privileged: false
x-casaos:
  author: self
  category: self
  hostname: ""
  icon: https://icon.casaos.io/main/all/httpd.png
  index: /
  is_uncontrolled: false
  port_map: "8282"
  scheme: http
  store_app_id: clever_nico
  title:
    custom: apache-app

```

