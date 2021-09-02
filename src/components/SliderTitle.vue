<template>
     <h3>{{text}}</h3>
</template>


<script>
export default {
   props:['text']
}
</script>

<style scoped>
h3{
    @apply font-semibold text-gray-50 text-xl px-[20px];
}
</style>