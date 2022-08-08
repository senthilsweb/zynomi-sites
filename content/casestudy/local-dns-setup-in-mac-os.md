---
title: Bollywood Classes
path:
date: 2022-12-28
status: published
client:
website:
background:
introduction:
industries: []
rightStripColor: "bg-gray-50"
coverimage: https://res.cloudinary.com/dhdvqdtsc/image/upload/v1650109204/Screenshot_2022-04-16_at_5.09.13_PM_ihg4oy.png
author: Swara Nritya
avatar:
type: Event
tags:
  - Kubernetes
  - Blog
  - CI/CD
  - Gitops
platforms: [Web, Mobile, Tablet]
technologies:
  - name: Bash
    version:
    icon: bash.svg
---

Our Children Bollywood Classes starting today :) Cant wait to see you all. Registrations still open. DM us or email swaranritya@gmail.com to enrol.

<!--more-->

This blog post will play as foundation for our upcoming kubernetes articles. Follow the below steps to setup your local Domain Name Service.

1. create a new ip e.g. `10.0.0.1`

```
sudo ifconfig lo0 10.0.0.1 alias
```

2. Forward the new ip address with port 80 `10.0.0.1:80` to your local `api` or `web` running in different ports, in this example my api is running in port `:3000`

```
echo "rdr pass on lo0 inet proto tcp from any to 10.0.0.1 port 80 -> 127.0.0.1 port 3000" | sudo pfctl -ef -
```

3. Edit your `/etc/hosts` or `/private/etc/hosts` file and add the following line to map your domain, in our case we used fake domain name as `xyz.bot` to `10.0.0.1`

```
10.0.0.1 xyz.bot
```

4. After saving your hosts file, flush your local DNS to clear the DNS cache.

```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

5. Access your `api` or `web` application using the just created fake dns `http://xyz.bot`

## How to Delete the just created ip?

```
sudo ifconfig lo0 10.0.0.1 -alias
```

## References

- [Flushing your DNS cache in Mac OS X and Linux](https://help.dreamhost.com/hc/en-us/articles/214981288-Flushing-your-DNS-cache-in-Mac-OS-X-and-Linux)
- [Stackoverflow](https://serverfault.com/questions/102416/iptables-equivalent-for-mac-os-x/673551#673551)
