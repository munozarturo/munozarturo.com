/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                foreground: "var(--foreground)",
                background: "var(--background)",
                highlight: "var(--highlight)",
                "foreground-secondary": "var(--foreground-secondary)",
                "background-secondary": "var(--background-secondary)",
                "highlight-secondary": "var(--highlight-secondary)",
            },
            fontFamily: {
                themed: "var(--font)",
            },
        },
    },
    plugins: [],
};
