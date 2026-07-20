---
title: P-Piezo Sensors
date: 2025-06-08 05:16:51
description:
tags:
  - sound
  - soundscape
  - sounddesign
  - ecology
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
> ⭐ [circuit diagram 2](https://www.chair.audio/diy-piezo-preamp/) **2N5457** Transistor

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

- Connect multiple piezos in Parallel not in series. Because Serial connection increases impedance. In parallel connection, each positive and negative goes to connection tips separately. [video](https://www.youtube.com/watch?v=JrN4HSJadNM)

- Balanced Piezo Connection, [video](https://www.youtube.com/watch?v=JrN4HSJadNM)
![[piezo balanced connection.jpg|-left|200]]
## Case Studies
[Hear hidden sounds with a DIY microphone - CNET](https://www.cnet.com/tech/home-entertainment/hear-hidden-sounds-with-a-diy-microphone/)

[DIY Hydrophone - YouTube](https://www.youtube.com/watch?v=C3Sm4YkPF9w)

[Crystal Light With Piezoelectricity, Instructables](https://www.instructables.com/Crystal-Light-With-Piezoelectricity-the-Precious-L/)

### Tin Can + Piezo + Motor
Refer to the [documentation](https://media-host.alptugan.workers.dev/Documents/cod412-Tut-Piezo-Amplifier-Motor-Kalimba.pdf) 

<div class="two-columns" style="--column-count: 2; display: flex; gap: 2%; align-items: flex-stretch;">

<div >
<img style="width: 100%; height: 100%; object-fit: contain; display: block;" src="P-Piezo Sensors-tincan01.jpg" alt="">
</div>

<div>
<img style="width: 100%; height: 100%; object-fit: cover; display: block;" src="P-Piezo Sensors-tinca02.jpg" alt="">
</div>
</div>



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
A PCB plate fit into the case in 4x8 mm make the assembling process much easier. After the first version, larger case work better to secure and fit the components inside the case.

![[piezo-preamp-casev2-3.jpg|-center|500]]

The second version of the casing includes additional brackets to attach the sensor on non-metal surfaces curved structures like a branch of a tree. 

![[piezo-preamp-casev2.jpg|center|500]]


As shown in the Figure XX, the case for the piezo and preamp circuit was covered with sticky conductive aluminum tape to avoid external magnetic field (electronic interference) causing the background hum noise.

![[piezo-preamp-casev2-2.jpg|-center|500]]

#### Casing V3.0
Third version of the case has ticker case. Placing the magnet into the case can be problematic. The  solder points on the piezo are protruding. It causes an empty space under the magnet. The bottom closed part of the case plus the extra space between the piezo cause the magnet to reduce its magnetic power. It also makes the build process harder to fit materials inside the case within the preamp circuit. To overcome magnetic power-loss and easing the assembly process, nineteen 2x4 mm (radius x height) cylindrical holes around the piezo under the case and attach magnets inside those holes (Figure XXX).

![[piezo-preamp-casev3.jpg|center|500]]

After the case 3D printing is done, since the hole radius are too tiny, a drill is used to larger the holes to fit magnets inside them. Also the inside of the box is sealed with aluminium foil tape to isolate magnetic field-based electric signal. 

![[piezov3-0-3dprint01.jpg|-center|500]]

To isolate the electromagnetic interference and avoid noise aluminum foil tape is covered inside the case and cap. 

![[piezo-preamp-casev3-01.jpg|-center|500]]

The assembly process is straight forward according for the housing for the piezo. A small PCB used to hold the circuit components of the preamp. The components soldered onto the PCB according to the diagram (Figure XXX). In this version, components are still same, but the JFET transistor is bended onto the PCB to provide more space inside the case. 

![[piezo-v3-1-02.jpeg|-center|500]]


#### Casing V3.1
Since the magnets are not enough to grab the metal surfaces, 2x4 mm holes are enlarged to 4x6 mm holes to improve the magnetic traits of the contact microphone.

![[piezo-preamp-casev3-1-3d-tech.jpg|-center|500]]

A minor improvement on is made on casing brackets on both sides of the cap. Their vertical position moves 2 mm above the contact surface to keep the contact area clean. Sometimes these brackets prevents the microphone full contact on the rough surfaces.

Added metric three screw holes to the cap in order to keep the cap closed strictly. Older versions cause problems. One has to hot glue the cap to avoid fall off issues. The vertical notch on the housing and the cap help one to align holes. 

![[piezo-v3-1.jpg|-center|500]]

The circuit design is same with since the first version. A two-pin screw terminal is used to make easier maintenance in case of cable issues. The inner side of the case covered with aluminum tape as well. After that piezo disc's bottom surface is covered with double-sided tape To keep the piezo disc stable in its place. This tape is very thin which is used by picture frame makers. 

![[piezo-preamp-casev3-1-3d-02.jpg|-center|500]]

I created a 2mm mold cylindrical to avoid short circuit between the piezo and bottom side of the preamp PCB. Another mold is created using hot glue and mask tape to keep the piezo with full contact at the bottom. Masking tape make the hot glue easily peeled of from the mold. The method is straight forward. I cover the area with masking tape carefully. Then I apply hot glue on covered area. After waiting the hot glue is cured, I removed the masking tape and peel of the masking tape from the silicon mold. The image below showcases the procedure followed on how to create mold.

![[piezo-preamp-casev3-1-3.jpg|-center|500]]

Finally, I attached the magnets to the bottom of the case. 4x6 mm magnets significantly improve the surface stability on flat surfaces. The image b

![[piezo-preamp-casev3-1-4.jpg|-center|500]]
### Version 03
![[2n5457.jpg|center]]



### Version 04 - Built-in Battery
![[P-Piezo Sensors-battery.jpg|-center|600]]


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


### Key Takeaways
1. **Best for noise rejection:** Use a **TS mono jack** (skip Ring entirely).  
2. **If TRS is mandatory:** Short **Ring to Ground** (not Signal).  
3. **Avoid:** Connecting Signal to both Tip *and* Ring (creates noise risk).  


## Reducing the Piezo Output Voltage via Capacitors
**Circuit Diagram:** Very low capacitors can be used to reduce the output Voltage level. The circuit diagram is derived from the [video](https://www.youtube.com/watch?v=k-MGJkXUQqs). A detailed article can be found in the following link with how to make calculations, [How To Reduce The Gain Of A DIY Contact Mic](https://metalmarshmallow.com/blog_post.php?id=17)

![[piezo-v3-voltagelowering.png|center|400]]

## Market
- [Bnineteenteam Akustik Gitar Ukulele Keman Için Mini Piezo Kontak Mikrofon Alıcısı, Ayarlanabilir Ses Seviyesi, Profesyonel Ses Üretimi : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/Akustik-Mikrofon-Ayarlanabilir-Seviyesi-Profesyonel/dp/B0CVLK918R/ref=sr_1_111?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.JS0-SvFfGaPrjpHV5LMBWrg_fxPiy8TXV9hlxgGkHGRv5A9yDuYSMQ0QmnqfPYX7rdsaq9rys4SpvQ1Dlpw29cUA9qOG6tj9AbGbOnr0y_n7mJBzXnGnAAnb6Pe5uXuEUklMKiW02RqZnQSSthRyjIoRrsRjDWe1MqMvBjYfkl3WGOY8hscDhI_y32uZS5gZYJiY8PNPR8_WO6lXklM9voraU4GWNmqhPMqs3jO8eQCAK0NCB-zNItMRmKqZYcg8pNUaUtheq2EVART29EBZMnVJMXdbUIi7xIiWxD22UbI.qkasf9xviZjEIGhn9E3W8vntDQYw8aqOIia7qBttLDs&dib_tag=se&keywords=kontak+mikrofonu&qid=1757861754&sprefix=kontak+mikrofon%2Caps%2C123&sr=8-111&xpid=SgfxOlTXu_jPy)
- [Akustik Gitar Pikap, Keman Pikap Evrensel Ahşap Gitar Kontak Mikrofon Pikap Gitar Ukulele Keman Mandolin Için Bas Manyetikler : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/Akustik-Evrensel-Mikrofon-Mandolin-Manyetikler/dp/B0DFVPHKHX/ref=sr_1_40?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.2qmMvz5LWx0IfVOLiLbiOJcjwfhiZX7AMnPVhSVXEkFnWualPxq2vp3dSRbxjNLXt25xLWpUPVy4hY-H3-CgMF3GYXTzLAy_kif_jvJBSimFHsmrkkH-YjIzb9YInsbxXUTRy4MM3Nhj_-uqtHQNo4vJ-YD5yvHr1tKjcO9zU1IIx01Uw3w8y-2TC6bZntySKqqWoZuBkrb3sv1oaQ8DGcBIW2UCqJFp9otvyDgxL7pZnZyxTc54CgbyRCqoB5eNM0xI8GMkY2N4TWdDLVSXsx4gEXqELfI9DHHCXSLJkxI.IAaajE0MKdKJ5a2cedsw_P4saiwdxL1pBONF0XxA3Tk&dib_tag=se&keywords=kontak+mikrofonu&qid=1757861642&sprefix=kontak+mikrofon%2Caps%2C123&sr=8-40)
- [Evrensel Klip Kontak Mikrofon Müzik Aletleri için Taşınabilir Ses Verici Korna Keman Gitar Ukulele ABS Metal Tuner : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/Evrensel-Mikrofon-Aletleri-Ta%C5%9F%C4%B1nabilir-Ukulele/dp/B0DDJS6YDF/ref=sr_1_37?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.2qmMvz5LWx0IfVOLiLbiOJcjwfhiZX7AMnPVhSVXEkFnWualPxq2vp3dSRbxjNLXt25xLWpUPVy4hY-H3-CgMF3GYXTzLAy_kif_jvJBSimFHsmrkkH-YjIzb9YInsbxXUTRy4MM3Nhj_-uqtHQNo4vJ-YD5yvHr1tKjcO9zU1IIx01Uw3w8y-2TC6bZntySKqqWoZuBkrb3sv1oaQ8DGcBIW2UCqJFp9otvyDgxL7pZnZyxTc54CgbyRCqoB5eNM0xI8GMkY2N4TWdDLVSXsx4gEXqELfI9DHHCXSLJkxI.IAaajE0MKdKJ5a2cedsw_P4saiwdxL1pBONF0XxA3Tk&dib_tag=se&keywords=kontak+mikrofonu&qid=1757861642&sprefix=kontak+mikrofon%2Caps%2C123&sr=8-37)
- [Gitar Pikap AD 35 Mini Ses Pikap Piezo Kontakları Gitar Mandolin Banjo Çello Için Ses Kontrolü Mikrofon Dönüştürücü : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/Kontaklar%C4%B1-Mandolin-Kontrol%C3%BC-Mikrofon-D%C3%B6n%C3%BC%C5%9Ft%C3%BCr%C3%BCc%C3%BC/dp/B0DZTYLH7C/ref=sr_1_20?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.2qmMvz5LWx0IfVOLiLbiOJcjwfhiZX7AMnPVhSVXEkFnWualPxq2vp3dSRbxjNLXt25xLWpUPVy4hY-H3-CgMF3GYXTzLAy_kif_jvJBSimFHsmrkkH-YjIzb9YInsbxXUTRy4MM3Nhj_-uqtHQNo4vJ-YD5yvHr1tKjcO9zU1IIx01Uw3w8y-2TC6bZntySKqqWoZuBkrb3sv1oaQ8DGcBIW2UCqJFp9otvyDgxL7pZnZyxTc54CgbyRCqoB5eNM0xI8GMkY2N4TWdDLVSXsx4gEXqELfI9DHHCXSLJkxI.IAaajE0MKdKJ5a2cedsw_P4saiwdxL1pBONF0XxA3Tk&dib_tag=se&keywords=kontak+mikrofonu&qid=1757861642&sprefix=kontak+mikrofon%2Caps%2C123&sr=8-20)
- [Okeeyseda 2 Adet Piezo İletişim Mikrofon Pickup Gitar Keman Banjo Mandolin Ukulele : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/Okeeyseda-%C4%B0leti%C5%9Fim-Mikrofon-Mandolin-Ukulele/dp/B0DT7HY3RT/ref=sr_1_7?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.2qmMvz5LWx0IfVOLiLbiOJcjwfhiZX7AMnPVhSVXEkFnWualPxq2vp3dSRbxjNLXt25xLWpUPVy4hY-H3-CgMF3GYXTzLAy_kif_jvJBSimFHsmrkkH-YjIzb9YInsbxXUTRy4MM3Nhj_-uqtHQNo4vJ-YD5yvHr1tKjcO9zU1IIx01Uw3w8y-2TC6bZntySKqqWoZuBkrb3sv1oaQ8DGcBIW2UCqJFp9otvyDgxL7pZnZyxTc54CgbyRCqoB5eNM0xI8GMkY2N4TWdDLVSXsx4gEXqELfI9DHHCXSLJkxI.IAaajE0MKdKJ5a2cedsw_P4saiwdxL1pBONF0XxA3Tk&dib_tag=se&keywords=kontak+mikrofonu&qid=1757861642&sprefix=kontak+mikrofon%2Caps%2C123&sr=8-7)
- [Korg - CM-300-BK Klip Tipi Tuner için Geliştirilmiş Tasarım Kontak Mikrofonu - Siyah : Amazon.com.tr: Müzik Enstrümanları ve DJ](https://www.amazon.com.tr/KORG-CM-300-BK-Geli%C5%9Ftirilmi%C5%9F-Tasar%C4%B1m-Mikrofonu/dp/B07DZRDCMB/ref=sr_1_5?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=72111D1E29HA&dib=eyJ2IjoiMSJ9.2qmMvz5LWx0IfVOLiLbiOJcjwfhiZX7AMnPVhSVXEkFnWualPxq2vp3dSRbxjNLXt25xLWpUPVy4hY-H3-CgMF3GYXTzLAy_kif_jvJBSimFHsmrkkH-YjIzb9YInsbxXUTRy4MM3Nhj_-uqtHQNo4vJ-YD5yvHr1tKjcO9zU1IIx01Uw3w8y-2TC6bZntySKqqWoZuBkrb3sv1oaQ8DGcBIW2UCqJFp9otvyDgxL7pZnZyxTc54CgbyRCqoB5eNM0xI8GMkY2N4TWdDLVSXsx4gEXqELfI9DHHCXSLJkxI.IAaajE0MKdKJ5a2cedsw_P4saiwdxL1pBONF0XxA3Tk&dib_tag=se&keywords=kontak%2Bmikrofonu&qid=1757861642&sprefix=kontak%2Bmikrofon%2Caps%2C123&sr=8-5&th=1)
## Sources
- Marshmallow, [3d Printed DIY Contact Mic - YouTube](https://www.youtube.com/watch?v=wdMh7KX2gTA), [piezo amp](https://metalmarshmallow.com/product.php?product_id=29)
- [Soldering Piezo Microphone - Instructables](https://www.instructables.com/Homemade-Piezo-Microphone/)
- [Magnetic Piezo Contact Microphone & Preamp](https://www.instructables.com/Magnetic-Contact-Mic-Preamp/)
- What is impedance? [article](https://www.soundonsound.com/techniques/understanding-impedance)
- Gerber file provided [Contact Microphone, Instructables](https://www.instructables.com/Contact-Microphone/)
- How to solder mic cable? [SAE](https://www.youtube.com/watch?v=EaWUzTvs9QQ) 
- Complete list of Piezo Contact Mics and Comparisons, [link](https://zachpoff.com/resources/choosing-a-contact-mic-for-field-recording/)
- 2N5457 JFET Applications, [YouTube](https://www.youtube.com/watch?v=rJb1eVR30dY)


## Hardware List for Piezo Box
Video tutorial → [youtube](https://www.youtube.com/watch?v=RXFaXT8EsZQ), [youtube2](https://www.youtube.com/watch?v=EzSu5zOX_Qg), [youtube3](https://www.youtube.com/watch?v=zI7EEvV4Lp8), [youtube4](https://www.youtube.com/watch?v=4Wrsr1qnN9Q), [youtube5-Korg CM400](https://www.youtube.com/watch?v=hy_RZyg469g)

**DIY Piezo Mic Parts List**
- 25mm or 50mm with cables, [amazon](https://www.amazon.com.tr/Arduino-Piezzo-Buzzer-50mm-Kablolu/dp/B0B2WL3TYM/ref=sr_1_2?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91)
- USB C Ses kartı, [hepsiburada](https://www.hepsiburada.com/veggieg-type-c-ses-karti-3-5mm-kulaklik-ve-mikrofon-girisli-p-HBCV000075U3DD), [hepsiburada](https://www.hepsiburada.com/veggieg-type-c-to-3-5mm-aux-ve-mikrofon-donusturucu-adaptor-dac-chip-hifi-ses-karti-pm-HBC0000C723HU)
- Metal or wooden box.
- Double-sided tape.
- Silicon glue.
- Aluminium foil for noise isolation (optional).
- Stereo or mono cable 1/8, [hepsiburada](https://www.hepsiburada.com/altin-uclu-arac-muzik-ses-kablosu-stereo-aux-kablo-1-mt-3-5mm-siyah-p-HBCV0000AC8ZDF)

**Ready-made Piezo Mic List**
- [Korg CM-400](https://www.amazon.com.tr/KORG-CM400BK-Tuner/dp/B0CSGN4GRF/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91) a ready made contact microphone built for instrument tuners.
- USB C Ses kartı, [hepsiburada](https://www.hepsiburada.com/veggieg-type-c-ses-karti-3-5mm-kulaklik-ve-mikrofon-girisli-p-HBCV000075U3DD), [hepsiburada](https://www.hepsiburada.com/veggieg-type-c-to-3-5mm-aux-ve-mikrofon-donusturucu-adaptor-dac-chip-hifi-ses-karti-pm-HBC0000C723HU)
- Metal or wooden box.
- Double-sided tape.
- Silicon glue.
- Aluminium foil for noise isolation (optional).