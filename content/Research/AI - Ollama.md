---
title: AI - Ollama
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


[big-AGI]()
I am using the big-AGI couple of times. Somehow it doesn’t fit my needs in terms of UI. There some irrelevant features that doesn’t make sense. 

⭐️[Open Web UI](https://github.com/open-webui/open-webui) Tested on damp server. It cannot use GPU or my hardware is not good enough to run the models.

Similar to [big-AGI]()

## Code Helper
[Llama Coder](https://github.com/ex3ndr/llama-coder) alternative to Copilot
[Tabby](https://tabby.tabbyml.com/docs/getting-started) Alternative code helper works with VS Code
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


disabledEngines=yts_mx