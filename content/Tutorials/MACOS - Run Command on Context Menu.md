---
title: MACOS - Run Command on Context Menu
date: 2025-02-23
modification date: 2025-03-07T12:46:00
description: 
tags:
  - tutorial
  - contextMenu
  - MacOS
aliases: 
draft: false
---
This tutorial presents how to add custom commands based on shell scripts to the Mac OS Finder context menu. The example script creates an `.mp4` video from provided sequence of images. Image names must be formatted as `0000000.png`, `0000001.png`, `0000002.png`, so on.

1. Open Automator -> Create "New Document" -> Select "Quick Action"
2. Configure workflow settings:
    - Workflow receives: "folders"
    - in: "Finder"
3. Add these actions in sequence:
    - First, add "Shell Script"
```bash
#!/bin/bash

# Get the folder path from the first argument
folder_path="$1"

# Set full path to ffmpeg (adjust this to your actual ffmpeg location)
FFMPEG_PATH="/usr/local/bin/ffmpeg"

# If you installed ffmpeg via Homebrew, check these common locations
if [ ! -f "$FFMPEG_PATH" ]; then
    if [ -f "/opt/homebrew/bin/ffmpeg" ]; then
        FFMPEG_PATH="/opt/homebrew/bin/ffmpeg"
    elif [ -f "/usr/local/bin/ffmpeg" ]; then
        FFMPEG_PATH="/usr/local/bin/ffmpeg"
    fi
fi

# Change to the directory
cd "$folder_path"

# Get current date for default filename
default_name="output-$(date +%Y-%m-%d)"

# Ask for filename using AppleScript
output_name=$(osascript <<EOF
tell application "System Events"
    activate
    set theResponse to display dialog "Enter output filename:" default answer "$default_name" buttons {"Cancel", "OK"} default button "OK"
    set buttonPressed to button returned of theResponse
    if buttonPressed is "OK" then
        set fileName to text returned of theResponse
        return fileName
    else
        return ""
    end if
end tell
EOF
)

# Check if user cancelled
if [ -z "$output_name" ]; then
    osascript -e "display notification \"Conversion cancelled\" with title \"FFmpeg Converter\""
    exit 1
fi

# Create the full output path
output_file="${folder_path}/${output_name}.mp4"

# Check if ffmpeg exists at the specified path
if [ ! -f "$FFMPEG_PATH" ]; then
    osascript -e "display dialog \"Error: ffmpeg not found at $FFMPEG_PATH. Please install ffmpeg or adjust the script path.\" buttons {\"OK\"} default button \"OK\" with icon stop"
    exit 1
fi

# Run ffmpeg command
"$FFMPEG_PATH" -framerate 60 -i %07d.png -c:v libx264 -preset veryslow -crf 18 -pix_fmt yuv420p -vf "scale=iw:ih:flags=lanczos" "$output_file"

# Check if output was created successfully
if [ -f "$output_file" ]; then
    osascript -e "display notification \"Video saved as ${output_name}.mp4\" with title \"FFmpeg Converter\" subtitle \"Conversion Complete!\""
else
    osascript -e "display dialog \"Error: Video file was not created\" buttons {\"OK\"} default button \"OK\" with icon stop"
fi

```

1. Save the workflow as "Convert PNG Sequence to Video"
2. Now when you use this Quick Action:
	1. Right-click a folder and select "Quick Actions" → "Convert PNG Sequence to Video"
	2. A dialog will appear with the default name as "output-YYYY-MM-DD" (e.g., "output-2025-02-23")
	3. You can either use this default name or modify it. The script will create the video with the chosen name. You'll get a notification when the conversion is complete

**Important notes:**
1. Make sure ffmpeg is installed (`brew install ffmpeg` if using Homebrew)
2. The script uses your specified ffmpeg settings:
    - 60 fps
    - h264 codec
    - veryslow preset
    - crf 18
    - lanczos scaling
    - yuv420p pixel format
3. The PNG files should be named with 7-digit numbers (0000001.png, 0000002.png, etc.)

The default name will automatically include today's date. For example:

- output-2025-02-23
- output-2025-02-24  
    etc.

