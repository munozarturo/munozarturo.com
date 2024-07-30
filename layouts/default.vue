<template>
    <div
        class="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 ease-in-out font-themed"
    >
        <Navbar />
        <main class="w-full h-full flex items-center justify-center">
            <slot />
        </main>
        <Toaster />
    </div>
</template>
