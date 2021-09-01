<template>
  <div class="home">
  <Form @added="addToList" />
  <TodoList>
      <li v-for="(item, index) in todoList" :key="index">
        {{item}}
      </li>
  </TodoList> 
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import {defineAsyncComponent} from 'vue'
import {ref} from 'vue'


const TodoList = defineAsyncComponent(() => import('@/components/TodoList.vue'))

export default {
  name: 'Home',
  components: {
      Form,
      TodoList
  },

  setup()
  {
    const todoList = ref([])
    function addToList(val){
      todoList.value.push(val)
    }
    return {
      addToList,
      todoList
    }
  }

}
</script>
<style scoped>

</style>