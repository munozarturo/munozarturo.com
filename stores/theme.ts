import { defineStore } from "pinia";

const themes: string[] = [
    "light",
    "paper",
    "dark",
    "desert",
    "ocean",
    "forest",
];

const useThemeStore = defineStore("theme", {
    state: () => ({
        theme: "light" as string,
    }),
    getters: {
        availableThemes() {
            return themes;
        },
    },
    actions: {
        setTheme(theme: string) {
            this.theme = theme;
        },
    },
    persist: {
        key: "theme-store",
    },
});

export { useThemeStore };
