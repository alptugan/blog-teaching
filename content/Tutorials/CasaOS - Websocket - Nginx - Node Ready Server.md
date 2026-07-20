---
title: CasaOS - Websocket - Nginx - Node Ready Server
date: 2025-10-12 03:07:07
description:
tags:
aliases:
draft: false
---
## CasaOS Configuration
Goto cd /DATA/AppData
mkdir p5-Kiosk


Copy the following project files to the docker director above. 

![[p5-kiosk-01.jpg|-center|500]]


sudo chown -R user:user p5-Kiosk/
sudo chmod +x casaos-setup.sh

Run the following script. Follow the prompts.


```shell title="casaos-setup.sh"
#!/bin/bash

# p5-Kiosk CasaOS Setup Script
# This script prepares the CasaOS data directory for importing the app

set -e

echo "🚀 p5-Kiosk CasaOS Setup"
echo "============================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# CasaOS data directory (standard location)
CASAOS_DATA="/DATA/AppData/p5-Kiosk"

echo -e "${BLUE}This script will:${NC}"
echo "  1. Create CasaOS data directories"
echo "  2. Copy necessary files"
echo "  3. Set proper permissions"
echo "  4. Prepare for CasaOS import"
echo ""

# Check if running with sufficient permissions
if [ ! -w "/DATA" ] 2>/dev/null; then
    echo -e "${YELLOW}⚠️  You may need sudo access to write to /DATA${NC}"
    echo "The script will prompt for password if needed."
    echo ""
fi

# Create directory structure
echo -e "${YELLOW}Step 1: Creating directory structure...${NC}"
sudo mkdir -p "$CASAOS_DATA/public/sketches"
sudo mkdir -p "$CASAOS_DATA/uploads"
sudo mkdir -p "$CASAOS_DATA/tmp"
echo -e "${GREEN}✓ Directories created${NC}"
echo ""

echo ""

# Set permissions
echo -e "${YELLOW}Step 3: Setting permissions...${NC}"
sudo chmod -R 755 "$CASAOS_DATA"
sudo chmod 666 "$CASAOS_DATA/config.json"
sudo chmod -R 777 "$CASAOS_DATA/uploads"
sudo chmod -R 777 "$CASAOS_DATA/tmp"
sudo chmod -R 755 "$CASAOS_DATA/public/sketches"
echo -e "${GREEN}✓ Permissions set${NC}"
echo ""

# Build Docker image
echo -e "${YELLOW}Step 4: Building Docker image...${NC}"
docker build -t p5-kiosk-app:latest .
echo -e "${GREEN}✓ Docker image built${NC}"
echo ""

echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Setup complete!${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}Data directory created at:${NC} $CASAOS_DATA"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Stop any existing containers:"
echo -e "     ${BLUE}docker-compose down${NC}"
echo ""
echo "  2. In CasaOS web interface:"
echo "     • Go to App Store"
echo "     • Click '+' (Install customized app)"
echo "     • Import 'casaos-app.yml'"
echo "     • Click Install"
echo ""
echo "  3. Access your app at: http://192.168.1.247:8186"
echo ""
echo -e "${YELLOW}Optional:${NC} Update admin credentials in CasaOS app settings"
echo "  • ADMIN: your-username"
echo "  • PASSWORD: your-secure-password"
echo ""

```


Open CasaOS UI and install customized app. Use the provided docker-compose.yml

![[p5-kiosk-02.jpg|-center|500]]


```yml title="docker-compose.yml"
name: p5-Kiosk
services:
  app:
    image: p5-Kiosk-app:latest
    container_name: p5-Kiosk-app
    hostname: p5-Kiosk-app
    restart: unless-stopped
    environment:
      NODE_ENV: production
      PORT: "3333"
      ADMIN: admin
      PASSWORD: changeme
      UPLOAD_RATE_LIMIT_WINDOW_MS: "600000"
      UPLOAD_RATE_LIMIT_MAX: "5"
      TZ: UTC
    volumes:
      - type: bind
        source: /DATA/AppData/p5-Kiosk/public/sketches
        target: /app/public/sketches
      - type: bind
        source: /DATA/AppData/p5-Kiosk/uploads
        target: /app/uploads
      - type: bind
        source: /DATA/AppData/p5-Kiosk/tmp
        target: /app/tmp
      - type: bind
        source: /DATA/AppData/p5-Kiosk/config.json
        target: /app/config.json
    x-casaos:
      envs:
        - container: NODE_ENV
          description:
            en_us: Node.js environment mode
        - container: PORT
          description:
            en_us: Internal application port
        - container: ADMIN
          description:
            en_us: Admin username for login
        - container: PASSWORD
          description:
            en_us: Admin password (change this!)
        - container: TZ
          description:
            en_us: Timezone for logs
      ports:
        - container: "3333"
          description:
            en_us: Application port (internal)
      volumes:
        - container: /app/public/sketches
          description:
            en_us: p5.js sketches directory
        - container: /app/uploads
          description:
            en_us: Temporary uploads directory
        - container: /app/tmp
          description:
            en_us: Temporary processing directory
        - container: /app/config.json
          description:
            en_us: Application configuration file
    networks:
      - p5-Kiosk-network

  nginx:
    image: nginx:alpine
    container_name: p5-Kiosk-nginx
    hostname: p5-Kiosk-nginx
    restart: unless-stopped
    depends_on:
      - app
    ports:
      - target: 80
        published: "8186"
        protocol: tcp
    volumes:
      - type: bind
        source: /DATA/AppData/p5-Kiosk/nginx.conf
        target: /etc/nginx/conf.d/default.conf
        read_only: true
    x-casaos:
      ports:
        - container: "80"
          description:
            en_us: Web interface port
      volumes:
        - container: /etc/nginx/conf.d/default.conf
          description:
            en_us: Nginx configuration file
    networks:
      - p5-Kiosk-network

networks:
  p5-Kiosk-network:
    driver: bridge

x-casaos:
  architectures:
    - amd64
    - arm64
    - arm
  main: nginx
  description:
    en_us: Auto-switching p5.js sketches viewer with web-based CMS for uploading and managing sketches
  tagline:
    en_us: p5.js Kiosk
  developer: alptugan
  author: CasaOS Community
  icon: https://raw.githubusercontent.com/ZOASR/p5-sketches/refs/heads/main/images/P5js_Logo.svg
  thumbnail: https://raw.githubusercontent.com/ZOASR/p5-sketches/refs/heads/main/images/P5js_Logo.svg
  title:
    en_us: p5.js Kiosk
  category: Developer Tools
  port_map: "8186"
  scheme: http
  index: /
  store_app_id: p5-Kiosk
  project_url: https://github.com/alptugan/p5-Kiosk
  tips:
    before_install:
      en_us: |
        ⚠️ Important Setup Steps:

        1. Make sure to change the default ADMIN and PASSWORD
        2. Prepare your sketches directory with p5.js projects
        3. Default access: http://your-server-ip:8186
        4. Admin panel: http://your-server-ip:8186/cms.html

```

## Troubleshoot
If installation fails, open the p5-Kiosk settings window and check hostname text for typo