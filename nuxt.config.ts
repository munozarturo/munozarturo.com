// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    content: {
        markdown: {
            tags: {
                a: "md-a",
                blockquote: "md-blockquote",
                code: "md-code",
                "code-block": "md-code-block",
                em: "md-em",
                h1: "md-h1",
                h2: "md-h2",
                h3: "md-h3",
                h4: "md-h4",
                h5: "md-h5",
                h6: "md-h6",
                hr: "md-hr",
                img: "md-img",
                label: "md-label",
                li: "md-li",
                ol: "md-ol",
                p: "md-p",
                strong: "md-strong",
                table: "md-table",
                tbody: "md-tbody",
                td: "md-td",
                th: "md-th",
                thead: "md-thead",
                tr: "md-tr",
                ul: "md-ul",
            },
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("md-"),
        },
    },
    components: {
        global: true,
        dirs: ["~/components", "~/components/md"],
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
});
