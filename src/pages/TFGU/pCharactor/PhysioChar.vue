<template>
  <div class="wrapper rounded-2xl ">
    <h1 class="text-4xl main-title"> 生理特征</h1>
    <div class="flex justify-center flex-col p-4">
      <div class="flex justify-between subtitle">
        <p>阴道</p>
        <p>未分化</p>
        <p>阴茎</p>
      </div>
      <div class="py-3">
        <input type="range" name="" id="" class="w-full ring-4 ring-white/30 rounded-full h-5 rainbow-bg box-content">
      </div>
      <img src="../../../assets/gender.svg" alt="" class="mb-3">
    </div>
    <div class="p-4">
      <div v-for="(hormone, index) in hormones" class="flex mb-3">
        <div>
          <img :src="hormone.pic" :alt="hormone.name" srcset="">
        </div>
        <div class="flex-1">
          <div class="flex justify-between ">
            <template v-for="i in 20" :key="i">
              <button @click="modVal(index, i * 5)"
                :style="{ 'background-color': calInterColorByHex(hormone.colorSeries[0], hormone.colorSeries[1], i) }"
                :class="['score-btn', i * 5 == hormone.value ? 'relative bottom-2' : '']"></button>
            </template>
          </div>
          <p class="subtitle text-left">{{ hormone.name }}</p>
        </div>
      </div>
    </div>

    <div class="pl-4 pb-4">
      <SexChromosomes></SexChromosomes>
    </div>
  </div>
</template>

<script setup lang="ts">
import progesterone from '../../../assets/progesterone.svg';
import androgens from '../../../assets/androgens.svg'
import estrogen from '../../../assets/estrogen.svg'
import SexChromosomes from '../../../components/SexChromosomes.vue';
import { reactive } from 'vue';

const emit = defineEmits<{
  selfChange: [index: number, value: number];
  updateVal: [index: number, value: number];
}>();

const hormones = reactive([
  {
    name: '雌激素',
    colorSeries: ["ff9292", "ffd6a7"],
    value: 50,
    pic: estrogen
  }, {
    name: '雄激素/睾酮',
    colorSeries: ["ffd6a7", "fffb8f"],
    value: 50,
    pic: androgens
  }, {
    name: '孕激素',
    colorSeries: ["fffb8f", "c9ffaf"],
    value: 50,
    pic: progesterone
  }
])

const modVal = (index: number, newVal: number) => {
  hormones[index].value = newVal;
  emit('updateVal', index, newVal)
}

const calInterColorByHex = (sColor: string, eColor: string, step: number, all = 20) => {
  const sRGB = hex2RGB(sColor);
  const eRGB = hex2RGB(eColor);
  const colorGap = sRGB.map((v, i) => eRGB[i] - v)
  const result = sRGB.map((v, i) => v + Math.ceil(colorGap[i] * (step / all)))

  return `rgb(${result.join(',')})`
}

const hex2RGB = (hex: string) => {
  return [parseInt(hex.substring(0, 2), 16),
  parseInt(hex.substring(2, 4), 16),
  parseInt(hex.substring(4, 6), 16)]
}

</script>

<style scoped>
.wrapper {
  background: linear-gradient(123.84deg, rgba(229, 229, 229, 0.2) 0.32%, rgba(205, 213, 224, 0.2) 32.08%, rgba(205, 213, 224, 0.2) 60.87%, rgba(255, 255, 255, 0.2) 95.61%),
    linear-gradient(160.61deg, rgba(255, 255, 255, 0.48) 13.02%, rgba(255, 255, 255, 0.4) 55.88%, rgba(255, 255, 255, 0) 99.64%);
}

input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #eeeeee;
  background-image:
    linear-gradient(140.55deg, rgba(216, 235, 255, 0.2) 1.7%, rgba(255, 234, 253, 0.199136) 44%, rgba(254, 255, 218, 0.1979) 103.46%),
    radial-gradient(50% 50% at 50% 50%, #FFFFFF 43.23%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  ;
  cursor: pointer;
  border: 2px solid #ffffff50;
  box-sizing: border-box;
  box-shadow: 0px 0 0 4px #cbcbcb7a;
}
</style>