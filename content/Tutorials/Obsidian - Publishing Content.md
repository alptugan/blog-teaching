---
title: Obsidian - Publishing Content
date: 2024-04-11T00:01:00
description: 
tags:
  - tutorial
  - Obsidian
  - Static-Website
  - digitalgarden
aliases: 
draft: false
---
## 1. Introduction
The following post summarizes the available hand-picked community plug-ins on Obsidian note taking app. The following plug-ins are considered as publishing one's markdown notes as a [digital garden](https://maggieappleton.com/garden-history). A digital garden is, in the most basic sense, a website where one publishes articles, texts, or daily notes. In short, it is the evolved version of 90s blogs such as blogspot by Google. 

So why such a new term emerged? As a response, language constantly adapts to our changing environment—we enrich it when existing words can't fully express what we see or when we want to shape the future in a certain way. Choosing names carries both artistic and political significance.

> [!quote] The Garden is the web as topology. The web as space. It’s the integrative web, the iterative web, the web as an arrangement and rearrangement of things to one another. 
> *Caufield ([[Obsidian - Publishing Content#^caulfield|ref]])*

If you are looking for synching notes on your different devices via Obsidian, you can refer to [[Obsidian - Self-hosted LiveSync Setup on Docker | Self-hosted Livesync]] post.

## 2. Flowershow
In terms of interface [flowershow](https://flowershow.app/) seems a better alternative for publishing specific content from my original Obsidian Vault.

## 3. Hugo
This tutorial covers how to build basic Hugo static site and publish specific pages in your current Obsidian Vault.

Quartz is a great tool for showing your digital garden of thoughts and your mind. But sometimes, I need to instantly share something from my private vault to the audience or colleagues online. Plus, it is a practice for me to dive into Hugo framework. Since Quartz 4 is built upon Hugo, it would be good to have some more technical knowledge about what is going on behind the scenes. 

The main take aways are as follows;
- [ ] Create and share notes online from Obsidian.
- [ ] Host the website free on Github.
- [ ] Learn something new.

1. I am planning to use the following plugin with Obsidian `obsidian://show-plugin?id=hugo-preview-obsidian`
2. Install Hugo using [Homebrew](https://brew.sh/) package manager for Mac →  [link](https://gohugo.io/installation/macos/#homebrew)
3. Follow the tutorial → [link](https://quantick.dev/posts/obsidian-hugo/)

### 3.1. Hugo Themes
- [Hugo Themes](https://themes.gohugo.io/)
	- [Hugo Plate](https://themes.gohugo.io/themes/hugoplate/)
	- [Papermod](https://themes.gohugo.io/themes/hugo-papermod/)
	- [Academic](https://themes.gohugo.io/themes/theme-academic-cv/)
	- [Hugo Mini](https://github.com/nodejh/hugo-theme-mini)

## 4. Quartz
The tutorial presents [[Obsidian - Quartz Setup]] seems doing the job. But it does have some issues in terms of UI preferences. I spent two days to fix "Explorer" component issue. Whenever the user pages size decreases the sidebars disappear which is not convenient for mobile and tablet users. The responsive part is needs to be fixed. 

## 5. Other Options
The following plugins are reviewed as a solution for quick and temporary content shares on online.
[Enveloppe](https://github.com/Enveloppe/obsidian-enveloppe) It supports sharing single note easily. Support for Quartz

[NotesOn](https://github.com/shapkinaa/noteson-obsidian-plugin) It supports sharing single note easily. Hosted on Russian servers.

[ShareNote](https://github.com/alangrainger/share-note/?tab=readme-ov-file) Most easy way. Encrypted note. Available for server setup.

[Vitepress](https://github.com/tyrad/obsidian-vitepress) This is an obsidian plugin for more convenient preview and publishing of .md files using vitepress

## References
- [Hugo Website](https://gohugo.io/)
- [Homebrew](https://www.brew.sh) 
- [obsidia-hugo-demo](https://github.com/quantk/obsidian-hugo-demo) :luc_arrow_right: Includes Github workflow file.
- [The Navigation Problem in the World-Wide-Web \| SpringerLink](https://link.springer.com/chapter/10.1007/978-3-642-55991-4_31)
- [The Garden and the Stream: A Technopastoral – Hapgood](https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/)^caulfield
- [A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)

