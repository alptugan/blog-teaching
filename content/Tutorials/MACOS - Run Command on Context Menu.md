---
title: MACOS - Run Command on Context Menu
date: 2025-02-23
modfification date: Sunday 23rd February 2025 14:09:16
description: 
tags: 
aliases: 
draft: true
---
This tutorial presents how to add custom commands based on shell scripts to the Mac OS Finder context menu. The example script creates an `.mp4` video from provided sequence of images. Image names must be formatted as `0000000.png`, `0000001.png`, `0000002.png`, so on.

1. First, create a shell script named `images_to_video.sh`:
```bash
#!/bin/bash

input_dir="$1"
output_name="$2"

cd "$input_dir"
ffmpeg -framerate 60 -i %07d.png -c:v libx264 -preset veryslow -crf 18 -pix_fmt yuv420p -vf "scale=iw:ih:flags=lanczos" "${output_name}.mp4"
```

2. Make it executable
```bash
chmod +x /path/to/images_to_video.sh
```

3. Open Automator -> Create "New Document" -> Select "Quick Action"
4. Configure workflow settings:
    - Workflow receives: "folders"
    - in: "Finder"
5. Add these actions in sequence:
    - First, add "Apple Script"
```bash
on run {input, parameters}
	set currentDate to do shell script "date '+%Y-%m-%d'"
	set defaultName to "output-" & currentDate
	
	display dialog "Enter output video name (without .mp4):" default answer defaultName buttons {"Cancel", "OK"} default button "OK"
	
	set outputName to text returned of result
	
	return {item 1 of input, outputName}
end run

```

6. Then add "Run Shell Script"
- Set Shell to: "/bin/bash"
- Set "Pass input" to: "as arguments"
- Enter this script:
```bash
folder_path="$1"
output_name="$2"

/path/to/images_to_video.sh "$folder_path" "$output_name"

# Optional: Add notification when complete
osascript -e 'display notification "Video conversion complete" with title "FFmpeg Converter"'

```


7. Save the workflow as "Convert PNG Sequence to Video"
8. Now when you use this Quick Action:
	1. Right-click a folder and select "Quick Actions" → "Convert PNG Sequence to Video"
	2. A dialog will appear with the default name as "output-YYYY-MM-DD" (e.g., "output-2025-02-23")
	3. You can either use this default name or modify it. The script will create the video with the chosen name. You'll get a notification when the conversion is complete

**Important notes:**
1. Replace `/path/to/images_to_video.sh` with the actual path where you saved the script
2. Make sure ffmpeg is installed (`brew install ffmpeg` if using Homebrew)
3. The script uses your specified ffmpeg settings:
    - 60 fps
    - h264 codec
    - veryslow preset
    - crf 18
    - lanczos scaling
    - yuv420p pixel format
4. The PNG files should be named with 7-digit numbers (0000001.png, 0000002.png, etc.)

The default name will automatically include today's date. For example:

- output-2025-02-23
- output-2025-02-24  
    etc.

