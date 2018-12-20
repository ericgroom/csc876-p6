<template>
  <ul class="todo-list">
    <li v-bind:key="todo.id" v-for="todo of todos">
      <label :for="checkboxId(todo.id)">
        <input type="checkbox" :id="checkboxId(todo.id)" v-model="todo.completed">
        <span :class="todo.completed ? 'strike' : ''">{{todo.name}}</span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todos"],
  methods: {
    checkboxId(id) {
      return `check-${id}`;
    }
  }
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: flex-start;
  text-align: left;
  margin: 1rem;
}

li {
  font-size: 2rem;
}

li input[type="checkbox"] {
  transform: scale(1.5);
  margin-right: 0.5rem;
}

.strike {
  text-decoration: line-through;
}

.no-items {
  margin: 1rem;
}
</style>
