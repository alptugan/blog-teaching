---
title: P-LCD RPI Digi Cam
date: 2025-12-22 10:59:26
description:
tags:
aliases:
draft: true
---
## Waveshare 3.5' RPI LCD (A)
[3.5inch RPi LCD (A) - Waveshare Wiki](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_(A)#Set_Screen_Orientation)
[Raspistill Manual](https://www.raspberrypi.org/app/uploads/2013/07/RaspiCam-Documentation.pdf)
[touch Driver - xpt2046](https://github.com/CytronTechnologies/xpt2046-LCD-Driver-for-Raspberry-Pi)
[Touch Driver updated](https://github.com/goodtft/LCD-show), [reference](https://forums.raspberrypi.com/viewtopic.php?t=382506) forum post.

## Display images on Terminal
sudo apt install fbi -y 
rpicam-jpeg --output test.jpg --nopreview && sudo fbi -d /dev/fb1 -T 1 -noverify -a test.jpg


## Fbcp Method
sudo apt install cmake -y
sudo apt install libraspberrypi-dev -y

git clone https://github.com/tasanakorn/rpi-fbcp.git
cd rpi-fbcp
mkdir build
cd build
cmake -DCMAKE_C_FLAGS="-I/usr/include/raspberrypi -L/usr/lib/arm-linux-gnueabihf" ..
make
sudo install fbcp /usr/local/bin/fbcp

Run inthe background
fbcp &


display preview
rpicam-hello -t 0 --preview 0,0,640,480 --vflip --hflip

display preview for 1sec and shoot
rpicam-jpeg --output test.jpg --preview 0,0,640,480 --vflip --hflip -t 1000


## libcamera Python & C++
RPI v2.1 Model → IMX219
C++
sudo apt install libcamera-dev

Python
[pip-assets.raspberrypi.com/categories/652-raspberry-pi-camera-module-2/documents/RP-008156-DS-2-picamera2-manual.pdf?disposition=inline](https://pip-assets.raspberrypi.com/categories/652-raspberry-pi-camera-module-2/documents/RP-008156-DS-2-picamera2-manual.pdf?disposition=inline)


# Other Projects
[GitHub - unyosFact/RasPi\_DigitalCamera: デジタルカメラ を作成：　Raspberry Pi 向け](https://github.com/unyosFact/RasPi_DigitalCamera/tree/master)

[GitHub - iwatake2222/DigitalCamera\_RaspberryPi: A project to create a digital camera with Raspberry Pi in Linux standard way such as ioctl](https://github.com/iwatake2222/DigitalCamera_RaspberryPi/tree/master?tab=readme-ov-file)


# Fresh Start with DietPi
192.168.1.123
Hostname DietPi
username root or dietpi
password `dietpi` or Koc02082011.

Set WIFI config on dietpi.txt
Enter credentials on dietpi-wifi.txt

Not sure about if the following [waveshare35a driver](https://github.com/julyy240/waveshare35a) is required.


### Camera Driver
`sudo apt install rpicam-apps`

`sudo rpicam-hello --nopreview`

if it throws error;
```shell
sudo usermod -a -G video,render $USER

sudo nano /etc/udev/rules.d/99-camera.rules

# paste the following
SUBSYSTEM=="dma_heap", GROUP="video", MODE="0660"
SUBSYSTEM=="video4linux", GROUP="video", MODE="0660"
KERNEL=="media*", GROUP="video", MODE="0660"

# Reload the rules and reboot:
sudo udevadm control --reload-rules && sudo udevadm trigger
sudo reboot
```

Edit config.txt
```shell
# Give the camera and display a dedicated memory pool
dtoverlay=vc4-kms-v3d,cma-128

# Keep GPU memory low so the system has more RAM
gpu_mem=16

# Ensure the camera is auto-detected
camera_auto_detect=1
```


Test the camera with the following command
```shell
rpicam-jpeg -o test5.jpg -t 500 --shutter 20000 --gain 1.5 --vflip --hflip
```
 

## Buttons
[Using a push button with Raspberry Pi GPIO \| Raspberry Pi HQ](https://raspberrypihq.com/use-a-push-button-with-raspberry-pi-gpio/)


## Battery
[How to Power Your Raspberry Pi With a Battery](https://www.circuitbasics.com/how-to-power-your-raspberry-pi-with-a-lithium-battery/)

[TP4056 3,7V Mini Şarj Devresi - Korumalı Mod Type C Modüller Motorobit - Motorobit.com](https://www.motorobit.com/tp4056-37v-mini-sarj-devresi-korumali-mod-type-c)

[TP4056 3,7V Şarj Devresi - Korumalı Mod Type C Modüller Motorobit - Motorobit.com](https://www.motorobit.com/tp4056-37v-sarj-devresi-korumali-mod-type-c)


[Genel Markalar Ayarlanabilir Voltaj Yükseltici Kart - Mt3608 - Fiyatı, Yorumları](https://www.trendyol.com/genel-markalar/ayarlanabilir-voltaj-yukseltici-kart-mt3608-p-95970154?boutiqueId=61&merchantId=117107)
Xl6009 4A


## Todo
- [ ] Add button physical
- [ ] Try Cython implementation!!!!
- [ ] Display the applied filter name on the preview window
- [ ] Overlay text for information
	- [x] Filter name
	- [ ] Current consumption
	- [ ] CPU and ram values
	- [x] Number of photos taken in the current session / Number of photos taken in total.
	- [x] fPS on screen
- [ ] A tiny web sever to see images. / Enable disable server
- [ ] Set color for bw dithering filters
- [ ] Threshold filter
- [ ] Sketch filter
- [ ] Other interesting filters to think
- [ ] Shader optimization for the filters?
- [ ] implement all of the raspistill image filters 
	- [ ] blur, 
	- [ ] cartoon, 
	- [ ] colourswap, 
	- [ ] emboss, 
	- [ ] film
	- [ ] gpen, 
	- [ ] hatch
	- [ ] negative
	- [ ] oilpaint
	- [ ] posterise
	- [ ] sketch
	- [ ] solarise
	- [ ] watercolour
- [ ] Does Terminal display command in `cmdline.txt` effects the performance?





## config.txt
```shell
# NB: Some legacy OpenMAX applications (OMXPlayer) cannot wake screens from real standby.
hdmi_blanking=1

# Set to "1" if your display has a black border of unused pixels visible.
disable_overscan=0

#-------RPi camera module-------
start_x=1
#disable_camera_led=1

#-------GPU memory splits-------
gpu_mem_256=96
gpu_mem_512=96
gpu_mem_1024=96

#-------Boot splash screen------
disable_splash=1

#-------Onboard sound-----------
dtparam=i2c_arm=on
dtparam=audio=off

#-------SPI-------------
dtparam=spi=on

#-------Serial/UART-----
# NB: "enable_uart=1" will enforce "core_freq=250" on RPi models with onboard WiFi.
enable_uart=0

#-------SD card HPD-----
dtparam=sd_poll_once

#-------Overclock-------
temp_limit=75
initial_turbo=20

arm_64bit=1

# waveshare
# 'speed=24000000' is stable for 3A+; 'fps=30' keeps RAM usage low
dtoverlay=waveshare35a:rotate=90,speed=42000000,penirq=17
#dtoverlay=waveshare35a:rotate=90,speed=16000000
#dtoverlay=ads7846,cs=1,penirq=25,speed=2000000,xohms=150,pressure_max=255,swapxy=0

camera_auto_detect=1

# Give the camera and display a dedicated memory pool
dtoverlay=vc4-kms-v3d,cma-128

# Keep GPU memory low so the system has more RAM
gpu_mem=16

```

### cmdline.txt (Mirror Terminal to LCD)
Add `console=tty1 fbcon=map:10`to the end. Set font size `fbcon=font:ProFont6x11`
```shell
root=PARTUUID=45395152-02 rootfstype=ext4 rootwait fsck.repair=yes net.ifnames=0 logo.nologo console=tty1 fbcon=map:10 fbcon=font:ProFont6x11
```


## Python app
```
import mmap
import time
import os
import sys
import select
import tty
import termios
import subprocess
import numpy as np
import cv2
from picamera2 import Picamera2
from libcamera import Transform
from datetime import datetime
import signal
import atexit

# Lazy load numba - only compile when dithering filters are actually used
_numba_loaded = False
def _ensure_numba():
    global _numba_loaded, numba
    if not _numba_loaded:
        # Set cache directory
        _numba_cache_dir = '/tmp/numba_cache'
        os.makedirs(_numba_cache_dir, exist_ok=True)
        os.environ['NUMBA_CACHE_DIR'] = _numba_cache_dir
        import numba as _numba
        globals()['numba'] = _numba
        _numba_loaded = True

# --- CONFIGURATION TOGGLES ---
CAPTURE_W = 1280
CAPTURE_H = 960
# If the image looks like static/garbage, toggle BYTESWAP
BYTESWAP = False
# Image filter mode
FILTER_MODE = None
FILTER_INDEX = 0
# Filter options (OpenCV-based raspistill-style effects)
FILTERS = {
    '0': None,
    '1': 'negative',
    '2': 'solarise',
    '3': 'sketch',
    '4': 'emboss',
    '5': 'oilpaint',
    '6': 'blur',
    '7': 'sharpen',
    '8': 'edge',
    '9': 'posterise',
    'a': 'floyd_steinberg',
    'b': 'floyd_steinberg_g',
    'c': 'atkinson',
    'd': 'bayer',
    'e': 'bayer_g',
    'f': 'halftone',
    'g': 'halftone_g',
    'h': 'brick',
    'i': 'brick_g'
}
FILTER_KEYS = list(FILTERS.keys())

# Dithering pattern matrices
BAYER_MATRIX_8X8 = (1 / 64) * np.array([
    [0, 48, 12, 60, 3, 51, 15, 63],
    [32, 16, 44, 28, 35, 19, 47, 31],
    [8, 56, 4, 52, 11, 59, 7, 55],
    [40, 24, 36, 20, 43, 27, 39, 23],
    [2, 50, 14, 62, 1, 49, 13, 61],
    [34, 18, 46, 30, 33, 17, 45, 29],
    [10, 58, 6, 54, 9, 57, 5, 53],
    [42, 26, 38, 22, 41, 25, 37, 21]
]) * 255

HALFTONE = (1 / 64) * np.array([
    [60, 52, 48, 32, 36, 44, 53, 61],
    [56, 40, 28, 16, 20, 24, 41, 57],
    [47, 27, 12,  4,  8, 13, 29, 49],
    [39, 23, 11,  0,  1,  5, 17, 33],
    [35, 19,  7,  2,  3,  9, 21, 37],
    [51, 30, 15, 10,  6, 14, 25, 45],
    [59, 43, 26, 22, 18, 31, 42, 54],
    [63, 55, 46, 38, 34, 50, 58, 62],
]) * 255

HALFTONE_R = 255 - HALFTONE

BRICK = (1 / 64) * np.array([
    [0, 16, 28, 38, 41, 33, 22, 8],
    [44, 1, 17, 29, 34, 23, 9, 49],
    [54, 45, 2, 18, 24, 10, 50, 57],
    [60, 42, 35, 3, 11, 30, 39, 62],
    [43, 36, 25, 12, 4, 19, 31, 40],
    [37, 26, 13, 51, 46, 5, 20, 32],
    [27, 14, 52, 58, 55, 47, 6, 21],
    [15, 53, 59, 61, 63, 56, 48, 7],
]) * 255
# -----------------------------

def apply_filter(frame, filter_mode):
    """Apply image filter to frame using OpenCV."""
    if filter_mode == 'negative':
        # Invert colors
        return 255 - frame

    elif filter_mode == 'solarise':
        # Solarise effect - invert pixels above threshold
        threshold = 128
        solarised = frame.copy()
        solarised[frame > threshold] = 255 - solarised[frame > threshold]
        return solarised

    elif filter_mode == 'sketch':
        # Pencil sketch effect
        gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
        inverted = 255 - gray
        blurred = cv2.GaussianBlur(inverted, (21, 21), 0)
        inverted_blur = 255 - blurred
        sketch = cv2.divide(gray, inverted_blur, scale=256.0)
        return cv2.cvtColor(sketch, cv2.COLOR_GRAY2RGB)

    elif filter_mode == 'emboss':
        # Emboss effect
        kernel = np.array([[-2, -1, 0],
                          [-1,  1, 1],
                          [ 0,  1, 2]])
        embossed = cv2.filter2D(frame, -1, kernel)
        # Normalize and add gray offset
        embossed = cv2.convertScaleAbs(embossed)
        embossed = cv2.add(embossed, np.full(embossed.shape, 128, dtype=np.uint8))
        return embossed

    elif filter_mode == 'oilpaint':
        # Oil painting effect using bilateral filter and posterization
        oil = cv2.bilateralFilter(frame, 9, 75, 75)
        oil = cv2.bilateralFilter(oil, 9, 75, 75)
        return oil

    elif filter_mode == 'blur':
        # Gaussian blur
        return cv2.GaussianBlur(frame, (15, 15), 0)

    elif filter_mode == 'sharpen':
        # Sharpen effect
        kernel = np.array([[-1, -1, -1],
                          [-1,  9, -1],
                          [-1, -1, -1]])
        return cv2.filter2D(frame, -1, kernel)

    elif filter_mode == 'edge':
        # Edge detection
        gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)
        edges = cv2.Canny(gray, 100, 200)
        return cv2.cvtColor(edges, cv2.COLOR_GRAY2RGB)

    elif filter_mode == 'posterise':
        # Posterise effect - reduce colors
        levels = 4
        posterised = (frame // (256 // levels)) * (256 // levels)
        return posterised.astype(np.uint8)

    elif filter_mode == 'floyd_steinberg_g':
        # Floyd-Steinberg dithering with numba acceleration
        # Convert to grayscale and add channel dimension for numba function
        gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY).astype(np.float32)[:, :, np.newaxis]
        dithered = floyd_steinberg_dither_fast(gray.copy())
        return cv2.cvtColor(dithered.astype(np.uint8), cv2.COLOR_GRAY2RGB)

    elif filter_mode == 'floyd_steinberg':
        # Floyd-Steinberg dithering grayscale (color channels)
        dithered = floyd_steinberg_dither_fast(frame.astype(np.float32).copy())
        return dithered.astype(np.uint8)

    elif filter_mode == 'atkinson':
        # Atkinson dithering with numba acceleration
        gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY).astype(np.float32)[:, :, np.newaxis]
        dithered = atkinson_dither_fast(gray.copy())
        return cv2.cvtColor(dithered.astype(np.uint8), cv2.COLOR_GRAY2RGB)

    elif filter_mode == 'bayer':
        # Bayer ordered dithering (color)
        return ordered_dither(frame, grayscale=False, pattern=BAYER_MATRIX_8X8)

    elif filter_mode == 'bayer_g':
        # Bayer ordered dithering (grayscale)
        return ordered_dither(frame, grayscale=True, pattern=BAYER_MATRIX_8X8)

    elif filter_mode == 'halftone':
        # Halftone ordered dithering (color)
        return ordered_dither(frame, grayscale=False, pattern=HALFTONE_R)

    elif filter_mode == 'halftone_g':
        # Halftone ordered dithering (grayscale)
        return ordered_dither(frame, grayscale=True, pattern=HALFTONE_R)

    elif filter_mode == 'brick':
        # Brick pattern ordered dithering (color)
        return ordered_dither(frame, grayscale=False, pattern=BRICK)

    elif filter_mode == 'brick_g':
        # Brick pattern ordered dithering (grayscale)
        return ordered_dither(frame, grayscale=True, pattern=BRICK)

    return frame

def ordered_dither(image, grayscale=False, pattern=BAYER_MATRIX_8X8):
    """Ordered dithering using pattern matrix."""
    if grayscale:
        image = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY).astype(np.float32)[:, :, np.newaxis]
    else:
        image = image.astype(np.float32)

    # Get image dimensions.
    height, width = image.shape[:2]

    # Create threshold map matching image dimensions.
    threshold_map = np.tile(pattern, (height // pattern.shape[0] + 1, width // pattern.shape[1] + 1))[:height, :width]
    threshold_map = threshold_map[:, :, np.newaxis]

    # Apply dithering.
    dithered_image = (image > threshold_map) * 255

    if grayscale:
        return cv2.cvtColor(dithered_image.astype(np.uint8), cv2.COLOR_GRAY2RGB)
    return dithered_image.astype(np.uint8)

# Store compiled version globally
_floyd_steinberg_compiled = None

def _floyd_steinberg_core(img):
    """Core Floyd-Steinberg algorithm (uncompiled fallback)."""
    height, width, ch = img.shape
    w7 = 7/16; w3 = 3/16; w5 = 5/16; w1 = 1/16

    for y in range(height):
        for x in range(width):
            for c in range(ch):
                old_val = img[y, x, c]
                new_val = 255.0 if old_val > 127 else 0.0
                img[y, x, c] = new_val
                err = old_val - new_val

                if x + 1 < width:
                    img[y, x + 1, c] += err * w7
                if y + 1 < height:
                    if x > 0:
                        img[y + 1, x - 1, c] += err * w3
                    img[y + 1, x, c] += err * w5
                    if x + 1 < width:
                        img[y + 1, x + 1, c] += err * w1
    return img

def floyd_steinberg_dither_fast(img):
    """Floyd-Steinberg with lazy numba compilation."""
    global _floyd_steinberg_compiled
    if _floyd_steinberg_compiled is None:
        _ensure_numba()
        _floyd_steinberg_compiled = numba.njit(cache=True, fastmath=True)(_floyd_steinberg_core)
    return _floyd_steinberg_compiled(img)

# Store compiled version globally
_atkinson_compiled = None

def _atkinson_core(img):
    """Core Atkinson algorithm (uncompiled fallback)."""
    height, width, ch = img.shape
    for y in range(height):
        for x in range(width):
            for c in range(ch):
                old_pixel = img[y, x, c]
                new_pixel = 0.0 if old_pixel < 128 else 255.0
                img[y, x, c] = new_pixel
                quant_error = (old_pixel - new_pixel) / 8.0

                if x + 1 < width:
                    img[y, x + 1, c] += quant_error
                if x + 2 < width:
                    img[y, x + 2, c] += quant_error
                if y + 1 < height:
                    if x - 1 >= 0:
                        img[y + 1, x - 1, c] += quant_error
                    img[y + 1, x, c] += quant_error
                    if x + 1 < width:
                        img[y + 1, x + 1, c] += quant_error
                if y + 2 < height:
                    img[y + 2, x, c] += quant_error
    return img

def atkinson_dither_fast(img):
    """Atkinson with lazy numba compilation."""
    global _atkinson_compiled
    if _atkinson_compiled is None:
        _ensure_numba()
        _atkinson_compiled = numba.njit(cache=True)(_atkinson_core)
    return _atkinson_compiled(img)

def get_key_non_blocking():
    """Check if a key has been pressed without blocking."""
    if select.select([sys.stdin], [], [], 0)[0]:
        return sys.stdin.read(1)
    return None

def save_photo(picam2, filter_mode=None, pause_preview=False):
    """Save a high-quality photo with optional OpenCV filter."""
    # Create capture folder if it doesn't exist
    capture_dir = "capture"
    os.makedirs(capture_dir, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"photo_{timestamp}.jpg"
    filepath = os.path.join(capture_dir, filename)

    # Slow filters that take too long on full resolution
    slow_filters = ['floyd_steinberg', 'floyd_steinberg_g', 'atkinson']

    try:
        # Stop camera to prevent timeout for all filters when capturing
        if filter_mode:
            print(f"\rCapturing photo with {filter_mode}...", end='', flush=True)
        else:
            print(f"\rCapturing photo...", end='', flush=True)

        picam2.stop()
        time.sleep(0.2)  # Brief pause

        # Restart with just main stream for capture
        capture_config = picam2.create_still_configuration(
            main={"format": "RGB888", "size": (CAPTURE_W, CAPTURE_H)},
            transform=Transform(hflip=True, vflip=True)
        )
        picam2.configure(capture_config)
        picam2.start()
        time.sleep(0.5)  # Let camera stabilize

        # Capture from the main stream
        try:
            frame = picam2.capture_array("main")
        except Exception as cap_error:
            print(f"\rCapture failed: {cap_error}")
            return None

        # Apply filter if enabled
        if filter_mode:
            if filter_mode in slow_filters:
                print(f"\rProcessing {filter_mode}...", end='', flush=True)
            frame = apply_filter(frame, filter_mode)
            print(f"\rPhoto saved (with {filter_mode} filter): {filepath}")
        else:
            print(f"\rPhoto saved: {filepath}")

        # Save directly without any color conversion
        cv2.imwrite(filepath, frame)

        # Restart dual-stream preview
        print(f"\rRestarting preview...", end='', flush=True)
        picam2.stop()
        time.sleep(0.2)

        # Restore dual-stream config
        config = picam2.create_video_configuration(
            main={"format": "RGB888", "size": (CAPTURE_W, CAPTURE_H)},
            lores={"format": "YUV420", "size": (480, 320)},
            transform=Transform(hflip=True, vflip=True),
            buffer_count=6,
            queue=True
        )
        picam2.configure(config)
        picam2.set_controls({"FrameDurationLimits": (33333, 33333)})
        picam2.start()
        time.sleep(0.3)
        print(f"\rPreview resumed")

        return filename

    except Exception as e:
        print(f"\rError capturing photo: {e}")
        # Try to restore dual-stream config on error
        try:
            picam2.stop()
            config = picam2.create_video_configuration(
                main={"format": "RGB888", "size": (CAPTURE_W, CAPTURE_H)},
                lores={"format": "YUV420", "size": (480, 320)},
                transform=Transform(hflip=True, vflip=True),
                buffer_count=6,
                queue=True
            )
            picam2.configure(config)
            picam2.set_controls({"FrameDurationLimits": (33333, 33333)})
            picam2.start()
        except:
            pass
        return None

# Add signal handler for instant quit
def signal_handler(sig, frame):
    """Handle Ctrl+C for instant quit"""
    print("\nQuitting...")
    # Clear framebuffer
    try:
        if fb is not None:
            fb.seek(0)
            fb.write(b'\x00' * (480 * 320 * 2))
    except:
        pass
    # Restore terminal
    try:
        if old_settings is not None:
            termios.tcsetattr(sys.stdin, termios.TCSANOW, old_settings)
    except:
        pass
    # Force immediate exit without cleanup - fastest way
    os._exit(0)

def cleanup_and_exit():
    """Clean up resources quickly - non-blocking"""
    global old_settings, fb

    # Clear framebuffer to black before exit
    try:
        if fb is not None:
            fb.seek(0)
            fb.write(b'\x00' * (480 * 320 * 2))
    except:
        pass

    # Restore terminal - most important for usability
    try:
        if old_settings is not None:
            termios.tcsetattr(sys.stdin, termios.TCSANOW, old_settings)
    except:
        pass

    # Everything else can be left to OS cleanup on exit
    os._exit(0)
signal.signal(signal.SIGINT, signal_handler)

# Initialize globals
fb = None
old_settings = None
picam2 = None

# OPTIMIZED STARTUP - Remove sensor_modes query (saves ~2-3 seconds)
picam2 = Picamera2()
# Don't query sensor modes - it's slow and not needed
# sensor_modes = picam2.sensor_modes
# print(sensor_modes)

# Simplified configuration - remove unnecessary options
config = picam2.create_video_configuration(
    main={"format": "RGB888", "size": (CAPTURE_W, CAPTURE_H)},
    lores={"format": "YUV420", "size": (480, 320)},
    transform=Transform(hflip=True, vflip=True),
    buffer_count=2  # Reduced from 6 - faster startup, less memory
)
picam2.configure(config)

# Remove frame duration control - not needed for startup
# picam2.set_controls({"FrameDurationLimits": (33333, 33333)})

picam2.start()

# Pre-allocate arrays for better performance
rgb565_buffer = np.zeros((320, 480), dtype=np.uint16)

# Debounce variables for filter switching
last_filter_change_time = 0
FILTER_CHANGE_DEBOUNCE = 0.3  # seconds

fb_path = "/dev/fb1"

try:
    # Set terminal to raw mode for non-blocking key input
    old_settings = termios.tcgetattr(sys.stdin)
    tty.setraw(sys.stdin.fileno())

    with open(fb_path, "r+b") as f:
        fb = mmap.mmap(f.fileno(), 480 * 320 * 2)

        print("Preview running. Press 'c' to capture, 'q' to quit, 'o'/'p' to change filter")
        print(f"\rCurrent filter: {FILTER_MODE if FILTER_MODE else 'None'}")

        # Skip long help text for faster startup
        # Frame counter removed - not essential

        while True:
            try:
                yuv_frame = picam2.capture_array("lores")
            except Exception as e:
                # Simplified error handling - just break instead of restart
                print(f"\rCamera error: {e}")
                break

            # Convert YUV420 to RGB
            preview_frame = cv2.cvtColor(yuv_frame, cv2.COLOR_YUV420p2RGB)

            # Ensure correct size - YUV may have padding/alignment
            if preview_frame.shape[0] != 320 or preview_frame.shape[1] != 480:
                preview_frame = cv2.resize(preview_frame, (480, 320), interpolation=cv2.INTER_LINEAR)

            # Check for key press
            key = get_key_non_blocking()
            if key == 'c' or key == 'C':
                result = save_photo(picam2, FILTER_MODE)
            elif key == 'q' or key == 'Q' or key == '\x03':
                print("\r\nQuitting...")
                break
            elif key == 'p' or key == 'P':
                current_time = time.time()
                if current_time - last_filter_change_time >= FILTER_CHANGE_DEBOUNCE:
                    FILTER_INDEX = (FILTER_INDEX + 1) % len(FILTER_KEYS)
                    FILTER_MODE = FILTERS[FILTER_KEYS[FILTER_INDEX]]
                    print(f"\rFilter: {FILTER_MODE if FILTER_MODE else 'None'}")
                    last_filter_change_time = current_time
            elif key == 'o' or key == 'O':
                current_time = time.time()
                if current_time - last_filter_change_time >= FILTER_CHANGE_DEBOUNCE:
                    FILTER_INDEX = (FILTER_INDEX - 1) % len(FILTER_KEYS)
                    FILTER_MODE = FILTERS[FILTER_KEYS[FILTER_INDEX]]
                    print(f"\rFilter: {FILTER_MODE if FILTER_MODE else 'None'}")
                    last_filter_change_time = current_time
            elif key in FILTERS:
                current_time = time.time()
                if current_time - last_filter_change_time >= FILTER_CHANGE_DEBOUNCE:
                    FILTER_MODE = FILTERS[key]
                    FILTER_INDEX = FILTER_KEYS.index(key)
                    print(f"\rFilter: {FILTER_MODE if FILTER_MODE else 'None'}")
                    last_filter_change_time = current_time

            # Apply filter if enabled
            if FILTER_MODE:
                try:
                    preview_frame = apply_filter(preview_frame, FILTER_MODE)
                except:
                    pass  # Skip error message for speed

            # Direct RGB565 conversion with proper clipping
            r = np.clip(preview_frame[:, :, 0], 0, 255).astype(np.uint16)
            g = np.clip(preview_frame[:, :, 1], 0, 255).astype(np.uint16)
            b = np.clip(preview_frame[:, :, 2], 0, 255).astype(np.uint16)

            rgb565_buffer[:] = ((b & 0xF8) << 8) | ((g & 0xFC) << 3) | (r >> 3)

            if BYTESWAP:
                rgb565_buffer = rgb565_buffer.byteswap()

            fb.seek(0)
            fb.write(rgb565_buffer.tobytes())

            # Removed sleep for max speed
            # time.sleep(0.016)

except KeyboardInterrupt:
    pass  # Handled by signal handler
finally:
    cleanup_and_exit()
```

## Autostart service
**Start your camera app automatically on boot**

Create a systemd service:
```shell title=camera-preview.service
sudo nano /etc/systemd/system/camera-preview.service
```


Add:
```shell title=camera-preview.service
[Unit]
Description=Camera Preview on LCD
After=multi-user.target

[Service]
Type=simple
User=dietpi
Environment=FRAMEBUFFER=/dev/fb1
WorkingDirectory=/home/dietpi
ExecStart=/usr/bin/python3 /home/dietpi/camera_preview02.py
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable it:
```shell
sudo systemctl enable camera-preview.service
sudo systemctl start camera-preview.service
```

