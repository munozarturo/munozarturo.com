---
title: "httpsauth"
subtitle: "cookie authentication over HTTPS in NuxtJS 3 with PostgreSQL and AWS SES."
date: "2024-06-25T12:28:00"
tags: ["nuxt-js", "vue", "postgresql", "drizzle-orm", "aws-ses", "typescript"]
links: [
    {
        "icon": "globe",
        "href": "https://httpsauth.munozarturo.com/",
    },
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/httpsauth",
    },
]
banner: "/assets/httpsauth/banner.png"
---

Ever since I made my first website ([whizfile](/projects/whizfile.com)), I began to notice everything in the websites I visited and became fascinated with trying to figure out *how* they did them. Inevitably, some things interested me more than others&mdash;one such thing was *authentication*.

For a bit, I was obsessed with authentication, specifically trying to implement it from scratch. I made many attempts to tackle this challenge and I kept failing. I always stumbled into some issue that I wouldn't know how to solve, or just keep making small mistakes that would snowball into a huge mistake that made me want to start over. Even though at this point I only knew faliure, it didn't matter to me because each attempt taught me something new, and with each attempt I got a little closer to getting it right&mdash;I knew if I kept going, it was inevitable that I would get it right.

Eventually, this obsession subsided and I was able to divert my attention to working on other projects I came into another period of idleness. I didn't really know what to work on, so I thought I should have a crack at learning `Nuxt`. Something that was a pretty big more for me since up until that point I had only used `NextJS`. I decided that the best &ldquo;practice project&rdquo; would be to try to do authentication from scratch *again*.

It went well. Over a two week period I created everything I though *authentication* should have. A REST HTTP API, email notifications, password resets, a nice UI to wrap it all together, and a bunch of other stuff I have forgotten by now... Point is, I made it in my image of perfection (which is not to suggest that it is or was perfect, just that to *me* it seemed perfect).
