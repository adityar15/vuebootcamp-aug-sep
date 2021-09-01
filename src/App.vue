<template>
  <component :is="layout"></component>
  <!-- <div></div> -->
</template>


<script>
import {watch, ref} from 'vue'
import {useRoute} from 'vue-router'
import Authenticated from '@/views/layouts/Authenticated.vue'
import Default from '@/views/layouts/Authenticated.vue'
export default {
  components:{
    Authenticated, 
    Default
  },
  setup() {
    const layout = ref('')
    const route = useRoute()

    watch(route, (to)=>{

      if(to.meta.layout)
      {
        layout.value = to.meta.layout
        console.log("Layout", layout.value)
      }
      else{
        layout.value = "Default"
      }
    })

    return {
      layout
    }
    
  },
}
</script>

