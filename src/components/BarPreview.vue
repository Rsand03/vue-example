<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  barObject: Object,
});

</script>


<template>
  <div class="example-box">
    {{ props.barObject.name }}
  </div>

</template>


<style scoped>

.example-box {
  width: 100px;
  height: 50px;
  border: 2px solid #000000;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}

</style>