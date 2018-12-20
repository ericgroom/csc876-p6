<template>
  <div class="App" id="app">
    <header class="App-header">Todo App</header>
    <main>
      <Todo/>
    </main>
    <footer>Created by Eric Groom</footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Todo from "./components/Todo.vue";
export default {
  name: "app",
  components: {
    Todo
  }
};
</script>

<style>
.App {
  text-align: center;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.App-header,
footer {
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  padding: 1rem;
  color: white;
}

footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
</style>
