<template>
  <div class="grid">
    <h2 class="text-xl  text-left"> <a href="#" class=" font-semibold "> &#x1F308 {{ groupTitle }} </a></h2>
    <div class="flex flex-col justify-between">
      <template v-for="identity in category">
        <ColorSlider :title="identity" @change="changeListener" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorSlider from "../components/ColorSlider.vue";
defineProps({
  groupTitle: {
    type: String,
    default: "testTitle",
  },
  category: {
    type: Array<string>,
  },
});
const changeListener = function (change: number) {
  console.log("changed:", change);
};
</script>

<style scoped></style>
