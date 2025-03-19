---
date: 2025-03-19 01:01:26
title: Sonic Pi - Snippets
description: 
tags:
  - livecoding
  - tutorial
aliases: 
draft: false
---
The following document demonstrates variety of Sonic Pi code snippets. 

## Working with Sound Samples
**Load and play your own sound samples - single shot**
You can load any custom sound files from your computer and play them. To keep your code clean and legible, using variables is an efficient method. Define a variable for your sound sample as shown in the following example. The `drum_track` variable is defined and assigned to the absolute path location of the file on the hard disk. Then you can use the `sample` command to play your custom sound. Check the [[Absolute Path]] page to learn how to get absolute path of the files in your computer.
```ruby
# Define a variable 
drum_track = '/Users/alptugan/Downloads/sound_sample.wav'

# play the sample with `sample` command
sample drum_track
```

**Load and play sound samples in live_loop**
The following example plays the loaded sound sample in every 2 seconds. `amp` argument is the sound level, `rate` argument determine the playback speed of the loaded sound.
```ruby
live_loop :sampleSound01 do
	sample drum_track, amp: 1, rate: 1
	sleep 2
end
```

**Play specific section of the sound**
`start` and `finish` attributes determines the beginning and end section of the part to be played. The maximum value for `start` and `finish` attributes must be between 0-1. Suppose that you tell Sonic Pi which part of the loaded sound to be played by declaring the ratio independent from the length of the sound file. For instance, the following code snippet set the `start` time 20 % , and `finish` time 22 % of the overall length of the sound in time. 
```ruby
live_loop :sampleSound01 do
	sample drum_track, start: 0.2, finish: 0.22, amp: 1, rate: 1
	sleep 2
end
```

**Randomly play sections on loaded sound**
The following snippet picks random range from the sound sample and plays it every 2 seconds. 
```ruby
live_loop :sampleSound01 do
	sample drum_track, onset: choose, rate: 1
	sleep 2
end
```

**Randomize parameters, add FX to enhance harmonics depth**
```ruby
live_loop :sampleSound01 do
  with_fx :reverb, mix:1, room:0.98 do # start reverb effect
	# Play sample
	sample drum_track, onset: choose, rate: rrand(-10,10)
  end # end reverb effect
	
	# randomize the sleep time between 0.25-1
	sleep rrand(0.25, 1)
end
```