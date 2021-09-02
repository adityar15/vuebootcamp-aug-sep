<template>
  <div class="mainpagescreen" :style="`background-image:${imageLink}/w300/${lmovie.backdrop_path}`">
    <div class="mainpage">
      <div class="content">
        <h2 class="title">
          {{ lmovie.title }}
        </h2>
        <div class="button-group">
          <ButtonPrimary>Play</ButtonPrimary>
          <ButtonSecondary>More Info</ButtonSecondary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed, watch, ref, defineAsyncComponent } from "vue";

const ButtonPrimary = defineAsyncComponent(()=>import(/*webpackChunkName: "buttonprimary"*/ '@/components/PrimaryButton.vue'))
const ButtonSecondary = defineAsyncComponent(()=>import(/*webpackChunkName: "buttonsecondary"*/ '@/components/SecondaryButton.vue'))

export default {
components:{
    ButtonPrimary,
    ButtonSecondary
},
  setup() {
    const store = useStore(),
      lmovie = ref([]);

    onMounted(() => {
      store.dispatch("movie/loadLatestMovie");
    });

    const latestMovie = computed(() => store.getters["movie/getLatestMovie"]);

    watch(latestMovie, (newValue) => {
      lmovie.value = newValue;
    });
    return {
      lmovie,
    };
  },
};
</script>

<style scoped>
.mainpagescreen {
  @apply w-screen h-screen p-0 m-0 bg-black absolute top-0 z-10 text-white flex;
}
.mainpage {
  @apply m-auto w-full;
}
.content {
  @apply w-full flex flex-col;
}
.title {
  @apply text-4xl text-gray-300 tracking-wide float-left ml-12;
}
.button-group{
    @apply space-x-6 p-4 float-left ml-12;
}
</style>
