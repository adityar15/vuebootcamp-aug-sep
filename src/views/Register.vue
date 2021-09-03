<template>
    <Form />
</template>

<script>
import {defineAsyncComponent} from 'vue'

const Form = defineAsyncComponent(()=>import(/*webpackChunkName: "SignupForm"*/ '@/components/SignInSignUpForm.vue'))

export default {
    components: {
        Form
    },
    setup() {
        // 
    },
}
</script>