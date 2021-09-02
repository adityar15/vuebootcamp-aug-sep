<template>
    <header class="header">
        <div class="logo">
        <Logo />
        </div>

        <div class="menu">
        <FirstSection />
        <SecondSection />
        </div>
        <!-- ListItems -->
        <!-- Search Icon -->
        <!-- Other Options -->
    </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import FirstSection from './FirstSection.vue'
import SecondSection from './SecondSection.vue'
export default {
    components: {
        Logo,
        FirstSection,
        SecondSection
    },
    setup() {
        // 
    },
}
</script>

<style scoped>
.header {
    @apply sticky top-0 w-full bg-transparent flex justify-between items-center z-50;
}
.header > div {
    @apply p-2;
}
.logo {
    @apply w-[10%];
}
.menu {
    @apply w-[90%] flex justify-between items-center;
}
</style>