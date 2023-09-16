<template>
  <div class=" card bg-white p-12 rounded-md shadow-sm 
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" :class="['font-semibold', `text-indigo` ]"> 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between">
      <div class="grid cursor-pointer " v-for="gender in genderAssign">
        <label :for="gender + 'Assign'" class="label">{{ gender }}</label>
        <input :id="gender + 'Assign'" name="genderAssign" type="radio">
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
const genderAssign = ['女性', '间性', '男性']
</script>

<style lang="scss" scoped>
.label {
  color: #222222;
}
</style>