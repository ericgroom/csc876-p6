<template>
  <section class="todo-root">
    <h1 class="todo-title">Todos</h1>
    <TodoInput v-on:createTodo="createTodo"/>
    <button @click="removeCompleted">Remove Completed</button>
    <TodoList :todos="todos"/>
  </section>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "Todo",
  components: { TodoInput, TodoList },
  data() {
    return { todos: [{ id: 1, name: "test", completed: false }] };
  },
  computed: {
    nextId() {
      return this.todos.reduce((max, todo) => Math.max(max, todo.id), 0) + 1;
    }
  },
  methods: {
    createTodo(name) {
      this.todos.push({ id: this.nextId, name, completed: false });
    },
    removeCompleted() {
      console.log("removing");
      if (
        window.confirm(
          "Are you sure you want to delete all completed todos from your list?"
        )
      ) {
        this.todos = this.todos.filter(todo => !todo.completed);
      }
    }
  },
  mounted() {
    try {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      this.todos = todos;
    } catch (e) {
      console.log("creating new store");
    }
    window.addEventListener("beforeunload", () => {
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todos", todosString);
    });
  },
  beforeDestroy() {
    window.addEventListener("beforeunload", () => {
      const todosString = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", todosString);
    });
  }
};
</script>

<style>
.todo-root {
  max-width: 600px;
  margin: 1rem auto;
  color: #222;
  box-shadow: 2px 2px 4px #333;
  padding-bottom: 1rem;
}

.todo-title {
  border-bottom: 0.1rem solid darkgray;
  background-color: lightseagreen;
  color: #eee;
  padding: 1rem;
}

button {
  font-size: 1rem;
  border: none;
  background-color: lightseagreen;
  color: #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin: 1rem;
}
</style>


