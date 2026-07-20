---
title: CasaOS - Remove Legacy App
date: 2025-10-11 10:00:23
description:
tags:
  - casaos
  - docker
aliases:
draft: false
---
```shell
# Find the one which has STATUS as `created`
docker ps -a (to find the container)
docker stop <name> (if needed)
docker rm <name> (to remove the container)
docker volume rm <name> (optional, to delete data)
```

Hard refresh your CasaOS browser page.

This will successfully get rid of the "CasaOS Legacy app (To be rebuilt)" message.
