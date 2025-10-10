---
title: CasaOS - Web Server with Node Js
date: 2025-10-06 04:47:05
description:
tags:
  - nodejs
  - webdev
  - docker
  - casaos
aliases:
draft: false
---
## 1. Goto Casa OS AppData directory
```bash

cd /DATA/AppData

mkdir nodeApp && cd nodeApp
```


## 2. Init npm
```shell
npm init -y

nano app.js
```

Paste the following to create a simple webserver

```javascript title="app.js"
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Docker!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## 3. Write the Dockerfile
```bash
nano Dockerfile
```

```yaml title="Dockerfile"
# Use an Alpine-based Node.js image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /DATA/AppData/nodeApp/data

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]

```


## 4. Build the Docker Image 
```bash
docker build -t nodeApp .
```


## 5. Run the Docker Container
```bash
# Make sure that the Host port is not occupied by other docker containers.
docker run -d -p 3133:3000 node-docker-app
```

![[casaos-node-app01.jpg|-center|500]]


## CasaOS docker-compose file (Alternative)
```yaml title="docker-compose.yml"
name: trusting_kilby
services:
  trusting_kilby:
    cpu_shares: 90
    command:
      - node
      - app.js
    container_name: NodeJSApp
    deploy:
      resources:
        limits:
          memory: 7940M
    environment:
      - NODE_VERSION=24.9.0
      - PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
      - YARN_VERSION=1.22.22
    hostname: NodeJSApp
    image: nodeapp:latest
    labels:
      icon: https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nodejs.png
    ports:
      - target: 3000
        published: "3133"
        protocol: tcp
    restart: unless-stopped
    x-casaos:
      envs:
        - container: PATH
          description:
            en_us: ""
        - container: NODE_VERSION
          description:
            en_us: ""
        - container: YARN_VERSION
          description:
            en_us: ""
      image: ""
      ports:
        - container: "3000"
          description:
            en_us: ""
    volumes: []
    devices: []
    cap_add: []
    network_mode: bridge
    privileged: false
x-casaos:
  architectures:
    - amd64
  author: CasaOS User
  category: unknown
  description:
    en_us: ""
  developer: unknown
  hostname: ""
  icon: https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nodejs.png
  image: null
  index: /
  is_uncontrolled: false
  main: trusting_kilby
  port_map: "3133"
  scheme: http
  store_app_id: trusting_kilby
  tagline:
    en_us: This is a compose app converted from a legacy app (CasaOS v0.4.3 or
      earlier)
  thumbnail: ""
  tips:
    custom: This is a compose app converted from a legacy app (CasaOS v0.4.3 or
      earlier)
  title:
    custom: NodeJSApp
    en_us: trusting_kilby
```
