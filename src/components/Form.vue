<template>
    <form @submit.prevent="addTodo" class="space-x-5">
        <input type="text" name="todoitem" class="border 
        border-gray-400 focus:outline-none p-2"
        v-model="todoItem"
        >

        
        <button type="submit" class="bg-black 
        text-white px-7 py-2 rounded"> 
            Add </button>
    </form>
</template>

<script>
import {ref} from 'vue'
export default {
    emits:['added'],
    props: [''],
    setup(props, {emit}) {
        const todoItem = ref('')
        function addTodo()
        {
            emit('added',todoItem.value) 
            todoItem.value = ''
        }


        return {
            todoItem, addTodo
        }
    },
}
</script>
