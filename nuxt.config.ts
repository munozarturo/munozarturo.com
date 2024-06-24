// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ["md-a"].includes(tag),
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
});
