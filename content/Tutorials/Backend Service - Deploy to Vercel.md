---
title: Backend Service - Deploy to Vercel
date: 2025-04-28 10:09:35
description: 
tags:
  - backend
  - API
  - server
  - nodejs
aliases: 
draft: false
---
1. Create a free [Vercel](vercel.com) hobbiest account.
2. Add `vercel.json` file to the root of your project and fill with the following. Replace `index.js` with your server file name;
```json
{
	"version": 2,
	"builds": [
		{
			"src": "index.js",
			"use": "@now/node"
		}
	],
	"routes": [
		{
			"src": "/(.*)",
			"dest": "index.js"
		}
	]
}
```
3. Upload your project to a GitHub repository.
4. Goto Vercel account create a new project.
![[backend02.jpeg]]

5. Choose the repository that you want to run as a backend service.
![[backend01.jpeg]]

6. Follow the instructions.
7. After the project deployed do not forget to update the endpoint address in your project.
   