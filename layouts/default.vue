<template>
    <div class="min-h-screen flex flex-col bg-secondary text-primary">
        <Navbar />
        <main class="w-full h-full flex items-center justify-center">
            <slot />
        </main>
    </div>
</template>
