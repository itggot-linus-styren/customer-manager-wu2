<template>
  <CustomerForm editable @onSubmit="createCustomer" />
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "AddCustomer",
  methods: {
    createCustomer(customer) {
      console.log(
        "AddCustomer.vue@createCustomer: " + JSON.stringify(customer)
      );
      localStorage.setItem("customers", customer);
    },
  },
  components: {
    CustomerForm,
  },
};
</script>

<style></style>
