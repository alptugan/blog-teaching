---
title: Quartz Tutorial
draft: false
tags:
  - quartz
  - tutorial
---
## Summary
This tutorial covers how to build a static web site, hosted on [Github](https://www.github.com) for free, using [Quartz](https://quartz.jzhao.xyz/) as a framework and [Obsidian](https://obsidian.md/) as a backend IDE. 
## Requirements
Before started, make sure that you have the following requirements. 
1. Create a free [Github](https://www.github.com) account.
2. Download [Obsidian](https://obsidian.md/) note taking app.
3. Install [Git](https://github.com/git-guides/install-git), [npm & node](https://nodejs.org/en/download) packages. 

## 1. Download and Install Quartz 4.0 Static Site Generator
```zsh
# Clone the original repository to your computer
# Choose a specific directory like Documents
# Open the terminal app and goto the documents
cd /Documents

# Clone the repository to your computer.
git clone https://github.com/jackyzha0/quartz.git

# Change the name of the downloaded repository folder name. I change the directory name as "teaching-blog"
mv quartz blog-teaching

# Goto inside the blog-teaching directory
cd blog-teaching

# Install required Quartz dependencies
npm i

# Compile the Quartz project
npx quartz create

# The Quartz project generator will ask you to choose some configs. You can select the default ones.

# For the content select -> Empty Quartz
# For the permalinks select -> Treat links as shortest path
# In the end you should see the following message;

# You're all set! Not sure what to try next? Try:
# - Customizing Quartz a bit more by editing `quartz.config.ts`
# - Running `npx quartz build --serve` to preview your Quartz locally
# - Hosting your Quartz online (see: https://quartz.jzhao.xyz/hosting)

# RUN THE Created Quartz site on your local computer
npx quartz build --serve

# You should see the following message few seconds later
# Started a Quartz server listening at http://localhost:8080

```

Open your internet browser and navigate to the web-site. You should see the following webpage. 
`http://localhost:8080`
![[Screenshot 2024-04-09 at 18.14.56.png]]

## 2. Setup Obsidian
1. Open the downloaded Obsidian note taking app. Hit "Open" and select the folder that you downloaded and renamed. Mine is "blog-teaching"![[Screenshot 2024-04-09 at 16.25.40.png]]
2. On the left pane you will see the same folder structure as it is on your Finder window. The "content" folder will be your main container for your individual posts.![[Screenshot 2024-04-09 at 16.27.30.png]]
4. Before creating content we need to setup a page template including some default configuration. To do that, hit the ⚙️ icon on the bottom-left. Click on "Community plugins" and hit "Turn on community plugins." ![[Screenshot 2024-04-09 at 18.00.17.png]]
   
5. Hit the "Browse" button on the right. ![[Screenshot 2024-04-09 at 16.42.51.png]]
6. Type "Templater," install the plugin, then hit "Enable."![[Screenshot 2024-04-09 at 16.33.57.png]]
7. Close the settings window. Create a new folder on the left-pane called "templates."
8. Create a new note with a name of your choice inside the "templates" folder. Mine mine is "note." Type the following lines into the page.  ![[Screenshot 2024-04-09 at 16.51.55.png]]
### Create your first page
Open the file that you created in the previous step. Mine is called "Quartz Tutorial." Basically this page will be your first subpage of your blog.
1. Right-click onto "content" folder select "Create a new note from template" option. Select the template that we created in the previous step. 
   ![[Screenshot 2024-04-09 at 16.53.01.png]]
   
2. Click on the page and open it. Write down your content. Save it.  
3. Check your browser and you will see the changes in real time whenever you edit the content inside Obsidian.
### Images and Attachments
To handle images and attachments. Create a folder inside content folder. I create a folder named "assets."
![[Screenshot 2024-04-09 at 18.09.27.png]]

Open the Obsidian settings by clicking ⚙️ icon on bottom-left corner of the Obsidian app window.
Set the "Default location for the new attachments" to the folder that you created in the previous step. Then, an input fields appears. Select the "assets" folder inside the "content" folder. Whenever you drag-drop image from your computer to your page, the image will be uploaded to that folder. ![[Screenshot 2024-04-09 at 18.43.01.png]]
## 3. Upload the content to the Github
1. Sign-in your Github Account.
2. Create new repository to host the static web-site. Hit the green "New" button on the top-right of the page. ![[Screenshot 2024-04-09 at 16.56.47.png]]
3. Type the name of your website. Mine is "blog-teaching." Hit "Create repository" button on the bottom-right. ![[Screenshot 2024-04-09 at 16.58.29.png]]
4. It will generate the repository page and list some options on how to upload your content to the page. Copy the link with `.git`extension. Mine is `https://github.com/alptugan/blog-teaching.git`
5. Goto Terminal app;
	```bash
	# Hit Ctrl + c from your keyboard to disable local server
	git remote -v
	```
	
	You will see the following message;
	```
	origin  https://github.com/jackyzha0/quartz.git (fetch)
	origin  https://github.com/jackyzha0/quartz.git (push)
	upstream        https://github.com/jackyzha0/quartz.git (fetch)
	upstream        https://github.com/jackyzha0/quartz.git (push)
	```
	
	Run the following command to remove the current origin address with your own github repository;
	```bash
	git remote rm origin
	
	# Copy the link in the step 4 and type
	git remote add origin https://github.com/alptugan/blog-teaching.git
	
	# Upload your content in your local computer to the Github repository that we created in the Step 3
	npx quartz sync --no-pull
	```

## 4. Create the static web site
Open Terminal app and goto the Quartz project folder. Mine is "blog-teaching." We will create `deploy.yml` file to compile and upload the static web-site that we created on our local machine. Navigate to the [Quartz 4 documentation page](https://quartz.jzhao.xyz/hosting#github-pages) Copy its content. 
```bash
nano .github/workflows/deploy.yml

# Paste the content inside the editor.
# Hit Ctrl + o to save document
# Hit Ctrl + x to quit the document.
```

Goto Github repository page that you created. Hit settings icon ⚙️
![[Screenshot 2024-04-09 at 19.05.20.png]]

Select Pages;
![[Screenshot 2024-04-09 at 19.06.24.png]]

Select Source > Github Actions
![[Screenshot 2024-04-09 at 19.07.24.png]]

Open Terminal and sync the content to upload `deploy.yml` file
```bash
npx quartz sync

# Wait a few minutes.
```

Navigate to your static website
`https://yourusername.github.io/name_of_your_repository`

Mine is;
`https://alptugan.github.io/blog-teaching`

## References
- [Nicole Vanderhoeven](https://notes.nicolevanderhoeven.com/How+to+publish+Obsidian+notes+with+Quartz+on+GitHub+Pages)
- [Quartz 4](https://quartz.jzhao.xyz/) Documentation 
- [Github](https://docs.github.com/en) Documentation
- [Github Pages](https://docs.github.com/en/pages)
- [Obsidian](https://docs.github.com/en/pages) Documentation

