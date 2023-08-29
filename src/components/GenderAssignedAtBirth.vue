<template>
  <div class="bg-white p-12 rounded-md shadow-sm 
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-3xl text-center lg:text-left mb-4">
      <a href="#" :class="['font-semibold', `text-fuchsia-500`]"> &#x1F308 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between font-serif">
      <div class="grid cursor-pointer " v-for="gender in genderAssign">
        <label :for="gender + 'Assign'">{{ gender }}</label>
        <input :id="gender + 'Assign'" name="genderAssign" type="radio">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const genderAssign = ['女性', '间性', '男性']
</script>

<style lang="scss" scoped></style>