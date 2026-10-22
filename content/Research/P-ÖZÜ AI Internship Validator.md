---
title: P-ÖZÜ AI Internship Validator
date: 2026-06-19 02:09:02
description:
tags:
aliases:
draft: true
---
# Things to do for internship Q & A page
- [ ] Branding with özü page colors
- [ ] Language adjustments. Keep everything in English by default. Include TR - EN switch for the user in mainpage?
- [ ] Stitch çıklarını uyarla
- [ ] Present to the Dean??? Ask for AI



## Reference Documents
Bu formlar referans niteliğinde. 
- Belki öğrencilere Q&A alanı sağlanabilir. Soru sorarlar, sistem otomatik cevap verir.

[Staj Sayfası](https://www.ozyegin.edu.tr/tr/iletisim-ve-tasarimi/akademik-program/staj), [Internship Main Page](https://www.ozyegin.edu.tr/en/communication-design/academic-program/internship)
[Sık Sorunlan Sorular](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_sss_v1.pdf), [FAQ](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_sss_v2_eng.pdf)
[Required Docs. for Internship](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_teslim_edilecek_evrak_listesi_2023_0.pdf)

## FAQ App
There are several documents related to FAQ. The app must only use the information in the documents. These documents are related to Faculty of Architecture departments. The app must give answers only for Communication Design department students. Some of the information are common for all departments in the faculty. No pseudo information or hallucination are allowed by the app. The frontend of the app will make the user enter some information via GUI. They are required fields. In short I want to upload the documents and the app answer question only related to the documents. 
1. Name and surname of the student. 
2. Student number and email.
3. Internship course code. There three options; COD 200, COD 300 and COD 400 courses.
4. A welcoming question that welcomes the user. The system warns the user about their dialog is being recorded to test and improve the system. It tells user that the system can answer in Turkish or English only. 
5. The user asks the question via writing it into a text field. 

The app only replies questions related to their internship. Not other general information is required. If the question is irrelevant, the system responds as "I can only answer the questions related to ÖZÜ Faculty of Architecture and Design Internship related topics...". Students can ask the question in Turkish or English. If the user writes in Turkish, reply in Turkish. If the user asks in English, reply in English. 

### Backend
1. In the backend, there must be a section to improve the responses. For instance; I should be able add question and its relevant answer to the system. The system needs to be improved over time.
2. The admin can check each chat history with asked questions and replies by the system. 
3. There must be a database to record each user dialog. Each user will have a profile that they can review their chat history. There must be a limit for the database. For instance clear the previous chat history if the db file size get too much. Use postgres database. Each entry includes the date, name and surname of the user. E.g. YYYY-MM-DD - Name Surname. Saved entries will be deleted over time. For instance, I don't need 4 months old entry.


Should I train a model? Can I do it on a local server machine? Do I need a powerful machine. I want to create the app wihout paying for api 


## Validator app
In short, The user uploads the document, the system checks the document and creates a report output about the form is ok or not. If it is not appropriate, the system displays which parts need to be corrected in order.

Example case;
1. The user opens the web page, prompted user to upload the document form.
2. Upload area.
	1. Uploads the document in pdf, jpg, or png format.
	2. The system determines the document language.
	3. The system determines blank sections.
	4. The system checks Program / class section. It must be Communication Design in English. It must be "İletişim ve Tasarımı" in Turkish.
	5. The system checks for required course text.
		1. If it is COD 200, internship start and end  must be 10 business days.
		2. If it is COD 300 or COD 400, internship start and end  must be 20 business days.
	6. The system checks the document
		1. If there are hand written areas, . Informs users about fill the form using computer referring to the requirements pdfs.
		2. System checks the internship start and end dates. According to the Course-Code, the system calculates business days according to Turkish 
3. The system reports about the document whether it is ready for to be sign by the company and the supervisor. 


## Tools
PDF to JSON, MD → [GitHub - datalab-to/marker: Convert PDF to markdown + JSON quickly with high accuracy](https://github.com/datalab-to/marker)