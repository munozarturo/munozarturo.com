<template>
    <div class="min-h-screen flex flex-col bg-background text-primary">
        <Navbar />
        <main class="w-full h-full flex items-center justify-center pt-12">
            <slot />
        </main>
    </div>
</template>
