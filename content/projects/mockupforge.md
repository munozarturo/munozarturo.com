---
title: "mockupforge"
subtitle: "a containerized mockup generator built with Flask and GIMP."
date: "2024-05-14T18:15:00"
tags: ["docker", "python3", "flask", "gimp"]
links: [
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/mockupforge",
    },
]
---

![mockupforge-banner](/assets/mockupforge/banner.png)

Mockup Forge was&mdash;mostly&mdash;an experiment. An experiment to test how well I could use Docker. An expement which I could only run after installing a linux distro on my old PC because I was too cheap to shell out a Ben Franklin to upgrade my laptop from Windows 10 Home&copy; to Windows 10 Pro&copy;.

Mockup Forge is nothing but a VM running a Flask application that uses a locally installed copy of [GIMP](https://www.gimp.org/) to manipulate photoshop files that *I* stole from the internet to generate mockups with images other people *will* steal from the internet.

::content-image{src="/assets/mockupforge/mockup-mickey.png" alt="Mickey Shirt" styleClass="w-2/3"}
::

Like this white shirt with 1928 Mickey on it. Which, I would like to note, does not infringe on Disney&lsquo;s intellectual property because the original, 1928 Mickey Mouse became part of the public domain in January of this year.

Even though I was able to create the sick image above by purely using my Python skills I, by no means, claim to be a Docker expert, matter of fact I wont't even claim to understand Docker. All I will tell you is that the world runs on containerized services and we should all venerate and love Kamel Founadi, Solomon Hykes, and Sebastien Pahl as gods for using their creative brilliance to create Docker in 2010. Even though, Docker is the very foundation for the microservice hell we now live in we should still love it, because the alternative is probably worse.
