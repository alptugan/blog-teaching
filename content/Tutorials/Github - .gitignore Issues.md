---
title: Github - .gitignore Issues
date: 2026-02-16 03:03:37
description:
tags:
  - GitHub
  - Terminal
aliases:
draft: false
---
### 1. Clear the Git Cache

> [!WARNING] Clear Cache
> The first step is to remove the files from Git's index (the cache), but leave the actual files in your working directory.
>
> Most times this step is enough if you want to reset the repo.


Run the following command in your repository's root directory:

```
git rm -r --cached .
```

- **`git rm`**: The command to remove files.    
- **`-r`**: Enables recursive removal (for directories).
- **`--cached`**: Tells Git to remove the files from the index/staging area, but **not** from the file system.
- **`.`**: Specifies all files and folders in the current directory and subdirectories.


### 2. Commit the Removal
After clearing the index, you need to commit this change. This tells the repository's history that these files are no longer being tracked.

```
git commit -m "Stop tracking files listed in .gitignore"
```

### 3. Re-Add and Commit the Remaining Files
Now, you can re-add all the files. Git will consult your `.gitignore` file and only add the files that are **not** ignored.

```
git add .
```

This step should only stage the files you want to keep tracking.


Finally, commit the clean set of files:

```
git commit -m "Re-add tracked files after cleaning up according to .gitignore"
```

### 4. Push the Changes
Push these changes to your remote repository (e.g., GitHub, GitLab):

```
git push origin <your_branch_name>
```

After performing these steps, the files listed in your `.gitignore` that were previously tracked should be removed from the repository, and Git will ignore them going forward.
