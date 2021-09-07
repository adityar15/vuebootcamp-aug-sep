<template>
  <Form @submitted="register" />
</template>

<script>
import { defineAsyncComponent } from "vue";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios'
const Form = defineAsyncComponent(() =>
  import(/*webpackChunkName: "SignupForm"*/ "@/components/SignInSignUpForm.vue")
);

export default {
  components: {
    Form,
  },
  setup() {
    // const firebaseConfig = {
      // your configurations
    // };

    // initializeApp(firebaseConfig);

    function register(user) {
      axios.post('http://127.0.0.1:3000/create_stripe_customer', user).then(res => {
        console.log(res.data)
      // const auth = getAuth();

      // createUserWithEmailAndPassword(auth, user.email, user.password)
      //   .then((userCredential) => {
      //     // Signed in
      //     const authenticatedUser = userCredential.user;
      //     console.log("User", authenticatedUser);
      //   })
      //   .catch((error) => {
      //     console.log(error.message);
      //     // ..
      //   });


      })

    }
    return {
      register,
    };
  },
};
</script>
