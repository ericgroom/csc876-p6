<template>
  <div class="performance-evaluation">
    <div class="controls">
      <button @click="addRandom(5000)">Add 5000 random items</button>
      <button @click="sort">Sort Table</button>
    </div>
    <Table :items="items"/>
  </div>
</template>

<script>
import Table from "./Table";
export default {
  name: "PerformanceEvaluation",
  data() {
    return { index: 0, items: [] };
  },
  components: { Table },
  methods: {
    addRandom(quantity) {
      const start = new Date();
      for (let i = 0; i < quantity; i++) {
        const value = Math.random();
        const key = this.index + 1;
        this.items = [...this.items, { key, value }];
        this.index = key;
      }
      const end = new Date();
      console.log("time to add:", end.getTime() - start.getTime());
    },
    sort() {
      const start = new Date();

      const sorted = this.items.slice().sort((a, b) => a.value - b.value);
      this.items = sorted;

      const end = new Date();
      console.log("time to sort:", end.getTime() - start.getTime());
    }
  }
};
</script>

<style>
.performance-evaluation {
}

.controls {
}

button {
  background-color: darkorange;
  color: whitesmoke;
  border: none;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
