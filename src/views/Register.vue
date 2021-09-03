<template>
  <Form @submitted="register" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Form = defineAsyncComponent(() =>
  import(/*webpackChunkName: "SignupForm"*/ "@/components/SignInSignUpForm.vue")
);

export default {
  components: {
    Form,
  },
  setup() {
    const firebaseConfig = {
        // your config
    };

    initializeApp(firebaseConfig);

    function register(user) {
      
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const authenticatedUser = userCredential.user;
          console.log("User", authenticatedUser)
        })
        .catch((error) => {
           console.log(error.message)
          // ..
        });
    }
    return {
      register,
    };
  },
};
</script>
