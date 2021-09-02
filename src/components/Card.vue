<template>
    <div class="card" v-if="movie">
       
        <img :src="`${imageLink}/w300/${movie.backdrop_path}`" alt="" class="image">
    
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
import {defineAsyncComponent, ref} from 'vue'

const IconButton = defineAsyncComponent(()=>import(/*webpackChunkName: "Iconbutton"*/'@/components/IconButton.vue'))

export default{
    components:{
        IconButton
    },
    props: {
        movie: {
            type: Object
        }
    },
    setup() {
         const imageLink = ref(process.env.VUE_APP_POSTER_IMAGE)

         return{
             imageLink
         }
    },
}
</script>
<style scoped>

/* style for card */

.card{
    @apply w-[185px] shadow-lg transition-all duration-500 ease-in-out;
}



.image{
    @apply w-[185px];
}

/* style from yesterday */


.icons-container{
    @apply flex justify-between bg-[#141414];
}
.slot-1{
    @apply flex space-x-2 p-1;
}
.slot-2{
    @apply mr-4 p-1;
}
</style>