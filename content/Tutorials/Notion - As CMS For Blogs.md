---
title: Notion - As CMS For Blogs
date: 2026-02-13 11:58:16
description:
tags:
  - Static-Website
  - blog
  - webdev
  - Vercel
  - Nextjs
aliases:
draft: true
---
Using Notion as the CMS (Content Management System) is an excellent idea for reducing people who do not want to deal with technical friction. It separates the "writing" from the "coding" entirely.

For students with **zero programming knowledge**, the best approach is to combine **Notion** (for writing) with **Vercel** (for hosting), using **GitHub** only to store the code.


> [!NOTE] Project Files
> Refer to package.json files to run the applications.
>**Template File Location:** /Users/alptugan/Documents/DEVS/JS/NotionCMS-Starter
>**Actual Project File Location:** /Users/alptugan/Documents/DEVS/JS/NotionCMS


# Setup Notion
## 1. Create a Notion Database
Open the Notion app on desktop or in your browser. Navigate to the left menu and create a new database.

![[Notion - As CMS For Blogs.jpeg|-center|500]]

## 2. Database Entry
Click on <span style="color:#ffcc00;">New page</span> to add an entry to your database. Each row represents a new entry. These entries will be the posts on your blog.
<video src="https://media-host.alptugan.workers.dev/assets/Notion-databse-entry.mp4" controls style="display:block;margin: 0 auto;height:100%;width:90%; aspect-ratio: 16 / 9; "></video>
Once you add the <span style="color:#ffcc00;">Properties</span> for the first entry, you do not need to re-enter them again. They will be available for the upcoming entries.

## 3. Grab the Database ID
Click the <span style="color:#ffcc00;">Private</span> button on the top-right corner and hit the <span style="color:#ffcc00;">Copy link</span> button to copy the URL link. This link includes the database ID.
![[Notion - As CMS For Blogs02.jpeg|-center|500]]

It should be something like the following:
`https://www.notion.so/alptugan/308XXXXopfspsa9d31d87b132f60f7?v=308d85a265e880638fbd000c3a46b2de&source=copy_link`

Grab the `308XXXXopfspsa9d31d87b132f60f7` first part until the `?` sign. Note the ID somewhere. ⚠️ You will use it later.

## 4. Notion Integration
Follow the [link](https://www.notion.so/profile/integrations) and create a new integration as follows;

![[Notion - As CMS For Blogs03.jpeg|-center|500]]

1. **Integration name:** Give it a proper name. ⚠️ We will use it later.
2. **Associated workspace:** Set your own account.
3. Hit <span style="color:#ffcc00;">Create</span> button to initialize integration.

Adjust the <span style="color:#ffcc00;">Capabilities</span> as the following. Then hit the <span style="color:#ffcc00;">Show</span> button to copy the `INTEGRATION ID` and save it. ⚠️ We will use it later.

![[Notion - As CMS For Blogs04.jpeg|-center|500]]





# Setup Vercel

![[Notion - Vercel02.jpeg]]

![[Notion - Vercel01.jpeg]]

![[Notion - Vercel04.jpeg]]

![[Notion - Vercel03.jpeg]]

![[Notion - Vercel05.jpeg]]


### Recommended Tools 
#### ~~Nobelium or NotionNext~~
These are pre-made repositories designed specifically to turn a Notion Page into a Blog. 

Nobelium is outdated and NotionNext seems to be over complicated in terms of design and setup.

#### Others
[GitHub - lakshaybhushan/nextjs-notion-waitlist-template](https://github.com/lakshaybhushan/nextjs-notion-waitlist-template?tab=readme-ov-file) A template repository for creating a waitlist using Next.js 14, Notion as a CMS, Upstash Redis for rate limiting and Resend for sending emails with a custom...

If you prefer the **Next.js Notion Starter Kit** (another very popular option by transitive-bullshit), the process is nearly identical. It is slightly more powerful but Nobelium is often faster to setup. Both rely on the "Duplicate Template -> Deploy to Vercel" workflow. You can refer to [Github Repo](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) for setup instructions.

⭐ [GitHub - HEIGE-PCloud/Notion-Hugo](https://github.com/HEIGE-PCloud/Notion-Hugo?tab=readme-ov-file)  Use Notion as the CMS for your Hugo site
## Notion related
- [Notion – Integration](https://www.notion.so/profile/integrations) ()



