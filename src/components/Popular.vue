<template>
    <div>
        <SliderTitle text="Popular" />
        <Slider :moviecollection="popularMovieComputed.results" />
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
        const popularMovieComputed = computed(()=>store.getters['movie/getPopularMovies'])
        const flag = ref(false)
        window.addEventListener('scroll', ()=>{
           console.log("Scroll", window.scrollY)
           if(window.scrollY >= 70 && !flag.value)
           {
               store.dispatch('movie/loadPopularMovie');
               console.log('Computed Value', popularMovieComputed)
               flag.value =true
           }
       })


       return {
           popularMovieComputed
       }
    },
}
</script>