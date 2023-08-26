<template>
  <div class="flex items-center justify-between">
    <span class="p-2">{{ title }} : </span>
    <input
      type="range"
      min="0"
      max="100"
      value="0"
      :class="[
        'w-64',
        'h-2',
        'rounded-full',
        'bg-gradient-to-r',
        fromColor,
        toColor,
      ]"
      @change="valueChange"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "testTitle",
  },
  mainColor: {
    type: String,
    default: "red-500",
  },
  subColor: {
    type: String,
    default: "gray-300",
  },
});

const fromColor = `from-${props.subColor}`;
const toColor = `to-${props.mainColor}`;

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
