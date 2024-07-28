// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    content: {
        highlight: {
            theme: "monokai",
            langs: [
                "python",
                "typescript",
                "javascript",
                "json",
                "rust",
                "bash",
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
        fallback: ["theme-dark", "font-sans"],
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
});
