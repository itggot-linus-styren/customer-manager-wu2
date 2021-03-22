<template>
  <form data-cy="form" class="pure-form">
    <fieldset class="pure-group">
      <legend>Kundinformation</legend>
      <input
        type="text"
        class="pure-input-1"
        placeholder="Förnamn"
        :value="customer.firstname"
        :readonly="!editable"
      />
      <input
        type="text"
        class="pure-input-1"
        placeholder="Efternamn"
        :value="customer.lastname"
        :readonly="!editable"
      />
      <input
        type="email"
        class="pure-input-1"
        placeholder="E-mail"
        :value="customer.email"
        :readonly="!editable"
      />
    </fieldset>
    <button
      type="submit"
      class="pure-button pure-button-primary"
      v-if="editable"
      @click.prevent="$emit('onSubmit', customer)"
    >
      Skapa
    </button>
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
  },
};
</script>

<style scoped>
input[readonly] {
  color: white;
}

form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
