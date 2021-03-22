<template>
  <form data-cy="form" class="pure-form">
    <fieldset>
      <input
        type="text"
        placeholder="Förnamn"
        :value="customer.firstname"
        :readonly="!editable"
      />
      <input
        type="text"
        placeholder="Efternamn"
        :value="customer.lastname"
        :readonly="!editable"
      />
      <input
        type="email"
        placeholder="E-mail"
        :value="customer.email"
        :readonly="!editable"
      />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "CustomerForm",
  data() {
    return {
      customer: {
        firstname: this.initialCustomer?.firstname,
        lastname: this.initialCustomer?.lastname,
        email: this.initialCustomer?.email,
      },
    };
  },
  props: {
    initialCustomer: Object,
    editable: Boolean,
  }
};
</script>

<style scoped>
input[readonly] {
  color: white;
}
</style>
