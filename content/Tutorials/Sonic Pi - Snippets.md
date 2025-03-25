---
date: 2025-03-19 01:01:26
title: Sonic Pi - Snippets
description: 
tags:
  - livecoding
  - tutorial
  - sound
  - soundart
aliases: 
draft: false
---
The following document demonstrates variety of Sonic Pi code snippets. 

## Quick Start
```ruby
play :C4
sleep 0.513

play :D4
sleep 0.51

play :E4
sleep 0.51

play :F4
sleep 1

play :G4
sleep 1

play :A4
sleep 1

play :b4
sleep 1

play :c5
sleep 1
```
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

## Granular Synthesis
Read below for the explanation of the code;
```ruby
sample_path = '/Users/alptugan/Music/Samples/Museum-Of-Endangere-Sounds/nokia-3310.mp3'
sample_path2 = '/Users/alptugan/Music/Samples/Museum-Of-Endangere-Sounds/nintendo-cartige.mp3'

# Set the number of grains
num_grains = 100

# Set the range of pitch shifting for each grain (in semitones)
pitch_range = 12

# Set the range of volume scaling for each grain
volume_range = 4

live_loop :granular_synth do
  grain_duration = rrand(0.1, 0.2)
  
  # Randomly select a start position for each grain
  start_pos =  rrand(0, 1 - grain_duration)
  
  # Randomly select a pitch shift for each grain
  pitch_shift = rrand_i(-pitch_range, pitch_range)
  # pitch_shift = rrand_i(1, 0.01)
  
  # Randomly select a volume scaling factor for each grain
  volume_scale = rrand(0, volume_range)
  
  # Randomly select a pan position for each grain
  pan_pos = [-1,0,1].choose
  
  # Calculate the end position of the grain
  end_pos = (start_pos + grain_duration) / sample_duration(sample_path)
  
  # Play the grain
  with_fx :reverb, mix: 0.7, feedback: 0.9 do
    with_fx :ping_pong, mix: 1, phase: 0.1, feedback: 0.9 do
      with_fx :tremolo, mix: 0.7, depth: 0.8 do
        with_fx :distortion, mix: 1, distort: 0.8 do
          with_fx :pitch_shift, pitch: pitch_shift do
            if one_in(2)
              sample sample_path, start: start_pos, finish: end_pos, pan: pan_pos, amp: volume_scale
            else
              sample sample_path2, start: start_pos, finish: end_pos, pan: pan_pos, amp: volume_scale * 0.2
            end
          end
        end
      end
    end
  end
  
  # Sleep for the duration of each grain
  sleep grain_duration
end
```


This Sonic Pi code is an implementation of **granular synthesis**, a technique where a sound sample is broken into small pieces called "grains," which are then manipulated and played back in various ways to create new textures and sounds. Let's break down the code step by step:
### **1. Sample Paths**
```ruby
sample_path = '/Users/alptugan/Music/Samples/Museum-Of-Endangere-Sounds/nokia-3310.mp3'
sample_path2 = '/Users/alptugan/Music/Samples/Museum-Of-Endangere-Sounds/nintendo-cartige.mp3'
```
- Two audio samples are loaded from specific file paths. These samples will be used as the source material for granular synthesis.

---

### **2. Granular Synthesis Parameters**
```ruby
num_grains = 100
pitch_range = 12
volume_range = 4
```
- **`num_grains`**: The number of grains to be generated (though this variable isn't directly used in the loop).
- **`pitch_range`**: The range of pitch shifting for each grain, in semitones (from -12 to +12 semitones, or one octave up or down).
- **`volume_range`**: The range of volume scaling for each grain (from 0 to 4).

---

### **3. Live Loop: Granular Synthesis**
The `live_loop` named `:granular_synth` continuously generates and plays grains.

#### **Grain Duration**
```ruby
grain_duration = rrand(0.1, 0.2)
```
- Each grain has a random duration between 0.1 and 0.2 seconds.

#### **Start Position**
```ruby
start_pos = rrand(0, 1 - grain_duration)
```
- The start position of the grain within the sample is randomized. The range ensures that the grain doesn't exceed the sample's length.

#### **Pitch Shift**
```ruby
pitch_shift = rrand_i(-pitch_range, pitch_range)
```
- Each grain is pitch-shifted by a random amount within the specified `pitch_range`.

#### **Volume Scaling**
```ruby
volume_scale = rrand(0, volume_range)
```
- The volume of each grain is scaled randomly within the specified `volume_range`.

#### **Pan Position**
```ruby
pan_pos = [-1,0,1].choose
```
- Each grain is panned randomly to the left (`-1`), center (`0`), or right (`1`).

#### **End Position**
```ruby
end_pos = (start_pos + grain_duration) / sample_duration(sample_path)
```
- The end position of the grain is calculated based on the start position and grain duration, normalized by the total duration of the sample.

---

### **4. Effects Processing**
The grains are processed through a series of effects:
```ruby
with_fx :reverb, mix: 0.7, feedback: 0.9 do
  with_fx :ping_pong, mix: 1, phase: 0.1, feedback: 0.9 do
    with_fx :tremolo, mix: 0.7, depth: 0.8 do
      with_fx :distortion, mix: 1, distort: 0.8 do
        with_fx :pitch_shift, pitch: pitch_shift do
```
- **Reverb**: Adds a spacious, echoing effect.
- **Ping Pong**: Creates a stereo delay effect.
- **Tremolo**: Modulates the volume of the grain.
- **Distortion**: Adds grit and saturation.
- **Pitch Shift**: Applies the random pitch shift to the grain.

---

### **5. Sample Playback**
```ruby
if one_in(2)
  sample sample_path, start: start_pos, finish: end_pos, pan: pan_pos, amp: volume_scale
else
  sample sample_path2, start: start_pos, finish: end_pos, pan: pan_pos, amp: volume_scale * 0.2
end
```
- The code randomly selects one of the two samples to play as a grain.
- The second sample (`sample_path2`) is played at a lower volume (`amp: volume_scale * 0.2`).

---

### **6. Sleep**
```ruby
sleep grain_duration
```
- The loop pauses for the duration of the grain before generating the next one.

---

### **Summary**
This code creates a granular synthesis engine that:
1. Splits two audio samples into small grains.
2. Randomizes the pitch, volume, pan, and duration of each grain.
3. Processes the grains through a series of effects.
4. Plays the grains in a continuous loop, creating a textured and evolving soundscape.

The result is a rich, experimental sound that transforms the original samples into something entirely new.

## Arrays
* We can declare arrays in two ways, the first one uses brackets `[]` syntax
```ruby
# Array of notes assigned to the variable `seq`
seq = [:c5, :d5, :e5, :f5, :g5, :a5, :b5]

# Play 4 times a random note from the `seq`arrays. Silence 0.5 seconds
4.times do
  play seq.choose
  sleep 0.5
end
```

- We can declare arrays in two ways, the first one uses parenthesis `(ring, ...)` syntax
```ruby
dizi = (ring, :C, :D, :E, :F, :G, :A, :B, :C5,:D5, :G5)

live_loop :myFirstLoop do
  play dizi.tick # play notes in the dizi array in sequence
  # play dizi.tick # play notes in the dizi array in random
  sleep rrand(0, 1)
end
```