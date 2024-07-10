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
        date: new Date("2024-07-10T13:59:00"),
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
            languages: [
                "English (Native)",
                "Spanish (Native)",
                "Russian (Fluent)",
            ],
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

    return resume;
});
