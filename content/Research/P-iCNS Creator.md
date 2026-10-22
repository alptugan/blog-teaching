---
title: iCNS Creator
date: 2025-04-11 05:28:45
description: 
tags:
  - swiftui
  - MacOS
  - productivity
  - app
aliases: 
draft: true
---
## TODO
- [ ] #task #icns-creator Quit app when clicked close button.
- [ ] #task #icns-creator/debug Error.log tutma işini düşünelim.
- [ ] #task #icns-creator open folder path after the generation completed.
- [ ] #task #icns-creator save last state in the app. File save location, choices, etc....
- [ ] #task #icns-creator preview icon does not applied to generated icon itself. CMD+i to test if it works or not.
- [x] #task #icns-creator/docs check text color for github md. ✅ 2025-11-21
- [x] #task #icns-creator Optional: A workaround for testing, and permissions. Test the app on a fresh Mac. ✅ 2025-11-21
- [x] #task #icns-creator About penceresi açıldığında 2024 yazıyor. ✅ 2025-11-21
- [x] #task #icns-creator ‼️ Update YouTube video tutorial. ✅ 2025-11-21
- [x] Save file as dialog update.
- [ ] #task #icns-creator ‼️ Set options for rounded corners: None, Rounded, Circular
- [ ] #icns-creator Optional: Distrubute image conversion process into different CPU threads. It is a possible fix to avoid locking main thread during the icns creation process.

### V4
- [ ] #task #icns-creator v4
	- [ ] #task #icns-creator Drag & drop folders or apps to edit their icns props on the fly for better UX.
	- [ ] #task #icns-creator Set the icons using the app. Choose folder & set the icon
	- [ ] #task #icns-creator Return to original icon option.
	- [ ] #task #icns-creator Keep the original icon in the original app directory.
	- [ ] #task #icns-creator [repo](https://github.com/mikker/wezterm-icon/blob/main/Makefile) icon swap formula 


### v5
- [ ] App packaging - [GitHub - create-dmg/create-dmg: A shell script to build fancy DMGs](https://github.com/create-dmg/create-dmg)


### Design & Documentation
- [ ] #task #icns-creator/docs Update cover image, create a red arrow showing drag-drop icon from desktop to the app
- [ ] Color picker alternative, [link](https://github.com/jaywcjlove/ColorSelector)



> [!WARNING] Installation Instructions
>1. ﻿﻿﻿After downloading, open Terminal
>2. ﻿﻿﻿Remove quarantine attribute:  
>    `sudo xattr -r - com.apple quarantine /Applications/Nuclear.app`
>3. ﻿﻿﻿If still blocked:  
> 	- Go to System Preferences → Security & Privacy
> 	- Click "Open Anyway" next to Nuclear
>4. ﻿﻿﻿For persistent issues:  
>    `sudo spctl --master-disable`




## Project Description
**icns Creator** is a native, open-source (MIT) macOS app that converts PNG, JPG, GIF, TIFF and PSD images into `.icns` files or `.iconset` folders. It also lets users set icon style, such as corner radius, shadow and margin, to match Apple’s design guidelines.

**Gap it fills:** Apple’s built-in tooling (`iconutil`) is command-line only and expects the user to produce every icon size by hand. icns Creator turns that into a drag-and-drop workflow for developers, designers and artists who ship Mac apps but don’t want to script it.

**Reach and activity:** Across 14 GitHub releases, the app has been downloaded about 9,600 times, with the latest release (v3.7.1) alone at about 2,400. The repository has 312 stars and 11 forks. It has been maintained since August 2023, with about 100 commits and 17 tagged versions, and the latest update in August 2026. It includes a Rosetta/Intel build, supports macOS 11 and later, and is documented with a demo GIF and install guide. I also wrote about it publicly on Medium. 

**Why Claude access would help:** This project was started for myself. I've released it as open source and without any ad it took attention of people started to take interest from the community. I like customizing the interface, previously there were apps like that allowing users to customize the look and feel of app icons. Also I find it useful for design students. In my studio classes I make students redesign existing corporate identity of products that they are using on daily bases like Photoshop, Illustrator, Affinity, etc... This side project also turned into a pedagogical tool for my students. I distribute the app to my students and test their icon design on real life situtation. They can instantly apply the corporate design that they created for the app. Then they use the logo on daily bases to observe whether it works or not for their pusporses. Long story shot, anything can be a product as long as one utilize it relevant to its context. So, Claude access help me continue to work on the project to improve user interface, codebase and tweak the app. As an academic it is really hard to maintain open source projects with lots of other works that I need to carry on as an academic. 