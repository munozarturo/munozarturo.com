// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    content: {
        highlight: {
            theme: {
                default: "github-light-default",
                "theme-paper": "solarized-light",
                "theme-dark": "monokai",
                "theme-ocean": "solarized-dark",
                "theme-desert": "rose-pine-moon",
                "theme-forest": "slack-dark",
            },
            langs: [
                "python",
                "typescript",
                "javascript",
                "json",
                "rust",
                "bash",
                "css",
                "vue",
            ],
        },
    },

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    classInject: {
        fallback: ["theme-dark", "font-sans", "size-md"],
    },

    css: ["~/assets/css/scrollbar.css", "~/assets/css/themes.css"],
    plugins: [],

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/content",
        "@nuxt/image",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        "nuxt-class-inject",
    ],

    compatibilityDate: "2024-07-29",
});
