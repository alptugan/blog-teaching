---
title: Tutorial - File Encrypt & Decrypt for Free
date: 2024-07-30
modfification date: Tuesday 30th July 2024 13:38:41
description: How to encrypt and decrypt any file on Mac OS natively.
tags:
  - tutorial
  - encrypt
  - decrypt
aliases: 
draft: false
---
Locate the file location using Terminal app. Use the following built-in `openssl` command to encrypt the file;
```
openssl aes-256-cbc -salt -pbkdf2 -in name -out name.aes
```

You will asked for password for twice. Do not forget the password otherwise you may loose access to your file after all.

To decrypt the file use the following command;
```
openssl aes-256-cbc -d -salt -pbkdf2 -in name.aes -out name
```

