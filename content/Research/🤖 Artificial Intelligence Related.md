---
title: Artificial Intelligence Related
date: 2025-01-31
modfification date: Friday 31st January 2025 18:25:52
description: 
tags:
  - AI
  - Ollama
aliases: 
draft: true
---
## Introduction
I love using Ollama time-to-time on my local machine. I mostly use it in my Obsidian vault for academic purposes such as paraphrasing, language translation, and so on…

[Ollama OCR](https://github.com/imanoop7/Ollama-OCR) A powerful OCR (Optical Character Recognition) package that uses state-of-the-art vision language models through Ollama to extract text from images. Available both as a Python package and a Streamlit web application.

[big-AGI]()
I am using the big-AGI couple of times. Somehow it doesn’t fit my needs in terms of UI. There some irrelevant features that doesn’t make sense. 

⭐️[Open Web UI](https://github.com/open-webui/open-webui) Tested on damp server. It cannot use GPU or my hardware is not good enough to run the models.

[https://gpt4all.io/index.html](https://gpt4all.io/index.html)

[https://github.com/go-skynet/LocalAI](https://github.com/go-skynet/LocalAI)

AutoGPT
    
Create custom assistant → [https://www.youtube.com/watch?v=Ox8hhpgrUi0](https://www.youtube.com/watch?v=Ox8hhpgrUi0)
    
Setup additional model → [https://www.youtube.com/watch?v=MGr1V4LyGFA](https://www.youtube.com/watch?v=MGr1V4LyGFA)
    

[https://github.com/OpenInterpreter/open-interpreter?tab=readme-ov-file](https://github.com/OpenInterpreter/open-interpreter?tab=readme-ov-file) → Ollama’yla da çalışıyor. Bilgisayar otomasyon gibi işlere yarıyor. E.g: Bilgisayarı night moda çevir gibi…

[Witsyai](https://witsyai.com/)


## Code Helper
[Llama Coder](https://github.com/ex3ndr/llama-coder) alternative to Copilot
[Tabby](https://tabby.tabbyml.com/docs/getting-started) Alternative code helper works with VS Code
[https://refact.ai/pricing/](https://refact.ai/pricing/)
[Codeium](https://codeium.com)
## Obsidian Plug-ins
[Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama) allows to send instruction to Ollama using Obsidian. You can set your own prompts customized for specific tasks.

[Local GPT](https://github.com/pfrankov/obsidian-local-gpt) is similar to [Obsidian Ollama](https://github.com/hinterdupfinger/obsidian-ollama), plus you can use any OpenAI compatible server other than Ollama.

## Ideas
Use llava model to analyze image, and generate textual content. Example usage [here](https://www.youtube.com/watch?v=GWB9ApTPTv4) 

## Tutorials
### Video & Written
[Ollama Course – Build AI Apps Locally](https://www.youtube.com/watch?v=GWB9ApTPTv4) This comprehensive course provides instruction on configuring and utilizing Ollama to develop sophisticated artificial intelligence applications within a localized environment. The hands-on curriculum encompasses topics such as model retrieval and customization, REST API integration, Python programming, and practical project implementation, including examples like a Grocery List Organizer, RAG System, and an AI Recruiter Agency. This course is particularly suited for developers and individuals with a keen interest in artificial intelligence who wish to translate their concepts into tangible realities utilizing local large language models.

### Code Snippets to Use REST API
```bash
# Curl message to retreive data over network
curl http://localhost:11434/api/generate -d '{
"model": "llama3.1",
"prompt": "tell me about Erewhon novel. Who did write it?",
"stream": false
}'

# Curl message to retreive data over network as JSON
curl http://localhost:11434/api/generate -d '{
"model": "llama3.1",
"prompt": "tell me about Erewhon novel. Who did write it?",
"stream": false,
"format": "json"
}'



```


## Glossary
**Model**: machine learning model, deep learning model, AI model, statistical model… they all mean the same thing. The model is just a mathematical expression that takes something as input and spits out something as output. An AI is just a mathematical model. It tries to replicate (that is: _models_) something in the real world, whether that’s raw data, pictures, music, etc. In AI image generation, the model takes text as an input and spits out images as output.

**Guidance Scale/CFG (Classifier Free Guidance) Scale:** it adjusts how much the image will be like your prompt. Higher values keep your image closer to your prompt.

**Diffusing**: the mechanism used by AI image generation models to generate images. In a nutshell: the AI starts with an image that consists entirely of just random noise, and **step** by step it tries to remove the noise until the final image is created. The noise that is removed in every step is conditioned by the prompt given, that’s how you end up with a clear image and not with just random noise.

**Open-source:** technology whose source code is publicly available. Anyone can access the source code and read it. Depending on the open source license used by each project, the technology might be modified, redistributed or available for commercial and non-commercial uses. Stable diffusion is an open-source technology. It means everyone can see its source code, modify it, create something based on Stable Diffusion and launch new things based on it.

**Prompt**: the description of the image the AI is going to generate.

**Render**: the act of transforming an abstract representation of an image into a final image. In 3D modelling, if you’re creating a 3D model, that’s just polygons and mathematical equations. To get an actual image out of them, you need to render it (which involves calculating shadows accurately, computing how light reflects off surfaces and what colors it generates in doing so, etc.). Technically speaking, this is not what Stable Diffusion does. This is the old way. Stable Diffusion _**diffuses**_ an image, rather than rendering it.

**Sampler**: the diffusion sampling method.

**Sampling Method:** this is [quite a technical concept](https://twitter.com/iscienceluvr/status/1564847717066559488?s=21&t=MBuwBBKUWCf8FrXksxaoEg). It’s an option you can choose when generating images in Stable Diffusion. In short: the output looks more or less the same no matter which sampling method you use, the differences are very subtle and it shouldn’t matter much which one you select. [Some people](https://www.youtube.com/watch?v=Oq_YUIBFewg) say there are three groups: group A (DDIM, Euler, DPM2, HEUN, LMS, DPM_adaptive and PLMS) is more soft and artsy; group B (DPM_fast) gives more variety and random results; and group C (DPM2, Euler_a) gives results that are a bit more photorealistic and clear. To recap: if you want soft and artsy, you could use DPM_adaptive or DDIM; if you want variety go for DPM_fast; and if you’re looking for photorealism try DPM2 or Euler_a.

**Seed:** used to limit randomness. Generations with the same prompt, params and seed will result in the same image.

**Steps**: how many steps to spend generating (diffusing) your image. More steps, more image quality and time to generate.

**Text-to-image**: A type of AI, like Stable Diffusion, that takes text prompts as input and outputs images.

What is LoRA?
    ref: [https://softwarekeep.com/help-center/how-to-use-stable-diffusion-lora-models](https://softwarekeep.com/help-center/how-to-use-stable-diffusion-lora-models)
  
    LoRA stands for Low-Rank Adaptation. It allows you to use low-rank adaptation technology to quickly fine-tune diffusion models. To put it in simple terms, the LoRA training model makes it easier to train Stable Diffusion on different concepts, such as characters or a specific style. These trained models then can be exported and used by others in their own generations.
    
    Stable Diffusion models have been gaining popularity in the field of machine learning for their ability to generate high-quality images and text. However, one major drawback of these models is their large file size, making it difficult for users to maintain a collection on their personal computers. This is where LoRA comes in as a training technique to fine-tune Stable Diffusion models while maintaining manageable file sizes.
    
    LoRA models are small Stable Diffusion models that apply smaller changes to [standard checkpoint models](https://softwarekeep.com/help-center/best-stable-diffusion-models-to-try), resulting in a reduced file size of 2-500 MBs, much smaller than checkpoint files. LoRA offers a good trade-off between file size and training power, making them an attractive solution for users who have an extensive collection of models.
    
    **Model Types**
    - Character LoRA: A model trained on a specific character, such as a cartoon or video game character. Character LoRA is able to accurately recreate the look and feel of a character, as well as any key features associated with them. This is the most common type of LoRA, as generating characters without this training data is often tricky and inconsistent.
    - Style LoRA: Style LoRA shares many similarities with character LoRA, but instead of training on a specific character or object, it focuses on an artistic style. This type of model is usually trained on art by a specific artist, giving you access to their signature style in your own work. Style LoRA can be used for anything from stylizing reference images to creating original artwork in that same style.
    - Concept LoRA: Concept LoRA is a special kind of LoRA that was trained on a specific concept or idea. These models usually aim to conceptualize something specific that'd be harder to achieve with simply just prompt engineering. For example, this type of LoRA could be trained on a specific emotion, action, or a very specific item.
    - Pose LoRA: Applying a pose LoRA to your generation does exactly what it sounds like - it's going to pose your character in a certain way. This is great for generating dynamic scenes, where you can produce specific poses and actions that are just often hard or impossible with regular prompt engineering.
    - Clothing LoRA: As you'd expect, this type of LoRA model is designed to change the clothing and accessories on a person. With it, you can quickly and easily give any character new clothes, be they modern or historical in style.
    - Object LoRA: Last but not least, we have object LoRAs. This is a broad category of LoRA models that are used to generate objects such as furniture, plants or even vehicles. Of course the type of items you can create with these models depends on the specific model you're using and the prompt you provide.





# Stable Diffusion WebUI

1. Install the package → [Mac: Easy Stable Diffusion WebUI Installation | Full Guide & Tutorial - YouTube](https://www.youtube.com/watch?v=Jh-clc4jEvk&t=483s&ab_channel=TroubleChute)
2. Throws error → ‣
3. run → ./webui.sh --precision full --no-half --skip-torch-cuda-test

# Text to Image

It is suggested that there should be three main components for writing prompts to generate AI images;

4. Content type → Photograph, drawing, sketch, 3D render
5. Description → Define subject, subject attributes, environment, scene
6. Style →Realistic, Oil-painting, Pencil drawing, Conceptual art
7. Composition → It refers to aspect ration, camera view and resolution

**Related to: _lighting_**

accent lighting, ambient lighting, backlight, blacklight, blinding light, candlelight, concert lighting, crepuscular rays, direct sunlight, dusk, Edison bulb, electric arc, fire, fluorescent, glowing, glowing radioactively, glow-stick, lava glow, moonlight, natural lighting, neon lamp, nightclub lighting, nuclear waste glow, quantum dot display, spotlight, strobe, sunlight, ultraviolet, dramatic lighting, dark lighting, soft lighting, gloomy

**Related to: _detail_**

highly detailed, grainy, realistic, unreal engine, octane render, bokeh, vray, houdini render, quixel megascans, depth of field (or dof), arnold render, 8k uhd, raytracing, cgi, lumen reflections, cgsociety, ultra realistic, volumetric fog, overglaze, analog photo, polaroid, 100mm, film photography, dslr, cinema4d, studio quality

**Related to: _artistic techniques and materials_**

Digital art, digital painting, color page, featured on pixiv (for anime/manga), trending on artstation, precise line-art, tarot card, character design, concept art, symmetry, golden ratio, evocative, award winning, shiny, smooth, surreal, divine, celestial, elegant, oil painting, soft, fascinating, fine art

**Related: _to camera view and quality_**

ultra wide-angle, wide-angle, aerial view, massive scale, street level view, landscape, panoramic, bokeh, fisheye, dutch angle, low angle, extreme long-shot, long shot, close-up, extreme close-up, highly detailed, depth of field (or dof), 4k, 8k uhd, ultra realistic, studio quality, octane render,

**Related to: _style and composition_**

Surrealism, trending on artstation, matte, elegant, illustration, digital paint, epic composition, beautiful, the most beautiful image ever seen,

**Related to: _colours_**

Triadic colour scheme, washed colour

# Text to Text ([You.com](http://You.com))

## **Simulate an expert**

![unnamed.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce9a94e5-0fdd-4cd2-84d7-44629a4310f7/unnamed.jpg)

## **Proofread your writing**

![unnamed (1).jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd55931e-eb48-4c29-a858-fe5e0643e52a/unnamed_(1).jpg)

## **Find the right words**

![unnamed (2).jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fbd69c5-d914-4975-955e-2d30f4e02c48/unnamed_(2).jpg)

## **Flip the script or learn about the opposite side of an argument**

![unnamed (3).jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0703530b-811c-42f6-a770-a23aeab7ff4a/unnamed_(3).jpg)

## ChatGPT

- Ignore the Previous Message: Please ignore all previous instructions. I want you only to respond in English (US). You are an expert course creator and curriculum designer. I will provide a new prompt.
- Developer: I want you to act as a developer. I will provide you with a list of features and you will develop them. You will only reply with the list and nothing else. My first suggestion request is "I need help developing an app for Android.”
- Topic Sentence: Please write a topic sentence for this paragraph: “…” → give me three variations of this sentence?
- Transition Sentence: Could you please write a transition sentence to connect the following two paragraphs: “….”
- Introduction Section: Could you please rewrite the following paragraph as an introduction: “…”
- Counterargument: Could you please write a counterargument to the following claim: “…”
- Syllabus Generator → Programming: I want you to act as an academician. You will be responsible for researching the appropriate course syllabus according to my instructions. Your task is to identify reliable sources, organize the material in a well-structured way and create the syllabus accurately. The course will be "introduction to programming" for undergraduate-level students. Communication Design students will take the course. The programming language will be p5js. The programming fundamentals will be taught to students using Algorithmic Art practices. The main objective is to improve the computational thinking aptitudes of design students. Generate your responses with the following sections; "Educational Objective," "Course Description," and "Learning Outcomes." You can generate your responses for "Learning Outcomes" as a list of items, and the items in the list should have prefixes such as "LO1", "LO2", "LO3", and so on. Include at least six items for "Learning Outcomes.”
- Syllabus Generator → Advanced Programming: I want you to act as an academician. You will be responsible for researching the appropriate course syllabus according to my instructions. Your task is to identify reliable sources, organize the material in a well-structured way and create the syllabus accurately. This course is a continuation of the "introductory programming" course. The course will be "advanced programming" for undergraduate-level students. The prerequisite for this course is to have taken the "introductory programming" course. Communication Design students will take the course. The programming language will be p5js. The advanced programming paradigms will be taught to students using Algorithmic Art practices and Interaction Design. The main objective is to improve the computational thinking aptitudes of design students and expand their knowledge on advanced topics such as machine learning, data visualization, 2D side-scrolling games, and interactive applications. Generate your responses with the following sections; "Educational Objective," "Course Description," and "Learning Outcomes." You can generate your responses for "Learning Outcomes" as a list of items, and the items in the list should have prefixes such as "LO1", "LO2", "LO3", and so on. Include at least six items for "Learning Outcomes.”
- Syllabus Generator → Essentials of Noise Pattern (Ses Dokusunun Temelleri): You will be responsible for researching the appropriate course syllabus according to my instructions. Your task is to identify reliable sources, organize the material in a well-structured way and create the syllabus accurately. The course will be "introduction to sound design" for undergraduate-level students. Design students will take the course. The course will include the following topics: "What is sound," "History of sound design," "Digital Audio Workstation (DAW)," "Sound synthesizing," "Sound production," "Sound recording," "Audio Mixing essentials," "Audio Mastering Essentials," "Non-linear sound editing," "Sound design principals," "VST Plugins," "MIDI," "Sound Logo," "voice over recording," "Soundscapes," "Basics of sound effects; Equalizer, Compressor, Limiter, Delay, Tremolo, Reverb, Echo," "Foley Recording," "Sound design for documentary," "Sound design for sci-fi films," "Sound design for digital games," "Sound design for interactive applications." Generate your responses with the following sections; "Educational Objective," "Course Description," and "Learning Outcomes." You can generate your responses for "Learning Outcomes" as a list of items, and the items in the list should have prefixes such as "LO1", "LO2", "LO3", and so on. Include at least six items for "Learning Outcomes.”
- Syllabus Generator → **Auditory Design for Media (**Medya İçin İşitsel Tasarım**)**: You will be responsible for researching the appropriate course syllabus according to my instructions. Your task is to identify reliable sources, organize the material in a well-structured way and create the syllabus accurately. The course will be "Auditory Design For Media" for undergraduate-level students. Design students will take the course. The course will include the following topics: "History of sound," "Digital Audio Workstation (DAW)," “Experimental sound production techniques," "Audio Mixing & Mastering Essentials," "Contemporary sound artists," "Live Coding Environments for audio," "Listening Modes: Causal Listening, Semantic Listening and Reduced Listening," "Soundscapes," "Acousmatic Music and Sound," "Acoustic Ecology," "Sound art," "interactive sound projects," "concrete music," "Diegetic, Non-diegetic, and internal diegetic sounds," "Sonic Pi," "MAX, MSP, JITTER," "Reaper DAW," "sound sampling," "granular sound" and "sound sculptures." Generate your responses with the following sections; "Educational Objective," "Course Description," and "Learning Outcomes." You can generate your responses for "Learning Outcomes" as a list of items, and the items in the list should have prefixes such as "LO1", "LO2", "LO3", and so on. Include at least six items for "Learning Outcomes.”
- Assignment Generator coding: I am teaching creative coding class to university design students. The course includes following topics; generative art, data visualization, interactive applications, simple game developing, algorithmic practices, machine learning with ml5, audiovisual content creation. I am using p5js as coding environment. My creative coding class covers Suggest me a list of coding assignments that can be developed using p5js for my students for the upcoming classes.
- Rewrite the text: I'm going to give you some information before asking you to write an article. Do you understand?

When it comes to writing content, two factors are crucial, "perplexity" and "burstiness." Perplexity measures the complexity of text. Separately, burstiness compares the variations of sentences. Humans tend to write with greater burstiness, for example, with some longer or complex sentences alongside shorter ones. AI sentences tend to be more uniform. Therefore, when writing the following content I am going to ask you to create, I need it to have a good amount of perplexity and burstiness. Do you understand?"

using the concepts written previously, rewrite this article with a high degree of perplexity and burstiness

Rewrite this article changing 50% of nouns and verbs for similar ones and rewrite verb usages to add natural sounding variations in complexity but retain the same tense and overall meaning

## ChatGPT Academic Prompts

[https://twitter.com/MushtaqBilalPhD/status/1642404540413620224](https://twitter.com/MushtaqBilalPhD/status/1642404540413620224)

## Pika Labs Prompts

[PikaLabsGuideMy MidjourneyPrompts.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/ce0a8c72-b7f6-4850-a250-a49f97660687/199342ad-41bc-4214-af5e-a6eb5c296237/PikaLabsGuideMy_MidjourneyPrompts.pdf)

/create Golden Labrador Puppy chasing after a ball, running in the grass -ar 16:9 -motion 2

[https://www.youtube.com/watch?v=XWrAPEk-z4s](https://www.youtube.com/watch?v=XWrAPEk-z4s)

[https://www.youtube.com/watch?v=ejL_Jm6hE_8](https://www.youtube.com/watch?v=ejL_Jm6hE_8)

[https://youtu.be/YzxK4dCSACM](https://youtu.be/YzxK4dCSACM)

[https://www.youtube.com/watch?v=ilWmqTyNuN0](https://www.youtube.com/watch?v=ilWmqTyNuN0)

# Tutorials

- Make your own AI assistant → [https://www.freecodecamp.org/news/vector-embeddings-course/](https://www.freecodecamp.org/news/vector-embeddings-course/)
- How to use LoRA → [https://softwarekeep.com/help-center/how-to-use-stable-diffusion-lora-models](https://softwarekeep.com/help-center/how-to-use-stable-diffusion-lora-models)

# Courses

[https://www.instagram.com/p/C4LXuYRgywl/?igsh=YmwyNHhrOWk1b2xz](https://www.instagram.com/p/C4LXuYRgywl/?igsh=YmwyNHhrOWk1b2xz)

[https://www.instagram.com/p/C43FaawgT6p/?igsh=OGtocWF6OTAxM3Vn](https://www.instagram.com/p/C43FaawgT6p/?igsh=OGtocWF6OTAxM3Vn)

[https://www.instagram.com/p/C45zxYMtNIO/?igsh=MTZmZmFlaHFnYmxjbQ==](https://www.instagram.com/p/C45zxYMtNIO/?igsh=MTZmZmFlaHFnYmxjbQ==)


