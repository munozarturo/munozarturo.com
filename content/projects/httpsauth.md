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

For a bit, I became obsessed with trying to make my own authentication from scratch. Many attempts were made to tackle this challenge, and I mostly failed, I would always stumble into some issue that I wouldn't know how to solve. Something that didn't matter to me because each attempt taught me something new, and with each attempt I got a little closer to getting it right.

Eventually, this obsession subsided and I continued working on other projects and acquiring more skills until I came into another period of idleness. I didn't really know what to work on, so I thought I would like to try and learn a new framework: Nuxt3. You see, up until that point I had only used NextJS, so this was a pretty big move. And I needed to build something to learn nuxt with, so I decided to make another attempt at my own authentication.

So I opened my bash terminal and ran `npx nuxi@latest init httpsauth` and that's how this project came to be.

After I started, the project just kind of completed itself. See by this attempt I had already learned how to use Amazon's SES and `drizzle` and I was already pretty good at writing my own HTTPS APIs, and I just knew enough that it felt like making toast. I really don't have an answer as to what changed between this attempt and all of the previous ones except I just knew a lot more.

Anyways, I did it.
