<template>
  <div class="grid">
    <h2 class="text-3xl text-left mb-4"> <a href="#" :class="['font-semibold', `text-${mainColor}-500`]"> &#x1F308 {{
      groupTitle }}
      </a></h2>
    <div class="flex flex-col justify-between gap-y-1">
      <template v-for="identity in category">
        <ColorSlider :title="identity" @change="changeListener" :main-color="mainColor" />
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
  mainColor: {
    type: String,
    default: 'red'
  }
});
const changeListener = function (change: number) {
  console.log("changed:", change);
};
</script>

<style scoped></style>
