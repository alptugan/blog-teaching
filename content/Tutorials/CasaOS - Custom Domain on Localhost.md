---
title: CasaOS - Custom Domain on Localhost
date: 2026-05-16 03:18:42
description:
tags:
  - domain
  - casaos
  - adguard
aliases:
draft: false
---
## 1. Goto Adguard Control Panel
Navigate to `Filters` → `DNS rewrites`

![[CasaOS - Custom Domain on Localhost01.jpeg]]


## 2. Add New Entry
Standard practice for home networks is to use `.lan`, `.home`, or `.internal`.

> [!DANGER] Do not use `.local` for suffix.

![[CasaOS - Custom Domain on Localhost02.jpeg]]

## 3. Clear your device's DNS Cache
Simply disable/enable the wi-fi network on your computer.


If you have ports, you need to use the port on your domain name.

E.g. `http://homerserver.lan:34`


