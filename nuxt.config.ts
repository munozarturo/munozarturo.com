// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    components: {
        dirs: ["~/components", { path: "~/components/global", global: true }],
    },
    modules: ["@nuxtjs/tailwindcss"],
});
