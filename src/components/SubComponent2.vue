<script setup>
import {computed} from "vue";
import {useExampleStore} from "@/stores/exampleStore.js";

const exampleStore = useExampleStore();

// Computed property constantly watches the target value, which is in this case the 'name' variable in exampleStore
// If the target value changes, the computed property will automatically update local 'nameFromStore' variable
// computed() is just like a regular ref(), but it constantly updates based on the target variable


const countFromStore = computed(() => exampleStore.count);  // this is constantly updated

const nameFromStore = computed(() =>
    exampleStore.name
);

function incrementStoreCount() {
  exampleStore.incrementCount();
}

</script>


<template>
  <div class="box">
    <h1>SubComponent2</h1>
    <div class="item">
      computed count: {{ countFromStore }}
    </div>
    <button @click="incrementStoreCount()">Increment</button>
    <button @click="exampleStore.resetCount(0)">Reset count</button>
    <div>username from store: {{ nameFromStore }}</div>
  </div>
</template>


<style scoped>

.box {
  width: 400px;
  height: 20%;
  border: 2px solid #007BFF;
  padding: 20px;
  margin: 10px 0;
  text-align: center;
}

</style>
