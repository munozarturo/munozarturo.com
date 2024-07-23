<template>
    <div class="w-full h-16 flex flex-row shadow-2xl">
        <nav
            class="w-full h-full flex flex-row items-center justify-between py-4 px-16"
        >
            <div class="text-xl font-bold">
                <a href="/"><LiveMatrix class="p-4" /></a>
            </div>
            <div class="flex flex-row space-x-8">
                <ul class="flex flex-row space-x-2 overflow-visible">
                    <li><NavAnchor href="/">home</NavAnchor></li>
                    <li><NavAnchor href="/blog">blog</NavAnchor></li>
                    <li>
                        <NavAnchor href="/projects">projects</NavAnchor>
                    </li>
                    <li><NavAnchor href="/me">me</NavAnchor></li>
                </ul>
                <ul class="flex flex-row space-x-2 items-center mt-1">
                    <li>
                        <ThemeMenu />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
