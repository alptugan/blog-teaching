---
title: P-ÖZÜ AI Internship Validator
date: 2026-06-19 02:09:02
description:
tags:
aliases:
draft: true
---
## Reference Documents
Bu formlar referans niteliğinde. 
- Belki öğrencilere Q&A alanı sağlanabilir. Soru sorarlar, sistem otomatik cevap verir.

[Staj Sayfası](https://www.ozyegin.edu.tr/tr/iletisim-ve-tasarimi/akademik-program/staj), [Internship Main Page](https://www.ozyegin.edu.tr/en/communication-design/academic-program/internship)
[Sık Sorunlan Sorular](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_sss_v1.pdf), [FAQ](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_sss_v2_eng.pdf)
[Required Docs. for Internship](https://www.ozyegin.edu.tr/sites/default/files/upload/Mimarlik/mtf_staj_teslim_edilecek_evrak_listesi_2023_0.pdf)

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