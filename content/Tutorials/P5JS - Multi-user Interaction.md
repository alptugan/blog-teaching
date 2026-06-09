---
title: P5JS - Multi-user Interaction
date: 2026-01-16 03:46:14
description:
tags:
  - p5js
  - server
  - webdev
  - interactive
  - creativecoding
aliases:
draft: false
---
# 1. Requirements
- p5.party library
- deepstream.io server setup on docker
- client p5js apps.


[jbakse/p5.party](https://github.com/jbakse/p5.party) p5.party is a library for easily creating online multi-user sketches with p5.js. With p5.party you can quickly prototype ideas for multiplayer games, real-time multi-user apps, and multi-computer...

[deepstream.io](https://deepstream.io/) deepstream allows clients and backend-services to sync data, send events and more with a heavy focus on security. Configure everything server side without writing a line of code while still connecting to your favorite cache, database, message bus and more.


# 2. Setup Docker
Any docker environment works fines as long as you can install the docker. `deepstream`  does not support `x86_64` systems. The provided `docker-compose.yml` includes all required packages for `x86_64` systems. 

## 2.1. Create Folders
```shell
# Create app folder manually
mkdir /DATA/AppData/deepstream

# Make sure the current user has rights to rw
sudo chown username:username -R deepstream

# Create the DeepStream directory and config
cd /DATA/AppData
mkdir -p deepstream/config deepstream/data
cd deepstream

```


## 2.2. Create yml Files
Create `config.yml` and `permissions.yml` files. 
```yml title="/DATA/AppData/deepstream/config/config.yml"
serverName: p5-party-server

# TCP/WebSocket endpoint
port: 6020
host: 0.0.0.0

# HTTP endpoint - separate port
httpPort: 8080  # This is CONTAINER port
httpHost: 0.0.0.0
httpEnable: true
httpPath: /

# Disable auth
auth:
  type: none

# Permissions
permission:
  type: config
  options:
    path: ./permissions.yml

# Logging
logger:
  level: INFO
```


```yml title="/DATA/AppData/deepstream/config/permissions.yml"
record:
  "*":
    create: true
    write: true
    read: true
    delete: true
    listen: true

event:
  "*":
    publish: true
    subscribe: true
    listen: true

rpc:
  "*":
    provide: true
    request: true

presence:
  "*":
    allow: true
```


## 2.3. Create docker-compose file
```yml title=/DATA/AppData/deepstream/docker-compose.yml
name: deepstream-p5party
services:
  deepstream-p5party:
    cpu_shares: 90
    command:
      - node
      - ./bin/deepstream.js
      - start
      - --inspect=0.0.0.0:9229
    container_name: deepstream-p5party
    deploy:
      resources:
        limits:
          memory: 7940M
    environment:
      - DEEPSTREAM_HOST=0.0.0.0
      - DEEPSTREAM_HTTP_HOST=0.0.0.0
      - DEEPSTREAM_HTTP_PORT=8080
      - NODE_VERSION=22.15.0
      - PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
      - YARN_VERSION=1.22.22
    hostname: deepstream-p5party
    image: deepstreamio/deepstream.io:latest
    ports:
      - target: 6020
        published: "6022"
        protocol: tcp
      - target: 8080
        published: "8089"
        protocol: tcp
    restart: always
    volumes:
      - type: bind
        source: /DATA/AppData/deepstream/data
        target: /usr/src/app/data
      - type: bind
        source: /DATA/AppData/deepstream/config
        target: /usr/src/app/config
    x-casaos:
      envs:
        - container: DEEPSTREAM_HOST
          description:
            en_us: ""
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
        - container: "6020"
          description:
            en_us: ""
        - container: "8080"
          description:
            en_us: ""
      volumes:
        - container: /usr/src/app/data
          description:
            en_us: ""
        - container: /usr/src/app/config
          description:
            en_us: ""
    devices: []
    cap_add: []
    network_mode: deepstream_default
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
  icon: ""
  image: null
  index: /
  is_uncontrolled: false
  main: deepstream-p5party
  port_map: ""
  scheme: http
  store_app_id: deepstream-p5party
  tagline:
    en_us: This is a compose app converted from a legacy app (CasaOS v0.4.3 or
      earlier)
  thumbnail: ""
  tips:
    custom: This is a compose app converted from a legacy app (CasaOS v0.4.3 or
      earlier)
  title:
    custom: deepstream-p5party
    en_us: deepstream-p5party
```


## 2.4. Fire-up the Docker
```shell
# Start the container
docker-compose up -d

# Check the docker if it is working or not
docker logs deepstream-p5party

```

# 3. Local Server Test
Install the library
You can access test code from the following *p5js* [link](https://editor.p5js.org/alptugan/sketches/B-6jsHi0x). In order to test local version you must have a running `deepstream` server. Replace the `server_ip:PORT` with yours.

```js title=sketch.js
let me;
let guests;

function preload() {
  // local setup
  partyConnect("ws://192.168.1.247:6022", "hello_party-shared");  
  me = partyLoadMyShared({ x: 200, y: 200 });
  guests = partyLoadGuestShareds();
}
function setup() {
  theCanvas = createCanvas(1080, 1350);
  pixelDensity(2);

  noStroke();
  fill("red");

  // initialize this guests cursor position
  console.log("me", JSON.stringify(me));
  console.log("guests", JSON.stringify(guests));
  console.log("am i host?", partyIsHost());

}

function draw() {
  background(250);
  // read shared data
  // draw each guests cursor
  for (const p of guests) {
    fill("#cc0000");
    ellipse(p.x, p.y, 20, 20);
  }

  // mark this guests cursor
  fill("#ffffff");
  ellipse(me.x, me.y, 15, 15);
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(prefix, "jpg");
  }
}

function mousePressed() {
  //console.log("mouse pressed");
  me.x = mouseX;
  me.y = mouseY;
}

```


# 4. Cloudflare Setup
1. Add your domain to Cloudflare, if you didn't have an account. Follow the instructions [[Cloudflare - Domain Register|here]].
2. Create a tunnel proxy pointing to your local `deepstream` ip. Follow the [[Cloudflare - Tunneling|instructions]] if you don't know how to setup Cloudflare tunneling.
3. Use the above code as reference. Replace the ip server address with your domain. It should be similar to `partyConnect("wss://DOMAIN_ADDRESS", "hello_party-shared");`
4. Open the same *p5js* link on multiple computers and you should see multiple circles on the canvas representing different users.