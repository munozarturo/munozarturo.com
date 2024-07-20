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

Mockup Forge was&mdash;mostly&mdash;an experiment. An experiment to test how well I could use Docker to build a microservice. An expement which I could only run after installing a linux distro on my old PC because I was too cheap to shell out a Ben Franklin to upgrade my Windows 10 Home&copy; to Windows 10 Pro&copy;.

Mockup Forge is nothing but a VM running a Flask application that uses a locally installed copy of [GIMP](https://www.gimp.org/) to manipulate photoshop files I stole from the internet to generate mockups with images other people stole from the internet.

Like this wonderfull mockup of 1928 Mickey on a white T-shirt. Which, I would like to note, is not infringing on Disney's copyright because the original, 1928 Mickey Mouse is now part of the public domain.

::content-image{src="/assets/mockupforge/mockup-mickey.png" alt="Mickey Shirt" styleClass="w-2/3"}
::

Now I am by no means a Docker expert, matter of fact I wont't even claim to understand it. All I know is that the world runs on containerized services and if someone asks me a question and I hear &ldquo;Docker,&rdquo; I should slowly nod and mumble &ldquo;VM&rdquo; in response.
