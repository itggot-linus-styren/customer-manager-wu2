<template>
  <form data-cy="form" class="pure-form">
    <fieldset>
      <input type="text" placeholder="Förnamn" />
      <input type="text" placeholder="Efternamn" />
      <input type="email" placeholder="E-mail" />
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
