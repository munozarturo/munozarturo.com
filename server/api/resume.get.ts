export default defineEventHandler(async (event) => {
    type ResumeLink = {
        icon: string;
        href?: string;
        text: string;
    };

    type EducationItem = {
        institution: string;
        dates: string;
        degree: string;
        location: string;
        courses: string[];
    };

    type ExperienceItem = {
        company: string;
        title: string;
        dates: string;
        location: string;
        responsibilities: string[];
    };

    type SkillSet = {
        programmingLanguages: string[];
        frameworks: string[];
        technologies: string[];
        languages: string[];
    };

    type ProjectLink = {
        icon: string;
        href: string;
    };

    type ProjectItem = {
        name: string;
        links?: ProjectLink[];
        technologies: string[];
        dates: string;
        responsibilities: string[];
    };

    type CommunityItem = {
        title: string;
        dates: string;
        responsibilities: string[];
    };

    type Resume = {
        date: Date;
        title: string;
        links: ResumeLink[];
        education: EducationItem[];
        experience: ExperienceItem[];
        skills: SkillSet;
        projects: ProjectItem[];
        community: CommunityItem[];
    };

    const resume: Resume = {
        date: new Date(),
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
                dates: "Aug. 2022 – May 2026",
                degree: "B.Sc. Computer Science (3.71 GPA); Minors: Mathematics, Business Management",
                location: "Cleveland, OH",
                courses: [
                    "Algorithms",
                    "Data Structures",
                    "Full Stack Web Dev",
                    "Software Engineering",
                    "Databases",
                    "Intro to AI",
                    "Computer Security",
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
                dates: "May 2024 – Aug 2024",
                location: "Remote",
                responsibilities: [
                    "Maintained an Apache Airflow cloud data pipeline serving over 500,000 monthly users",
                    "Developed a RAG (Retrieval-Augmented Generation) chatbot for premium users built on the company's knowledge base",
                ],
            },
            {
                company: "20 Minute Trader",
                title: "Software Engineering Intern",
                dates: "May 2022 – May 2023",
                location: "Mexico City, MX",
                responsibilities: [
                    "Engineered a framework for developing, back-testing, and deploying trading algorithms using Python3",
                    "Refined high-frequency trading algorithms for varying risk tolerance levels",
                ],
            },
            {
                company: "CWRU University Technology Services",
                title: "Endpoint Support Specialist",
                dates: "May 2023 – May 2024",
                location: "Cleveland, OH",
                responsibilities: [
                    "Utilized a ticketing system to resolve over 100 IT issues, serving as the first point of contact for tech support",
                    "Developed documentation for recurring issues leading to a 13% decrease in resolution time",
                ],
            },
        ],
        skills: {
            programmingLanguages: [
                "Python",
                "TypeScript",
                "Java",
                "JavaScript",
                "SQL",
            ],
            frameworks: ["Vue", "NuxtJS", "React", "NextJS"],
            technologies: ["Airflow", "AWS (SDK, SES, S3, Lambda)", "Figma"],
            languages: [
                "English (Native)",
                "Spanish (Native)",
                "Russian (Fluent)",
            ],
        },
        projects: [
            {
                name: "nuxt-class-inject",
                links: [
                    {
                        icon: "globe",
                        href: "https://nuxt-class-inject.munozarturo.com/",
                    },
                    {
                        icon: "github",
                        href: "https://github.com/munozarturo/nuxt-class-inject",
                    },
                ],
                technologies: ["TypeScript", "JavaScript", "Nitro", "NuxtJS"],
                dates: "Jul. 2024",
                responsibilities: [
                    "Dynamic CSS class injection that beats client rendering.",
                ],
            },
            {
                name: "wreqs",
                links: [
                    {
                        icon: "globe",
                        href: "https://pypi.org/project/wreqs/",
                    },
                    {
                        icon: "github",
                        href: "https://github.com/munozarturo/wreqs",
                    },
                ],
                technologies: ["Python"],
                dates: "Jul. 2024",
                responsibilities: [
                    "A Python context manager for HTTP request handling in large scale web-scraping operations",
                ],
            },
            {
                name: "httpsauth",
                links: [
                    {
                        icon: "globe",
                        href: "https://httpsauth.munozarturo.com/",
                    },
                    {
                        icon: "github",
                        href: "https://github.com/munozarturo/httpsauth",
                    },
                ],
                technologies: [
                    "NuxtJS",
                    "TypeScript",
                    "PostgreSQL",
                    "AWS SES",
                    "MongoDB",
                ],
                dates: "Jun. 2024",
                responsibilities: ["Authentication over HTTP from scratch"],
            },
            {
                name: "mockupforge",
                links: [
                    {
                        icon: "github",
                        href: "https://github.com/munozarturo/mockupforge",
                    },
                ],
                technologies: ["Python", "Docker"],
                dates: "May. 2024",
                responsibilities: [
                    "A containerized mockup generator running Flask and GIMP in a virtual machine",
                ],
            },
            {
                name: "whizfile.com",
                links: [
                    {
                        icon: "globe",
                        href: "https://www.whizfile.com/send",
                    },
                    {
                        icon: "github",
                        href: "https://github.com/munozarturo/whizfile.com",
                    },
                ],
                technologies: ["AWS S3", "React", "NextJS"],
                dates: "Nov. 2023 - Dec. 2023",
                responsibilities: [
                    "A web application for sending and receiving file transfers.",
                ],
            },
            {
                name: "Inkori LLC Online Retail",
                dates: "May 2023 – Aug. 2023",
                technologies: [],
                responsibilities: [
                    "Generated $30,000+ in sales with a 98.7% customer satisfaction rating from over 1000 sales",
                ],
            },
        ],
        community: [
            {
                title: "Collegiate Connections Mentor",
                dates: "Aug. 2023 – Present",
                responsibilities: [
                    "Acting as a mentor in the Collegiate Connections Peer Mentoring Program, focusing on supporting first year underrepresented ELP, POSSE, and international students at CWRU",
                ],
            },
        ],
    };

    return resume;
});
