<template>
  <table class="pure-table">
    <thead>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>E-mail</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="(customer, index) in customers" :key="index">
        <td>{{ customer.firstname }}</td>
        <td>{{ customer.lastname }}</td>
        <td>{{ customer.email }}</td>
        <td>
          <router-link class="pure-button" :to="`/customers/${index}`">Visa</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CustomerTable",
  data() {
    return {
      customers: []
    }
  },
  created() {
    this.customers = JSON.parse(localStorage.getItem("customers"));
  }
};
</script>

<style>
table {
  width: 100%;
  text-align: left;
}
</style>
