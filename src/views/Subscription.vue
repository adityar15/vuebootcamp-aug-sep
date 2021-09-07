<template>
  <div class='wrapper'>
    <h1 class="heading">Subscribe</h1>

    <Listbox v-model="selectedPlan">
      <ListboxButton>{{ selectedPlan.name }} £{{selectedPlan.price}}</ListboxButton>
      <ListboxOptions>
        <ListboxOption
          v-for="plan in plans"
          :key="plan"
          :value="plan"
          :disabled="plan.unavailable"
        >
          {{ plan.name }} £{{plan.price}}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>

    <PrimaryButton @click="askPayment">Pay</PrimaryButton>

    <Payment v-if="paymentasked" :plan="selectedPlan" />
  </div>
</template>

<script>
import { ref } from "vue";
import PrimaryButton from '@/components/PrimaryButton.vue';
import Payment from '@/components/Payment.vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  components: { Listbox, ListboxButton, ListboxOptions, ListboxOption, PrimaryButton, Payment },

  setup() {
    const paymentasked = ref(false)
    const plans = [
      { id: "price_1JX3TlJBBrYOr00bqcMk7XOL", name: "Silver", unavailable: false, price:10},
      { id: "price_1JX3UQJBBrYOr00bs3LxpX8N", name: "Gold", unavailable: false, price:20 },
   
    ];
    const selectedPlan = ref(plans[0]);

    function askPayment() {
        paymentasked.value = !paymentasked.value
    }

    return {
      plans,
      selectedPlan,
      paymentasked,
      askPayment
    };
  },
};
</script>
<style scoped>
*{
    @apply text-gray-50;
}
.wrapper{
    @apply grid grid-cols-1 gap-2;
}
.heading {
  @apply text-3xl my-2 text-gray-50;
}
</style>
