---
title: "vval"
subtitle: "a python module for input validation."
date: "2023-11-16T15:58:00"
tags: ["python3"]
links: [
    {
        "icon": "python",
        "href": "https://pypi.org/project/vval/",
    },
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/vval",
    },
]
---

![vval-banner](/assets/vval/banner.png)

This is probably the first "big" project that I worked on. vval was a project inspired by strictly typed languages, the likes of Java and C++, which shaped the early days of my programming.

Back when I was still learning to code in Python I was very uncomfortable with the dynamically typed nature of the language. This was something that especially unsettled me because I often shared my code with my highschool classmates. My classmates would, shortly after copying it, modify it. They would change the functions, rename the variables, and reformat the functions that I passed along. Which would eventually make the interpreter cry because it didn't know how to use `bytes` as a `list[list[string]]`.

So I did something about it. I wrote a module that would strictly enforce the types of variables by using &ldquo;checker&rdquo; helper functions that would make sure that a variable being passed to a function could only be of types that function was written to handle.

vval saw some success in preventing errors with the code I shared, but I eventually learned that the best way of preventing the problems of sharing my code mostly came down to *not-so-great* code and *pretty bad* documentation and I found out that the return on addressing these two things is ten-fold that of trying to force static typing into a dynamically typed language.

Besides a couple of revisions I made to update the PyPI packaging of the module and to touch up the *brand*, vval has mostly remained the same since Novemeber of 2022.

vval is a fond reminder of what I see as my early days; and for that I love it, the same way I imagine *Picasso* loved his first painting or *García Márquez* his first short story.
