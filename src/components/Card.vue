<template>
    <div class="card">
        <img src="" alt="" class="image">
        <div>
            <div class="icons-container">
                <div class="slot-1">
                <IconButton></IconButton>
                <IconButton></IconButton>
                <IconButton></IconButton>
                <IconButton></IconButton>
                </div>
                <div class="slot-2">
                    <IconButton></IconButton>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

const IconButton = defineAsyncComponent(()=>import(/*webpackChunkName: "Iconbutton"*/'@/components/IconButton.vue'))

export default{
    components:{
        IconButton
    },
    setup() {
        // 
    },
}
</script>
<style scoped>
.icons-container{
    @apply flex justify-between mt-4;
}
.slot-1{
    @apply flex space-x-2 p-1;
}
.slot-2{
    @apply mr-4 p-1;
}
</style>