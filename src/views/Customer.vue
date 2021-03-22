<template>
  <CustomerForm :initialCustomer="customer" />
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "Customer",
  data() {
    return {
      customer: {
        firstname: "Namn",
        lastname: "Namnsson",
        email: "namn.namnsson@gmail.com",
      },
    };
  },
  components: {
    CustomerForm,
  },
};
</script>

<style></style>
