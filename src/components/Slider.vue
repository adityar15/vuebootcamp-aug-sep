<template>

     <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper-container"
  >
    <swiper-slide class="slide" v-for="(item, index) in moviecollection" :key="index"><Card :movie="item" /></swiper-slide>
   
  </swiper>

</template>
<script>
  // Import Swiper Vue.js components
  import Card from '@/components/Card.vue' 
 import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';


  export default {
    components: {
      Card,
      Swiper,
      SwiperSlide,
    },
    props: {
        moviecollection: {
            type: Array
        }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  }
</script>

<style scoped>
.slide{
   width: 185px !important;
   margin-right: 5px !important;
   transition: all 0.2s ease-in-out;
}
.slide:hover{
     transform: scale(1.2);
     z-index: 9999999;
}
.swiper-container{
   padding: 20px !important;
} 
.swiper-container::-webkit-scrollbar{
    @apply hidden;
}

</style>