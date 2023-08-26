<template>
  <div>
    <h2 class="text-3xl text-left mb-4">
      <a href="#" :class="['font-semibold', `text-fuchsia-500`]"> &#x1F308 Hormone Levels(Vary Over Time)
      </a>
    </h2>
    <div class="flex justify-between font-serif gap-8 ">
      <div class="grid" v-for="hormone in hormones">
        <span class="text-base mb-4">{{ hormone }}</span>
        <input name="genderAssign" type="range" :class="[
          'w-full',
          'h-2',
          'rounded-full',
          'bg-gradient-to-r',
          'from-indigo-100',
          `to-fuchsia-500`,
        ]">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hormones = ['Estrogen', 'Testosterone', 'Progesterone']
</script>

<style lang="scss" scoped></style>