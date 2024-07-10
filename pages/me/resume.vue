<template>
    <div
        class="w-full px-4 md:w-2/3 md:px-0 lg:w-1/2 flex flex-col space-y-4 pt-8 pb-12"
    >
        <div class="w-full items-center justify-end flex flex-row space-x-2">
            <button @click=""><Icon name="share" /></button>
            <button @click=""><Icon name="download" /></button>
        </div>
        <div class="flex flex-col space-y-2">
            <h1 class="text-4xl text-center font-bold">{{ resume.title }}</h1>
            <div
                class="flex flex-row flex-wrap items-center justify-center space-x-4"
            >
                <a
                    v-for="link in resume.links"
                    :href="link.href"
                    target="_blank"
                    class="flex flex-row items-center space-x-1"
                >
                    <Icon :name="link.icon" class="w-4 h-4" />
                    <p>{{ link.text }}</p>
                </a>
            </div>

            <section>
                <h2 class="text-xl font-bold">Education</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="edu in resume.education">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ edu.institution }}</h3>
                        <p class="font-bold">{{ edu.dates }}</p></span
                    >
                    <span class="flex flex-row justify-between">
                        <p class="italic">{{ edu.degree }}</p>
                        <p>{{ edu.location }}</p>
                    </span>
                    <ul class="list-disc pl-8">
                        <li>
                            <span class="flex flex-row">
                                <p>
                                    <span class="font-bold">
                                        Relevant Coursework:
                                    </span>
                                    &nbsp;{{ edu.courses.join(", ") }}
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Experience</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="exp in resume.experience">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ exp.company }}</h3>
                        <p class="font-bold">{{ exp.dates }}</p></span
                    >
                    <span class="flex flex-row justify-between"
                        ><p class="italic">{{ exp.title }}</p>
                        <p>{{ exp.location }}</p></span
                    >
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in exp.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Skills</h2>
                <hr class="border-t border-tertiary" />
                <ul class="pl-8">
                    <li>
                        <p>
                            <span class="font-bold">Programming Languages:</span
                            >&nbsp;{{
                                resume.skills.programmingLanguages.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Frameworks:</span>&nbsp;{{
                                resume.skills.frameworks.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Technologies:</span>&nbsp;{{
                                resume.skills.technologies.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Languages:</span>&nbsp;{{
                                resume.skills.languages.join(", ")
                            }}
                        </p>
                    </li>
                </ul>
            </section>

            <section>
                <div class="w-fit">
                    <a href="/projects">
                        <span
                            class="flex flex-row items-center justify-center space-x-1"
                            ><h2 class="text-xl font-bold">Projects</h2>
                            <Icon name="export" class="w-4 h-4"
                        /></span>
                    </a>
                </div>
                <hr class="border-t border-tertiary" />
                <div v-for="project in resume.projects">
                    <div class="flex flex-row justify-between">
                        <span class="flex flex-row items-center space-x-1"
                            ><h3 class="font-bold">{{ project.name }}</h3>
                            <a
                                v-for="link in project.links"
                                :href="link.href"
                                target="_blank"
                                class="flex flex-row items-center justify-center"
                            >
                                <Icon :name="link.icon" class="w-4 h-4" />
                            </a>
                            <p v-if="project.technologies.length > 0">
                                &nbsp;|
                            </p>
                            <p class="italic">
                                {{ project.technologies.join(", ") }}
                            </p>
                        </span>
                        <p class="font-bold">{{ project.dates }}</p>
                    </div>
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in project.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Community</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="com in resume.community">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ com.title }}</h3>
                        <p class="font-bold">{{ com.dates }}</p>
                    </span>
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in com.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const resume = {
    title: "Arturo Muñoz",
    links: [
        {
            icon: "phone",
            href: "tel:+12165538258",
            text: "(216)-553-8258",
        },
        {
            icon: "envelope",
            href: "mailto:arm343@case.edu",
            text: "arm343@case.edu",
        },
        {
            icon: "linkedin",
            href: "https://linkedin.com/in/arturoomunoz/",
            text: "linkedin.com/in/arturoomunoz",
        },
        {
            icon: "github",
            href: "https://github.com/munozarturo",
            text: "github.com/munozarturo",
        },
        {
            icon: "user",
            text: "he/him/his",
        },
        {
            icon: "location-dot",
            text: "Cleveland, OH",
        },
        {
            icon: "globe",
            href: "https://munozarturo.com",
            text: "munozarturo.com",
        },
    ],
    education: [
        {
            institution: "Case Western Reserve University (CWRU)",
            dates: "Aug. 2022 — May 2026",
            degree: "B.Sc. Computer Science (3.76 GPA); Minors: Mathematics, Business Management",
            location: "Cleveland, OH",
            courses: [
                "Algorithms",
                "Data Structures",
                "Full Stack Web Development",
                "Software Engineering",
                "Databases",
                "Linear Algebra",
                "Probability",
                "Discrete Math",
                "Professional Communcation for Engineers",
            ],
        },
    ],
    experience: [
        {
            company: "The Block",
            title: "Data Engineering Intern",
            dates: "May 2024 — Present",
            location: "Remote",
            responsibilities: [
                "Maintain a robust cloud data pipeline that processes data daily, ensuring seamless data flow and building data collections that serve over 500,000 users per month",
                "Developed a RAG (Retrieval-Augmented Generation) chatbot for premium users, built on the entire company's knowledge base",
            ],
        },
        {
            company: "20 Minute Trader",
            title: "Software Engineering Intern",
            dates: "May 2022 — May 2023",
            location: "Mexico City, MX",
            responsibilities: [
                "Engineered a robust Python3 framework for the development and back-testing of trading algorithms, streamlining the R&D process",
                "Refined 3 high-frequency trading algorithms in Python3, tailoring them for varying risk tolerance levels and underlying trading strategies, which led to enhanced trade accuracy and profitability",
                "Built and deployed a live trading system using Python3 and InteractiveBrokers WebSocket API, enabling real-time algorithmic trading",
            ],
        },
        {
            company: "CWRU University Technology Services",
            title: "Endpoint Support Specialist",
            dates: "May 2023 — Present",
            location: "Cleveland, OH",
            responsibilities: [
                "Utilize a ticketing system (TeamDynamix) to resolve over 100 IT issues, serving as the first point of contact for faculty, staff, and students",
                "Develop documentation for specific recurring issues, leading to a 13% decrease in ticket resolution time",
                "Collaborate with vendors to resolve hardware issues and secure replacement parts",
            ],
        },
    ],
    skills: {
        programmingLanguages: [
            "Python (3.6+)",
            "TypeScript",
            "JavaScript (ES6+)",
            "Java",
            "SQL",
        ],
        frameworks: ["React", "Next.js", "Django"],
        technologies: [
            "PostgreSQL",
            "MongoDB",
            "AWS (SDK, S3, Lambda)",
            "Figma",
        ],
        languages: ["English (Native)", "Spanish (Native)", "Russian (Fluent)"],
    },
    projects: [
        {
            name: "whizfile.com",
            links: [
                {
                    icon: "globe",
                    href: "https://whizfile.com",
                },
                {
                    icon: "github",
                    href: "https://github.com/munozarturo/whizfile.com",
                },
            ],
            technologies: ["Next.js", "MongoDB", "AWS (S3, SDK)"],
            dates: "Oct. 2023 — Jan. 2024",
            responsibilities: [
                "Designed a file transfer service architecture to optimize for speed, security, and customizability",
                "Built and designed the front-end using Figma, Next.js, TypeScript, and TailwindCSS",
                "Engineered a RESTful back-end using Next.js routing, MongoDB, and AWS S3",
            ],
        },
        {
            name: "vval.py",
            links: [
                {
                    icon: "globe",
                    href: "https://pypi.org/project/vval/2.1.0/",
                },
                {
                    icon: "github",
                    href: "https://github.com/munozarturo/vval",
                },
            ],
            technologies: ["Python"],
            dates: "Oct. 2023",
            responsibilities: [
                "Developed a Python module for input validation, focusing on simplicity",
                "Implemented a variety of functions including basic type validation, iterable validation, option validation, and filter validation",
                "Designed to handle multiple data types and combinations, ensuring flexibility and comprehensive validation capabilities",
            ],
        },
        {
            name: "Inkori LLC Online Retail",
            dates: "May 2023 — Aug. 2023",
            technologies: [],
            responsibilities: [
                "Managed all aspects of the business, including product sourcing, inventory management, and customer service",
                "Generated $30,000+ in sales (Q3 2023)",
                "Achieved a 98.7% customer satisfaction rating based on feedback from over 1000 sales transactions",
            ],
        },
    ],
    community: [
        {
            title: "Collegiate Connections Mentor",
            dates: "Aug. 2023 — Present",
            responsibilities: [
                "Acting as a mentor in the Collegiate Connections Peer Mentoring Program, focusing on supporting first year underrepresented ELP, POSSE, and international students during their fall semester at CWRU",
                "Conducting weekly one-on-one sessions to provide academic guidance in major-specific areas",
                "Collaborating with a team of 141 members and officers to improve program effectiveness",
            ],
        },
    ],
};
</script>
