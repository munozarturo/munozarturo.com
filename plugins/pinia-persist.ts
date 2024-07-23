import { type Pinia } from "pinia";
import { defineNuxtPlugin } from "#app";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = nuxtApp.$pinia as Pinia;
    if (pinia) {
        pinia.use(piniaPluginPersistedstate);
    } else {
        console.warn(
            "Pinia instance not found. Make sure Pinia is properly installed and configured."
        );
    }
});
