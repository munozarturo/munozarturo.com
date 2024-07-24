import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const themeStore = useThemeStore();

    // Function to apply theme
    const applyTheme = (theme: string) => {
        // Remove all theme classes
        document.documentElement.classList.remove(
            ...themeStore.availableThemes.map((t: string) => `${t}-theme`)
        );
        // Add the new theme class
        document.documentElement.classList.add(`${theme}-theme`);
    };

    // Apply theme on initial load
    if (import.meta.client) {
        applyTheme(themeStore.theme);
    }

    // Watch for theme changes
    watch(
        () => themeStore.theme,
        (newTheme) => {
            applyTheme(newTheme);
        }
    );

    // Expose composable
    return {
        provide: {
            theme: themeStore,
        },
    };
});
