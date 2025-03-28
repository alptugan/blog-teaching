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

## 4. Image Grid
```yml
---
cssclass: img-grid, img-captions
---
```

## 5. Add Caption to images (Need to install Plug-in)
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

## 6. PLUG-INS
### Obsidian Bridge
- [obsidian-zotero-integration/Templating.md at main · mgmeyers/obsidian-zotero-integration (github.com)](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md)
- Syntax →[Nunjucks (mozilla.github.io)](https://mozilla.github.io/nunjucks/templating.html#variables)
- [Obsidian-CSS-Snippets](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Wikipedia%20like%20infobox.md) Several css snippets for UI improvement.
- [raisabelatrix’s gists · GitHub](https://gist.github.com/raisabelatrix)

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
[Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama) allows to send instruction to Ollama using Obsidian. You can set your own prompts customized for specific tasks.

[Local GPT](https://github.com/pfrankov/obsidian-local-gpt) is similar to [Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama), plus you can use any OpenAI compatible server other than Ollama.

### Dataview
[Dataview in Obsidian: A Beginner's Guide - Obsidian Rocks](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/)
[How to Build Dataview Powered Dashboards in Obsidian - YouTube](https://www.youtube.com/watch?v=p3jqxQLHqUY)

## 7. Columns
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


## Wikilinks
Embed Content from different document into another document as excerpt.
```markdown
![[w7-The Social Construction of Facts and Artifacts Or How the Sociology of Science and the Sociology of Technology Might Benefit Each Other,Bijker and Pinch,  p. 11-45.#^ec21fc]]
```
![[w7-The Social Construction of Facts and Artifacts Or How the Sociology of Science and the Sociology of Technology Might Benefit Each Other,Bijker and Pinch,  p. 11-45.#^ec21fc]]


## Obsidianotion checklists:
- [ ] normal
- [/] / - incomplete
- [x] x - done
- [-] -  canceled
- [s] s - forwarded
- [<] < - scheduling

**Extras checklists:**
- [?] ? - question
- [!] ! - exclamation
- [*] * - star
- ["] " - quote
- [l] l - location
- [b] b - bookmark
- [i] i - information
- [S] S - savings
- [I] I - idea
- [p] p - thumbs up
- [c] c - thumbs down
- [f] f - fire
- [k] k - key
- [w] w - win
- [u] u - up
- [d] d - down