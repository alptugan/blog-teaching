---
title: Cloudflare - Pages for Free Hosting
date: 2025-08-10 04:30:05
description: 
tags:
  - webdev
  - cloudflare
  - hosting
  - Static-Website
aliases: 
draft: false
---
If you have a Cloudflare and Github account you can continue from 
## 1. Create a Cloudflare account
If you don't have a Cloudflare account create a free tier one. You can follow the [[Cloudflare - Domain Register|instructions]] on how to setup a free account on Cloudflare.


## 2. Create a Github repository
Goto Github.com and register for a free account.


## 3. Connect the Github repo 
Login to the Cloudflare dashboard. Navigate to the **Workers & Pages** tab on the left. Hit **Create** button on the top right corner.

![[cloudflare-pages01.jpeg|-center|500]]



> [!Warning] This tutorial covers a static site without using a builder. It presumes that you have html, css and js files to be ready. Suppose that you upload your `dist`folder of your `node` based app. 

In order to transfer your static files from GitHub to Cloudflare Pages, click on **Pages** tab. Hit *Get started* button next to **Import an existing Git repository**.

![[cloudflare-pages02.jpeg|-center|500]]

Rest of the step are straight forward. Just follow the instructions. 

## Conclusion
If you hosted static files on your private or public GitHub repository, your Cloudflare page will be instantly ready and deployed to the internet with a custom domain.

In order to use custom domain on your Cloudflare Pages, follow the instruction in the following tutorial .