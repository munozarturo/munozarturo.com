<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <main class="w-full h-full flex items-center justify-center">
            <slot />
        </main>
        <Toaster />
    </div>
</template>
