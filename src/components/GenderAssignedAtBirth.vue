<template>
  <div>
    <h2 class="text-3xl text-left mb-4">
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