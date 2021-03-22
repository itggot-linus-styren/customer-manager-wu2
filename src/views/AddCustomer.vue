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
      let customers = JSON.parse(localStorage.getItem("customers") || "[]");
      customers.push(customer);
      localStorage.setItem("customers", JSON.stringify(customers));
      this.$router.push({
        name: "Customer",
        params: { id: customers.length - 1 },
      });
    },
  },
  components: {
    CustomerForm,
  },
};
</script>

<style></style>
