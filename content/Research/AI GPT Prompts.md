---
title: AI GPT Prompts
date: 2024-11-10
modification date: 2025-03-14T14:50:00
description: 
tags:
  - AI
  - prompt
aliases: 
draft: true
---
![[prompt_engineering.jpg |  | 300]]
## 1. Yazdığım Yazıyı Kusursuz Hale Gelene Kadar Gelistir
**Prompt:**
Size üzerinde çalıştığım kaba bir fikir veya çıktı vereceğim. Senin görevin, bir uzman editör ve mükemmeliyetçi gibi davranmak. Gerektiğinde bana sorular sorarak ve geri bildirim döngüleriyle bunu adim adim geliştir, ta ki dünya çapında mükemmel bir versiyona ulaşana kadar. Üzerinde çalıştığım şey şu: [taslaginizi, fikrinizi veya metninizi buraya ekleyin]

## 2. Çok Disiplinli Cevap Ver
**Prompt:**
Bir psikolog, iş stratejisti, verimlilik koçu ve kreatif direktör karışımı gibi davran. Sana herhangi bir zorluk veya fikir sunduğumda, birden fazla disiplinden beslenen, dengeli ve dünya standartlarında bir çözümle yanıt ver.

## 5. Bir Dahi Gibi Ogren
**Prompt:**
[Buraya konuyu ekle] öğrenmek istiyorum. Ama sıradan bir rehber istemiyorum. Bana, elit öğrenciler için özel bir eğitmen gibi hissedeceğim, 30 günlük ultra-verimli ve geri bildirim odaklı bir öğrenme planı oluşturmanı istiyorum. Bu planı, öğrenme tarzım, zamanım ve yaşadığım zorluklara göre sürekli geliştir ve bana mükemmel sekilde uyacak hale getir.

## Improve the Answer 
In order to improve the answer. Ask your question first.
> Summarize the findings from attached document

Then, sen another message to improve the quality of AI response.
> That's a level 1 answer. Can you give me a Level 2 version that goes deeper?

In the final step, instruct the GPT to polish the response one more time.
> Now take your previous answer to Level 3. Give me the most comprehensive answer.

## Create Documentation from Uploaded Code
Create a markdown document detailing this code and how to use it.

## Gemini + Notebook LM
Reference [video](https://www.youtube.com/watch?v=hqBkKMT1IPQ)
**Visualize the document**
- Goto Gemini (model 2.5 Pro experimental)
- Upload the document
- Can you summarize this [type, e.g. patent] document about [context, e.g. AI Overviews Generation] and visualize the key process with details using a dark color scheme design?

**Add interactivity to Visualization**
- Goto Gemini (model Deep Research)
- Upload the document
- Can you turn this [type, e.g. patent] document into interactive infographics - visual data stories with hover-reveal details and embedded statistics?
## Prompt templates for specific purposes
- [Top 10 ChatGPT prompts to learn anything 10 times faster](https://dly.to/Fk67ZyoPoJR)


## Fine Tuning vs. Retrieval-Augmented Generation (RAG)
Analoji: Antepli ustanın sushi yapması. Fine Tuning ile bir kere uzun eğitim alır ve sonrasında eğitime ihtiyaç duymadan sushi yapabilir hale gelir. RAG ile her seferinde ilgili sushi'nin nasıl yapıldığını anlatan bir kitap okuması gerekir.

|                  | Fine Tuning              | RAG                      |
| ---------------- | ------------------------ | ------------------------ |
| Bilgi Güncelleme | Uzun Eğitim              | Çok hızlı güncelleme     |
| Kaynak Kullanımı | İlk Eğitim Yüksek Kaynak | Sürekli Yüksek Kaynak    |
| Esneklik         | Yeni bilgi eklemek zoe   | Yeni bilgi eklemek kolay |

## Cline Coding Agent
The following prompt is embedded in `bolt.ai` code helper. It might be useful while planing a new project from scratch.

>For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.
>
>By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.
>
>Use icons from lucide-react for logos.


## Nano Banana 
### Retouch old photos
- (Fix scratched images) Restore this damaged vintage family photo
- (Colorize b&w photos) Color in the image and make it look modern

### Material 
- Change this [image] to a marble material
- Change this skin to a chrome material
- Comic strip style

<div class="three-columns" style="--column-count: 3;">
<div>
<img src="google-banana-01.jpg">
</div>
<div>
<img src="google-banana-02.jpg">
</div>
<div>
<img src="google-banana-03.jpg">
</div>
</div>

### Maintain Character Consistency
- Maintain exact character appearance, including facial features, hairstyle, clothing, and all physical characteristics consistent throughout the image

### Blend Images
- Seamlessly blend multiple visual elements into a natural, cohesive composition with smooth transitions
