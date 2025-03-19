---
title: Bash - Backup files via rsync and tar
date: 2024-12-27T01:00:00
description: 
tags:
  - backup
aliases: 
draft: false
---
https://tonyteaches.tech/rsync-backup-tutorial/

In this tutorial, you will learn how to create daily, weekly, and monthly backups on Ubuntu/Debian with a script. To do this, we will use the tar, find, and rsync commands as well as cron to automate the task.

## Daily Backup

The following **tar** command will create a compressed archive of the _/var/www/html_ folder in the _/home/tony/backup/daily/_ folder. The **find** command will remove all daily backups that are older than 7 days.

tar -zcf /home/tony/backup/daily/backup-$(date +%Y%m%d).tar.gz -C /var/www/ html
find /home/tony/backup/daily/* -mtime +7 -delete

After modifying to suite your needs, put these two commands in a script called `backup-daily.sh`.

## Weekly Backup

The following **tar** command will create a compressed archive of the _/var/www/html_ folder in the _/home/tony/backup__/weekly/_ folder. The **find** command will remove all weekly backups that are older than 31 days or 1 month.

tar -zcf /home/tony/backup/weekly/backup-$(date +%Y%m%d).tar.gz -C /var/www/ html
find /home/tony/backup/weekly/* -mtime +31 -delete

After modifying to suite your needs, put these two commands in a script called `backup-weekly.sh`.

## Monthly Backup

The following **tar** command will create a compressed archive of the _/var/www/html_ folder in the _/home/tony/backup__/monthly/_ folder. The **find** command will remove all monthly backups that are older than 365 days or 1 year.

tar -zcf /home/tony/backup/monthly/backup-$(date +%Y%m%d).tar.gz -C /var/www/ html
find /home/tony/backup/monthly/* -mtime +365 -delete

After modifying to suite your needs, put these two commands in a script called `backup-monthly.sh`.

## Automate with Cron

You can create a cronjob to call the daily, weekly, and monthly backup scripts. Open the cron editor with the `crontab -e` command and add the following while specifying the actual full path to your script files.

15 0 * * * sh /home/tony/backup-daily.sh
30 0 * * 1 sh /home/tony/backup-weekly.sh
45 0 1 * * sh /home/tony/backup-monthly.sh

In case you’re not familiar with cron syntax, this is what we’re doing:

- Execute the daily backup script everyday at 12:15 AM
- Execute the weekly backup script every Monday at 12:30 AM
- Execute the monthly backup script the 1st of every month at 12:45 AM

## Backup Externally

Next, it’s a good idea to take your local backup files and back them up to another system. The reason we want to do this is in case this system is compromised and/or you lose access to it.

We can make a mirror image of our local backup directory and everything in it with the **rsync** command.

rsync -a --delete /home/tony/backup/ root@161.35.143.122:/path/to/remote/backups/

Notice the –delete flag above. This will ensure that we don’t unnecessarily keep the backups that we deleted locally with the **find** command on the remote server. In other words, `/home/tony/backup/` on the local system will be a mirror image of `/path/to/remote/backups/` on the remote system.

In order to execute the rsync command without the need to provide a password, you will need to install the public key on the remote server. [You can watch this video](https://youtu.be/j2vBT3T79Pg) if you don’t know how to do that.

The last thing to do is to create a cronjob to execute the rsync command.

0 2 * * * rsync -a --delete /home/tony/backup/ root@161.35.143.122:/path/to/remote/backups/

We will execute the rsync command every day at some point after all the backups have been generated.

Please watch the following video for a detailed walkthrough of the concepts in this tutorial, and if you have any questions, please don’t hesitate to let me know in the comments below.