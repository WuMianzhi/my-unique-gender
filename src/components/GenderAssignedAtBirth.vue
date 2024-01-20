<template>
  <div class="">
    <h2 class="text-2xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" class="question-title"> 出生指派性别
      </a>
    </h2>
    <div class="flex justify-between px-6">
      <div class="grid cursor-pointer gap-4 justify-center justify-items-center" v-for="gender in genderAssign"
        :key="gender.iconName">
        <input :id="gender.id + 'Assign'" class="hidden" name="genderAssign" @click="gender.checked = !gender.checked">
        <label :for="gender.id + 'Assign'">
          <img class="w-12 h-12 rotate-90 transition-all" src="../assets/startB.svg" alt="start" srcset=""
            v-show="gender.checked">
          <img class="w-12 h-12 transition-all" src="../assets/startA.svg" alt="start" srcset="" v-show="!gender.checked">
        </label>
        <label :for="gender.id + 'Assign'" class="cursor-pointer label subtitle" @click="">{{ gender.name }}</label>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { watch, reactive } from 'vue'
const genderAssign = reactive([{
  id: 'male',
  name: '女性',
  iconName: 'solar:star-broken',
  checked: false
},
{
  id: 'female',
  name: '男性',
  iconName: 'solar:star-broken',
  checked: false
}])

watch(() => genderAssign[0].checked, () => {
  genderAssign[1].checked = !genderAssign[0].checked
})

watch(() => genderAssign[1].checked, () => {
  genderAssign[0].checked = !genderAssign[1].checked
})
</script>

<style lang="scss" scoped>

.gender-icon {
  width: 2rem;
  height: 2rem;
  color: #222;
}
</style>