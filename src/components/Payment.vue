<template>
  <div v-bind="$attrs">
    <form id="payment-form" @submit.prevent="pay">
      <div id="card-element">
        <!-- Elements will create input elements here -->
      </div>

      <!-- We'll put the error messages in this element -->
      <div id="card-element-errors" role="alert"></div>
      <button>Subscribe</button>
    </form>
  </div>
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";

let stripe = window.Stripe("your_stripe_public_key");
let elements = stripe.elements();
let card = elements.create("card");

export default {
  props: ["plan"],
  setup(props) {
    // const planSelected = toRef(props).plan

    onMounted(() => {
      // not needed as subscription api hvae their own payment intent
      // axios.post('http://127.0.0.1:3000/client_secret', {price:props.plan.price}).then(res=>{
      //   intent.value = res.data.client_secret
      // })

      card.mount("#card-element");

      card.on("change", function(event) {
        displayError(event);
      });
      function displayError(event) {
        stripe.changeLoadingStatePrices(false);
        let displayError = document.getElementById("card-element-errors");
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = "";
        }
      }
    });

    function pay() {
      //use client secret from the subscription api
      axios
        .post("http://127.0.0.1:3000/create_subscription", {
          customerId: "cus_KBQsCCe9UPzyUC",
          priceId: props.plan.id,
        })
        .then((res) => {
          console.log(res.data)
          stripe
            .confirmCardPayment(res.data.clientSecret, {
              payment_method: {
                card: card,
                billing_details: {
                  name: "Aditya",
                },
              },
            })
            .then((result) => {
              if (result.error) {
                alert(result.error.message);
              } else {
                // after payment success
                alert('success')
              }
            });
        });
    }

    return {
      pay,
    };
  },
};
</script>
<style scoped>
* {
  @apply text-gray-50;
}
</style>
