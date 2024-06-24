<template>
    <div>
        {{ route.fullPath }}
    </div>
</template>

<script setup>
const route = useRoute();
</script>
