<template>
  <div class="home">
    <h1>Kunder</h1>
    <hr />
    <table class="pure-table">
      <thead>
        <th>Förnamn</th>
        <th>Efternamn</th>
        <th>E-mail</th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Namn</td>
          <td>Namnsson</td>
          <td>namn.namnsson@gmail.com</td>
          <td><button>Visa</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>