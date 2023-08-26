<template>
  <div class="bg-white p-12 rounded-md shadow-sm 
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-transparent lg:p-0 lg:shadow-none">
    <h2 class="text-3xl text-center lg:text-left mb-4">
      <a href="#" :class="['font-semibold', `text-fuchsia-500`]"> &#x1F308 Gender Assigned At Birth
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
const genderAssign = ['Male', 'Intersex', 'Female']
</script>

<style lang="scss" scoped></style>