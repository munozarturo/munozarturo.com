<template>
    <div :class="cn('grid grid-cols-7 gap-0.5 w-32', props.class)">
        <div
            v-for="(square, index) in squares"
            :key="index"
            class="aspect-square transition-colors duration-1000 ease-in-out"
            :class="{ 'bg-foreground': square }"
        ></div>
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        required: false,
        default: "",
    },
});

const iters = ref(0);

const squares = ref(
    Array(21)
        .fill()
        .map(() => false)
);

const changeColors = () => {
    if (iters.value == 3) {
        iters.value = 0;
        return (squares.value = [
            1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
        ]
            .flat()
            .map((f) => f == 1 && true));
    } else {
        squares.value = squares.value.map(() => Math.random() < 0.6);
        iters.value += 1;
    }
};

let intervalId;

onMounted(() => {
    changeColors();
    intervalId = setInterval(changeColors, 4000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>
