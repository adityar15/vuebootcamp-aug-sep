<template>
    <div>   
        <MainPageBigScreen/>
        <div class="other-content">
            <Popular />
            <Trending />
        </div>
    </div>
</template>
<script>
import MainPageBigScreen from '@/components/MainPageBigScreen.vue'
import Popular from '@/components/Popular.vue'
import Trending from '@/components/Trending.vue'
export default {
    components:{
    MainPageBigScreen,
    Popular,
    Trending
    },
    setup() {
        // 
    },
}
</script>
<style scoped>
.other-content{
    @apply mt-[100vh] ml-[7%] overflow-y-visible;
}
</style>