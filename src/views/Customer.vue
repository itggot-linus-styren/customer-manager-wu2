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
  created() {
    console.log("Customer.vue@created: " + this.$route.params.id);
    const customers = JSON.parse(localStorage.getItem("customers"));
    this.customer = customers[this.$route.params.id];
  }
};
</script>

<style></style>
