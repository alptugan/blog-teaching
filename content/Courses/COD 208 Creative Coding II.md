---
title: COD 208 Creative Coding II
date: 2024-04-17
description: Ozyegin University Creative Coding Class Student Final Project Instructions
tags:
  - teaching
  - cod208
  - AI
aliases:
draft: false
---
## Notes
1. Check the [[Selected Computational Thinking Analysis Papers]] for how you should or not prepare your analysis about the project.
2. p5js [website](https://p5js.org/)
3. p5JS [cheatsheet](https://lms.ozyegin.edu.tr/pluginfile.php/72529/mod_label/intro/cheat%20sheet%20p5js.pdf)
4. Presentations [page](https://alptugan.github.io/Slidev_Presentations/index.html)
5. RandomSeed IG [link](https://www.instagram.com/cod207_randomseed/)
6. RandomSeed Webpage [selected projects](https://randomseed.cargo.site/)
### Topics
#### WebSockets + WebRTC + Arduino (Physical Computing)
[Creative Code Syllabus at Devin University](https://github.com/devinekask/creative-code-4-s25/tree/main)

#### ML5 Related
[Neural Network Model Training](https://github.com/shiffman/ml5-neural-network-example/tree/main)
[Golan Levin Example Codes](https://github.com/golanlevin/exercises/tree/main/16_machine_learning)

### AI & ML
- **2026-Content Update**, [What is Augmented Reality](https://wiki.slq.qld.gov.au/doku.php?id=workshops:public:augmentedreality:start)
- [Introduction](https://github.com/shiffman/ML-for-Creative-Coding/tree/main/01-introduction)
- [ml5.js Website](https://ml5js.org/)

* [ML Guitar Effect Control](https://www.youtube.com/watch?v=2HVP5dewl_8) Modify the guitar effect pedal  parameters via ML5  faceAPI #ml5 #Interface <br>[ML5 Face Api - Mask](https://www.youtube.com/watch?v=R5UZsIwPbJA) Create a mask illustration. Make it detect by the library. #ml5 #tutorial 
* [ML5 Hand Pose Detection](https://www.youtube.com/watch?v=vfNHdVbE-l4&t=170s) Hand and finger tip detection. #tutorial  
* [Hand Tracking With Media Pipe](https://www.youtube.com/watch?v=vfNHdVbE-l4) #tutorial  
* [Flappy Bird NUI](https://www.youtube.com/watch?v=0yUHgDmwr2E) Playing Flappy Birds via body gestures. #ml5 #game 
* [Elemental Powers AR](https://www.youtube.com/watch?v=s-aEP-bH83Y) Displays abstracted imagery of earth elements like water, wind, fire, soil... #ml5 #Interface #game 
* [Body Painting](https://www.youtube.com/watch?v=E_U_Ftip7z0) Creating generative art via yoga gestures. #ml5 #generativeart  
* [Posenet Xylophone](https://www.youtube.com/watch?v=p7nqgo8Dy_M&list=PLIsdHp2z9wFnH_ilTwCUl6wB5ylczTWIp&index=2) Blocks produce notes when left or right hand occupies the same space on the screen. #ml5 #Interface #music 
* [Volume up/down](https://www.youtube.com/watch?v=OQFv5lueUF0&list=PLIsdHp2z9wFnH_ilTwCUl6wB5ylczTWIp&index=5) Volume up or down a signal according to the user's ankle movement.
* [Head Tracking Piano](https://www.youtube.com/watch?v=3w3P_MyUKCo&list=PLIsdHp2z9wFnH_ilTwCUl6wB5ylczTWIp&index=7) Switch the notes via angle of the nose, and play the notes by opening mouth. #ml5 #Interface #music 
* [Body Pose Music](https://www.youtube.com/watch?v=lkClgzumWRk&list=PLIsdHp2z9wFnH_ilTwCUl6wB5ylczTWIp&index=8) Play and switch the notes according to the user's body control points. #ml5 #Interface #music 
* ⭐️ [Space Oddity - Performance w/ Posenet](https://www.youtube.com/watch?v=AIt7x0MvnrA&list=PLIsdHp2z9wFnH_ilTwCUl6wB5ylczTWIp&index=11) This performance uses the Posenet library in ml5.js to project the face of David Bowie as an image which follows my face during the performance. The lips moved based on the volume of my singing by using the Amplitude() object in the p5.Sound library. The other visuals in the sketch are also made in p5.js.. #ml5 #Interface #audiovisual 

* [Teachable Machine - Sound](https://www.youtube.com/watch?v=TOrVsLklltM&list=PLRqwX-V7Uu6aJwX0rFP-7ccA6ivsPDsK5&index=3&t=608s) Sound classifier to play snake game with different spoken words. #tutorial #ml5 
* [Teachable Machine - Pose](https://youtu.be/FYgYyq-xqAw?si=nBGWar0w_5Wm5oCI&t=1361) YMCA song with body gestures. The tutorial might be outdated. Check the following [tutorial](https://www.youtube.com/watch?v=T99fNXTUUaQ&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=5) #tutorial #ml5 #game 
* [Teachable Machine - Image](https://www.youtube.com/watch?v=pbjR20eTLVs&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=4)How to train model based on different images. #tutorial 
* [Painting with Body](https://www.youtube.com/watch?v=eN843IOaLxM) Creates symmetrical drawing via hand gestures. 
* [Hand Pose - Emoji](https://www.youtube.com/watch?v=oTnjExkmPTU&list=PLzujfpc1847-TGyVlwm9TNTvN6xWSqELM) Display an emoji according to prerecorded poses. #ml5 #Interface 
* [Guitar Chord Extractor](https://www.youtube.com/watch?v=27n8HSidoC0) Displays chords according to user hand pose. #ml5 #music 
* [ML5 Machine Learning In JS](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) The complete playlist of Daniel Schifman.<br>
## week 1
[week 01 Presentation](https://alptugan.github.io/Slidev_Presentations/week01_cod_208/dist)
- 👀 Keep your eyes open. Choose a thing. Let's say your favorite cup at your home, or a specific bird that you hear everyday, or your pet, or a tree at the campus. Review the example [tutorial](https://openprocessing.org/sketch/1879055). On the last page of the tutorial, you will see that whenever you run the code, it generates different facial expressions.  
- As we did in the previous semester, break it apart using CT principles. Redraw it using p5JS.  
- Make it parametric. So whenever you run the app, determine its properties randomly.  
- ⏫ Upload the sketch to your openProcessing account.  
- ❗Submit the p5js link.  
- 📖 Read Delusions of Dialogue: Control and Choice in Interactive Art  
- 📺 Watch the videos on the last presentation page.
- 📖 Read [Delusions of Dialogue: Control and Choice in Interactive Art](https://www.jstor.org/stable/1576847)
- 📺 Watch the videos in the presentation. Read about [arrays](https://happycoding.io/tutorials/p5js/arrays#array-length)
### Selected Assignments A
[Alara Yılmaz](https://openprocessing.org/sketch/2537613), [Aylin Bursalıoğlu](https://editor.p5js.org/aylin.bursalioglu/sketches/4l-Xl5xxKn), [Cansu Özbek](https://openprocessing.org/sketch/2539147), [Deniz Sönmez](https://openprocessing.org/sketch/2538279), [Duru Seyhan](https://editor.p5js.org/Duruzcan/sketches/Ycvl7wKMk), [Gizem Çobanoğlu](https://openprocessing.org/sketch/2539085) ⭐, [İdil Akan](https://editor.p5js.org/idil.akan/sketches/cRIUGZx0y), [İris Eryılmaz](https://editor.p5js.org/iriseryilmaz/sketches/MKOAVfqTK), [Lana Jamal](https://openprocessing.org/sketch/2538654), [Naz İpek](https://openprocessing.org/sketch/2538172), [Zaman Khan](https://openprocessing.org/sketch/2537004)

### Selected Assignments B
[Abeerah Malik](https://editor.p5js.org/Abeerah_malik/sketches/WClgazXPt), [Aleyna Kabaklar](https://editor.p5js.org/aleyna03/sketches/zxnioc4Ps), [Azra Sadıkoğlu](https://editor.p5js.org/azrasadikoglu/sketches/5D18hhWKb), [Bahar Kızılkaya](https://openprocessing.org/sketch/2536989), [Boray Ünlü](https://openprocessing.org/sketch/2538167), [Duru Seyhan](https://openprocessing.org/sketch/2538147), [Duygu Aksöz](https://openprocessing.org/sketch/2538625), [İrem Apaydın](https://openprocessing.org/sketch/2538871), [Kerem Alp](https://openprocessing.org/sketch/2539084), [Kerme Yaşlıçimen](https://editor.p5js.org/KeremY./sketches/PuyJ--loG), [Zeynep Erol](https://openprocessing.org/sketch/2538652)

## week 2
[week 02 Presentation](https://alptugan.github.io/Slidev_Presentations/week02_cod_208/dist)

#### 2025-2026
1. Finalize the project that you started in class time. You have two options. Choose 1 or 2. It is optional to submit both of them.  
    1. Create instances of your object (Class) and distribute them on the canvas using randomness. [Example](https://openprocessing.org/sketch/2183462)
    2. Create instances of your object (Class) and distribute them on the canvas using tiling. [Example](https://editor.p5js.org/alptugan/sketches/kw-849J6M)
2. The challenge is whenever we run the code, the formalistic features of your Object (Class) change randomly.
3. Upload a screenshot of your choice. Review the keyPressed() function in [Example](https://editor.p5js.org/alptugan/sketches/kw-849J6M) to implement into your code.
#### 2024-2025
- Convert the week 01 assignment to a class. [Reference1](https://openprocessing.org/sketch/2183375), [Reference2](https://openprocessing.org/sketch/2183462)
- Create instances of your class by initializing it using different parameters.
- Create at least 10 different objects in different features.
- Position all of the objects in the same sketch. Do not create different sketches of each instance.
- ⏫ Upload the sketch to your openProcessing account.
- ❗Submit the openprocessing link.
- ❗Submit the sketch source code as zip file as well.

### Selected Assignments A

### Selected Assignments B
[Abeerah Malik](https://editor.p5js.org/Abeerah_malik/sketches/igAewG5F4), [Azra Sadıkoğlu](https://openprocessing.org/sketch/2543596), [Boray Ünlü](https://openprocessing.org/sketch/2546214), [Duru Seyhan](https://openprocessing.org/sketch/2542961), [Duygu Aksöz](https://editor.p5js.org/duygu.aksoz/sketches/Th9bVyaHn), [Kerem Yaşlıçimen](https://editor.p5js.org/KeremY./sketches/5OgDrQQGQ), [Zeynep Erol](https://openprocessing.org/sketch/2546480)
## week 3
#### 2025-2026
- Utilize Arrays to dynamically control multiple objects.
- Distribute objects on the canvas.
- Animate them up/down, left/right
- [Creative Coding Fest](https://ccfest.rocks/)

#### 2024-2025
- Write a mini game story. 
- Design the storyboard. Keep the document size at 800 x 800 pixel and resolution to 72 DPI.
- Design Intro Scene: A background, Clearly explain instructions to play the game shortly. A button to start the game.
- Design Game Scene: A background, the hero, and enemies.
- Design Final Scene: A background, the result of the game. SUCCESS or FAIL or CONGRATS depending on your scenario.
- Export UI elements as PNG files.
- 📺 Check the videos [Former Student Games](https://youtube.com/playlist?list=PLvcJjvBzWDXan8ZkLsE5gYtNX9AhjQNW-&si=3JG3bH1E8inVrCJ4).

## week 4
#### 2025-2026
Showcase of games on itch.io web platform, [links](https://itch.io/games/made-with-p5js)
Making a software visual guide, [link](https://www.makingsoftware.co/)
Feedback for the games
**Assignment**
Dear all,  
Let me clarify one thing. Those who do not attend classes submit irrelevant assignments. It does not mean that if your code is running, you will get high grades. This is a friendly reminder for you. Please read the LMS submissions carefully or ask your friends in the class before submission. For this game project, I won't decrease anyone's grade. But for the upcoming projects, if I receive irrelevant assignments, do not shock when you see your grades 🤷‍♂️. You're warned!

For the next week, I want all of you to finalize your games. Each game must have 3 different scenes, as discussed in the lecture time. You will be graded according to your game interface design (40 points) and game mechanics (40 points).   
1. Submit the link to your project. (10 points)  
2. Submit a zip version of your project. (10 points)  
3. Submit screen-capture video of your game play. Keep it under 2 minutes. Convert the screen capture to mp4 video format. [Handbrake Software tutorial](https://www.youtube.com/watch?v=Oar4ESK-g1g) (10 points)

For more information about the game format, visit the [link](https://alptugan.github.io/blog-teaching/Tutorials/P5JS---Casual-Game).

#### 2024-2025
1. 👀 Implement all of the scenes that you design for your game in P5Js.
2. You can use the codes in my game and implement to yours. Fork my [game template] to adapt your game scenes. For those who have different game mechanics than my game, do your best. I want to see the implemented design in P5Js. Please ask to me or your friends in class whenever you need help or get stuck!!! I can provide you tutorials and reference code snippets.
3. ⏫ Upload the sketch to your openProcessing account.
4. ❗Submit the openprocessing link.
5. ❗Submit the sketch source code as zip file as well.

## week 5 - Marker-based AR
Other than p5JS addon. there is a more advanced web-based AR library built with JS [MindAR \| mind-ar-js](https://hiukim.github.io/mind-ar-js-doc/)
#### 2025-2026
Review the last year student works from the following [link1](https://drive.google.com/drive/folders/1edO4_MdxBJG1ZL_TSAljGU7GBJtT5Ljt?usp=sharing) and [link2](https://drive.google.com/drive/folders/1ndAaIwq1CQCZ2IgkZDWIXEeU6Jo0Pxcy?usp=sharing).

PLEASE READ CAREFULLY!
**You have 3 options. Choose one below.**
1. **Art:** Create an interactive AR sketch where the fiducial marker displays a unique piece of digital art or animation.
2. **Education:** Design an AR-based educational tool that uses fiducial marker to teach a concept (e.g., design, astronomy, biology, geography, or math).
3. **Interactive Poster:** Create a poster about a topic of your choice. You can use a material that you did before in your other typography or basic design courses. Attach the marker to the corner of your poster. Whenever, the user points the camera on to the poster display some more information or animation related to the printed design.

You can use a single or multiple markers if you want. Refer to the example [sketch](https://openprocessing.org/sketch/1898840) In this sketch you need to print the first 6 markers (0wFrame.png, 1wFrame.png, 2wFrame.png, 3wFrame.png, 4wFrame.png, 5wFrame.png) from the following [link](https://github.com/tetunori/p5.simpleAR/tree/main/markers).

**General Submission Guidelines for All Assignments:**
1. **Code Submission:** Submit the p5.js source code and any additional assets (images, sounds, etc.) used in the project.
2. **Zipped Project Folder:** Compress the entire project folder.
3. **Proof of Concept Video:** Record a video using a mobile phone to demonstrate the AR application in action. The video should clearly show the fiducial markers being detected and the AR content responding accordingly.

**Sign up for a free account on the [GitHub](https://github.com/) web page due to the upcoming class.**

**Augmented Reality**
- Your games must be finished and finalized. 
- I don't want to hear any apologies or last day help requests.
- Upload your whole sketch folder.
- Submit the link of your game.

## week 6 - ML with Teachable Machine
#### 2025-2026
Watch the following videos in order.
1. [Introduction to Machine Learning](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/0-introduction/1-introduction)
2. [Pose Detection ](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/7-bodypose/pose-detection)
3. [Hand Pose Detection with ml5.js ](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose)
4. [Face Mesh with ml5.js](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/facemesh)
5. [ml5.js 1.0 and Guest Conductor Patt Vira](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/0-introduction/patt-vira)

**Assignment 06**
Option 1: Choose one of your algorithmic art assignments code from the last semester or create a new algorithmic art sketch. When we run the app, the user can change the properties of your art work by using his/her hand gestures. Use the code [Hand Pose Detection with ml5.js ](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose) as reference. Watch related videos and review the code examples on the page to get inspiration.

Options 2: Create three different masks in Photoshop or Illustrator. Upload the masks to your project. Use the code  [Face Mesh with ml5.js](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/facemesh) as reference. Whenever we run the app, make the app chooses randomly one of the masks and display on the user's face.
### Assignment 1: ML
- You can use face, hand, or body position to move your character. Refer to the [example code](https://openprocessing.org/sketch/2213827) that I wrote in class time.
- Upload the link of your sketch
- Upload The codes as well in zip format.
### Assignment 2: Mask
- You can choose whatever image you want.
- You can create illustration using simple shapes.
- We will write the code in class time.   
- Upload the image you choose. 
- References : [Computational Mask Repo](https://www.pinterest.com/alptugan/02-computational-masks-repo/more_ideas/?request_params=%7B%221%22:%2039,%20%227%22:%20%221100798308726688953%22,%20%228%22:%20%22575686833557453072%22,%20%2232%22:%2020,%20%2237%22:%20%22Ideas%20for%20your%20board%22%7D&full_feed_title=Ideas%20for%20your%20board&view_parameter_type=3173&pins_display=3&ideas_referrer=25), [Generative Masks](https://generativemasks.io/), [Ref3](https://www.britannica.com/art/mask-face-covering/The-functions-and-forms-of-masks)

## week 7 - ML
#### 2025-2026
Review the selected [student works](https://drive.google.com/drive/folders/1XI32tritP87MVNYYPZYmQwG1VafL1Ih9?usp=sharing) from previous year.
You may choose one of the following:

**Option 1: Interactive Art Installation**
**Objective:** Create an interactive digital art piece that responds to real-world objects.

**Instructions:**
1. Collect and Train: Gather at least 10 distinct objects.
2. Develop with p5.js:

Integrate the trained model into a p5.js sketch.
Design visual elements that change based on the detected object. For example, displaying different animations or colors corresponding to each object.


**Option 2: Educational Game**
**Objective**: Develop a simple game that teaches users about the objects recognized by the classifier.

**Instructions:**
1. Collect and Train: Select 10 educational items (e.g., fruits, geometric shapes, tools). Train a model using Teachable Machine to identify each item.
2. Game Development: Create a p5.js game where users present objects to the camera. Provide feedback or facts about the object upon correct identification.

**Option 3: Assistive Tool**
**Objective**: Build a tool that aids individuals with visual impairments by audibly identifying objects.

**Instructions**:
1. Collect and Train: Assemble 10 everyday objects. Train an image classifier using Teachable Machine to recognize these items.
2. Develop with p5.js: Integrate the model into a p5.js sketch.

Implement functionality to speak the name of the detected object using the p5.js sound library.


#### 2024-2025
##### Please READ💢
##### No Late Submissions❗❗❗If you don't understand ask me, or your friend, or to an AI chatbot.  
- Use **Decomposition**, **Flow**, **Translation**, and **Algorithm Design** steps for your mask generation. I want to see how you implement your ideas. Upload text, diagram or any kind of material that you include your programming activity. Create a pdf for your design process as I show you in the presentation. You don't need to include material for the Algorithm Desin section since your codes on openProcessing is the last step actually. **(40 points)** [Tutorial](https://openprocessing.org/sketch/2217223 "https://openprocessing.org/sketch/2217223")
- Write down the mask code. **(20 points)**
- Apply ML5 library to enable head tracking on camera. **(20 points)** 
    - Head Tracking Code: [ML5 Face Tracking Example](https://openprocessing.org/sketch/2213624 "https://openprocessing.org/sketch/2213624")
    - Head Tracking With Mask Implementation Code: [Face Tracking with Mask Example](https://openprocessing.org/sketch/2220776 "https://openprocessing.org/sketch/2220776")
- Skim the attached document (Form+Code Book, Repetetion pg. 42-65)
- Choose an image that includes repetition in the artwork from the follwing [link](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d "https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d").
- ❗Submit the openprocessing link.
- ❗Submit the sketch source code as zip file as well.

## week 8
### 2025 - 2026
#### Personal Portfolio Inspiration
The only web design inspiration sites you need: 
[Build, Share, and Explore Developer Portfolios](https://www.webportfolios.dev/) → Portfolio creation guides 
[http://curated.design](https://t.co/ZWHuJfxuQf) → My personal fav
[http://land-book.com](https://t.co/0iDg051tam) → Large selection 
[http://landing.gallery](https://t.co/Eb3u3iUbsy) → All niches 
[http://saaslandingpage.com](https://t.co/UAyVWJUgrY) → SaaS 
[http://admiretheweb.com](https://t.co/Va5E1qUP9t) → Unique 
[http://supahero.io](https://t.co/HkdCFO4TY2) 
Would add [http://mobbin.com](https://t.co/KOkRsFCf9R) to this!
[unicorn.studio — No-code WebGL Tool](https://www.unicorn.studio/)
Some other list of inspirational [projects](https://urlist.xyz/u/itaydr/l/67d14cadc105f5742b3f7533) to check.
[Built At Lightspeed - 4000+ Themes, Templates & UI Kits](https://www.builtatlightspeed.com/?themes%5BrefinementList%5D%5Bcategories.ssg%5D%5B0%5D=html&themes%5BrefinementList%5D%5Bdistribution%5D%5B0%5D=free)The world's largest marketplace of themes, templates and UI kits for the modern stack.

#### Hand pose Examples
[p5.js Web Editor \| Hand Pose Thumbs Up or Down](https://editor.p5js.org/codingtrain/sketches/0_qPHtsF_)

#### Pose Net
[Object Detection and Speech Synthesis](https://editor.p5js.org/alptugan/sketches/U-jA-D_Pl)

#### Teachable Machine

### 2024 - 2025
- Finalize the code and submit the source code and openprocessing link.
- Choose the most appropriate options for the artworks included in each survey. You can choose multiple choices.
## week 9 - COMFYUI integration 
[GitHub - gohai/p5.comfyui-helper: A library for p5.js which adds support for interacting with ComfyUI](https://github.com/gohai/p5.comfyui-helper?tab=readme-ov-file)

## week 10 - Data Vis - REST API
New example on fetching image via rest API [[REST API#DOG API]]
#### 2025-2026
Load a CSV dataset and create a **static** data visualization that reveals interesting patterns, comparisons, or distributions. Your visualization should be visually engaging and thoughtfully designed. Do not forget to include a legend in your design.

**Inspiration:** Look at [Information is Beautiful](https://informationisbeautiful.net/) for creative static visualizations!

##### Suggested Datasets (or find your own):
- [Weather Data](https://www.kaggle.com/datasets) (temperature, rainfall by city)
- [Movie Ratings](https://www.kaggle.com/datasets) (scores, genres, budgets)
- [Sports Stats](https://www.kaggle.com/datasets) (player performance over time)
- [Social Data](https://www.kaggle.com/datasets) (population, income, education)
    
##### Submission Guidelines:
- Submit p5JS link
- Submit source code as a zip file.

##### Mood board & Final Project Proposal Submission Guideline:
- Submit your mood board as a separate JPG file.
- If you have already had a specific idea about the final project, you must prepare a document, diagram, illustration, or anything that visualizes your project to help us understand the details.

## week 11
Project Proposal Submission

- **Game Showcases**
	1.  [Side Scrolling Dog Game](https://aijs.io/project?user=Tezumie&project=SK89) Use space to jump. Hold shift to speed up. Collect bones. Runaway from obstacles. Pixelart game.
	2.  [Platformer Game](https://aijs.io/project?user=Tezumie&project=p5play-AutoTile-Platformer) 
	3.  [Line Physics Game](https://aijs.io/project?user=quinton-ashley&project=Draw_the_Line)
	4.  [One Million Particles](https://aijs.io/editor?user=Tezumie&project=1-Million-Particles)
- **Online Events**
	1. [8-bit II: Computer Art From The 1980s](https://www.eventbrite.com/e/8-bit-ii-computer-art-from-the-1980s-tickets-1216653897559) 

# API Calls
Check the following page ([[REST API#Free Restful API list|List of Free Rest APIs]]) to access more API-related content resources in the free version.

# Machine Learning 
Reference: [Daniel Schiffman](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/tree/main)
### 1: [Introduction](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/01-introduction) (9/5)
### 2: [Transfer Learning](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/02-transfer-learning) (9/12)
### 3: [Pre-trained models 1: Body](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/03-body-models) (9/19)
### 4: [Pre-trained models 2: Face and Hand](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/04-face-and-hand-models) (9/26)
- [Facemesh](https://editor.p5js.org/ima_ml/sketches/hyxD1BVVn) Generates facemesh...
- [Lip Drawing](https://editor.p5js.org/ima_ml/sketches/8xB4wpH16) Extract shapes from another shape.
- [Finger Tracking](https://editor.p5js.org/jackbdu/sketches/4Pd5XgWtC) Generates particles attached on index finger
- [Finger tracking 2](https://editor.p5js.org/jackbdu/sketches/s3uqE-9fA) Generate custom shape using index finger and finger tip.
- [NUI with fingers](https://editor.p5js.org/jackbdu/sketches/JwMBQyES3) Scale up/down the loaded image real-time
### 5: [Training a Neural Network 1](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/05-neural-networks) (10/3)
### 6: [Training a Neural Network 2](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/05-neural-networks) (10/10)
### 7: [ml5.js project presentations](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Project-2) (10/17)
### 8: [Introduction to Transformers.js](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/06-transformers-js) (10/24)
### 9: [Language Models](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/07-llms) (10/31)
### 10: [Image Generation Models](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/08-image-models) (11/7)
### 11: [Final Project Proposals](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/final) + Fine-Tuning (11/14)
### 12: [Final Project Proposals](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/final) + TBD (11/21)
### 13: [Final Project Play Testing](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/final) (12/05)
### 14: [Final Project Presentations](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/blob/main/final) (12/12)

# Final Project Instructions
✍️ If you think that your project is ready, fill out the submission form also. Click the link to download [Project Template](COD208-Project%20Template.docx)


## Final Project Grading Policy

As it is declared in the course syllabus, your final project has 30% weight on your final grade. You will be graded according to the following criteria;

| Description                         | Points      |
| ----------------------------------- | ----------- |
| Detailed Comments in the Code       | 20 PTS      |
| Use of Variables                    | 20 PTS      |
| Aesthetics, Design Balance, Context | 20 PTS      |
| Project Document                    | 20 PTS      |
| Presentation                        | 20 PTS      |
| **TOTAL**                           | **100 PTS** |

🧠 You are free to propose any project idea as long as it includes programming. 

If you need a topic or theme, you can utilize one of the following concepts;
1. A project including machine learning ideas using → [ml5 library](https://ml5js.org/community/) 
2. A project including interactive platform games. Check previous students’ works → [1](https://youtu.be/2-yNuso1X60?si=m8G2TjMhKRzbFtjG), [3](https://youtu.be/1wn6V5YheH0?si=fS63lD9hldYp2DTg), [4](https://youtu.be/6S3pfdNX6Ic?si=g__dyO-aTq6xyUeS), [5](https://youtu.be/uoxfz_VDW8k?si=JFwFxmHXobj5PBuD), [6](https://youtu.be/KXWV60toNls?si=usisEuFszISmCX0j), [7](https://youtu.be/_aTI0iXwlKY?si=3kRhqMlR6K_XUQMk), [8](https://youtu.be/dLC-OlwX4uQ?si=1GqTE1BAqf1xzwMG)
3. Interactive educational applications and games. Check previous students’ works → [1](https://youtu.be/7CFwzVjRJ8c?si=aIGnoZDaKuhaMmgO)
4. Puzzle games → [1](https://youtu.be/LKxFQc5UQmQ?si=7aOG9ZxDmoEVhWU9)
5. Sound interactive games and applications → [1](https://youtu.be/0n8UBVIDWBI?si=Hru5zYsUwh81skqZ), [2](https://youtu.be/KzduO1aqbq8?si=Gr_YKhCLqUNZhVB5)
6. Interactive applications about a specific theme → [Travel Guide](https://youtu.be/Sb1cD9rKpq0?si=15VGKoPdc16DHwBA), [Cancel Culture](https://youtu.be/1Uo1cRhzrvU?si=tWvmq9JqJwBKWVzc)
7. Interactive illustration stories → [1](https://youtu.be/CjQd5ElNJ0I?si=TUmPg-LA5W4nHzkV)
8. Audiovisual VJ apps → [ASCII-art](https://youtu.be/6graAekLCXY?si=7_xwvgfwdqG2vsZf), [Drum Performance Visualizer](https://youtu.be/KbOobb4JS6I?si=_c5ByXL0hXMCjh4O), [Op-art](https://www.youtube.com/watch?v=MgMwV4yS0Xg&list=PLvcJjvBzWDXan8ZkLsE5gYtNX9AhjQNW-&index=2&t=33s), [The Story of Nothing](https://www.youtube.com/watch?v=E68__n-touk&list=PLvcJjvBzWDXajuij3LYytZuwcNjfvKwh-&index=2)
9. Skeuomorphic conceptual applications → [1](https://youtu.be/RmVb9Zwyfvo?si=CN06quDjg0Sf7WBD)
10. Generative Art (Recursion, Fractals) → [1](https://youtu.be/aWZzg2yD5e8?si=jsWNrqpHHRc2fbmw)
11. Generative Art (Image Processing) → [1](https://youtu.be/wCpvdvmlqVs?si=lPtpk6QzQyz20Kjf)
12. Generative Art (Abstracted formalism) → [Fish](https://youtu.be/sDe83WXMkP8?si=FuZzzLOJz2WjfbSk), [Generative Logo](https://youtu.be/jBGm0xtxI1Y?si=eu5HLu_JRoqnF8mx)
13. A project including Algorithmic Art Praxis. Choose multiple categories from the cheat sheet that I distributed to you in class and create series of artworks according to a theme and print them to fine papers. Check the existing artworks to get inspired → [link](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d). You can view specific category items using ALAP website.
   