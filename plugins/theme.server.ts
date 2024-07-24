import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const themeStore = useThemeStore();

    // Add theme class to html element during SSR
    nuxtApp.hooks.hook("app:rendered", (ctx) => {
        if (ctx.ssrContext) {
            ctx.ssrContext.renderMeta = () => {
                return {
                    htmlAttrs: `class="${themeStore.theme}-theme"`,
                };
            };
        }
    });

    // Expose composable
    return {
        provide: {
            theme: themeStore,
        },
    };
});
