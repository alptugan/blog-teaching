---
title: P-OLED RPI Retro Camera
date: 2025-12-07 05:07:11
description:
tags:
aliases:
draft: true
---
Resource:
[DeepSeek - Into the Unknown](https://chat.deepseek.com/share/rqj88jwennwp1mjeu8)

# LUMA.OLED Lib Installation
Follow the [instructions](https://luma-oled.readthedocs.io/en/latest/install.html).

## Play Video with luma/oled
The max frame rate is 10-15 FPS
resize the video than play;

```shell showLineNumbers=false
ffmpeg -i images/21516465-loop.mp4 -vf "scale=128:64" -an -c:v libx264 -crf 23 tiny_video.mp4
```


resize the 1:1 ratio video and keep it 16:9
```shell showLineNumbers=false
ffmpeg -i super.mp4 -vf "scale=128:64:force_original_aspect_ratio=decrease,pad=128:64:-1:-1:black,format=gray" -an -c:v libx264 -crf 23 tiny_video-super.mp4
```


## Play Video with C++
```c
// oled_stream.c
// Compile with: gcc -o oled_stream oled_stream.c
// Usage: ffmpeg ... | ./oled_stream

#include <stdint.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <linux/types.h>
#include <linux/spi/spidev.h>

// --- Configuration ---
static const char *device = "/dev/spidev0.0";
static uint32_t speed = 16000000; // 16 MHz
static uint8_t bits = 8;
static uint32_t mode = 0;

// GPIO Layout (BCM) - Sysfs method is slow but simple for setup
#define DC_PIN 24
#define RES_PIN 25

// --- GPIO Helpers ---
void gpio_export(int pin) {
    int fd = open("/sys/class/gpio/export", O_WRONLY);
    if (fd == -1) return; // Already exported
    dprintf(fd, "%d", pin);
    close(fd);
}

void gpio_direction(int pin, char *dir) {
    char path[35];
    sprintf(path, "/sys/class/gpio/gpio%d/direction", pin);
    int fd = open(path, O_WRONLY);
    write(fd, dir, strlen(dir));
    close(fd);
}

void gpio_write(int pin, int value) {
    char path[30];
    sprintf(path, "/sys/class/gpio/gpio%d/value", pin);
    int fd = open(path, O_WRONLY);
    dprintf(fd, "%d", value);
    close(fd);
}

// --- SPI Helpers ---
int spi_fd;

void spi_init() {
    spi_fd = open(device, O_RDWR);
    if (spi_fd < 0) { perror("Failed to open SPI"); exit(1); }
    ioctl(spi_fd, SPI_IOC_WR_MODE, &mode);
    ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
    ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);
}

void spi_send(uint8_t *data, int len) {
    struct spi_ioc_transfer tr = {
        .tx_buf = (unsigned long)data,
        .len = len,
        .speed_hz = speed,
        .bits_per_word = bits,
    };
    ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr);
}

void oled_command(uint8_t cmd) {
    gpio_write(DC_PIN, 0); // DC Low = Command
    spi_send(&cmd, 1);
}

void oled_data(uint8_t *data, int len) {
    gpio_write(DC_PIN, 1); // DC High = Data
    spi_send(data, len);
}

void oled_init() {
    // Reset pulse
    gpio_write(RES_PIN, 1); usleep(1000);
    gpio_write(RES_PIN, 0); usleep(10000);
    gpio_write(RES_PIN, 1); usleep(10000);

    // SH1106 Init Sequence
    oled_command(0xAE); // Display OFF
    oled_command(0xA1); // Segment remap (flip H)
    oled_command(0xC8); // COM Scan direction (flip V)
    oled_command(0x81); oled_command(0xCF); // Contrast
    oled_command(0xAF); // Display ON
}

int main() {
    // 1. Setup GPIOs
    gpio_export(DC_PIN); gpio_export(RES_PIN);
    gpio_direction(DC_PIN, "out"); gpio_direction(RES_PIN, "out");
    
    // 2. Setup SPI
    spi_init();
    oled_init();

    // 3. Buffer for 1 frame (128x64 pixels = 1024 bytes)
    uint8_t buffer[1024]; 
    
    // 4. Main Loop: Read stdin -> Write SPI
    // SH1106 requires writing page by page (8 pages of 128 bytes)
    while (fread(buffer, 1, 1024, stdin) == 1024) {
        for (int page = 0; page < 8; page++) {
            // Setup Page Address
            oled_command(0xB0 + page); // Page start address
            oled_command(0x00 + 2);    // Lower column start + 2 pixel offset
            oled_command(0x10);        // Higher column start
            
            // Write 128 bytes of data for this page
            // We grab the specific chunk from our buffer
            oled_data(&buffer[page * 128], 128);
        }
    }

    close(spi_fd);
    return 0;
}

```


Compile the c code via the following command
```shell
gcc -O3 -o oled_stream oled_stream.c
```


Run the code via ffmpeg pipline
```shell
ffmpeg -re -i images/21516465-loop.mp4 -vf "scale=128:64,format=monb" -f rawvideo - | sudo ./oled_stream
```

Run the code via resized video playback
```bash
ffmpeg -stream_loop 4 -re -i images/tiny_video.mp4 -vf "format=gray" -f rawvideo - | sudo ./oled_stream-fast
```


# Test Connection
Connecting an SPI SSD1306 OLED to a Raspberry Pi Zero is a straightforward process, but getting the pin mapping right is critical, especially distinguishing between the SPI and I2C naming conventions used on these display modules.

Here is the connection guide and wiring diagram for your 7-pin SPI OLED.

### 1. The Pinout Connection Table

The Raspberry Pi Zero uses the standard 40-pin GPIO header. Below is the mapping from your OLED pins to the Pi's physical pins.

_Note: **SDA** on SPI modules acts as the **MOSI** (Master Out Slave In) line._

|**OLED Pin**|**Function**|**RPi Physical Pin**|**RPi BCM (GPIO) Name**|
|---|---|---|---|
|**GND**|Ground|**Pin 6**|Ground|
|**VCC**|Power (3.3V)|**Pin 1**|3V3 Power|
|**SCK** (D0)|Clock|**Pin 23**|GPIO 11 (SPI0 SCLK)|
|**SDA** (D1)|MOSI (Data)|**Pin 19**|GPIO 10 (SPI0 MOSI)|
|**RES** (RST)|Reset|**Pin 22**|GPIO 25|
|**DC**|Data/Command|**Pin 18**|GPIO 24|
|**CS**|Chip Select|**Pin 24**|GPIO 8 (SPI0 CE0)|

> **⚠️ Important Voltage Note:** The Raspberry Pi GPIO logic level is **3.3V**. While some OLED modules have regulators that allow 5V input on VCC, the data lines (SCK, SDA, etc.) must typically remain at 3.3V to avoid damaging the Pi. It is safest to power the VCC with 3.3V (Pin 1) unless your specific module datasheet demands 5V.

---

### 2. Wiring Diagram Reference
![[RPI-SSD1306-SPI.excalidraw|center|200]]

---

### 3. Setup & Configuration

Once you have connected the wires, you must enable the SPI interface on your Raspberry Pi Zero for the display to work.

**Step 1: Enable SPI**

1. Open the terminal on your Pi.
    
2. Run the command: `sudo raspi-config`
    
3. Navigate to **Interface Options** -> **SPI**.
    
4. Select **Yes** to enable the SPI interface.
    
5. Reboot the Pi: `sudo reboot`
    

Step 2: Python Library Installation (Recommended)

The easiest way to drive this display is using the luma.oled library.

1. **Install dependencies:**

```bash
sudo apt-get update
sudo apt-get install python3-dev python3-pip libfreetype6-dev libjpeg-dev build-essential
```
    
2. **Install the library:**
```bash
sudo pip3 install luma.oled
```

3. **Testing the Display**

```python
from luma.core.interface.serial import spi
from luma.core.render import canvas
from luma.oled.device import ssd1306, sh1106 # Import both
import time

# 1. Setup SPI with a specific (safer) speed
serial = spi(device=0, port=0, bus_speed_hz=8000000, transfer_size=4096, gpio_DC=24, gpio_RST=25)

# 2. Initialize device
# IF "STATIC" PERSISTS, COMMENT OUT THE LINE ABOVE AND UNCOMMENT THE LINE BELOW:
device = sh1106(serial) 

print("Testing display...")

# 3. Draw a diagnostic pattern
with canvas(device) as draw:
    # Draw a border to see if the edges are aligned
    draw.rectangle(device.bounding_box, outline="white", fill="black")
    # text
    draw.text((10, 20), "Connection OK", fill="white")
    draw.text((10, 35), "Check: 128x64", fill="white")

# Keep script running
try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    pass
```







# Complete Implementation

### **1. Install Required Libraries**
First, update and install the necessary packages:

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install system dependencies
sudo apt install -y python3-pip python3-pil python3-numpy python3-opencv

# Install camera and OLED libraries
sudo apt install -y python3-picamera2
pip3 install luma.oled
```

### **2. Enable SPI and Camera (if not already done)**
```bash
sudo raspi-config
# Navigate to Interface Options:
# - Enable SPI
# - Enable Camera
# Then reboot
sudo reboot
```

### **3. Main Application Code**
Create a file named `oled_camera.py`:

```python
#!/usr/bin/env python3
"""
Raspberry Pi Camera to OLED Display with Dithering
For Pi Zero with Camera v1 and SSD1306 SPI OLED
"""

import time
import os
import sys
from datetime import datetime
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np
from picamera2 import Picamera2
from luma.core.interface.serial import spi
from luma.oled.device import ssd1306
from luma.core.render import canvas

class CameraOLED:
    def __init__(self):
        # Initialize OLED (SPI)
        self.serial = spi(device=0, port=0, gpio_DC=25, gpio_RST=24)
        self.device = ssd1306(self.serial)
        self.device.clear()
        
        # Initialize camera
        self.picam2 = Picamera2()
        
        # Camera configuration for Pi Zero optimization
        preview_config = self.picam2.create_preview_configuration(
            main={"size": (640, 480)},  # Capture at 640x480
            lores={"size": (320, 240)},  # Lower resolution for processing
            display="lores"  # Use lores for preview
        )
        self.picam2.configure(preview_config)
        
        # Image processing settings (adjustable)
        self.contrast_factor = 1.5
        self.edge_strength = 2.0
        self.dithering_enabled = True
        self.paused = False
        self.running = True
        
        # Stats
        self.frame_count = 0
        self.start_time = time.time()
        
        # Create save directory
        self.save_dir = "/home/pi/oled2025"
        os.makedirs(self.save_dir, exist_ok=True)
        
        print(f"OLED initialized: {self.device.width}x{self.device.height}")
        print(f"Settings: Contrast={self.contrast_factor}, Edge={self.edge_strength}")
        print("Controls: [S] Save | [P] Pause | [C] Contrast+ | [V] Contrast-")
        print("          [E] Edge+ | [D] Edge- | [Q] Quit")
        
    def floyd_steinberg_dither(self, image):
        """Apply Floyd-Steinberg dithering to a grayscale image"""
        img_array = np.array(image, dtype=float) / 255.0
        height, width = img_array.shape
        
        for y in range(height - 1):
            for x in range(1, width - 1):
                old_pixel = img_array[y, x]
                new_pixel = 0.0 if old_pixel < 0.5 else 1.0
                img_array[y, x] = new_pixel
                quant_error = old_pixel - new_pixel
                
                # Diffuse error to neighboring pixels
                img_array[y, x + 1] += quant_error * 7/16
                img_array[y + 1, x - 1] += quant_error * 3/16
                img_array[y + 1, x] += quant_error * 5/16
                img_array[y + 1, x + 1] += quant_error * 1/16
        
        # Convert back to 0-255 range and ensure bounds
        img_array = np.clip(img_array * 255, 0, 255).astype(np.uint8)
        return Image.fromarray(img_array, mode='L')
    
    def apply_contrast(self, image, factor):
        """Apply contrast adjustment"""
        enhancer = ImageEnhance.Contrast(image)
        return enhancer.enhance(factor)
    
    def apply_edge_enhancement(self, image, strength):
        """Apply edge enhancement"""
        if strength <= 0:
            return image
        
        # Convert to numpy for processing
        img_array = np.array(image)
        
        # Simple Sobel edge detection
        kernel = np.array([[-1, -1, -1],
                           [-1,  8, -1],
                           [-1, -1, -1]]) * strength
        
        # Apply convolution
        from scipy import ndimage
        edges = ndimage.convolve(img_array.astype(float), kernel)
        
        # Blend original with edges
        enhanced = np.clip(img_array + edges, 0, 255).astype(np.uint8)
        
        return Image.fromarray(enhanced, mode='L')
    
    def process_frame(self, frame):
        """Process a single frame for OLED display"""
        # Convert to PIL Image
        img = Image.fromarray(frame)
        
        # Resize to OLED dimensions (128x64)
        img = img.resize((128, 64), Image.Resampling.LANCZOS)
        
        # Convert to grayscale
        img = img.convert('L')
        
        # Apply contrast
        img = self.apply_contrast(img, self.contrast_factor)
        
        # Apply edge enhancement
        img = self.apply_edge_enhancement(img, self.edge_strength)
        
        # Apply dithering
        if self.dithering_enabled:
            img = self.floyd_steinberg_dither(img)
        
        return img
    
    def save_high_res_image(self):
        """Save a high-resolution dithered image"""
        # Capture at full resolution
        config = self.picam2.create_still_configuration(main={"size": (2592, 1944)})
        self.picam2.switch_mode_and_capture_file(config, "temp_highres.jpg")
        
        # Load and process
        highres = Image.open("temp_highres.jpg").convert('L')
        
        # Apply same processing but keep original size
        highres = self.apply_contrast(highres, self.contrast_factor)
        highres = self.apply_edge_enhancement(highres, self.edge_strength)
        
        if self.dithering_enabled:
            highres = self.floyd_steinberg_dither(highres)
        
        # Save with timestamp
        timestamp = datetime.now().strftime("%Y-%m-%d-%H%M%S")
        filename = f"{self.save_dir}/{timestamp}.jpg"
        highres.save(filename, "JPEG", quality=95)
        
        # Clean up temp file
        os.remove("temp_highres.jpg")
        
        print(f"Saved high-res image: {filename}")
        return filename
    
    def display_stats(self, draw):
        """Display statistics on OLED"""
        fps = self.frame_count / (time.time() - self.start_time) if time.time() > self.start_time else 0
        stats = f"FPS: {fps:.1f}\nC: {self.contrast_factor:.1f}\nE: {self.edge_strength:.1f}"
        if self.paused:
            stats += "\n[PAUSED]"
        
        draw.text((0, 0), stats, fill="white")
    
    def handle_keys(self):
        """Handle keyboard input"""
        # Non-blocking keyboard input check
        import select
        if select.select([sys.stdin], [], [], 0)[0]:
            key = sys.stdin.read(1).lower()
            
            if key == 'q':
                self.running = False
                print("Quitting...")
            elif key == 's':
                print("Saving high-res image...")
                self.save_high_res_image()
            elif key == 'p':
                self.paused = not self.paused
                print(f"{'Paused' if self.paused else 'Resumed'}")
            elif key == 'c':
                self.contrast_factor = min(3.0, self.contrast_factor + 0.1)
                print(f"Contrast: {self.contrast_factor:.1f}")
            elif key == 'v':
                self.contrast_factor = max(0.1, self.contrast_factor - 0.1)
                print(f"Contrast: {self.contrast_factor:.1f}")
            elif key == 'e':
                self.edge_strength = min(5.0, self.edge_strength + 0.5)
                print(f"Edge: {self.edge_strength:.1f}")
            elif key == 'd':
                self.edge_strength = max(0.0, self.edge_strength - 0.5)
                print(f"Edge: {self.edge_strength:.1f}")
            elif key == 'h':
                print("\nControls: [S] Save | [P] Pause | [C] Contrast+ | [V] Contrast-")
                print("          [E] Edge+ | [D] Edge- | [Q] Quit | [H] Help")
    
    def run(self):
        """Main loop"""
        # Set terminal to non-blocking mode
        import tty, termios
        old_settings = termios.tcgetattr(sys.stdin)
        try:
            tty.setcbreak(sys.stdin.fileno())
            
            # Start camera
            self.picam2.start()
            print("Camera started. Press 'H' for help.")
            
            while self.running:
                # Handle keyboard input
                self.handle_keys()
                
                if not self.paused:
                    # Capture frame
                    frame = self.picam2.capture_array("lores")
                    
                    # Process frame for OLED
                    processed = self.process_frame(frame)
                    
                    # Display on OLED
                    with canvas(self.device) as draw:
                        # Display processed image
                        self.device.display(processed)
                        # Overlay stats
                        self.display_stats(draw)
                    
                    self.frame_count += 1
                    
                    # Limit frame rate to ~5 FPS for Pi Zero
                    time.sleep(0.05)
                else:
                    # Show paused message on OLED
                    with canvas(self.device) as draw:
                        draw.text((20, 20), "PAUSED", fill="white")
                    time.sleep(0.1)
        
        except KeyboardInterrupt:
            print("\nInterrupted by user")
        finally:
            # Restore terminal settings
            termios.tcsetattr(sys.stdin, termios.TCSADRAIN, old_settings)
            
            # Cleanup
            self.picam2.stop()
            self.device.clear()
            print(f"Stopped. Total frames: {self.frame_count}")

def main():
    app = CameraOLED()
    app.run()

if __name__ == "__main__":
    main()
```

### **4. Create a Startup Script (Optional)**
Create `start_camera.sh`:
```bash
#!/bin/bash
cd /home/pi
python3 oled_camera.py
```

Make it executable:
```bash
chmod +x start_camera.sh
```

### **5. Usage Instructions**

1. **Run the application:**
   ```bash
   python3 oled_camera.py
   ```

2. **Keyboard Controls while running:**
   - **S**: Save high-resolution dithered image
   - **P**: Pause/resume camera preview
   - **C**: Increase contrast
   - **V**: Decrease contrast
   - **E**: Increase edge enhancement
   - **D**: Decrease edge enhancement
   - **Q**: Quit application
   - **H**: Show help

3. **Saved Images:**
   - High-resolution dithered images saved to `/home/pi/oled2025/`
   - Filename format: `YYYY-MM-DD-HHMMSS.jpg`
   - While preview shows 128×64 dithered image, saved images are at camera resolution (2592×1944 dithered)

### **6. Adjustable Parameters in Code**

You can modify these initial values in the `__init__` method:
```python
self.contrast_factor = 1.5    # Start with 1.5x contrast
self.edge_strength = 2.0      # Start with moderate edge enhancement
```

### **7. Performance Optimization Tips**

Since you're using Pi Zero:

1. **For better FPS:**
   - Reduce camera resolution in line 31: `main={"size": (320, 240)}`
   - Disable edge enhancement by setting `self.edge_strength = 0`

2. **For better quality:**
   - Increase camera resolution in line 31: `main={"size": (1296, 972)}` (half of max)
   - Increase contrast to 2.0+

### **8. Troubleshooting**

If you encounter issues:

1. **OLED not displaying:**
   ```bash
   # Test OLED with luma examples
   python3 -m luma.examples.demo ssd1306 -i spi --gpio-data-command 25 --gpio-reset 24
   ```

2. **Camera not working:**
   ```bash
   # Test camera
   libcamera-hello --qt-preview
   ```

3. **Installation issues:**
   ```bash
   # If picamera2 fails, try legacy picamera
   sudo apt install -y python3-picamera
   ```

### **9. Customization Options**

You can easily modify:
- **Dithering algorithm**: Replace `floyd_steinberg_dither()` with other algorithms
- **Edge detection**: Change kernel in `apply_edge_enhancement()`
- **Display layout**: Modify `display_stats()` position
- **Save format**: Change from JPEG to PNG in `save_high_res_image()`

Would you like me to explain any part of the code in more detail or add specific features?
