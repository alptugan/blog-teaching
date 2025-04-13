---
banner: "[[cover-datavis.jpg]]"
title: P5JS - Data Visualization
date: 2025-03-30 09:09:20
description: 
tags:
  - p5js
  - creativecoding
  - cod208
  - tutorial
aliases: 
draft: false
---
## Background
<font color="#0070c0">Data visualization</font> and <font color="#ffc000">infographics</font> represent distinct concepts that should not be conflated.

<font color="#ffc000">Infographics</font> serve as instruments for examining datasets or comprehending intricate information through bespoke visual components. The removal of these visual elements results in the loss of significant portions of information, if not all, unless supplemented by explanatory text (Önduygu, 2015). <font color="#ffc000">Infographics</font> represent complex entities, ideas, or processes using visual structures, either directly or indirectly via diagrams and similar means.

> [!blank-container|float-center] 
> ![[info-vs-datavis.jpeg]]

Conversely, <font color="#0070c0">data visualizations</font> employ attributes such as size and position of abstract visual elements to depict datasets, facilitating intuitive comprehension of extensive data tables, identification of notable patterns, and the generation of novel insights. <span style="background:#ff4d4f">Color</span> is often utilized for communicative purposes in information visualization, such as categorization through color-coding (Önduygu, 2015).

> [!blank-container|float-center] 
>![[datavis-cem.jpeg]]
>[[P5JS - Data Visualization#^Onduygu2011|Reference: Metallica On Stage]]


> [!blank-container|float-center] 
> ![[datavis-history-of-philosophy.jpg]]
> [[P5JS - Data Visualization#^Onduygu2018|Reference: History of Philosophy]]

> [!blank-container|float-center] 
> ![](https://www.denizcemonduygu.com/wp-content/uploads/2019/02/my20082018inmusic.jpg)
> [[P5JS - Data Visualization#^Onduygu2019|Reference: Visualization of Music Listening Logs]]

> [!blank-container|float-center] 
> ![](https://www.denizcemonduygu.com/wp-content/uploads/2024/04/turkiye2024.jpg)
> [[P5JS - Data Visualization#^Onduygu2024|Reference: Visualization of Türkiye's 2024 Local Elections]]

## Case Study
1. Find or create a table of data using Microsoft Excel or Google Sheets. [Starwars Characters - starwars_characters.csv](https://docs.google.com/spreadsheets/d/1yhAPaLPPWtN-k0Y0Qshq8HJQ7HIAMPHd6KVIKKi7SNc/edit?gid=1033929183#gid=1033929183)
2. Export the data as `.csv` file.
3. Use one of the examples provided at [[#Sources & Tutorials]] section to start visualize the data you gathered.

```js showLineNumbers title="sketch.js"
let data;

let nameArr = [];
let heightArr = [];

function preload() {
  data = loadTable("Starwars Characters - starwars_characters.csv", "csv", "header");
}

function setup() {
  createCanvas(1300, 900);
  noLoop();

  // number of columns - determines the number of properties (Keys)
  print("Number of Columns:", data.getColumnCount());

  // number of rows - determines the number of characters
  print("Number of Rows:", data.getRowCount());
  
  
  //print("Starwars Character Names", data.getColumn('name'));
  //print("Starwars Character Heights", data.getColumn('height'));
  
  nameArr = data.getColumn('name');
  heightArr = data.getColumn('height');

}

function draw() {
  background(200);
  textSize(10);
  textAlign(RIGHT);
  for(let i = 0; i < nameArr.length; i++) {
    text(nameArr[i], 100, 20 + 12*i);
  }
  
  for(let i = 0; i < heightArr.length; i++) {
    //text(heightArr[i], 150, 20 + 12*i);
    let redVal = map(heightArr[i], 66, 264, 0, 255);
    noStroke();
    fill(redVal,0,0);
    rect(110, 15 + 12*i, heightArr[i], 3);
  }

}

```

## Sources & Tutorials
1. [p5 js Working with Basic Data + CSV Files - YouTube](https://www.youtube.com/watch?v=y_UQdH3Zt2s) The easiest way to start reading data from remote URL. 
2. [Week 06: Data Visualization \| Creative Coding Spring 2025 Online](https://awcuny.github.io/creative_coding_sp25/week6) Check the **Helpful Resources** and  **Coding Examples** sections.
3. [Data Visualization - YouTube](https://www.youtube.com/watch?v=qZ2toGfv7ZQ) A walk through on how to find free data sources such as governmental web sites, etc...
4. [Habit Tracker Visualization by Pat Vitra](https://www.youtube.com/watch?v=mQ4Cst7o4Ek)
5. [loadTable Documentation on P5JS Website](https://p5js.org/reference/p5/loadTable/)


## Showcase From Students
> [!blank-container|float-center] 
> ![[datavis-fatma-imran.jpeg]]
> Fatma İmran, [Link to p5JS code](https://editor.p5js.org/alptugan/sketches/88TcKT0j5)

> [!blank-container|float-center] 
![[datavis-kubra-botanci-books-2.jpeg]]
> [datavis casestudy Books by alptugan -p5.js Web Editor](https://editor.p5js.org/alptugan/sketches/VBQghqFSH), Books

> [!blank|float-center]
> ![[datavis-tutku-calis-lifetime.jpeg]]
> Life time expiration by Tutku Çalış, [datavis-lifetime-case-3 by alptugan -p5.js Web Editor](https://editor.p5js.org/alptugan/sketches/jBOFIpNq1)

> [!blank|float-center]
> ![[datavis-darya-mahcup-mcdonals.jpeg]]
> McDonals Data by Darya Mahçup, [datavis-mcdonals-case 4](https://editor.p5js.org/alptugan/sketches/fr76xS-9B)


> [!blank|float-center]
> ![[cat-breeds.jpeg]]
> Cat Breeds by Melis, [p5.js Web Editor \| datavis-melis-cat-creeds-case 5](https://editor.p5js.org/alptugan/sketches/d89_fe6ru)


## References
Deniz Cem Önduygu, [Twitter](https://x.com/denizcemonduygu), [Webpage](https://www.denizcemonduygu.com/)

Önduygu, D. C. (2011). [Metallica on Stage - Deniz Cem Önduygu](https://www.denizcemonduygu.com/2011/12/metallica-on-stage-2/)^Onduygu2011

Önduygu, D. C. (2015). [Redefining Infographics - Deniz Cem Önduygu](https://www.denizcemonduygu.com/2015/06/redefining-infographics/)

xÖnduygu, D. C. (2018). [History of Philosophy Updated - Deniz Cem Önduygu](https://www.denizcemonduygu.com/2018/10/the-history-of-philosophy-updated/)^Onduygu2018

Önduygu, D. C. (2019). [My 2008–2018 in Music - Deniz Cem Önduygu](https://www.denizcemonduygu.com/2019/02/my-2008-2018-in-music/)^Onduygu2019

Önduygu, D. C. (2024). [2024 Yerel Seçimi: Nasıl Görselleştirmeli? - Deniz Cem Önduygu](https://www.denizcemonduygu.com/2024/04/2024-yerel-secimi-nasil-gorsellestirmeli/)^Onduygu2024

