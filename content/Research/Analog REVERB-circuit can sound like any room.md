---
title: "This analog circuit can sound like any room"
source: "https://www.youtube.com/watch?v=Nat7S3OKDV0"
author:
  - "[[Moritz Klein]]"
published: 2026-11-24
created: 2026-11-25
description: "Can a handful of analog chips sound like a real room? In this video, I build a reverb from two bucket brigade delay chips.Build your own as a DIY Eurorack kit: https://www.ericasynths.lv/edu-diy-rev"
tags:
  - "raw"
---
![](https://www.youtube.com/watch?v=Nat7S3OKDV0)

Can a handful of analog chips sound like a real room? In this video, I build a reverb from two bucket brigade delay chips.  
  
Build your own as a DIY Eurorack kit: https://www.ericasynths.lv/edu-diy-reverb-3946/  
Full build guide: https://www.ericasynths.lv/service/file/download/product\_id/1650/file\_id/673/  
Get LABOR here: https://www.ericasynths.lv/edu-diy-labor/  
  
Most reverb circuits simulate a room either mechanically, with springs or plates, or digitally. Mechanical reverbs are bulky and a pain to transport, and digital ones need microcontrollers, which I avoid in my designs.  
  
So I wondered: can you do it with neither? In this video, I try to understand how real reverb works, then replicate it with two BBDs and a simple feedback delay network.  
  
Support the channel…  
… through Patreon: https://www.patreon.com/moritzklein  
… by building my other DIY kits: https://www.ericasynths.lv/shop/diy-kits-1/  
  
Join my Discord community: https://discord.gg/KCwpyAsFpb  
  
Chapters  
00:00 Intro: Anatomy of a room  
02:08 A single echo  
05:03 A chain of echoes  
06:50 Time-axis scattering  
09:53 Joining the two spaces  
11:08 Stopping the pile-up  
13:01 Adding a tone control  
15:05 Adding a decay control  
18:08 Adding a room size control  
20:39 Locking the ratio  
23:39 Module development & sound demos  
26:07 Outro

## Transcript

### Intro: Anatomy of a room

**0:00** · Can you build a reverb circuit without springs, plates, or code? I went looking for a schematic to start from. There's plenty out there on spring tank driver circuits and digital reverb algorithms, but a purely analog solid state reverb made from currently available parts, couldn't find one.

**0:14** · we do have though the real thing.

**0:18** · out what the space does to the sound of my drum machine.

**0:22** · \[music\] How does that work? There's nothing in here but air and a few hot surfaces. If we can figure that out, maybe we can steal the trick and approximate the sound with just a handful of analog chips. Since it's hard to tell what's happening from the audio alone, let's try and make it visible. For that, we need a loud short sound which we can easily separate from the room's response.

**0:50** · This is the resulting waveform. You can clearly see the hand clap over here followed by a couple of distinct echoes.

**0:56** · In reverb language, these are called early reflections. Afterwards, those distinct echoes begin to merge into a solid chaotic tail. To understand why that happens, we can do the same experiment in less complex spaces. We'll start with a single surface in the distance. That's like a room with only one wall.

**1:13** · This gives us a single echo. The sound travels to the surface, bounces off it, passes us, and disappears. Let's try it again in this tall narrow corridor which acts like a room with just two parallel walls.

**1:26** · Here we get a weird pitched flutter that decays over time. This is because the sound bounces back and forth along the same path over and over creating a chain of evenly spaced echoes which lose volume on every bounce. This hole is much more evenly proportioned, so no single pair of walls dominates. Instead, every surface sends back its own copy of the clap arriving at a slightly different time. That's how we get the cluster of early reflections, but each of those copies then hits every other surface and spawns more copies which go on to do the same thing again.

**1:53** · So with every round, the number of echoes multiplies and they arrive faster than we can tell them We hear them as one continuous wash, which we call reverb.

**2:04** · That's the whole trick. So, how do we replicate this in an analog circuit?

### A single echo

**2:08** · Let's start with the simplest case, creating a single echo. We can do that with a bucket brigade delay chip like this V3208. A BBD takes an analog input signal, cuts it into samples, then moves those samples through a long chain of transistors and capacitors. Since that process takes time, the signal leaves the chip delayed. This is our single echo. To use the V3208, we'll need to do three things, condition the input signal, clock the chip, and reconstruct its output. Let's start with the input.

**2:36** · A typical Eurorack signal is around 10 V peak-to-peak centered around 0 V, but our BBD expects something closer to 1 V peak-to-peak swinging around 2.5 V.

**2:46** · Using an inverting op amp, we can scale the signal down by a factor of 10 and then push it up by around 2.5 V. Next, the clock. The BBD transfers its samples in an alternating two-step process, which requires a dual clock signal, a square wave and its inverse. The first one controls every other transistor, and the second controls the ones in between.

**3:07** · The faster those clocks run, the faster the samples travel through the chain and the shorter our delay. To generate them, we'll use the V3102, a dedicated BBD clock driver chip. In this configuration, it gives us a dual clock at around 20 kHz, which in combination with our 2048 stage BBD works out to a delay time of about 50 ms. The V3102 also generates the VGG bias voltage that the BBD needs. Next, we have to reconstruct the delayed output from the BBD's two output pins.

**3:35** · To start off, we'll add two source load resistors to activate the internal output buffers.

**3:42** · Because of the two-step transfer process, the chip produces a fragmented signal that alternates between samples and low state. However, the two outputs are complementary. Whenever one drops into its low state, the other is carrying a sample and vice versa. So, if we combine them, one fills in the gaps left by the other. To make sure that handover is seamless, we'll use a trimmer as a variable mixer. This way, we can fine tune it until we get a continuous signal. The chip also produces hair thin clock spikes at the handover point.

**4:11** · So, we'll add a filtering capacitor to remove them and buffer the result with an NPN transistor for a low output impedance. Finally, we need to get rid of the 2.5 V offset with a coupling capacitor and restore the signal's amplitude with another op amp.

**4:26** · Put all three blocks together and we get a complete echo circuit. To test this in practice, I've already set the circuit up on Laborelec, a prototyping station I developed together with Erica Synths.

**4:36** · We've got our V3102 clocking the V3208 over here and the op amp conditioning input and output over here, all powered by Laborelec's built-in dual supply.

**4:46** · Next, I'll connect its trigger generator to a percussion module to get our test sound.

**4:51** · And if I now send that sound into our circuit and mix its output with the dry signal, we get one single echo. It's a bit noisy right now, but that's mostly the breadboard. We'll clean it up later.

**5:02** · Okay, so our circuit now simulates a space with just one wall. How do we add a second? Well, we saw that a room with two walls creates a decaying chain of evenly spaced echoes because the sound bounces back and forth between them, losing volume on every bounce. So, in our circuit, every echo needs to spawn another slightly quieter echo. We can do that by feeding the output back into the input with a gain smaller than one. For this, we'll add a variable voltage divider in series with a 100 k resistor as an additional input to our inverting op amp. Then we send the circuit's output through it.

### A chain of echoes

**5:33** · This way, we can set any feedback gain between 0 and 1 just by turning the knob.

**5:42** · There we go, a decaying chain of echoes.

**5:44** · However, it currently sounds nothing like this corridor.

**5:48** · That's because at 50 ms delay time, our circuit simulated walls are much further apart, which gives us discrete echoes instead of that fast metallic fluttering.

**5:58** · So, let's move the walls closer together and see if that does the trick. A smaller clock resistance makes the V3102 run faster, which decreases our delay time. So we'll replace the 18k with a 2k2 resistor and a 10k potentiometer in series. Now we can shorten the delay time by turning this knob. This will ring out much quicker though, since we lose the same amount of amplitude every cycle, and the cycles are now much shorter.

**6:23** · So we'll also bump up the feedback gain.

**6:27** · That does sound a little more like the corridor, but it's still not what I'd consider reverb. So how do we bridge that gap? Earlier we saw that one of the differences between the corridor and the brick hall is how rapidly the echoes are thrown back at us. So what if we just decrease the delay time even further?

**6:44** · Interesting. Instead of turning into a wash, the flutter just gets more high pitched. What's up with that? Let's look at our circuit's output next to what the brick hall gives us. Before the hall's echoes merge, you can see that they're scattered on the time axis. They don't arrive at regular intervals like the ones in our circuit. Their spacing is much more erratic because they're all traveling different distances. That ends up mattering a lot. If every echo is spaced identically, they always overlap in the same way, which means some frequencies get canceled out and others get boosted, resulting in the pitch we just heard.

### Time-axis scattering

**7:16** · But if they don't line up consistently, nothing gets consistently boosted or canceled, and you hear all of it at once as a wash. So decreasing the delay time isn't the right strategy. We need to break up the regularity first.

**7:29** · Let's back off on the delay time until that single pitch turns into discrete echoes again.

**7:36** · Now how do we scatter those individual echoes on the time axis? One idea would be to randomize the delay time itself to change where each echo lands. But the problem is that changing a BBD's delay time while audio's traveling through it also changes its playback speed, and with it the pitch.

**7:54** · So we end up with a warbling mess instead of reverb. But what if instead of changing the delay time on the fly, we simply add a second delay with a different delay time from the get-go? If we pick both delay times so that the two echo chains coincide as rarely as possible and mix their outputs together, we get lots of varying gap lengths between successive echoes. That gives us a rudimentary version of the scattering we're after.

**8:19** · because each delay is still spitting out a perfectly regular chain on its own.

**8:23** · We're just interleaving two of them. To test this, we'll simply clone our existing delay, but with a smaller clock capacitor to shorten its delay time.

**8:31** · Then we'll use both frequency knobs to fine-tune the two delay times to 50 and 30.9 milliseconds respectively. I chose those exact values because their ratio is close to phi, the golden ratio. With something like 3/2, every third echo of one chain would land exactly on every second echo of the other, reinforcing it. So you just get a new regular pattern emerging. The golden ratio is the hardest number to approximate with a fraction, so the two chains coincide as rarely as possible.

**8:59** · To hear the difference, let's compare the longer delay on its own with the two delays combined.

**9:08** · The combination does make the individual echoes harder to discern, but it's still extremely grainy and sparse, which makes sense. We're using pretty long delay times, so we get big gaps between individual echoes. In reverb terms, a low echo density. Unfortunately, shortening the delay times to increase echo density just gives us an out-of-tune chord. \[clears throat\] So why don't we just add more delays with different delay times to fill in those gaps? That's actually what a lot of digital reverb algorithms do.

**9:36** · More delays do give you a denser, smoother tail, but every delay costs us another BBD chip plus a clock chip and all the supporting circuitry. So before we throw more parts at the problem, let's see if there isn't a more cost-effective way to increase echo density. Thinking spatially again, listening to our circuit is like listening to two separate corridors of different widths at the same time. In each one, the sound just bounces back and forth along the same path, completely independent of the other. But that's not what happens in a more evenly proportioned room.

### Joining the two spaces

**10:06** · There, every echo hits multiple surfaces at different distances, and each of those spawns a new echo arriving at different times. That's how echo density grows so rapidly without the obvious regularity of the corridor. Our circuit is now simulating four surfaces, but arranged in two separate spaces. How do we join them so that each echo bounces off multiple surfaces instead of just one?

**10:29** · Here's a simple idea. What if we send the output of each delay not just back into its own input, but into the other delay's input as well? Then every echo should spawn two new echoes, one through its own delay and one through the other, arriving at two different points in time. All we have to do to test that is add another feedback resistor at each delay's input and connect it to the other delay's feedback pot. Then we'll listen to only one of the two outputs.

**10:54** · Let's go with delay A, the slower one.

**10:57** · There's no need to mix them anymore since every echo passes through both delays anyway.

**11:02** · \[music\] Now the tail turns into this strange metallic ringing. What's up with that?

### Stopping the pile-up

**11:08** · It turns out that cross-coupling the delays has a side effect. They now regularly produce coinciding echoes. No choice of delay times can prevent that.

**11:16** · An echo that goes through delay A and then delay B always arrives at the same time as one that goes through B than A.

**11:23** · Now this by itself is not the problem.

**11:25** · It's what our circuit does next. Each input stage adds the two echoes together, creating a reinforced copy that's twice the amplitude of either of the originals. And since a signal's energy grows with the square of its amplitude, that's four times the energy.

**11:40** · So a coinciding pair sends double the energy back into the system as the same two echoes would if they'd arrived separately. As a result, the tail keeps getting boosted at these regular intervals, and that's what we hear as metallic ringing. So how do we prevent this? Luckily, the fix is quite simple.

**11:56** · Instead of having both input stages add their inputs, we'll make one of them subtract. For two coinciding echoes, we then inject their sum into one delay and silence into the other because the two signals cancel each other out. This way we send the same amount of energy back into the system as we would if the two echoes didn't coincide, which should make our tail decay more evenly, killing the metallic ringing. To test that, we'll simply invert the output of delay A before feeding it into its own input stage.

**12:26** · And there we go. The ringing is gone and our circuit suddenly sounds like reverb.

**12:31** · You can see it in the waveform too. The structure is now very similar to our brick wall sample, a cluster of early reflections right after the initial hit, which then start to merge into a dense chaotic tail. And the best part, we managed to do it with just two delay lines and a minus sign. Let's hear it on something more musical than a single click.

**12:50** · \[music\] \[music\] So we've actually managed to approximate the sound of a real space with just a handful of analog chips. But real spaces don't all sound the same. They can be bright or dark, reverberant or dry, big or small. So ideally our circuit should let us change those properties too.

### Adding a tone control

**13:17** · Let's start with the first one. In a real space, whether the reverb sounds bright or dark largely depends on what its surfaces are made of. Some materials absorb high frequency content on every bounce, making the reverb darker over time, while others tend to reflect it, keeping the reverb bright. How can we emulate that in our circuit? The physically accurate way would be to filter the signal on every trip around the loop, so each echo gets a little darker than the one before. But that would mean adding two rather complex voltage controlled filters to our feedback network since we'd need to adjust them in lockstep.

**13:48** · Instead, let's see how close we can get with a cheaper approximation, a single adjustable filter at the input. This way we filter the signal once before any echoes get created. That colors the reverb as a whole instead of changing it over time.

**14:03** · Here's the filter we'll use. It consists of four sections, a low pass, a high pass, a variable mixing stage, and an amplifier. The low and high pass are simple RC filters, each with a fixed cutoff of roughly 700Hz. The potentiometer acts as a passive mixer, letting us blend smoothly between the two. Turn it one way and the low end dominates. Turn it the other and the high end takes over with 700Hz as the pivot point. This allows us to not only make the reverb more or less dark, but also actively make it brighter.

**14:32** · Because that mixer is passive though, we lose some amplitude along the way. So the op amp does two jobs. It gives us a low impedance output and it boosts the signal to make up for the loss. Okay, let's sweep the new knob and see how we fare.

**14:49** · \[music\] \[music\] I think this changes the room's tone in a pretty convincing way, even though we went with the simpler solution. Next, we want to adjust how long our reverb rings out for. We already know that this depends on the feedback gain of each delay. More gain means a longer tail of echoes. So if we turn it up for both, we should be able to make our room more reverberant.

### Adding a decay control

**15:28** · Turns out the adjustment is pretty tricky though. If either delay rings out longer than the other, the whole reverb illusion breaks.

**15:36** · So to keep them aligned, we'll want to control the feedback gains in lockstep with a single knob. Since there's no cheap approximation this time, we'll need to use two voltage controlled amplifiers, or VCAs for short, and drive them with the same control voltage, or CV. A VCA changes a signal's gain depending on the CV we feed it. More CV means more gain. Here's the VCA design we'll use. At its core, it's just a regular inverting amplifier with its input resistor swapped for an NPN transistor.

**16:04** · Because of this strong voltage divider at the input, the collector only sees very small voltage swings, which allows the transistor to act like a makeshift voltage controlled resistor. Feed it a bigger base voltage and its quote-unquote resistance decreases, giving us a bigger voltage swing at the output. Since the CV bleeds into the signal and adds a DC offset, we need a coupling capacitor to re-center it. Okay, now the trimmer is the important part for us. Every transistor and op amp will give us different amounts of gain for the same CV.

**16:33** · So the trimmers let us match the two VCAs and make sure they ring out equally long.

**16:40** · Next, we simply replace the two feedback gain potentiometers with two of these VCAs and wire both CV inputs to a single decay knob through a voltage divider.

**16:50** · That divider is necessary because our VCAs only stay clean below a certain control current. Push past that and they start acting like low pass filters.

**16:59** · Scaling the CV down keeps the entire knob range inside the window where that doesn't happen. If you want the nitty-gritty on this, I've written up a full circuit analysis on my Patreon.

**17:08** · Finally, this extra resistor between the decay knob and ground sets a sensible minimum decay level. Doesn't really make sense to go down to zero here since it would effectively turn the reverb off.

**17:19** · Now we just need to tune the two gain trimmers so both delays ring out equally long.

**17:30** · That sounds pretty good to me, so let's take our new decay knob for a spin.

**17:47** · Yeah, this is much more convenient than trying to keep two separate pots aligned. And because the decay is no voltage controlled, we can even add an input socket plus an attenuator, mix it with the main control, and modulate the decay with an external voltage.

**18:07** · The last missing piece is room size. A huge brick hall sounds very different than a tiny bathroom.

### Adding a room size control

**18:15** · Earlier we saw that delay time is a stand-in for the distance between two walls. Shorten it and the walls move closer together. So if we reduce both delay times in lockstep, the whole room should shrink.

**18:34** · Turns out this is also pretty tricky. If we stray too far from the golden ratio between the two delays, the reverb illusion breaks again.

**18:45** · So like with the decay, we'll want a single knob that changes both delay times at once while keeping the golden ratio between them. To do that, we'll need to make both clock generators voltage controllable. Unfortunately, the V3102 doesn't have a control voltage input, so we'll have to add one ourselves. Internally, the V3102 derives its two clocks from the charge and discharge cycle of this capacitor. Until now, we let the chip run both via this resistance. Instead, we'll now let the chip rapidly charge the cap through a diode and then gradually discharge it through an external transistor.

**19:17** · The speed of that discharging process depends on the transistor's base voltage. Once the cap is empty, it charges up through the diode again and the cycle repeats. So a higher base voltage means faster discharging and a higher clock frequency, which gives us shorter delays and a smaller room. There are three more details worth pointing out. First, the resistor between emitter and ground. It reduces temperature dependence, which keeps the clock stable as the circuit warms up, and it makes the transistor operate more linearly, which will make the room size knob feel more even.

**19:48** · Second, the voltage divider at the base scales the CV down, so we end up with a usable range of room sizes. And third, the faster of the two clocks gets an offset trimmer, which lets us nudge its frequency up or down.

**20:01** · Because of component tolerances, we might need to do either to land exactly on the golden ratio. To integrate all this, we wire both clock generators to a single room size knob, again with an added resistor to raise the floor of the range, just like we did for the decay.

**20:17** · After fiddling with the trimmer to hit the golden ratio, here's what it sounds like.

**20:26** · Great, that's the same smooth reverb we got before. Now let's try a smaller room size.

**20:35** · Huh, that gives us pretty unpleasant metallic ringing. Why? To find out, let's track the frequency of both clocks as we increase the CV. Turns out the two curves aren't shaped the same way. The fast clock rises steadily. It's almost a straight line, but the slow clock rises more and more slowly the higher we go, so its curve bends. That means the ratio is only correct at the point where we calibrated it. From there, it drifts upwards as CV increases because the fast clock outpaces the slow one.

### Locking the ratio

**21:02** · The ideal fix would be to bend the fast clock's curve the same way, so the ratio stays perfectly locked. Unfortunately, that curve is baked into the chip, which means we can't easily change it. So let's try a less ideal but much simpler approach instead, changing the steepness of the fast clock's curve. If we make it a little less steep, we should be able to counteract the drift. There's a trade-off though.

**21:26** · Changing the steepness doesn't change the shape of the curve, so we can only reduce the drift in parts of the range, not get rid of it everywhere. If we set it so the ratio is perfect at both ends, everything in between drifts down. If we get it right at the start and a little past the middle, only the top end drifts up. On average, the latter option seems to give us the best tracking overall. To try this, we'll give the faster clock an additional gain trimmer. It changes how much the incoming CV gets divided down, which decides how quickly the frequency rises as CV increases. Why a trimmer?

**22:00** · Because every V3102 has a slightly different curve, so there's no one-size-fits-all solution. To calibrate it, we alternate between the knob's maximum position and about 11:00 using the offset trimmer to hit the golden ratio at the top and the gain trimmer to hit it a little past the center.

**22:29** · \[music\] Nice. The ration now holds across most of the sweep instead of only at the one point we calibrated. At the top end, it does get a little metallic, but I actually don't mind the way it sounds, so I'll keep that part of the range. And now that the room size is voltage controlled, we can also add an input for an external CV. Unfortunately, doing it with a passive mixer like we did for the decay would mean adding more resistance between the knob and the clock CV inputs. This would throw a carefully locked ratio off again, so here's a resistorless alternative.

**23:01** · We'll set up a PNP transistor below the room size knob like this and apply the CV to its base. That raises the floor of the knob's divider depending on the CV level, which pushes the knob's output voltage up as well. The tradeoff is that this only works when the knob isn't already at its maximum, but we don't really want to go past the range we've established anyway.

**23:23** · Now, if we modulate the room size with an LFO, we get some interesting repitching effects.

### Module development & sound demos

**23:39** · So it turns out you can build an analog reverb circuit without springs, plates, or code. You just need two delay lines and a minus sign, and we managed to build it out into something surprisingly flexible. We can set the size of the space, how long it rings out, and how bright or dark it sounds with voltage control over the first two parameters.

**23:58** · Of course, this is still a noisy prototype. It proves that the circuit works, but it's not a finished instrument. So I hit up my friend Seth Erica since to see if we could turn it into a proper Eurorack module. Here's what we landed on. All three parameters are here with the room size control taking center stage. We also added an input gain knob, a dry wet control, and another output, so we get one mixed and one fully wet. A little while later, this showed up in the mail. Time to heat up the soldering iron.

**24:25** · It took a while to assemble since the PCB is pretty densely populated, and we even needed a dedicated board for the interfacing elements. But the upside is that the finished module ends up being pretty slim. Now, how does it hold up musically? Let's give it a few different sound sources and see where it shines. \[music\] \[music\] \[music\] \[music\]

**25:41** · \[music\] \[music\] \[music\] \[music\] To my ears, our circuit falls into its own niche, somewhere between spring and lo-fi digital reverb.

### Outro

**26:11** · It's grainy, low-res, and clearly artificial, while having a distinct analog texture. And the jump from breadboard to PCB cleaned up the noise pretty well. I actually like the sound a lot, so Erik Esenson and I decided to add it to our lineup of DIY Eurorack kits. That way, you can breadboard along with this video, experiment with the circuit, and then build the finished module yourself. The kit is now available in the Erica Synths webshop. And if you want to dive deeper into circuit design, check out my Patreon.

**26:39** · There you'll find additional content like circuit design essays, challenges, and foundational articles for complete beginners. That's it for this one. Thanks for watching and until next time. See ya.