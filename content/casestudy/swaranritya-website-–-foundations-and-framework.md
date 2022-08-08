---
title: Online Summer Show 2022
path:
date: 2022-05-25
status: published
background: background goes here
introduction: introduction goes here
industries: [Music, Dance]
coverimage: https://res.cloudinary.com/dhdvqdtsc/image/upload/v1649681795/Copy_of_IMG_4331_ol15x2.jpg
author: Swara Nritya
type: Blog
tags:
  - Field data capture
  - RPA
platforms: [Internet Of Things, Web, Mobile]
os:
  - name: linnux
    version:
    icon: linux.svg
    store:
screenshots:
  - title: Splash screen
    path: /image/path/goes/here
  - title: Dashboard
    path: /image/path/goes/here

technologies:
  - name: golang
    version:
    icon: go.svg
  - name: postgreSQL
    icon: postgresql.svg
  - name: Docker
    version: 2.7.3
    icon: docker.svg
  - name: ubuntu
    version: 2.7.3
    icon: ubuntu.svg
  - name: redis
    version: 2.7.3
    icon: redis.svg
  - name: slack
    version: 2.7.3
    icon: slack.svg
  - name: Tailwindcss
    version: 2.7.3
    icon: tailwindcss.svg
  - name: NuxtJS
    version: 2.7.3
    icon: nuxt.svg
  - name: VueJS
    version: 2.7.3
    icon: vue.svg
  - name: Github
    version: 2.7.3
    icon: github.svg
---

We are very excited to present our first ever online summer show to the global...

<!--more-->

## Deployment architecture

![background](https://res.cloudinary.com/nathansweb/image/upload/v1640982329/www.xyz.com/case-studies/Swara Nritya.com_website.drawio_crkacm.svg)

## Technologies and Frameworks that power SwaraNritya.com

- Our domain name – www.xyz.com is registered with AWS Rote53
- We have t2.small amazon linux Ec2 vm
- Traefik Reverse Proxy has been used for deployment, automatic SSL certificate generation using Docker and File Provider
- xyz.com web app deployed thru traefik docker provider
- A light weight Golang API Server (Zyno Bot) along with the web app has been deployed through Traefik File Provider. The Golang Server has RESTful API’s and background tasks to process ‘Contact us form’ posts.
- ‘Contact us form’ posts are submitted to Redis in Upstash. We use Redis strings and pub/sub (for fun)
- Golang background tasks (subscriber) will process the published message and send
  - Notifications
  - Slack to our Sales Channel
  - Email and
  - Save it in our Postgres Database
- Standalone Dockerized PostgreSQL is accessible only to through localhost (named Docker Service)
- Serverless Redis in `Upstash` for free (Again for fun)
- Netlify Hosting is used to host the development instance of SwaraNritya.com (free of cost) @ dev.xyz.com. The Web and RESTful API’s, both, are packaged in a single binary and deployed as Netlify functions i.e., internally as AWS Lambda functions (Again for fun)
- A separate blog post on ‘How to use Netlify to power Golang API Server for free is coming your way soon!!!
