<template>
  <router-link
    data-cy="edit"
    :to="`/customers/${$route.params.id}/edit`"
    class="pure-button button-secondary"
    >Redigera</router-link
  >
  <button data-cy="del" class="pure-button button-danger">Ta bort</button>
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
  },
};
</script>

<style scoped>
.pure-button {
  margin: 0.5em;
}

.button-danger {
  background: rgb(202, 60, 60);
}

.button-secondary {
  background: rgb(66, 184, 221);
}
</style>
