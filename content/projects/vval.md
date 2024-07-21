---
title: "vval"
subtitle: "a python module for input validation."
date: "2022-11-16T15:58:00"
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
banner: "/assets/vval/banner.png"
---

This is probably the first &ldquo;big&rdquo; project that I worked on. vval was a project inspired by strictly typed languages, the likes of Java and C++, which shaped the early days of my programming.

Back when I was still learning to code in Python I was very uncomfortable with the dynamically typed nature of the language. This was something that especially unsettled me because I often shared my code with my highschool classmates. My classmates would, shortly after copying it, modify it. They would change the functions, rename the variables, and reformat the functions that I passed along. Which would eventually make the interpreter cry because it didn't know how to use `bytes` as a `list[list[string]]`.

So I did something about it. I wrote a module that would strictly enforce the types of variables by using &ldquo;checker&rdquo; helper functions that would make sure that a variable being passed to a function could only be of types that function was written to handle.

vval saw some success in preventing errors with the code I shared, but I eventually learned that the best way of preventing the problems of sharing my code mostly came down to sub-par code quality and bad documentation. I found out that the return on addressing these issues first was ten fold that of trying to force static typing into a dynamically typed language so I started focusing on learning &ldquo;good code&rdquo; instead of making modules that would make my bad code work better.

The flagship offering of vval was the `validate` function. Back when I was working on it, I thought it was &ldquo;a pretty sweet deal because it comes in multiple flavors: you also get a `validate_iterable`, `validate_option` and `validate_filter` in the pack too,&rdquo;which all do what you would expect...

```python
def f(x: int | str):
    validate(x, (int, str))
    ...

def i(x: list[int | str | dict]):
    validate_iterable(x, (int, str, dict))
    ...

def k(x: str):
    validate_option(x, ["apple", "banana", "cherry"])
    ...

def positive_filter(value) -> bool:
    return value > 0

def l(x: int):
    validate_filter(x, positive_filter)
    ...
```

Although, I will admit you could easily just do this yourself without adding some shoddy code written by a highschooler to your codebase's repository by using the following pattern:

```python
def f(x: int | str):
    if isinstance(x, int):
        ...
    elif isinstance(x, str):
        ...
    else: 
        raise ValueError(...)

...  # and you can do something similar for the rest of them
```

The above pattern basically makes vval useless, because on top of being a lot more readable it's less code because even if you used the `validate` function to validate multiple input types you would still need to handle them.

Besides a couple of revisions made to update the PyPI packaging, to touch up the brand, and to extend functionality a little, vval has mostly remained the same since Novemeber of 2022. Thus it remains a fond reminder of my early days. For that I love it; the same way I imagine *Picasso* loved his first painting, or *García Márquez* his first short story.
