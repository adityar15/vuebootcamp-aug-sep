<template>
    <button class="icon-button" v-bind="$attrs">
        <slot />
    </button>
</template>

<style scoped>
.icon-button{
    @apply w-[20px] h-[20px] rounded-full border border-gray-300 text-gray-300;
}
</style>