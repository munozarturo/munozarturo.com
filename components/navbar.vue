<template>
    <div class="w-full h-16 flex flex-row shadow-2xl">
        <nav
            class="w-full h-full flex flex-row items-center justify-between py-4 px-16"
        >
            <div class="text-xl font-bold">
                <a href="/"><LiveMatrix class="p-4" /></a>
            </div>
            <ul class="flex flex-row space-x-2 overflow-visible">
                <li><NavAnchor href="/">home</NavAnchor></li>
                <li><NavAnchor href="/blog">blog</NavAnchor></li>
                <li>
                    <NavAnchor href="/projects">projects</NavAnchor>
                </li>
                <li><NavAnchor href="/me">me</NavAnchor></li>
            </ul>
        </nav>
    </div>
</template>
