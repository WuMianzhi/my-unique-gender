<template>
  <div class=" card bg-white p-12 rounded-md shadow-sm 
  md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" :class="['font-semibold', `text-indigo`]"> 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between px-6">
      <div class="grid cursor-pointer gap-4 justify-center justify-items-center" v-for="gender in genderAssign">
        <label :for="gender.iconName + 'Assign'" class="cursor-pointer label">{{ gender.name }}</label>
        <input :id="gender.iconName + 'Assign'" name="genderAssign" type="radio">
        <label :for="gender.iconName + 'Assign'">
          <Icon :icon="'ph:gender-' + gender.iconName" class="cursor-pointer gender-icon" />
        </label>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { Icon } from '@iconify/vue';
const genderAssign = [{ name: '女性', iconName: 'female' },
{ name: '间性', iconName: 'intersex' },
{ name: '男性', iconName: 'male' }]
</script>

<style lang="scss" scoped>
.label {
  color: #222222;
}

.gender-icon {
  width: 3rem;
  height: 3rem;
  color: #222;
}
</style>