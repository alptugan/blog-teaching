---
title: CheatSheet Obsidian
date: 2024-11-27T00:01:00
description: Cheat Sheet for Obsidian App
tags:
  - markdown
  - Obsidian
aliases: 
draft: false
---
## 1. Page Break in pdf
```html
<div style="page-break-after: always;"></div>
```

## 2. Set Text Color
```html
<font style="color:green">In front of the artwork, the spectator sees another </font>
```
<font style="color:green">In front of the artwork, the spectator sees another </font>

## 3. Open Document page
```markdown
[Akrich :1](zotero://open-pdf/library/items/52A5ECM7?page=1)
```

### 3.1. Open File Location in Finder
```markdown
[Example Code](file:///Users/alptugan/Zotero/storage/ELS8XFWB)
```

### 3.2. Blank Space Folder Paths
When there are blank spaces in the folder path, use `%20` for each blank space input.
```markdown
[path](file:///Users/alptugan/Documents/Teaching/official%20papers/COURSE%20CDF/COD%20417%20-%20Game%20Design)
```

## 4. Add Caption to images (Need to install Plug-in)
```markdown
![This is the caption](image.png)
```

```markdown
![[proxy.jpg|Caption text goes here-right|200]]
![[proxy.jpg|Caption text goes here-left|200]]
![[proxy.jpg|Caption text goes here-center|200]]

CSS obsidian_style.css içinde
JS code da DEVS kalsöründe
```

### Centered-scaled image with caption
```

> [!blank-container|float-center] 
> ![[p5js02.jpg]] 
> [Ken Thompson](https://www.wikiwand.com/en/articles/Ken_Thompson "Ken Thompson") and [Dennis Ritchie](https://www.wikiwand.com/en/articles/Dennis_Ritchie "Dennis Ritchie"), key proponents of the Unix philosophy

Ken Thompson, one of the founders of Unix, established its foundational philosophy on a minimalist and modular framework. Central to their software development ethos is the DOTADIW (Do One Thing And Do It Well) principle, which facilitates maintaining a compositional system as opposed to a monolithic one.
```


