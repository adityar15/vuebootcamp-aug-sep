<template>
    <div>   
        <MainPageBigScreen/>
        <div class="other-content">
            <Popular />
        </div>
    </div>
</template>
<script>
import MainPageBigScreen from '@/components/MainPageBigScreen.vue'
import Popular from '@/components/Popular.vue'
export default {
    components:{
    MainPageBigScreen,
    Popular
    },
    setup() {
        // 
    },
}
</script>
<style scoped>
.other-content{
    @apply mt-[100vh]
}
</style>