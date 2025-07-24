---
title: MacOS - Key Mapping with hidutil
date: 2025-05-11 04:05:40
description: 
tags:
  - MacOS
  - shell
  - productivity
aliases: 
draft: false
---
The possible usage scenario is 
1. Determine an unused key on the keyboard 

2. Check the documentation at [Technical Note TN2450: Remapping Keys in macOS 10.12 Sierra](https://developer.apple.com/library/archive/technotes/tn2450/_index.html#//apple_ref/doc/uid/DTS40017618-CH1-KEY_TABLE_USAGES)

3. Determine the trigger key. E.g. <kbd>caps lock</kbd>. Check its `hex` code.  Or Use [skhd]() to get `hex` code of any key on the keyboard using the following command:
```shell
   skhd -o
```

<center>OR</center>

> [!TIP] Free hidutil file generator
> [hidutil key remapping generator](https://hidutil-generator.netlify.app/)


4. Prepare a `.json`  document:
```shell
{
	"UserKeyMapping": 
	[
		{	
			"HIDKeyboardModifierMappingSrc": 0x700000039,
			"HIDKeyboardModifierMappingDst": 0x700000073
		}
	]
}
```

5. Run
```shell
   hidutil property --set "$(cat ~/capslock_to_f19.json)"
```

6. Check if it is working properly;
```shell
   hidutil property --get "UserKeyMapping"
```

The caps lock key must not work any more. Debug it through `skhd -o` command.

> [!TIP] Disabling Key Mapping
> By default when you restart the system, keymappings are deleted by default. If you don't want to restart the system, you can use the following command:
> `hidutil property --set '{"UserKeyMapping":[]}'`
