---
title: MacOS - Automate Tasks via launchd
date: 2025-05-06 09:46:36
description:
tags:
  - automation
  - shell
  - MacOS
aliases:
draft: false
---
Apple actually deprecated `cron` years ago in favor of **Launch Agents** (`launchd`). `Launchd` service of Apple fixes the missing issue of `cron`. Suppose that you have a scheduled `cron` job that runs everyday at 14:00. In practice, the command can be executed, if your machine is turned on. Otherwise, the command cannot be executed. The macOS system launcher has a built-in catch-up feature: if your Mac is sleeping when a scheduled event comes around, **it will automatically run the task as soon as the Mac wakes up.** 


## 1. Create a launch agent file in your user directory:
```bash
nano ~/Library/LaunchAgents/com.alptugan.githubbackup.plist
```


## 2. Paste this XML configuration (adjusting the script path if necessary):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.alptugan.githubbackup</string>

	<key>ProgramArguments</key>
	<array>
		<string>/bin/sh</string>
		<string>/Users/alptugan/Documents/DEVS/scripts/backup_dotfiles</string>
	</array>

	<!-- Run every Sunday at 10:00 AM -->
	<key>StartCalendarInterval</key>
	<dict>
		<key>Weekday</key>
		<integer>0</integer> <!-- 0 = Sunday -->
		<key>Hour</key>
		<integer>10</integer>
		<key>Minute</key>
		<integer>0</integer>
	</dict>

	<key>StandardOutPath</key>
	<string>/Users/alptugan/Documents/Obsidian/backup.log</string>
	<key>StandardErrorPath</key>
	<string>/Users/alptugan/Documents/Obsidian/backup_error.log</string>
</dict>
</plist>
```

Another example make the script runs every 10 hours on everyday.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.alptugan.obsidiansync</string>

    <key>ProgramArguments</key>
    <array>
        <string>/bin/sh</string>
        <string>/Users/alptugan/Documents/DEVS/scripts/obsidian_sync</string>
    </array>

    <!-- Run every 10 hours (36,000 seconds) -->
    <key>StartInterval</key>
    <integer>36000</integer>

    <!-- Run immediately when loaded or on boot -->
    <key>RunAtLoad</key>
    <true/>

    <key>StandardOutPath</key>
    <string>/Users/alptugan/Documents/Obsidian/obsidian_sync.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/alptugan/Documents/Obsidian/obsidian_sync_error.log</string>
</dict>
</plist>
```

## 3. Verify The Syntax
```bash
plutil ~/Library/LaunchAgents/com.alptugan.obsidian_sync.plist

# (It should output `OK` now).
```

## 4. Check Status
```bash
launchctl list | grep com.alptugan.obsidian_sync

# You should see a PID or an exit status of `0` in the output!
```

## 5. The Fix: Give `/bin/sh` Full Disk Access
You need to explicitly allow `/bin/sh` to access files in system and user directories when running as a background service.

1. Open **System Settings > Privacy & Security > Full Disk Access**.
    
2. Click the **`+`** button at the bottom (you may need to enter your Mac password or Touch ID).
    
3. Press **`CMD + SHIFT + G`** to open the path drawer.
    
4. Type **`/bin/sh`** and hit **Enter**.
    
5. Select `sh` and click **Open**.
    
6. Ensure the toggle switch next to `sh` is set to **ON**.

## 6. Load the agent so macOS registers it:
```bash
launchctl load ~/Library/LaunchAgents/com.alptugan.githubbackup.plist
```

## 7. Kickstart the agent to test
```bash
launchctl kickstart -k gui/$(id -u)/com.alptugan.obsidian_sync
```


> [!NOTE] If you need to change the file name or refresh the loaded agent, execute the boot out command to refresh `launchd`.
```bash
launchctl bootout gui/$(id -u)/com.alptugan.obsidian_sync 2>/dev/null
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.alptugan.obsidian_sync.plist
```
