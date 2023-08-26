<template>
  <div class="bg-white p-12 rounded-md shadow-sm
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-transparent lg:p-0 lg:shadow-none">
    <h2 class="text-3xl text-center lg:text-left mb-4">
      <a href="#" :class="['font-semibold', `text-fuchsia-500`]"> &#x1F308 Hormone Levels(Vary Over Time)
      </a>
    </h2>
    <div class="flex justify-between font-serif gap-8 ">
      <div class="grid" v-for="hormone in hormones">
        <span class="lg:text-base mb-4">{{ hormone }}</span>
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