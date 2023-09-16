<template>
  <div class="card bg-white p-12 rounded-md shadow-sm
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" :class="['font-semibold', `text-blue`]"> 性激素水平（可随时间变化）
      </a>
    </h2>
    <div class="flex justify-between gap-8 ">
      <div class="grid" v-for="hormone in hormones">
        <span class="mb-4">{{ hormone }}</span>
        <input name="genderAssign" type="range" :class="[
          'w-full',
          'h-2',
          'rounded-full',
          'bg-gradient-to-r',
          'from-indigo-100',
          `to-blue-500`,
        ]">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hormones = ['雌激素', '雄激素/睾酮', '孕激素']
</script>

<style lang="scss" scoped></style>