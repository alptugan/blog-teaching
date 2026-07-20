---
title: P-Afra Sonmez Web Site
date: 2025-11-29 01:05:55
description:
tags:
aliases:
draft: true
---
I will create a backend CMS for a static website using PagesCMS.
I host the website on Github.
I created the html files.
,use context


Review the static pages in `web-frontend`folder. I input the database entries for the content on Notion. Implement the front-end and get the content from Notion database. Apply pages and subpages referring to the web-frontend folder. 

# Instructions
In the notion database table, there are 6 different property of each page;
- Column-> Name: Name of the content
- Column-> Date: Creation date of the content
- Column-> Tags: It is for contents connected to Works
- Column-> Title: Title of the relevant content
- Column-> Type: It represents which page design template will be applied to the content
- Column-> enable-on-menu: If set to true, add `Title` as menu item. If it is false, do nothing.

According to the `Type` attribute for each entry follow the below instructions. 
1. `index.html` will take content from `page`s Intro, Works, About, Contact and Footer pages in the same order from Notion Database. All of the entries are recorded on the database.
2. I use the same names when creating entries on Notion.
3. The `Works` page collects the all works by querying the `Type` which are `post`. All cover images will be collected from the content of the each `post`. The first image in the post will be the cover image. Independent from its original resolution and ratio, crop the images as square. 
4. Do not change the design, just implement it to the current system to make it dynamic web frontend.
## Type: page
- For styling and page design use `web-frontend/index.html` file as reference.
- Get the contents from Notion database. Each section is created as entry. Refer to `Type` for each entry. homepage includes all entries that are set to `page`.
- Use the `Title` and entry content as they are. Apply the style in the `web-frontend/index.html` document.

## Type: post
- In the page content, set the first image as cover image. 
- For styling and page design use `web-frontend/project-detail.html` file as reference.

## Type: footer
- Every content page must include footer at the bottom by default. 
- Refer to `web-frontend/index.html` for styling

## Additional Information and References
- Additional styles implementations can be found on `web-frontend/styles.html` document. 
- Apply the exact css styles in `web-frontend/css` folder.