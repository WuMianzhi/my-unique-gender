<template>
  <div class="">
    <h2 class="text-2xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" class="question-title"> 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between px-6">
      <div class="grid cursor-pointer gap-4 justify-center justify-items-center" v-for="gender in genderAssign" :key="gender.iconName">
        <input :id="gender.id + 'Assign'" class="hidden" name="genderAssign" type="radio" v-model="gender.checked">
        <label :for="gender.id + 'Assign'">
          <img class="w-12 h-12 rotate-90" src="../assets/startB.svg" alt="start" srcset="" v-show="gender.checked">
          <img class="w-12 h-12" src="../assets/startA.svg" alt="start" srcset="" v-show="!gender.checked">
        </label>
        <label :for="gender.iconName + 'Assign'" class="cursor-pointer label subtitle" @click="">{{ gender.name }}</label>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { reactive } from 'vue'
const genderAssign = reactive([{
  id:'male',
  name: '女性',
  iconName: 'solar:star-broken',
  checked: false
},
{
  id:'female',
  name: '男性',
  iconName: 'solar:star-broken',
  checked: false
}])
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