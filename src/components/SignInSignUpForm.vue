<template>
    <div class="form-container">
        <form class="form" @submit.prevent="passData">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" name="email" v-model="state.email">
                <span v-if="errorBag" class="error">{{errorBag.email}}</span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" name="password" v-model="state.password">
                <span v-if="errorBag" class="error">{{errorBag.password}}</span>
            </div>
            <div class="form-button-container">
                <button type="submit" v-html="actiontext"></button>
            </div>
        </form>
    </div>
</template>

<script>

import {reactive} from 'vue'

export default {
  props:{
      actiontext: {
          type: String,
          default: "Register"
      }
  },
  emits:['submitted'],
  setup(props, {emit}) {

      console.log(props)

       const state = reactive({
           email: '',
           password: ''
       }) 

       const errorBag = reactive({
           email: '',
           password: ''
       })

        function passData()
        {
            if(state.email!="" && state.password!="")
            {
                errorBag.email = ""
                errorBag.password = ""
                emit('submitted', state)
            }
            else{
                errorBag.email = "Enter your email"
                errorBag.password = "Enter your password"
                
            }
        }

        return {
            state,
            passData,
            errorBag
        }

    },
}
</script>

<style scoped>
.form-container {
@apply w-full;
}
.form{
    backdrop-filter: blur(20px);
    @apply px-9 py-16 my-5 space-y-4 w-full shadow bg-gray-900 bg-opacity-30;
}
.form-group{
    @apply grid grid-rows-2 gap-1;
}
label{
    @apply text-gray-50 font-semibold text-lg;
}
input[type="email"], input[type="password"]
{
    @apply px-2 py-1 rounded border border-transparent ring-2 bg-gray-900 bg-clip-padding
    focus:outline-none focus:ring-4 focus:ring-gray-100 text-gray-100 shadow;
}
.form-button-container{
    @apply text-center p-2;
}
.form-button-container > button{
    @apply px-9 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg
     focus:outline-none focus:ring-4 focus:ring-red-500 cursor-pointer shadow-2xl;
}
.error{
    @apply text-red-400;
}
</style>