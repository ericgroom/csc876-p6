<template>
  <div class="App">
    <LanguageDetector/>
  </div>
</template>

<script>
import LanguageDetector from "./components/LanguageDetector.vue";

export default {
  name: "app",
  components: {
    LanguageDetector
  }
};
</script>

<style>
.App {
  text-align: center;
}

body {
  background-color: #282c34;
  color: #eee;
  font-family: sans-serif;
}
</style>
