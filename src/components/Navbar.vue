<template>
    <header :class="{opaque:changeColor}" class="header">
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
import {ref} from 'vue'
export default {
    components: {
        Logo,
        FirstSection,
        SecondSection
    },
    setup() {
       const changeColor = ref(false)
       window.addEventListener('scroll', ()=>{
           changeColor.value = window.scrollY > 20 ? true : false;
       })
       return{
           changeColor
       }
    },
}
</script>

<style scoped>
.header {
    @apply sticky top-0 w-full bg-transparent flex justify-between items-center z-50;
}
.header.opaque{
    @apply bg-[#141414] z-50 bg-opacity-75;
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