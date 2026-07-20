---
draft: false
title: Docker - FileBrowser Custom Styling
date: 2026-06-09 08:24:04
description:
tags:
  - docker
  - server
aliases:
---
## 1. Create a new Volume
Installation is straight forward on Docker-based systems. Open the `dockercompose.yml` file and append the `Volumes` as follows;

```yml
volumes:
      - /:/srv
      - /DATA/AppData/filebrowser/filebrowser.db:/database.db
      - /mnt/naswd:/srv/NAS-Filika
      # Add the following line
      - /DATA/AppData/filebrowser/branding:/branding
```

## 2. Create Branding Folder
Refer to the [documentation]().
```bash
sudo mkdir -p /DATA/AppData/filebrowser/branding
sudo touch /DATA/AppData/filebrowser/branding/custom.css
```

## 3. Tell Filebrowser to use the Branding
![[Docker - FileBrowser Custom Styling04.jpeg|-center|500]]

1. Open the Filebrowser web interface (`http://<server_ip_add>:8085`).
2. Go to **Settings** on the left menu.
3. Click the **Global Settings** tab.
4. Scroll down to the **Branding directory path** box.
5. Type `/branding` into the box.
6. Scroll to the bottom and click **Update**.

## 4. Write the Custom Color Code
Now for the fun part! You can use Filebrowser's built-in text editor to write the code.

1. Still inside Filebrowser, navigate through your actual files to the file we created: Go to `/DATA/AppData/filebrowser/branding/` and click on **`custom.css`**.
    ![[Docker - FileBrowser Custom Styling01.jpeg|-center|500]]
    ![[Docker - FileBrowser Custom Styling02.jpeg|-center|500]]
2. The file will open in a text editor. Paste the following CSS code to change your NAS folder to orange (you can change `#FF5722` to any color hex code you like):

```css
/* Change the color of the folder icon */
div[aria-label="NAS-WD"] i.material-icons {
    color: #FF5722 !important;
}

/* Optional: Make the text match the color and stand out */
div[aria-label="NAS-WD"] .name {
    color: #FF5722 !important;
    font-weight: bold !important;
}
```

3. Click the **Save** icon in the top right corner.
   ![[Docker - FileBrowser Custom Styling03.jpeg|-center|500]]




