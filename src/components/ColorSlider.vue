<template>
  <div class="flex items-center justify-between h-7 font-serif">
    <span class="p-2" v-if="title.toUpperCase() !== 'CUSTOMER'">
      {{ title }} :
    </span>
    <span v-else :class="['mr-4', 'border-solid', 'border-2', 'border-indigo-600', 'rounded']">
      <input type="text" class="bg-slate-100 rounded px-2 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Anything " />
    </span>
    <input type="range" min="0" max="100" value="0" :class="[
      'w-64',
      'h-2',
      'rounded-full',
      'bg-gradient-to-r',
      'from-slate-100',
      'to-violet-500',
    ]" @change="valueChange" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "testTitle",
  },
  mainColor: {
    type: String,
    default: "violet-500",
  },
  subColor: {
    type: String,
    default: "gray-300",
  },
});
// console.log(props);


// const fromColor = `from-${props.subColor}`;
// const toColor = `to-${props.mainColor}`;

const emit = defineEmits<{
  change: [value: number]; // named tuple syntax
}>();

const valueChange = function (changeEvent: Event) {
  const target = changeEvent.target as HTMLInputElement;
  const value = parseFloat(target.value); // 使用parseFloat将字符串转换为浮点数

  if (!isNaN(value)) {
    emit("change", value);
  }
};
</script>

<style lang="scss" scoped>
/* Customize the range slider track */
input[type="range"] {
  -webkit-appearance: none;
  outline: none;
}

/* Customize the range slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border-radius: 50%;
  border: 4px solid #ff0000;
}
</style>
