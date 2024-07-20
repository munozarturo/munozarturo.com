---
title: "wreqs"
subtitle: "wrapped requests in python."
date: "2024-07-27T13:31:00"
tags: ["python3"]
links: [
    {
        "icon": "python",
        "href": "https://pypi.org/project/wreqs/",
    },
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/wreqs",
    },
]
---

![wreqs-banner](/assets/wreqs/banner.png)

The summer of 2024 I interned at [The Block](https://www.theblock.co/), a company that most insiders would describe as &ldquo;the *Bloomberg* of Crypto,&rdquo; a description with which I would agree&mdash;it certainly was, at least at the time I worked there, the *Bloomberg* of Crypto.

During this intership I *mostly* worked on the company's data pipeline, a large collection of scripts that would periodically scrape all corners of the web for data that would then either be used by the research and editorial teams or given directly to our customers.

When I arrived the data pipeline was consolidated in two large repositories, all written in Python and mostly maintained by the research team. When I first cloned this repository onto my machine and looked at the code that these scripts were running I thought to myself &ldquo;this is the worst code I have ever seen.&rdquo; Now, that is not to say anything about the research team. Over the summer I got to work very closely with them and they were some of the most intelligent, capable, and talented individuals I have met in my life and, to be fair, it is a team whose primary skill was research&mdash;not coding.

I really can't complain about this becasue in it I saw an incredible opportunity: a way to make my mark at this company. I thought that by cleaning up the data pipeline and improving it in every way I could think of I would have a long lasting&mdash;and meaningful&mdash;impact on the way the company gathered data.

This began a long saga of commits and pull requests, some of which inspired the creation of `wreqs` (**w**rapped **req**uest**s**)&mdash;what I saw as a better way of handling requests. `wreqs` is a context manager that allows for this pattern:

```python
from wreqs import wreqs_session, wreq
from requests import Request, Timeout

with wreqs_session() as session:
    req1 = Request(...)
    with wreq(req1) as res1:
        ...  # do something with res1

    req2 = Request(...)
    with wreq(req2) as res2:
        ...  # do something with res1
```

All with built in logging, retry handling, and plenty of other features, which I honestly believe improved the developer experience for everyone working on the data pipeline and saved our team hundreds of hours in the long run.

Eventually, I internalized everything this library did to reduce the number of inconveniences my successor would have to deal with when I inevitably left the company to finish my degree. Nevertheless, I consider this to be one of my greater successes&mdash;at least as of the time of writing this.
