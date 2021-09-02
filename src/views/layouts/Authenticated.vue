<template>
    <div class="main-wrapper">
     <Navbar />   
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components:{
        Navbar
    },
    setup() {
        // 
    },
}
</script>

<style scoped>
.main-wrapper{
    @apply bg-[#141414];
}
</style>