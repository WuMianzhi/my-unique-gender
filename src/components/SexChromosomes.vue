<template>
  <div class="flex">
    <h4 class="subtitle text-left">{{ title }}</h4>

    <div class="wrapper rounded-3xl mx-6 flex-1 border-4 shadow-2xl">
      <div class="border-4 rounded-3xl border-white/30 p-4 flex items-center justify-between ">
        <div class="selected-chrome rounded-full option-chrome">X</div>
        <div class="grid">
          <a class="text-center p-2 rounded-full click-btn" @click="choice1 < 2 ? choice1++ : null">
            <img src="../assets/svg/up.svg" alt="" srcset="" class="m-auto">
          </a>
          <span class="option-chrome">
            {{ sexChromeType[choice1 - 1] ? sexChromeType[choice1 - 1] : '-' }}
          </span>
          <span class="selected-chrome rounded-full option-chrome">
            {{ sexChromeType[choice1] ? sexChromeType[choice1] : '-' }}</span>
          <span class="option-chrome">
            {{ sexChromeType[choice1 + 1] ? sexChromeType[choice1 + 1] : '-' }}
          </span>
          <a class="text-center p-2 rounded-full click-btn" @click="choice1 > -1 ? choice1-- : null">
            <img src="../assets/svg/down.svg" class="m-auto" alt="" srcset="">
          </a>
        </div>
        <div class="grid">
          <a class="text-center p-2 rounded-full click-btn" @click="choice2 < 2 ? choice2++ : null">
            <img src="../assets/svg/up.svg" alt="" srcset="" class="m-auto">
          </a>
          <span class="option-chrome">
            {{ sexChromeType[choice2 - 1] ? sexChromeType[choice2 - 1] : '-' }}
          </span>
          <span class="selected-chrome rounded-full option-chrome">
            {{ sexChromeType[choice2] ? sexChromeType[choice2] : '-' }}
          </span>
          <span class="option-chrome transition-all">
            {{ sexChromeType[choice2 + 1] ? sexChromeType[choice2 + 1] : '-' }}
          </span>
          <a class="text-center p-2 rounded-full click-btn" @click="choice2 > -1 ? choice2-- : null">
            <img src="../assets/svg/down.svg" alt="" srcset="" class="m-auto">
          </a>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = '性染色体'
const sexChromeType = ['X', 'Y']

const choice1 = ref(0);
const choice2 = ref(2);

</script>

<style scoped>
.wrapper {
  background: linear-gradient(#E4F2FF 0%, rgba(243, 243, 230, 0.478261) 52.08%, rgba(236, 224, 236, 0.5) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
}

.option-chrome {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-weight: bolder;
  font-size: 12px;
  color: #BCBCBC;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}

.selected-chrome {
  color: #4b4b4b;
  box-shadow: -9px -9px 16px 0px #FFFFFF99;
  box-shadow: 9px 9px 16px 0px #C2D3ED99;
}

.click-btn:hover {
  box-shadow: 2px 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.click-btn:active {
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}

.click-btn:visited {
  box-shadow: none;
}
</style>