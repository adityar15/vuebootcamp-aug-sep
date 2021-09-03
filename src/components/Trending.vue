<template>
    <div>
        <SliderTitle text="Trending" />
        <Slider :moviecollection="trendingMovieComputed.results" />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import SliderTitle from '@/components/SliderTitle.vue'
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

export default {
    components: {
        Slider,
        SliderTitle
    },
    setup() {
        const store = useStore()
        const trendingMovieComputed = computed(()=>store.getters['movie/getTrendingMovies'])
        const flag = ref(false)
        window.addEventListener('scroll', ()=>{
           console.log("Scroll", window.scrollY)
           if(window.scrollY >= 70 && !flag.value)
           {
               store.dispatch('movie/loadTrendingMovie');
               console.log('Computed Value', trendingMovieComputed)
               flag.value =true
           }
       })


       return {
           trendingMovieComputed
       }
    },
}
</script>