// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    content: {
        markdown: {
            tags: {
                a: "MdA",
                blockquote: "MdBlockquote",
                code: "MdCode",
                "code-block": "MdCodeBlock",
                em: "MdEm",
                h1: "MdH1",
                h2: "MdH2",
                h3: "MdH3",
                h4: "MdH4",
                h5: "MdH5",
                h6: "MdH6",
                hr: "MdHr",
                img: "MdImg",
                label: "MdLabel",
                li: "MdLi",
                ol: "MdOl",
                p: "MdP",
                strong: "MdStrong",
                table: "MdTable",
                tbody: "MdTbody",
                td: "MdTd",
                th: "MdTh",
                thead: "MdThead",
                tr: "MdTr",
                ul: "MdUl",
            },
        },
    },
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
        {
            path: "~/components/md",
            pathPrefix: false,
        },
    ],
    plugins: ["~/plugins/md-components.ts"],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
});
