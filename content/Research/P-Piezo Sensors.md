---
title: P-Piezo Sensors
date: 2025-06-08 05:16:51
description: 
tags: 
aliases: 
draft: true
cssclasses:
  - wide-page
---
> [!NOTE] DIY Piezo Preamp
> Sources, [video](https://www.youtube.com/watch?v=CKZPcnwD57U), [diagram-components](https://www.homemade-circuits.com/diy-contact-mic-circuit/#using-mpf-120), [making of diagram](https://www.youtube.com/watch?v=aOJuCYgmPPE)
>
> **Components (Advanced)**
> Female TS Connectors: [https://amzn.to/48jXzPw](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2NCWHRaZmJTVGxTNGZ3a2I3UmNmbXRSYTlYQXxBQ3Jtc0tuVTJnM09WcHBvYVAxQjFwYU1Vcnk3RDU0UHV0cFQzeEtBc1ZJSjRQRjlhLU1KbExRVzlqakQ5clhjWTgwUzFjcGR2Um9HQjRISnh3aXdQRE1lTUhNWUJCZWhQRFBnUk8xdVRVLXdfQWdVbjZXSnNVSQ&q=https%3A%2F%2Famzn.to%2F48jXzPw&v=CKZPcnwD57U) 
> 3.3M Ohm Resistors: [https://amzn.to/4asxKi7](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEZ6OTBCNFNfMFFudmFac21LeEJhMU45VFZkUXxBQ3Jtc0trWmMzSC1DYjN2Si1SSXdBTE1vQUR3SWkxVnluQUloYmdtV3BSVmxLeEd1cmZ1QTFsUkg3X2k1cmlNdkdKMUs5YmR6MWVxRF9VcWZJVkpyVV9EWFB6dnFuWUJlQmMyQUV5T3ZVcmlPb0c3VHI5NHpqRQ&q=https%3A%2F%2Famzn.to%2F4asxKi7&v=CKZPcnwD57U) 
> 1.5K Ohm Resistors: [https://amzn.to/3H6zJv7](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1hhbVVJZ055UHNlaHRNV1N4bng5UkdMZVJEQXxBQ3Jtc0ttWmtUdEpTN0pMVFF2QU55S3ZZbF9iRmszX3lJX3hkRWw3WFFFNVJESlkyX0hLelVfYUpxdVg5bU11YnAyWjNUTDFkMTVjcXQ5X0dzQXBtQ0ZQVEl6cE9RZDc5cl9hUDlXMU1ObDVqcmtTVE5TcEE5VQ&q=https%3A%2F%2Famzn.to%2F3H6zJv7&v=CKZPcnwD57U) 
> 560 Ohm Resistors: [https://amzn.to/3NvjpY5](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkV4MjlCVDR4bW5STThubUw2OExSczBYS0RIUXxBQ3Jtc0tscXUzOHFfbXFpRGNZejMzMmlxSnBLWElibS1tY3ZTdGFGY1J2N2VHcGlwU0VoNjZIWGQ1aHBhX2tESG9HMFhkTlJ0YlV4d1hFZklrSkJkazJCRHdUSWxPMkctS2puNkk2eDhtTHhFMnU1UV93QnBWQQ&q=https%3A%2F%2Famzn.to%2F3NvjpY5&v=CKZPcnwD57U) 
> 220K Ohm Resistors: [https://amzn.to/48mjwgJ](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmJOcUFiXzVCWDhVcm90anM0QnNlaExGT1Nhd3xBQ3Jtc0tsOEQ0aHFROXlYUzdCaklhZ2ZJMDFzVGhwT0FOWi1sak5tS2pEaWRLUWVPbHZVTEZtZ1d4VHNPS0FSTDlReG9Iek44dzVjNFdRRmVvTzRQSmNIRVBDb2YxMjVjQlQzNjZjTW1Ld1ljSFlOMmZBODJYNA&q=https%3A%2F%2Famzn.to%2F48mjwgJ&v=CKZPcnwD57U) 
> MPF 102 Transistor: [https://amzn.to/48gpOhK](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXVlejVqczNBeE96QlZCUVNsX0FBam1SOUNCZ3xBQ3Jtc0tuMWdIbHNndWpUbE9HR3c1azZmdjI5SEYtVG52MTZFNlBPVEVFVVl2d2hWcU94bGM2X0NkTF8yWnM4d01sUjRYSmM4dWVhX0gxTFRaMVpSdWRSWlJ1WEgwVW5lUWNrTlRYRVc4cE9SNVN6Ylp0WTBNRQ&q=https%3A%2F%2Famzn.to%2F48gpOhK&v=CKZPcnwD57U) 
> 4.7uF (mF) capacitor: [https://amzn.to/47RWq1H](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbW5ZLTVVMTI4RUVFYmVaZ0lSRGZlWG9TU2xId3xBQ3Jtc0ttbkI5ajh5TllNeEFQOEtoZHJ0LWZwazYtd1ZXWmJteWtXbFVkQ09wb0NVRTJtSTF4X003SFBTZ0kyN2NCQ1lsYkVvWklqc1BxQy00OEs1RGRfVTVsMTdMWmRtRGNtV3RGUUw1RGk0Ty1MeDZScUlFZw&q=https%3A%2F%2Famzn.to%2F47RWq1H&v=CKZPcnwD57U) 
> 10uF (mF) capacitor: [https://amzn.to/3v14tL4](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmFWclExUC1HUC1oWUVnN0hEVWRBWVFzaGZEQXxBQ3Jtc0tuR1ZiVWFyNjl1b0FWTU5mWDNoMWhsSGJ3LTI4QzY5VW9ITjA5ZjhsNEdtSXJ1UkdrM3p1Um9WSFJLUmJIdTE5RWxqeW9Hb0ZBTHJzenpOSXRKdF9QZThPZk1hVHRBU3lxTDBDYVRLRnlkMVBKZHRaMA&q=https%3A%2F%2Famzn.to%2F3v14tL4&v=CKZPcnwD57U) 
> Rocker Switches: [https://amzn.to/3RO12jX](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTd0R0ZKcTVmcWp0Mzc0TGtlYmtJUDZwZkpwZ3xBQ3Jtc0tuSnNMZERBYUpiYjZ1cWllR3hKSG5yNEtkWFN5TkVSdGxOc0NDTVY5YjhIa2RyR1BtcG44T1g4emxqN1NvNlRkRGlZSE41aEI2TGZxWHR2ME5xbWstY3hpdDd2RzlRaERXbmQzM2JjbktEQ2JEOHFFaw&q=https%3A%2F%2Famzn.to%2F3RO12jX&v=CKZPcnwD57U) 
> 9V Battery Clip: [https://amzn.to/3NvBRA0](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblpISFlUb0VJemctcVlvUHJmLTVSWnJWNXBiUXxBQ3Jtc0trUzZiQ2xscmtEemlCMXgxQ0x1Szk2dlh6UThYVF90MVZWMlBfZ203ZndLc29RV2w4bk5BOXZZYldrcEZ2MFV2QWJydU5yWUFESHZHdkRRQlNWYTQtbEhNZnp2SGVpQmdRZ3RJU09iV29vcTFiTzBabw&q=https%3A%2F%2Famzn.to%2F3NvBRA0&v=CKZPcnwD57U) 
> 9V Batteries: [https://amzn.to/3RLZLK2](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXhEcGNHUkctQ0liWk5MNEtWYVFPcVZuRGhLd3xBQ3Jtc0trcWE4RzVnalBTVXNGbU55dmpEVExNRl9JN1J3TnU0Ny1rLWs3aThmX2NrZldYUnFmdHgzSmswdFlmRmo0ZFotRzU4b2R6RFNnU0Y0bFh5U19pRm5KWU5CSUEzUTZCbmNFaDhKckpmaHRzOTVUaHJnTQ&q=https%3A%2F%2Famzn.to%2F3RLZLK2&v=CKZPcnwD57U) 
> Copper Tape: [https://amzn.to/48q1bj3](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblNqaThiZXpXTnlUaFJpZW84c0ZsbnIzZWRYd3xBQ3Jtc0ttUVpoNWQ5WkVtc28zdG1tanJleWxpMDN3VEZ3WmlNUklxV0cteGQ0YWRpTlFFUlRWdmNiWnRIX2N0Qm9yTmoybjlvd0RhMmVDVzkwX1FBOHJJa01mb2RrQ3lhb1V3YWpSMkN3THJDcHpjM19nbVJyMA&q=https%3A%2F%2Famzn.to%2F48q1bj3&v=CKZPcnwD57U) 
> 24 Gauge Copper Wire: [https://amzn.to/4ask2Me](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbDFjWEZYZk5hQzBadFA1cUF3ckhaaUs0aGZtZ3xBQ3Jtc0tsaE1MZ3dfOTZ1bDhJQm1hRDNtaFZHTE5BMkZ5bV9ldW9tYkx0SS03OFhmSnVDM2twLUFfazFOR0FYZ1NEanp6TEVaYzRrNHMzVS1wQy1zTkpGNERfcXp3ZmtBM01PRHdkMmk4azVPSHQ2a19MbHlROA&q=https%3A%2F%2Famzn.to%2F4ask2Me&v=CKZPcnwD57U)
> 
> **Components (Easy)**
> [DIY Mic Amplifier Circuit With PAM8403](https://www.youtube.com/watch?v=fHj6gO2D4oU)

> [!NOTE] Piezo Preamp II
> [Make a Contact Microphone and Preamp - (Queensland University)​](https://wiki.slq.qld.gov.au/doku.php?id=workshops:prototypes:contactmicandpreamp)
> 
> [Basti Kuhz Oulu's version](https://bastikuhz.com/projects/contactmicpreamp) Improved version of the above one.

> [!NOTE] Piezo Preamp III (9V) -IV (Plug-in Power) - contact microphone hi-Z amplifier – low noise version
> [Piezo contact microphone hi-Z amplifier – low noise version – Richard Mudhar](https://www.richardmudhar.com/piezo-contact-microphone-hi-z-amplifier-low-noise-version/)
> 
> **Piezo contact microphone preamp for plug-in-power**
> ⭐ [circuit diagram](https://www.richardmudhar.com/blog/2022/07/piezo-contact-microphone-preamp-for-plug-in-power/)
> ⭐ [circuit diagram 2](https://www.chair.audio/diy-piezo-preamp/)

> [!NOTE] Piezo Preamp V - Makezine (9V, MPF102)
> [Collin's Lab: DIY Contact Mic - Make:](https://makezine.com/article/craft/music/collins-lab-diy-contact-mic/)

> [!NOTE] Piezo Preamp VI - Phantom Powered
> [Piezo Buffer – OPAIC – opamp impedance converter – POTAR Design Concern](https://potardesign.com/piezo-buffer-opaic-opamp-impedance-converter/)


> [!NOTE] Piezo Preamp VII - TLC 272 + 3V
> [Lab3 - Laboratory for Experimental Computer Science](https://interface.khm.de/index.php/lab-log/piezo-disk-preamplifier/index.html)
> 🛒 [TLC272CP, TLC272, DIP-8 Entegre Devre](https://karakoyelektronik.com/amplifikatorler/tlc272cp-21584?SubmitCurrency=1&id_currency=1)

## Tips
- Reduce hum noise, [video](https://www.youtube.com/watch?v=f235gOrhaz0)

- Preparing Piezo mic, noise isolation, [video](https://www.youtube.com/watch?v=wdMh7KX2gTA)

- Connect multiple piezos in Parallel not in series. Because Serial connection increases impedance. In parallel connection, each positive and negative goes to connection tips separately.

## Case Studies
[Hear hidden sounds with a DIY microphone - CNET](https://www.cnet.com/tech/home-entertainment/hear-hidden-sounds-with-a-diy-microphone/)

[DIY Hydrophone - YouTube](https://www.youtube.com/watch?v=C3Sm4YkPF9w)

[Crystal Light With Piezoelectricity, Instructables](https://www.instructables.com/Crystal-Light-With-Piezoelectricity-the-Precious-L/)

## Piezo Mic Version History
The problems with using the piezo disk as a microphone as follows;
1. It's high impedance 
2. It's deaf to low frequencies
3. It acts as an magnetic field antenna causing to produce noise
4. It has very low capacitance 

Because of its high Voltage output with low current, traditional audio devices cannot handle those Voltage spikes and generates clippings. When one gains the recorded/monitored signal, this time noisy signals are increased. 

### Version 01 
Piezo is directly connected to a shielded mono audio cable. A powerful magnet placed on top of the piezo and covered with hot general purpose silicon to isolate the sensor from external contacts. This version is prone to environmental noises causing by the electromagnetic fields such as electricity cables connected to power sources around the recording spot.

![[contact_mic_v1.jpg|-center|500]]

### Version 02
**Circuit diagram:** [piezo contact microphone preamp for plug-in-power – Richard Mudhar](https://www.richardmudhar.com/blog/2022/07/piezo-contact-microphone-preamp-for-plug-in-power/) (Figure I)

![[piezo-v2-circuit-ref 1.jpeg|center|500]]

This version uses plug-in power of a sound recording device or any computer's mic input. A FET buffer handles the high-impedance issue of piezo sensors. A 2N3819 transistor, a 1 MΩ resistor with 470 Ω resistor in the circuit design. To avoid noise issues from external magnetic fields all connections applied directly to a shielded TS (see [[Audio Jacks and Cables]]) audio jack.

![[2n3819.jpg|center|500]]

![[piezo-ver2.jpeg|center|500]]

#### Casing V1

#### Casing V2
The second version of the casing includes additional brackets to attach the sensor on non-metal surfaces curved structures like a branch of a tree. 

![[piezo-preamp-casev2.jpg|center|500]]


As shown in the Figure XX, the case for the piezo and preamp circuit was covered with sticky conductive aluminum tape to avoid external magnetic field causing the background hum noise.

#### Casing V3
Third version of the case has ticker case. Placing the magnet into the case can be problematic. The  solder points on the piezo are protruding. It causes an empty space under the magnet. The bottom closed part of the case plus the extra space between the piezo cause the magnet to reduce its magnetic power. It also makes the build process harder to fit materials inside the case within the preamp circuit. To overcome magnetic power-loss and easing the assembly process, nineteen 2x4 mm (radius x height) cylindrical holes around the piezo under the case and attach magnets inside those holes (Figure XXX).

![[piezo-preamp-casev3.jpg|center|500]]

After the case 3D printing is done, since the hole radius are too tiny, a drill is used to larger the holes to fit magnets inside them. Also the inside of the box is sealed with aluminium foil tape to isolate magnetic field-based electric signal. 


The assembly process is straight forward according for the housing for the piezo. A small PCB used to hold the circuit components of the preamp. The components soldered onto the PCB according to the diagram (Figure XXX).  

### Version 03
![[2n5457.jpg|center]]


## Stereo Wiring Tips
Here’s a clear breakdown of your current wiring, potential noise issues, and alternative solutions:

### 1. Your Current Wiring (Dual-Mono TRS)
**Cable:** Mono (TS)  
**Jack:** Stereo (TRS)  
**Connections:**  
- **Tip (L)** → Signal (hot)  
- **Ring (R)** → Signal (hot) *(duplicated)*  
- **Sleeve** → Ground  

**Diagram:**  
```
Guitar/Piezo Preamp       Guitar Amp (Mono Input)
   [TS Mono Cable]           [TRS Stereo Jack]
   Signal (Hot) ────────────► Tip (L)  
                              Ring (R) ◄─┐
   Ground (Shield) ─────────► Sleeve     │
                              (Signal duplicated to Ring)
```
**Issue:** Redundant Ring connection acts as an extra antenna for noise.

---

### 2. Better Alternative (Standard TS Mono)
**Simpler, lower-noise solution:**  
- Use a **standard TS mono jack** instead of TRS.  
- No Ring connection = no parallel capacitance or noise coupling.  

**Wiring:**  
- **Tip** → Signal (hot)  
- **Sleeve** → Ground  

**Diagram:**  
```
Guitar/Piezo Preamp       Guitar Amp (Mono Input)
   [TS Mono Cable]           [TS Mono Jack]
   Signal (Hot) ────────────► Tip  
   Ground (Shield) ─────────► Sleeve
```
**Advantages:**  
- Eliminates redundant signal path.  
- Better noise rejection (full shielding around single conductor).  

---

### 3. If You *Must* Use a TRS Jack (Piezo Preamp Requirement)
Some piezo preamps expect a TRS jack (even for mono signals) to detect connections. In this case:  
- **Wire Ring to Ground** (not Signal) to avoid noise.  

**Wiring:**  
- **Tip** → Signal (hot)  
- **Ring** → *Unconnected* or **shorted to Sleeve** (ground)  
- **Sleeve** → Ground  

**Diagram:**  
```
Guitar/Piezo Preamp       Guitar Amp (Mono Input)
   [TS Mono Cable]           [TRS Stereo Jack]
   Signal (Hot) ────────────► Tip  
                              Ring ────┐
   Ground (Shield) ─────────► Sleeve ◄─┘
```
**Why?**  
- Prevents Ring from acting as an antenna.  
- Still compatible with TRS inputs (some devices check Ring for plug detection).  

---

### **Key Takeaways**  
1. **Best for noise rejection:** Use a **TS mono jack** (skip Ring entirely).  
2. **If TRS is mandatory:** Short **Ring to Ground** (not Signal).  
3. **Avoid:** Connecting Signal to both Tip *and* Ring (creates noise risk).  


## Reducing the Piezo Output Voltage via Capacitors
**Circuit Diagram:** Very low capacitors can be used to reduce the output Voltage level. The circuit diagram is derived from the [video](https://www.youtube.com/watch?v=k-MGJkXUQqs). A detailed article can be found in the following link with how to make calculations, [How To Reduce The Gain Of A DIY Contact Mic](https://metalmarshmallow.com/blog_post.php?id=17)

![[piezo-v3-voltagelowering.png|center|400]]

## Sources
- Marshmallow, [3d Printed DIY Contact Mic - YouTube](https://www.youtube.com/watch?v=wdMh7KX2gTA), [piezo amp](https://metalmarshmallow.com/product.php?product_id=29)
- [Soldering Piezo Microphone - Instructables](https://www.instructables.com/Homemade-Piezo-Microphone/)
- [Magnetic Piezo Contact Microphone & Preamp](https://www.instructables.com/Magnetic-Contact-Mic-Preamp/)
- What is impedance? [article](https://www.soundonsound.com/techniques/understanding-impedance)
- Gerber file provided [Contact Microphone, Instructables](https://www.instructables.com/Contact-Microphone/)
- How to solder mic cable? [SAE](https://www.youtube.com/watch?v=EaWUzTvs9QQ) 
- Complete list of Piezo Contact Mics and Comparisons, [link](https://zachpoff.com/resources/choosing-a-contact-mic-for-field-recording/)
- 2N5457 JFET Applications, [YouTube](https://www.youtube.com/watch?v=rJb1eVR30dY)
