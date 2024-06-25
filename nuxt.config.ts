// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    content: {
        highlight: {
            theme: "monokai",
            langs: ["python", "typescript", "javascript", "rust", "bash"],
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/content",
        "@nuxt/image",
        "@pinia/nuxt",
    ],
});
