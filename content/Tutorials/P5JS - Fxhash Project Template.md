---
title: P5JS - Fxhash Project Template
date: 2025-02-22
modification date: Saturday 22nd February 2025 14:55:48
description: 
tags:
  - p5js
  - fxhash
  - Art
  - nft
aliases: 
draft: true
---
# Todo
- [ ] Check youtube tutorial on releasing and creating a project
## 1. Download and Setup Boiler Plate
Open the Terminal app on Mac and run the following code:
```bash
# Prerequisities
# node >= 18.0.0
# npm >= 9.0.0
npx fxhash create

# Choose Simple option for the project
```

## 2. Run the project
```bash
# Run the project
npx fxhash dev
```

This will open up the fx(lens) environment in your browser. In the backend two servers are running:
- http://localhost:3300 serves fx(lens) you can connect to a token
- http://localhost:3301 serves your project with live reloading


> [!HELP] Fxhash API reference
> It is good to check the fx object usage instruction during the artwork development, [link](https://docs.fxhash.xyz/creating-on-fxhash/fxhash-api/api-reference).
> Use of deterministic randomness via fxhash objects, [link](https://docs.fxhash.xyz/creating-on-fxhash/genart-in-the-browser/deterministic-randomness), [p5 randomness](https://docs.fxhash.xyz/creating-on-fxhash/genart-in-the-browser/deterministic-randomness#using-other-prngs)
> Export canvas as image, [link](https://docs.fxhash.xyz/creating-on-fxhash/genart-in-the-browser/deterministic-randomness#using-other-prngs)


> [!HELP] Including libraries
> For instance in order to use p5JS as a tool check the [link](https://docs.fxhash.xyz/creating-on-fxhash/genart-in-the-browser/including-libraries)


## 3. Build for production
```bash
# To build the project
npx fxhash build
```

Will build your project and create an `upload.zip` that you can use to publish your artwork on fxhash.xyz
## References
[Github Repository](https://github.com/fxhash/fxhash-boilerplate) Fxhash-boilerplate for NFT creation.