> [!multi-column|center]
>> [!blank|center]
>> ![[p5js02.jpg|450]] 
>> *Ken Thompson and [Dennis Ritchie](https://www.wikiwand.com/en/articles/Dennis_Ritchie "Dennis Ritchie"), key proponents of the Unix philosophy*

 Ken Thompson, one of the founders of Unix, established its foundational philosophy on a minimalist and modular  framework. Central to their software development ethos is the DOTADIW (Do One Thing And Do It Well) principle, which facilitates maintaining a compositional system as opposed to a monolithic one.


## Callout Opened & Collapsed
```markdown
> [!NOTE] Notification about Conclusion
> In order to develop the finalized method first students are taught ALAP categories. All of the students were familiar in programming. They took the previous class called COD 207 Programming in the first semester. So, The proposed method should be tested on new students in the upcoming semester to effectively see the results of the method integrated with ALAP categories. 
```
> [!NOTE] Notification about Conclusion
> In order to develop the finalized method first students are taught ALAP categories. All of the students were familiar in programming. They took the previous class called COD 207 Programming in the first semester. So, The proposed method should be tested on new students in the upcoming semester to effectively see the results of the method integrated with ALAP categories. 


```markdown
> [!NOTE]- Notification about Conclusion
> In order to develop the finalized method first students are taught ALAP categories. All of the students were familiar in programming. They took the previous class called COD 207 Programming in the first semester. So, The proposed method should be tested on new students in the upcoming semester to effectively see the results of the method integrated with ALAP categories. 
```
> [!NOTE]- Notification about Conclusion
> In order to develop the finalized method first students are taught ALAP categories. All of the students were familiar in programming. They took the previous class called COD 207 Programming in the first semester. So, The proposed method should be tested on new students in the upcoming semester to effectively see the results of the method integrated with ALAP categories. 

Set custom icons in callout UI elements. Edit the Obsidian css under Settings->Appearance scroll to bottom. Choose the icon from [Lucide](https://lucide.dev/icons/video?search=image) web site.
```css
.callout[data-callout="my-comment"] {
--callout-color: 99, 71, 214;
--callout-icon: lucide-message-square;
/* --callout-icon: message-o; // font-awesome
border: 3px solid rgba(0, 0, 0, 0.5);
border-radius: 5px;
box-shadow: 20px 20px 40px rgba(255, 0, 0, 0.5);*/
}
```

## 5. PLUG-INS
- [obsidian-zotero-integration/Templating.md at main · mgmeyers/obsidian-zotero-integration (github.com)](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md)
- Syntax →[Nunjucks (mozilla.github.io)](https://mozilla.github.io/nunjucks/templating.html#variables)
- [Obsidian-CSS-Snippets](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Wikipedia%20like%20infobox.md) Several css snippets for UI improvement.
- [raisabelatrix’s gists · GitHub](https://gist.github.com/raisabelatrix)
- [GitHub - vrtmrz/diffzip](https://github.com/vrtmrz/diffzip) Backup tool for obsidian
- [Private Obsidian AI: Add DeepSeek to your Obsidian with Ollama and CoPilot](https://www.youtube.com/watch?v=tC9wegnRyZk)
- [My Ultimate Obsidian Setup - YouTube](https://www.youtube.com/watch?v=ZQTj8ZSDFw4)
- [obsidian-banners-reloaded](https://github.com/dgcreations00/obsidian-banners-reloaded) Better than pexel banners. Titles can be aligned in the middle with emoji icons...

### Obsidian sync across devices
The following [video](https://www.youtube.com/watch?v=PScdHzUiBLA) shows how to sync Obsidian content on your devices. It uses Github to host your notes and sync the markdown notes between devices.

Sync Through third party apps, [video](https://www.youtube.com/watch?v=t3cy132eeUU)

> [!Tip]- Obsidian live-sync (Detailed instructions on [[Obsidian - Self-hosted LiveSync Setup on Docker]] page)
> [Obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/quick_setup.md#1-using-setup-uris) Github repo
> ```shell
> # The following script creates required ini file for the CouchDB 
> bash -c "$(wget -qLO - https://raw.githubusercontent.com/bigbeartechworld/big-bear-scripts/master/generate-obsidian-livesync-local-ini/run.sh)"
> ```
> [short video](https://www.youtube.com/watch?v=r4NKCDirm64)
> In order to make it work over WAN, it may require to edit the ini file

### AI
- [Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama) allows to send instruction to Ollama using Obsidian. You can set your own prompts customized for specific tasks.

- [Local GPT](https://github.com/pfrankov/obsidian-local-gpt) is similar to [Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama), plus you can use any OpenAI compatible server other than Ollama.

- obsidian://show-plugin?id=media-companion - Gallery viewer, it can help me to compare images, it supports search images based on color

- [obsidian-companion: Autocomplete your obsidian notes with AI, including ChatGPT, through a copilot-like interface.](https://github.com/rizerphe/obsidian-companion)

### Dataview
[Dataview in Obsidian: A Beginner's Guide - Obsidian Rocks](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/)
[How to Build Dataview Powered Dashboards in Obsidian - YouTube](https://www.youtube.com/watch?v=p3jqxQLHqUY)

### Advanced URI  + Shell Command
To use it on Leader Key app, follow the instructions below;
```shell
# Insert image resize command
obsidian://adv-uri?vault=Obsidian&commandid=custom-commands%3Acustom-cmd-insert-image-resize-center

# Sync teaching-blog
obsidian://adv-uri?vault=Obsidian&commandid=obsidian-shellcommands%3Ashell-command-yg4ogqaqea

```

## 6. Columns
### When is the best to ski in Switzerland?
> [!blank-container|float-right-small] 
> ![[image-PeelFriedrichsen_2018-2-x33-y499.png]]
> *Average Temperatures and Rainfall*

- Most tourists who intend to ski tend to visit **between Christmas and New Year**. Lots of locals go skiing during this period as well.
- **January** is the best month to ski in my opinion. Snow conditions are often good, there are fewer crowds and hotel prices are not as high.
- During **February**, it is common for locals to take ski vacations. If you go during this time, expect more crowds and higher hotel prices.


<div style="display:grid;grid-template-columns:1fr 1fr">
  <div>This is column 1</div>
  <div>This is column 2</div>
</div>
```html
<div style="display:grid;grid-template-columns:1fr 1fr">
  <div>col1</div>
  <div>col 2</div>
</div>
```

<div class="two-columns" style="--column-count: 2;">
This text is going to be formatted in 3 columns. If the --column-count parameter wasn't specified it would default to 2.
<img src="file:///Users/alptugan/Documents/Obsidian/Assets/profile2.jpg">
</div>
```html
<div class="two-columns" style="--column-count: 2;">
This text is going to be formatted in 3 columns. If the `--column-count` parameter wasn't specified it would default to 2.
<img src="file:///Users/alptugan/Documents/Obsidian/Assets/profile2.jpg">
</div>
```


## 7. Embed Google Drive Video
- Step 1: Get Your Video's Shareable Link
- Step 2: Modify the Link for Embedding from
`https://drive.google.com/file/d/ YOUR_FILE_ID /view?usp=sharing`
to
`https://drive.google.com/file/d/ YOUR_FILE_ID /preview`
- Step 3: Embed the Link in Your Note
  `<iframe src="https://drive.google.com/file/d/YOUR_FILE_ID/preview" width="600" height="400"></iframe>`

## 8. Wikilinks
Embed Content from different document into another document as excerpt.
```markdown
![[w7-The Social Construction of Facts and Artifacts Or How the Sociology of Science and the Sociology of Technology Might Benefit Each Other,Bijker and Pinch,  p. 11-45.#^ec21fc]]
```
![[w7-The Social Construction of Facts and Artifacts Or How the Sociology of Science and the Sociology of Technology Might Benefit Each Other,Bijker and Pinch,  p. 11-45.#^ec21fc]]

## 9. Tables
```markdown


|                                                                              |                                                                              |                                                                              |
| :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                           Tutorial 1 (Tiled Lines)                           |                          Tutorial 2 (Joy Division)                           |                         Tutorial 3 (Cubic Disarray)                          |
| [<img src="assets/t1.png" width="330" Height="330">](tutorial_1/src/main.rs) | [<img src="assets/t2.png" width="330" Height="330">](tutorial_2/src/main.rs) | [<img src="assets/t3.png" width="330" Height="330">](tutorial_3/src/main.rs) |
|                         Tutorial 4 (Triangular Mesh)                         |                          Tutorial 5 (Un Deux Trois)                          |                         Tutorial 6 (Circle Packing)                          |
| [<img src="assets/t4.png" width="330" Height="330">](tutorial_4/src/main.rs) | [<img src="assets/t5.png" width="330" Height="330">](tutorial_5/src/main.rs) | [<img src="assets/t6.png" width="330" Height="330">](tutorial_6/src/main.rs) |
|                        Tutorial 7 (Hypnotic Squares)                         |                          Tutorial 8 (Piet Mondrian)                          |                          Tutorial 9 (Hours of Dark)                          |
| [<img src="assets/t7.png" width="330" Height="330">](tutorial_7/src/main.rs) | [<img src="assets/t8.png" width="330" Height="330">](tutorial_8/src/main.rs) | [<img src="assets/t9.png" width="330" Height="330">](tutorial_9/src/main.rs) |

```


## 10. Comments in Markdown
The following  line will not be rendered when the document is exported as PDF.

[Documentation video path:]:  /mnt/SAMSUNG_500GB_HDD/2025_Artworks

`[Documentation video path:]:  /mnt/SAMSUNG_500GB_HDD/2025_Artworks`