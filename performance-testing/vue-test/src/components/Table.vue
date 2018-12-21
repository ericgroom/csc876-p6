<template>
  <table>
    <thead>
      <tr>
        <td>Key</td>
        <td>Random Value</td>
      </tr>
    </thead>
    <tbody>
      <tr :key="item.key" v-for="item of items">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["items"]
};
</script>

<style>
table {
  border: 1px solid whitesmoke;
  color: whitesmoke;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  padding: 1rem;
}

thead {
  background-color: darkorange;
  font-weight: 800;
  font-size: 1.2rem;
}

td {
  border-bottom: 1px solid whitesmoke;
}
</style>
