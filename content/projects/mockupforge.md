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
banner: "/assets/mockupforge/banner.png"
---

If I&lsquo;m being honest, Mockup Forge was mostly an experiment; an experiment to test how well I could use Docker; an experiment which I could only run after installing a linux distro on my old PC because I was too cheap to shell out a Ben Franklin to upgrade my laptop&lsquo;s operating system to Windows 10 Pro&copy;.

Mockup Forge is nothing but a VM running a Flask application that uses a locally installed copy of [GIMP](https://www.gimp.org/) to manipulate photoshop files that I stole from the internet to generate mockups with images other people will eventually steal from the internet as well...

Like this white shirt with 1928 Mickey on it. Which doesn&lsquo;t infringe on Disney&lsquo;s IP because&mdash;fun fact&mdash;the original 1928 Mickey Mouse is now part of the public domain.

::content-image{src="/assets/mockupforge/mockup-mickey.png" alt="Mickey Shirt" styleClass="w-2/3"}
::

Even though I was able to create the sick image above I, by no means, claim to be a Docker expert, matter of fact I wouldn&lsquo;t even dare claim to understand it. All I will tell you is that the world runs on containerized services and we should all venerate and love the creators of Docker as gods for using their collective brilliance to create it; even though, it is the very blood that pumps the heart of the microservice hell we now inhabit.

Regardless of how good you get at using Docker, the build will always be like a car crash you can&lsquo;t look away from, except you&lsquo;re the driver, you&lsquo;re drinking, and you&lsquo;re causing all of it to happen.
