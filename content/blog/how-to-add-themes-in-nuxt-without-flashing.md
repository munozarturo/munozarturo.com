---
title: "how to add themes in Nuxt3 without flashing"
subtitle: "using nuxt-class-inject for dynamic styling."
date: "2024-07-29T14:33:00"
tags: ["nuxt3", "nuxt-class-inject", "tailwnd-css"]
links: [
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/nuxt-class-inject-example"
    }
]
---

All the source code is available on GitHub for both the [pure CSS example](https://github.com/munozarturo/nuxt-class-inject-example) and the [Tailwind CSS example](https://github.com/munozarturo/nuxt-class-inject-tailwind-example).

![demo](/assets/nuxt-class-inject/demo.gif)

First install `nuxt-class-inject` using a package manager

```bash
npm install --save-dev nuxt-class-inject 
```

Add it to the project&lsquo;s modules in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    "nuxt-class-inject", 
  ],
});
```

Define some color themes as CSS classes. I&lsquo;m going to define them directly in `vue.app` but you can also define these in a global CSS file&mdash;just make sure to register it in Nuxt config.

```vue
<style lang="css">
.theme-light {
    background-color: #1e1e1e;
    color: #fefefe;
}

.theme-dark {
    background-color: #fefefe;
    color: #1e1e1e;
}
</style>
```

Add some logic to allow for theme switching using the `nuxt-class-inject` API through the provided `$classInject`. Note, `$classInject` exposes a list of all the injected classes so we need to fully overwrite it for `vue`&lsquo;s reactivity system to update our DOM.

```vue
<script setup lang="ts">
const { $classInject } = useNuxtApp();

const themes: string[] = ["theme-light", "theme-dark"];
const setTheme = (theme: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => {
      return !cls.startsWith("theme-")
    });
    classList.push(theme);

    $classInject.classList.value = classList; // overwrite
};
</script>
```

Add some buttons to switch between themes.

```vue
<template>
    <div>
        <button
            v-for="theme in themes"
            @click="setTheme(theme)"
        >
            {{ theme }}
        </button>
    </div>
</template>
```

That&lsquo;s it.

It is also possible to use this module with Tailwind CSS if that&lsquo;s more your style, all you have to do is set variables in your theme classes instead of properties

```vue
<style lang="css">
.theme-light {
    --foreground: #1e1e1e;
    --background: #fefefe;
}

.theme-dark {
    --foreground: #fefefe;
    --background: #1e1e1e;
}
</style>
```

Register them as custom Tailwind classes in `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                foreground: "var(--foreground)",
                background: "var(--background)",
            },
        },
    },
};
```

And use them as properties

```vue
<template>
    <div class="w-full min-h-screen bg-background text-foreground">
        <button
            v-for="theme in themes"
            @click="setTheme(theme)"
        >
            {{ theme }}
        </button>
    </div>
</template>
```

The CSS classes can set any variables you&lsquo;d like, so you can also use this module to customize everything with a CSS property. Just include multiple classes in the injected class list

```typescript
const fontTypes: string[] = ["serif", "sans", "mono"];
const setFontType = (font: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => 
        !cls.startsWith("font-")
    ).push(`font-${font}`);

    $classInject.classList.value = classList;
};

const themes: string[] = ["light", "dark"];
const setTheme = (theme: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => 
        !cls.startsWith("theme-")
    ).push(`theme-${theme}`);

    $classInject.classList.value = classList;
};
```
