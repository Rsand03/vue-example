<script setup>
import SubComponent1 from "@/components/SubComponent1.vue";
import SubComponent2 from "@/components/SubComponent2.vue";
import {ref} from "vue";
import BarPreview from "@/components/BarPreview.vue";

const barObjects = ref([
  {name: "name1", id: 1},
  {name: "name2", id: 2},
  {name: "name3", id: 3}
]);

// access the content of a ref with '.value' and add a new element
barObjects.value.push({name: "name4", id: 4});

</script>


<template>
  <main>
    <div>
      <div v-for="bar in barObjects">
        <BarPreview :bar-object="bar"/>
      </div>
    </div>
    <div class="box">
        <SubComponent1/>
    </div>
    <div class="box">
      <SubComponent2 />
    </div>
  </main>
</template>


<style scoped>


header {
  line-height: 1.5;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  column-gap: 200px;
}

</style>
