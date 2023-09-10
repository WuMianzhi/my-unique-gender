<template>
  <div class="card grid bg-white px-6 py-10 rounded-2xl my-8 shadow-sm
            sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
            md:bg-white md:p-12 md:rounded-lg md:shadow-lg
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" :class="['font-semibold', `text-${mainColor}`, 'transparent-text']">
        {{ groupTitle }}
      </a>
    </h2>
    <div class="flex flex-col z-10 justify-between gap-y-1">
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

<style lang="scss" scoped>

</style>
