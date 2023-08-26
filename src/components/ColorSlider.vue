<template>
  <div class="flex items-center justify-between h-8 p-8 sm:p-0 font-serif">
    <label class="p-2 text-2xl w-96 block text-right">
      <span v-if="title.toUpperCase() !== 'CUSTOMER'" >
        {{ title }}
      </span>
      <input v-else type="text" :class="['flex-none', 'input-gender', 'bg-slate-100', 'rounded', 'px-2', 'focus:outline-none', 'focus:ring',
        'focus:border-blue-500', 'rounded']" placeholder="Anything " /> :
    </label>

    <input type="range" min="0" max="100" value="0" :class="[
      'w-full',
      'h-2',
      'rounded-full',
      'bg-gradient-to-r',
      'from-slate-100',
      `to-${mainColor}-500`,
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
.input-gender {
  display: inline-block;
  width: 10rem;
  flex: 1;
  border-bottom: 2px solid rgb(111, 111, 111);
}
</style>
