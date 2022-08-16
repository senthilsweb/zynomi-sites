---
title: Yoga
path: /casestudy/2021-12-27-gmail-procesor
date: 2022-12-20
status: published
background: background goes here
introduction: introduction goes here
industries: [Healthcare, Telecom]
coverimage: https://res.cloudinary.com/dhdvqdtsc/image/upload/v1650108680/Yoga_Teacher_-_Tamara_Tirjak_rslsii.jpg
author: Swara Nritya
type: Event
tags:
  - Field data capture
  - RPA
platforms: [Internet Of Things, Web, Mobile]
os:
  - name: IOS
    version: 2.3.0
    icon: ios.png
    store: http://www.store.link.goes.here.com/
  - name: Android
    version: 2.7.3
    icon: android.png
    store: http://www.store.link.goes.here.com/
screenshots:
  - title: Splash screen
    path: /image/path/goes/here
  - title: Dashboard
    path: /image/path/goes/here

technologies:
  - name: Nodejs
    version:
    icon: nodejs.svg
  - name: Grafana
    icon: grafana.svg
  - name: Docker
    version: 2.7.3
    icon: docker.svg
---

## Executive Summary

Announcement 📣 ⭐️ Swara Nritya is thrilled to bring a dynamic, fun-filled yoga class specifically tailored to meet the needs of children.

<!--more-->

## Challenges Faced

- Large MNC’s employ thousands of part time and full-time employees through the year. Business, being dependant on seasons and the time of the year, the number of employees hired oscillates from high to low.

- This results in the Human Resource department having to keep the employees exit and entry tight – ensuring at every step that the information on new joiners, termed employees are all provided to the respective payroll and account departments.

![background](https://res.cloudinary.com/nathansweb/image/upload/v1640659437/www.xyz.com/case-studies/zyno-gmail-processor.manual.svg)

- In many companies the IT Systems may not be interconnected for automatic feeds and status updates.

- Therefore, dedicated personnel, across departments, are hired to manage their local IT systems and ensure the employee records are up to date. The mode of exchange is usually either an email with an excel or csv attachment.

- Some of these IT systems are legacy mainframes with custom built web front ends and modernizing these is a difficult and cumbersome task.

## Solution: Bots for the regular repetable task

- The answer to streamlining these error prone manual tasks of the HR and Finance Department lies in Automation.

- And this automation is what excels in!

![background](https://res.cloudinary.com/nathansweb/image/upload/v1640659437/www.xyz.com/case-studies/zyno-gmail-processor.automated.svg)

## How to use the email processor docker image?

### Pre-requisites

- Google workspace App-Specific Passwords is required
- Create `docker-compose.yml` and copy and paste it from the code given below
- Configure the below 4 environment variables in `docker-compose.yml` with your credentials and modify other environment variables as per your need
  - NAME
  - EMAIL
  - USERNAME
  - PASSWORD

docker-compose.yml

```bash
version: "3.7"

services:
  zyno.gmail-reader:
    container_name: zyno.gmail-reader
    image: senthilsweb/zyno.gmail-reader:latest
    command: node app.js
    environment:
      - NAME=
      - EMAIL=
      - USERNAME=
      - PASSWORD=
      - IMAP_HOST=imap.gmail.com
      - IMAP_PORT=993
      - IMAP_TLS=true
      - SMTP_HOST=smtp.gmail.com
      - SMTP_SSL=true
      - EMAIL_SEARCH_FILTER_SINCE='Dec 25, 2021'
      - EMAIL_SEARCH_FILTER_BEFORE='Dec 31, 2021'
      - EMAIL_ATTACHMENT_EXT_ALLOWED=.pdf|.csv|.xls|.xlsx
      - EMAIL_MESSAGES_DIRECTORY=/emails/messages/
      - EMAIL_ATTACHMENTS_DIRECTORY=/emails/attachments/
    volumes:
        - ./emails:/usr/src/emails
    restart: unless-stopped
    tty: true
```

### Run using docker-compose

```
docker-compose up
```

### How to create google App-Specific Passwords?

- Go to [https://myaccount.google.com](https://myaccount.google.com/) and Login
- Click On Security
- Enable 2-Step Verification under Signing into Google
- Click App passwords (and sign in again)
- On the App Passwords screen use the drop downs to select the following:
  - Select app (Select the app this password will be for)
  - Select Device (Select the device this app will be for)
- Once you have selected the above settings click the GENERATE button.
- Your new password will be randomly generated and displayed on your screen.
- Copy it down somewhere for safekeeping as you only get to see this once. `If you lose this password you’ll need to generate a new one!`
- Take your new password and use it in place of your regular password when signing in to a Less Secure App. Using this password will let you continue using the app like normal and the best part is most of the time you will only need to enter it once to have it saved!
