---
title: Dockhand - Uninstall Container or stacks
date: 2026-06-07 09:18:52
description:
tags:
  - docker
  - homeserver
  - server
aliases:
draft: false
---
Suppose that we need to remove a stack called `claudflared`

To completely uninstall an application in Docker, you actually have to do a little more than just hitting "Delete."

When you delete a container, Docker intentionally leaves behind the downloaded installation files (Images) and your saved settings (Volumes) just in case you ever want to spin it back up again. To perform a completely clean, 100% wipe from your server, it is a three-part process.

Here is exactly how to nuke an app from orbit using Dockhand.

### Phase 1: Destroy the Container
How you do this depends entirely on how you built the app in the first place.

**If you built it using a Compose Stack:**
1. Click **Stacks** on the left sidebar.
2. Click on the stack you want to delete.
3. Click the **Stop** button to gracefully shut it down.
4. Once stopped, click the red **Delete** button. This will automatically wipe out every container and internal network associated with that blueprint.


**If you built it using the "Create Container" button:**
1. Click **Containers** on the left sidebar.    
2. Check the box next to the container you want to remove.
3. Click **Stop** at the top.
4. Click the red **Delete** (trash can) button.

### Phase 2: Delete the Downloaded Image
Even though the container is gone, the heavy installation file (the Docker Image) is still sitting on your hard drive taking up space. Let's take out the trash.

1. Click **Images** on the left sidebar.
2. You will see a list of every app downloaded to your server. Look for the one you just deleted (for example, `filebrowser/filebrowser:latest` or `lscr.io/linuxserver/nextcloud`).
3. If it says "Unused" in the status column, it is safe to delete.
4. Check the box next to it and click the  **Prune** button at the top.

### Phase 3: Wipe the Hard Drive Data (The Final Step)
**⚠️ Warning:** Do not do this step unless you are absolutely sure you never want to see this app's data again!

Because you have been smartly using "Bind Mounts" to save your configuration files directly to your Ubuntu host (mine is `/DATA/AppData/` directory), **Dockhand physically cannot delete these files.** Docker is strictly forbidden from wiping host-level folders.

To complete the uninstallation, you must delete that folder yourself:
1. Open your **Filebrowser** web interface or Terminal.
2. Navigate to your `/DATA/AppData/` folder.
3. Find the folder for the app you just removed (e.g., `/DATA/AppData/myapp`).
4. Select it and click the **Delete** icon.

Once that folder is gone, the application is 100% eradicated from your server as if it was never there!

