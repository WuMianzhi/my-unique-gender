<template>
  <div class="">
    <h2 class="text-2xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" class="question-title"> 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between px-6">
      <div class="grid cursor-pointer gap-4 justify-center justify-items-center" v-for="gender in genderAssign">
        <label :for="gender.iconName + 'Assign'" class="cursor-pointer label subtitle">{{ gender.name }}</label>
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
// { name: '间性', iconName: 'intersex' },
{ name: '男性', iconName: 'male' }]
</script>

<style lang="scss" scoped>
.label {
  // color: #222222;
}

.gender-icon {
  width: 2rem;
  height: 2rem;
  color: #222;
}
</style>