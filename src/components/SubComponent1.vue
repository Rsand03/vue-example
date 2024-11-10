<script setup>
import {computed, ref} from "vue";
import {useExampleStore} from "@/stores/exampleStore.js";

const exampleStore = useExampleStore();  // for accessing the values and functions of exampleStore

// Computed property constantly watches the target value, which in this case is the 'name' variable in exampleStore
// If the target value changes, the computed property will automatically update the local 'nameFromStore' variable
// computed() is just like a regular ref(), but it constantly updates based on the target variable

const countFromStore = computed(() => exampleStore.count);  // this is constantly updated
const countFromStoreRef = ref(exampleStore.count); // declared only once, but never updated
const countFromStoreConst = exampleStore.count;  // this is also not updated


const nameFromStore = computed(() =>
    exampleStore.name
);


const nameInputValue = ref("");  // 'v-model' ties this variable to the current value of input field

function updateNameInExampleStore() {
  exampleStore.setName(nameInputValue.value);
}

</script>


<template>
  <div class="box">
    <h1>SubComponent1</h1>
    <div style="display: flex; align-items: flex-start; flex-direction: column">
      <div> computed: {{ countFromStore }}</div>
      <div> ref: {{ countFromStoreRef }}</div>
      <div> const: {{ countFromStoreConst }}</div>
    </div>

    <button @click="exampleStore.incrementCount()">Increment</button>

    <div>username from store: {{ nameFromStore }}</div>

    <input v-model="nameInputValue">
    <button @click="updateNameInExampleStore">Update name</button>
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
