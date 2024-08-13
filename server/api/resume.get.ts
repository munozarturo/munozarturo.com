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
                dates: "Aug. 2022 -- May 2026",
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
                dates: "May 2024 -- Present",
                location: "Remote",
                responsibilities: [
                    "Maintain an Apache Airflow cloud data pipeline serving over 500,000 users per month",
                    "Developed a RAG (Retrieval-Augmented Generation) chatbot for premium users built on the company's knowledge base",
                    "Resolve diverse technical challenges across multiple projects, improving developer and user experience",
                ],
            },
            {
                company: "20 Minute Trader",
                title: "Software Engineering Intern",
                dates: "May 2022 -- May 2023",
                location: "Mexico City, MX",
                responsibilities: [
                    "Engineered a framework for the development and back-testing of trading algorithms",
                    "Refined high-frequency trading algorithms for varying risk tolerance levels leading to enhanced trade accuracy and profitability",
                    "Built and deployed a real-time trading system using Python3 and InteractiveBrokers WebSocket API",
                ],
            },
            {
                company: "CWRU University Technology Services",
                title: "Endpoint Support Specialist",
                dates: "May 2023 -- May 2024",
                location: "Cleveland, OH",
                responsibilities: [
                    "Utilized a ticketing system to resolve over 100 IT issues, serving as the first point of contact for faculty, staff, and students",
                    "Developed documentation for specific recurring issues, leading to a 13% decrease in ticket resolution time",
                    "Collaborated with vendors to resolve hardware issues and secure replacement parts",
                ],
            },
        ],
        skills: {
            programmingLanguages: [
                "Python (3.6+)",
                "TypeScript",
                "JavaScript (ES6+)",
                "SQL",
            ],
            frameworks: ["Vue", "NuxtJS 3+", "React", "NextJS 13+"],
            technologies: ["Airflow", "AWS (SDK, SES, S3, Lambda)", "Figma"],
            languages: [
                "English (Native)",
                "Spanish (Native)",
                "Russian (Fluent)",
            ],
        },
        projects: [
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
                    "Developed a context manager for handling HTTP requests with built-in logging and retry handling",
                    "Improved developer experience and efficiency in the company's data pipeline, potentially saving hundreds of hours",
                    "Implemented features to enhance request handling in large-scale web scraping operations",
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
                technologies: ["NuxtJS", "TypeScript", "PostgreSQL", "AWS SES"],
                dates: "Jun. 2024",
                responsibilities: [
                    "Implemented a complete authentication system from scratch using NuxtJS 3 and TypeScript",
                    "Developed features including REST HTTP API, email notifications, and password resets",
                    "Integrated PostgreSQL for data storage and AWS SES for email functionality",
                ],
            },
            {
                name: "Inkori LLC Online Retail",
                dates: "May 2023 -- Aug. 2023",
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
                dates: "Aug. 2023 -- Present",
                responsibilities: [
                    "Acting as a mentor in the Collegiate Connections Peer Mentoring Program, focusing on supporting first year underrepresented ELP, POSSE, and international students at CWRU",
                    "Conducting weekly one-on-one sessions to provide academic guidance in major-specific areas",
                    "Collaborating with a team of 141 members and officers to improve program effectiveness",
                ],
            },
        ],
    };

    return resume;
});
