---
title: Tutorial - Processing Android Mode
date: 2024-04-11
description: As of the date (04.2024), the tutorial showcases how to deploy custom mobile app to Android devices.
tags:
  - processing
  - android
  - tutorial
aliases: 
draft: false
---
## Summary
As of this date (07.04.2024) Processing 4.0 cannot find and install required Android SDK and command-line tools. In this tutorial, you can find a workaround to that problem by installing required SDK and command-line tools via Android Studio.

## Requirements
1. Enable Developer mode on your Android device ➡️ [how to](https://www.youtube.com/watch?v=hf2XFzQDnIU)
2. Download and install [Android Studio](https://android.com/)
3. Download and install your device drivers. It depends on the hardware you own. For my case, I use Samsung A54. If you are using Samsung, the [Smart Switch](https://www.samsung.com/us/support/owners/app/smart-switch) software is required to be installed on your device to make it identified by your computer. While installing the Samsung Smart Switch, your Mac will ask you for several permissions. Allow access from your Mac whenever prompted.
4. Download and install [Processing](https://www.processing.cc)

## Android Studio Setup
1. Install your device’s software and drivers, if it is required. Mine is “Samsung Smart Switch”
3. Download and Install the latest Android Studio.
4. After the installation is done, open the Android Studio and click on `SDK Manager` ![[Screenshot 2024-04-07 at 15.33.21.png]]
5. Install SDK 33   ![[Screenshot 2024-04-07 at 15.30.28.png]]
6. Then install `Command Line Tools`. It is required by Processing. ![[Screenshot 2024-04-07 at 15.28.14.png]]
7. Open the Processing App and choose to install `Android Mode` ![[Screenshot 2024-04-07 at 15.35.58.png]]
8. Select to set SDK manually option and choose the SDK path on your Mac. It should be as follows;
   `/Users/<your_username>/Library/Android/sdk`
9. If you get no error, or warning, then you are good to go.
10. Connect your Android device to your computer. Make sure your your device is identified by your computer. Hit the `Run` button and you will see the following image. ![[Screenshot 2024-04-07 at 16.09.06.png]]
11. Hit Run 

