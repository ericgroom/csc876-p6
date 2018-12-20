<template>
  <form @submit="handleSubmit" class="todo-form">
    <label for="todo-input">
      <input
        type="text"
        id="todo-input"
        v-model="text"
        placeholder="Enter a new todo..."
        autocomplete="off"
      >
    </label>
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return { text: "" };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.text) {
        this.$emit("createTodo", this.text);
        this.text = "";
      }
    }
  }
};
</script>

<style scoped>
.todo-form {
  margin: 1rem auto;
}
#todo-input {
  padding: 1rem;
  background-color: lightblue;
  border: none;
  box-shadow: 1px 2px 2px gray;
  width: 75%;
  font-size: 1.2rem;
  font-weight: 600;
}

.add-button {
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid transparent;
}
</style>
