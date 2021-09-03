<template>
  <Form actiontext="Login" @submitted="login" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
const Form = defineAsyncComponent(() =>
  import(/*webpackChunkName: "SignupForm"*/ "@/components/SignInSignUpForm.vue")
);

export default {
  components: {
    Form,
  },
  setup() {
    const firebaseConfig = {
        //your config
    };

    initializeApp(firebaseConfig);

    const store = useStore()
    const router = useRouter()

    function login(user) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            const authenticatedUser = userCredential.user;
            store.commit('user/setUser', authenticatedUser)
            console.log("Loggedin User", authenticatedUser)
            localStorage.setItem('_token', authenticatedUser)
            router.replace('/browse')
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    return {
      login,
    };
  },
};
</script>
