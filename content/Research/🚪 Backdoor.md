---
title: 🚪 Backdoor
date: 2025-05-14 02:39:59
description: 
tags:
  - MacOS
  - productivity
  - swiftui
aliases: 
draft: true
---
- [ ] Add scheduler for specific time amount. If 4 hours of inactivity shutdown mac.
- [x] [https://www.bresink.com/osx/301031383/screenshots.html](https://www.bresink.com/osx/301031383/screenshots.html) (UI for one-time events)
- [ ] Depreciated apps
    - [ ] [https://www.makeuseof.com/tag/schedule-a-shutdown-in-os-x-with-these-tools/](https://www.makeuseof.com/tag/schedule-a-shutdown-in-os-x-with-these-tools/)
    - [ ] [http://www.bresink.com/products.html](http://www.bresink.com/products.html) (paid)
- [x] Menu → [https://www.youtube.com/watch?v=6Qa-SspgRMM&t=223s](https://www.youtube.com/watch?v=6Qa-SspgRMM&t=223s)    
    - [x] [https://www.youtube.com/watch?v=aTrXMqoG2LQ&list=PLxuTmTi5aT42kFj6QtoRCtyfk2XKe816K&index=4](https://www.youtube.com/watch?v=aTrXMqoG2LQ&list=PLxuTmTi5aT42kFj6QtoRCtyfk2XKe816K&index=4)
      
**It is free and opensource**. It even comes with some features (like idle sleep preventions and pre-sleep stop charging) that are only available in paid counterparts. It comes with no ads, no tracking, no telemetry, no analytics, no bullshit. It is open source, so you can read the code and verify that it does what it says it does.    
          
**It is light-weight.** As a command-line tool, it is light-weight by design. No electron GUIs hogging your system resources. However, a native GUI that sits in the menubar is a good addition.
    
// ref: [https://www.youtube.com/watch?v=6Qa-SspgRMM&t=223s](https://www.youtube.com/watch?v=6Qa-SspgRMM&t=223s)  
// Blank space :defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'; killall Dock  
    
      
    
// Zip files: [https://www.theapplegeek.co.uk/blog/terminalzip](https://www.theapplegeek.co.uk/blog/terminalzip)

// Uptime and reboot time [https://www.theapplegeek.co.uk/blog/uptime](https://www.theapplegeek.co.uk/blog/uptime)

// Start up sound [https://www.theapplegeek.co.uk/blog/macbook-charging-sound](https://www.theapplegeek.co.uk/blog/macbook-charging-sound)
    
// Prevent sleeping mac [https://www.theapplegeek.co.uk/blog/caffeinate](https://www.theapplegeek.co.uk/blog/caffeinate)
    
// Screen Capture (Menu item): [https://ss64.com/osx/syntax-defaults.html](https://ss64.com/osx/syntax-defaults.html)
    
//Disable the warning when changing a file extension  
//$ defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false     

//Use white text for desktop icons:  
//$ defaults write com.apple.finder Desktop.HasDarkBackground -boolean TRUE  
    
//Show stripes in list view:  
//$ defaults write com.apple.finder FXListViewStripes -boolean TRUE; killall Finder  
    
//Allow quitting Finder like any other app, quitting Finder will also hide all desktop icons.  
    //This is only really useful when using a 3rd party file manager:  
    //$ defaults write com.apple.finder QuitMenuItem -bool YES; killall Finder  
    
 // pop-up would appear, allowing you to select accented characters. This default write command will re-enable the repeat key feature.  
// restart or log-out log-in required  
// defaults write -g ApplePressAndHoldEnabled -bool false  
    
// Single app mode  
//  [https://www.defaults-write.com/show-one-application-at-a-time/](https://www.defaults-write.com/show-one-application-at-a-time/)
    
 // [https://www.defaults-write.com/speed-up-macos-high-sierra/](https://www.defaults-write.com/speed-up-macos-high-sierra/)
    
 //Change login screen background:  
 //Library/Caches/Desktop Pictures/7BDFA187-5648-42F0-A398-8D2BA9DA5C05  
    
// [https://ss64.com/osx/scutil.html](https://ss64.com/osx/scutil.html)
    
 //Tutorial data handling: [https://www.youtube.com/watch?v=SPpP-1H1HQs](https://www.youtube.com/watch?v=SPpP-1H1HQs)  
// One line code for SWIFTUI : [https://www.youtube.com/watch?v=JCA_GHdtZxY](https://www.youtube.com/watch?v=JCA_GHdtZxY)
    
// system level information
[https://macos-defaults.com](https://macos-defaults.com/)