---
title: Live Coding - Tidalcycles Setup
date: 2025-09-21 11:11:43
description:
tags:
  - livecoding
  - audiovisual
  - tutorial
aliases:
draft: false
---
## 1. Install Haskell via GHCup
Goto [GHCup](https://www.haskell.org/ghcup/) and run the installation script on Terminal. Choose <font color="#ffc000">default</font> options for the instructions during the installation.

After the installation done, type;
```shell
source ~/.zshrc

# Check for the installation
ghcup

# Hold and press Ktrl + D to return back to Shell
```

## 2. Install Tidalcycles packages
```shell
cabal update
cabal v1-install tidal
```


## 3. Install Supercollider App
Goto [SuperCollider](https://supercollider.github.io/downloads) and download/install.

Then download [sc3-plugins](https://supercollider.github.io/sc3-plugins/) and follow the steps below to setup plugins correctly on your system.
1. Unzip the sc3-plugins folder.
2. Move the `SC3Plugins` folder to `/Users/<username>/Library/Application Support/SuperCollider/Extensions/SC3plugins` as it is.


## 4. Install SuperDirt via Supercollider
Open Supercollider app and type `include("SuperDirt");` on text editor. Hit  `⌘ + R` to install the packages.
![[tidalcycles.jpg|-center|500]]

## 5. Startup File Configuration
Refer to the [documentation](https://tidalcycles.org/docs/getting-started/tidal_start/) to start up Tidalcycles server on Supercollider.

```
/*
This is an example startup file. You can load it from your startup file
(to be found in Platform.userAppSupportDir +/+ "startup.scd")
*/

(
s.reboot { // server options are only updated on reboot
    // configure the sound server: here you could add hardware specific options
    // see http://doc.sccode.org/Classes/ServerOptions.html
    s.options.numBuffers = 1024 * 256; // increase this if you need to load more samples
    s.options.memSize = 8192 * 32; // increase this if you get "alloc failed" messages
    s.options.numWireBufs = 64; // increase this if you get "exceeded number of interconnect buffers" messages 
    s.options.maxNodes = 1024 * 32; // increase this if you are getting drop outs and the message "too many nodes"
    s.options.numOutputBusChannels = 2; // set this to your hardware output channel size, if necessary
    s.options.numInputBusChannels = 2; // set this to your hardware output channel size, if necessary
    // boot the server and start SuperDirt
    s.waitForBoot {
        ~dirt = SuperDirt(2, s); // two output channels, increase if you want to pan across more channels
        ~dirt.loadSoundFiles;   // load samples (path containing a wildcard can be passed in)
        // for example: ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*");
        // s.sync; // optionally: wait for samples to be read
        ~dirt.start(57120, 0 ! 12);   // start listening on port 57120, create two busses each sending audio to channel 0

        // optional, needed for convenient access from sclang:
        (
            ~d1 = ~dirt.orbits[0]; ~d2 = ~dirt.orbits[1]; ~d3 = ~dirt.orbits[2];
            ~d4 = ~dirt.orbits[3]; ~d5 = ~dirt.orbits[4]; ~d6 = ~dirt.orbits[5];
            ~d7 = ~dirt.orbits[6]; ~d8 = ~dirt.orbits[7]; ~d9 = ~dirt.orbits[8];
            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];
        );
    };

    s.latency = 0.3; // increase this if you get "late" messages
};
);
```