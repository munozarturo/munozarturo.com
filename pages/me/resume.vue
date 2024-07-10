<template>
    <div
        class="w-full px-4 md:w-2/3 md:px-0 lg:w-1/2 flex flex-col space-y-4 pt-8 pb-12"
    >
        <div class="w-full items-center justify-end flex flex-row space-x-2">
            <button @click=""><Icon name="share" /></button>
            <button @click=""><Icon name="download" /></button>
        </div>

        <div class="flex flex-col space-y-2">
            <h1 class="text-4xl text-center font-bold">{{ resume.title }}</h1>
            <div
                class="flex flex-row flex-wrap items-center justify-center space-x-4"
            >
                <a
                    v-for="link in resume.links"
                    :href="link.href"
                    target="_blank"
                    class="flex flex-row items-center space-x-1"
                >
                    <Icon :name="link.icon" class="w-4 h-4" />
                    <p>{{ link.text }}</p>
                </a>
            </div>

            <section>
                <h2 class="text-xl font-bold">Education</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="edu in resume.education">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ edu.institution }}</h3>
                        <p class="font-bold">{{ edu.dates }}</p></span
                    >
                    <span class="flex flex-row justify-between">
                        <p class="italic">{{ edu.degree }}</p>
                        <p>{{ edu.location }}</p>
                    </span>
                    <ul class="list-disc pl-8">
                        <li>
                            <span class="flex flex-row">
                                <p>
                                    <span class="font-bold">
                                        Relevant Coursework:
                                    </span>
                                    &nbsp;{{ edu.courses.join(", ") }}
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Experience</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="exp in resume.experience">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ exp.company }}</h3>
                        <p class="font-bold">{{ exp.dates }}</p></span
                    >
                    <span class="flex flex-row justify-between"
                        ><p class="italic">{{ exp.title }}</p>
                        <p>{{ exp.location }}</p></span
                    >
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in exp.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Skills</h2>
                <hr class="border-t border-tertiary" />
                <ul class="pl-8">
                    <li>
                        <p>
                            <span class="font-bold">Programming Languages:</span
                            >&nbsp;{{
                                resume.skills.programmingLanguages.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Frameworks:</span>&nbsp;{{
                                resume.skills.frameworks.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Technologies:</span>&nbsp;{{
                                resume.skills.technologies.join(", ")
                            }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="font-bold">Languages:</span>&nbsp;{{
                                resume.skills.languages.join(", ")
                            }}
                        </p>
                    </li>
                </ul>
            </section>

            <section>
                <div class="w-fit">
                    <a href="/projects">
                        <span
                            class="flex flex-row items-center justify-center space-x-1"
                            ><h2 class="text-xl font-bold">Projects</h2>
                            <Icon name="export" class="w-4 h-4"
                        /></span>
                    </a>
                </div>
                <hr class="border-t border-tertiary" />
                <div v-for="project in resume.projects">
                    <div class="flex flex-row justify-between">
                        <span class="flex flex-row items-center space-x-1"
                            ><h3 class="font-bold">{{ project.name }}</h3>
                            <a
                                v-for="link in project.links"
                                :href="link.href"
                                target="_blank"
                                class="flex flex-row items-center justify-center"
                            >
                                <Icon :name="link.icon" class="w-4 h-4" />
                            </a>
                            <p v-if="project.technologies.length > 0">
                                &nbsp;|
                            </p>
                            <p class="italic">
                                {{ project.technologies.join(", ") }}
                            </p>
                        </span>
                        <p class="font-bold">{{ project.dates }}</p>
                    </div>
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in project.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold">Community</h2>
                <hr class="border-t border-tertiary" />
                <div v-for="com in resume.community">
                    <span class="flex flex-row justify-between">
                        <h3 class="font-bold">{{ com.title }}</h3>
                        <p class="font-bold">{{ com.dates }}</p>
                    </span>
                    <ul class="list-disc pl-8">
                        <li v-for="responsibility in com.responsibilities">
                            {{ responsibility }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
const resume = await $fetch("/api/resume", { method: "GET" });
</script>
