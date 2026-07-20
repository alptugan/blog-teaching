---
title: MCU - ESP32 Remote Config Over Bluetooth
date: 2026-06-22 02:33:24
description:
tags:
  - MCU
  - server
aliases:
draft: true
---
The Web Bluetooth API is an incredibly elegant solution. By using it, you can build a configuration dashboard using standard web technologies (HTML, CSS, and JavaScript) that runs directly in a browser and connects to your ESP32-C3 without needing an intermediary server or mobile app.

Here is a complete, self-contained HTML template that acts as a frontend dashboard. It is designed to match the Nordic UART BLE code we set up for your ESP32-C3 in the previous step.

## 📄 The Dashboard Frontend (`index.html`)

You can save this code into a file named `index.html` on your computer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Control Panel</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f7f6;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        h2 { margin-bottom: 5px; color: #111; }
        .status {
            font-size: 0.9rem;
            margin-bottom: 25px;
            color: #666;
        }
        .status span {
            font-weight: bold;
            color: #d9534f;
        }
        .status.connected span { color: #5cb85c; }
        button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }
        .btn-connect { background-color: #007aff; color: white; margin-bottom: 20px; }
        .btn-connect:hover { background-color: #0062cc; }
        .btn-send { background-color: #28a745; color: white; }
        .btn-send:hover { background-color: #218838; }
        .btn-send:disabled { background-color: #ccc; cursor: not-allowed; }
        input[type="text"] {
            width: 100%;
            padding: 12px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 6px;
            margin-bottom: 15px;
            font-size: 1rem;
        }
        .form-group { display: none; text-align: left; }
    </style>
</head>
<body>

<div class="card">
    <h2>Device Config</h2>
    <div class="status" id="status-text">Status: <span id="status-val">Disconnected</span></div>
    
    <button class="btn-connect" id="connect-btn">Connect to Device</button>

    <div class="form-group" id="config-form">
        <label style="font-size: 0.85rem; font-weight: bold; color: #555;">New Parameter Value:</label>
        <input type="text" id="param-input" placeholder="e.g. Speed=50, Timeout=10">
        <button class="btn-send" id="send-btn" disabled>Save to Device</button>
    </div>
</div>

<script>
    // These must exactly match the UUIDs defined in your ESP32-C3 firmware
    const SERVICE_UUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
    const RX_CHARACTERISTIC_UUID = "6e400002-b5a3-f393-e0a9-e50e24dcca9e";

    let bleDevice = null;
    let rxCharacteristic = null;

    const connectBtn = document.getElementById('connect-btn');
    const sendBtn = document.getElementById('send-btn');
    const paramInput = document.getElementById('param-input');
    const statusVal = document.getElementById('status-val');
    const statusText = document.getElementById('status-text');
    const configForm = document.getElementById('config-form');

    // Handle Connection Action
    connectBtn.addEventListener('click', async () => {
        if (bleDevice && bleDevice.gatt.connected) {
            disconnectDevice();
            return;
        }

        try {
            statusVal.textContent = "Searching...";
            
            // Request target Bluetooth device using the defined Service UUID
            bleDevice = await navigator.bluetooth.requestDevice({
                filters: [{ name: 'C3-Config-Device' }],
                optionalServices: [SERVICE_UUID]
            });

            statusVal.textContent = "Connecting...";
            const server = await bleDevice.gatt.connect();
            
            statusVal.textContent = "Fetching Service...";
            const service = await server.getPrimaryService(SERVICE_UUID);
            
            statusVal.textContent = "Ready...";
            rxCharacteristic = await service.getCharacteristic(RX_CHARACTERISTIC_UUID);

            // Update UI State to Connected
            statusVal.textContent = "Connected";
            statusText.classList.add('connected');
            connectBtn.textContent = "Disconnect";
            connectBtn.style.backgroundColor = #ff3b30;
            configForm.style.display = "block";
            sendBtn.disabled = false;

            bleDevice.addEventListener('gattserverdisconnected', onDisconnected);

        } catch (error) {
            console.error("BLE Error:", error);
            resetUI();
        }
    });

    // Handle Data Transmission
    sendBtn.addEventListener('click', async () => {
        const val = paramInput.value.trim();
        if (!val || !rxCharacteristic) return;

        try {
            // Encode the text string into a raw byte array
            const encoder = new TextEncoder();
            const data = encoder.encode(val);
            
            // Push data over BLE to the ESP32-C3
            await rxCharacteristic.writeValue(data);
            alert("Configuration sent successfully!");
            paramInput.value = "";
        } catch (error) {
            alert("Failed to send data: " + error);
        }
    });

    function disconnectDevice() {
        if (bleDevice && bleDevice.gatt.connected) {
            bleDevice.gatt.disconnect();
        }
    }

    function onDisconnected() {
        alert("Device disconnected.");
        resetUI();
    }

    function resetUI() {
        statusVal.textContent = "Disconnected";
        statusText.classList.remove('connected');
        connectBtn.textContent = "Connect to Device";
        connectBtn.style.backgroundColor = "#007aff";
        configForm.style.display = "none";
        sendBtn.disabled = true;
        bleDevice = null;
        rxCharacteristic = null;
    }
</script>

</body>
</html>
```

## 🔒 Security Restrictions to Keep in Mind

Because the Web Bluetooth API accesses physical computer/phone hardware, web browsers enforce two strict security rules:

1. **HTTPS Only:** The page must be served over a secure connection (`https://`). For local development and testing, browsers make an exception for **`localhost`** or if you run a simple local server. If you simply double-click the file and open it via a `file:///` path, some browsers may block the Bluetooth prompt entirely.
    
2. **User Gesture Required:** You cannot trigger a Bluetooth scan automatically when a page loads. The scan _must_ be directly tied to a physical click event (like clicking the "Connect" button).
    

## 🚀 How to Run and Test This Right Now

1. **Host it easily:** The absolute fastest way to host this securely is to drop this `index.html` file into a free repository on **GitHub** and enable **GitHub Pages**. It gives you an instant, secure `https://yourname.github.io` link you can load on any laptop or phone.
    
2. **Open the Dashboard:** Open that link using **Google Chrome** or **Microsoft Edge** (on desktop or Android). If you are on an iPhone, open the link inside the free **Bluefy** browser app instead.
    
3. **Connect:** Power up your ESP32-C3. Click **"Connect to Device"** on your webpage. Select your board from the window popup, type your parameter change, and hit **"Save to Device"**. It will write to the ESP32-C3's internal storage instantly!
