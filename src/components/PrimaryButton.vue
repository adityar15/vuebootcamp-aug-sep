<template>
    <button class="primary" v-bind="$attrs">
        <slot />
    </button>
</template>

<style scoped>
.primary {
    @apply bg-gray-50 text-gray-900 px-7 py-2;
}
</style>
