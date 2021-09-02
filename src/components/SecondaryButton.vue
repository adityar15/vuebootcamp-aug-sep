<template>
    <button class="primary" v-bind="$attrs">
        <slot />
    </button>
</template>

<style scoped>
.primary {
    @apply bg-gray-700 text-gray-300 px-7 py-2 bg-opacity-60;
}
</style>
