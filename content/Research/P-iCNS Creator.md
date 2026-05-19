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