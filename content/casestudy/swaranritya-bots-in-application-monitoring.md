---
title: Carnatic music
path: /casestudy/rpa-in-app-monitoring
date: 2022-04-22
status: published
background: background goes here
introduction: introduction goes here
industries: [Healthcare, Telecom]
coverimage: https://res.cloudinary.com/dhdvqdtsc/image/upload/v1650107520/Screenshot_2022-04-16_at_4.41.10_PM_bafprg.png
author: Swara Nritya
type: Event
tags:
  - Mobile Apps
  - Field data capture
  - Internet Of Things
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
  - name: Python
    version: 3.x.x
    icon: python.svg
  - name: Grafana
    icon: grafana.svg
  - name: Docker
    version: 2.7.3
    icon: docker.svg
---

## Executive Summary

Glimpse from our Carnatic music students audio recording for the summer show 🎶 Our students had an wonderful audio recording

<!--more-->

## Challenges Faced

- Engineers were involved in a complicated process of monitoring various web consoles, SOAP web services, Querying multiple different Oracle databases for information, and NGINX log monitoring through NGINX dashboard.

- In order to maintain Business continuity, every one hour - all of these processes needed to be monitored and the various infrastructure groups needed to be notified (through various alerting mechanisms like Teams, Slack and Email) with further instructions of actions as necessary.

- The time taken to complete the monitoring and notifying stage until appropriate action and resolution i.e. a single iteration required approximately 1 hour.

- An individual on a 7-to-8-hour shift of consistent monitoring led to monotony setting in resulting in attrition for the company.

- The mind map below depicts the quantum tasks involved in just one portion of the monitoring services.

![background](https://res.cloudinary.com/nathansweb/image/upload/v1640625434/www.xyz.com/case-studies/app-monitoring_sxtb0u.png)

## Solution: Bots for the regular repetable task

has the solution for these mundane and complicated tasks.

- conducted a one-week system study to closely work with the support engineers and to understand the end-to-end support process flow.

- The experts looked into the data and outlined the areas that will benefit through automation.

- Custom software bots were developed using Python and Selenium without any RPA SDK

- The Bots were packaged in a docker container and deployed in bare metal servers

- Grafana was used for the Management Dashboard and alerting.

## Results

The RPA implementation to automate the monitoring tasks was completed in just 5 weeks (1 week of study followed by 4 weeks of development through to production rollout).

Post automation, the time to complete one full round of end-to-end manual monitoring – reporting and notification reduced to 10 minutes
which is 6X faster than human based monitoring.

Another important observation was that the error rate had also reduced.

Another success story for !
