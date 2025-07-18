---
title: ÖZÜ Window Creative Coding
date: 2025-03-30 06:42:24
description: 
tags:
  - p5js
  - server
  - cod207
  - cod208
  - creativecoding
aliases: 
draft: true
---

- The project is located at the following [directory](file:///Users/alptugan/Documents/p5Js/p5-switcher)
- Open Terminal goto the destination
- Run the app via `pnpm start`
- The sketches switch in every 5 seconds defined in `server.js` file by default
- `port` and `switchInterval` can be adjusted via `config.json` file

```json showLineNumbers title="config.json" {4-20}
{
  "port": 3333,
  "switchInterval": 5000,
  "sketches": [
    {
      "path": "sketches/sketch1",
      "name": "First Last",
      "title": "Rotating Square"
    },
    {
      "path": "sketches/sketch2",
      "name": "First Last",
      "title": "Bouncing Circles"
    },
    {
      "path": "sketches/sketch3",
      "name": "First Last",
      "title": "Color Grid"
    }
  ]
}
```


## TODO
- [ ] #task Auto generate config.json p5.Switcher
	- [ ] Create a front-end for students
	- [ ] Name of the Student field
	- [ ] Title Field
	- [ ] Auto-generate <span style="background:#40a9ff">path</span> from the uploaded files. 
		- [ ] Unzip the folder
		- [ ] Move to the relevant location
		- [ ] Does it work on Github?
	- [ ] 