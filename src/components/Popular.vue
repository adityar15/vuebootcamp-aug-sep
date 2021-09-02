<template>
    <div>
        <Slider :moviecollection="popularMovieComputed" />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

export default {
    components: {
        Slider
    },
    setup() {
        const store = useStore()
        const popularMovieComputed = computed(()=>store.getters['movie/getPopularMovies'])
        const flag = ref(false)
        window.addEventListener('scroll', ()=>{
           console.log("Scroll", window.scrollY)
           if(window.scrollY >= 70 && !flag.value)
           {
               store.dispatch('movie/loadPopularMovie');
               console.log('Computed Value', popularMovieComputed.value)
               flag.value =true
           }
       })


       return {
           popularMovieComputed
       }
    },
}
</script>