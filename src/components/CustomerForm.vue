<template>
  <form data-cy="form" class="pure-form">
    <fieldset>
      <input type="text" placeholder="Förnamn" :value="customer.firstname" />
      <input type="text" placeholder="Efternamn" :value="customer.lastname" />
      <input type="email" placeholder="E-mail" :value="customer.email" />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "CustomerForm",
  props: ["customer"],
};
</script>

<style></style>
