---
title: "nuxt-class-inject"
subtitle: "a Nuxt3 module for fast css class injection."
date: "2024-07-28T20:39:00"
tags: ["nuxt-js", "module", "typescript", "css", "nitro"]
links: [
    {
        "icon": "npmjs",
        "href": "https://www.npmjs.com/package/nuxt-class-inject",
    },
    {
        "icon": "globe",
        "href": "https://nuxt-class-inject.munozarturo.com/",
    },
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/nuxt-class-inject"
    }
]
banner: "/assets/nuxt-class-inject/banner.png"
---

`nuxt-class-inject` is a NuxtJS module I wrote out of stubborness. The reason this module exists, is because I wanted to add themes to this website.

A relatively simple problem. All I had to do was set some CSS classes defining my theme colors, register them in my Tailwind config file, and then find a way to inject these classes into the `<html>` tag of a page to make sure that content rendering occurs *after* the classes are injected&mdash;otherwise there is flashing because the content will be loaded before the browser knows what color the content should be.

The issue was, you can&mdash;t do this in NuxtJS&mdash;or at least not to my knowledge. See you can define a plugin in your project, but it will always run after a bunch of other stuff and there&lsquo;s no simple way to bypass this.

You of course, could use a module like `@nuxtjs/color-mode` (a module that heavily inspired this project) but this module only allows you to change one CSS class. Which didn't *exactly* work for me because I also wanted to change the font type and the font size for accessibility reasons. Which means that I would either have to register 54 CSS classes and set user preferences through a single class, botch something together by using `@nuxtjs/color-mode` not as intended, or... make my own module.

Now, even though the last solution was obviously the most time consuming&mdash;I swear to god it was calling my name. So 30 hours of work later, I now only have to set 12 CSS classes. That&lsquo;s like 1 CSS class *less* per hour of work. Totally worth it.

In all seriousness though, it was a pretty good excuse to make a Nuxt module while keeping it pretty easy&mdash;I ripped off `@nuxtjs/color-mode` *a lot*. So now, if and when I want to make my own Nuxt module. I will know how. Well... I will kinda sorta know how&mdash;it depends, I don&lsquo;t know what future me is trying to make.

Also, to be fair, it&lsquo;s a pretty fucking cool module... like common, CSS class injection pre-client rendering! In this economy, that&lsquo;s a steal.

It works great too! Haven&lsquo;t you tried it?
