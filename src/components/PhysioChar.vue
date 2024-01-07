<template>
  <div>
    <h1 class="text-4xl"> 生理特征</h1>
    <div class="flex justify-center flex-col">
      <div class="flex justify-between ">
        <p>阴道</p>
        <p>未分化</p>
        <p>阴茎</p>
      </div>
      <div>
        <input type="range" name="" id="" class="w-full">
      </div>
      <img src="../assets/gender.svg" alt="">
    </div>
    <div>
      <div v-for="(hormone, index) in hormones" class="flex">
        <div>图片</div>
        <div class="flex-1">
          <div class="flex justify-between ">
            <template v-for="i in 20" :key="i">
              <button @click="modVal(index, i * 5)"
                :style="{ 'background-color': calInterColorByHex(hormone.colorSeries[0], hormone.colorSeries[1], i) }"
                :class="['h-4 w-2 p-0 b-0 bg-gray-900 step-btn transition-all', i * 5 == hormone.value ? 'relative bottom-2' : '']"></button>
            </template>
          </div>
          <p>{{ hormone.name }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  selfChange: [index: number, value: number];
  updateVal: [index: number, value: number];
}>();

const hormones = [
  {
    name: '雌激素',
    colorSeries: ["ff9292", "ffd6a7"],
    value: 50,
  }, {
    name: '雄激素/睾酮',
    colorSeries: ["ff9292", "ffd6a7"],
    value: 50,
  }, {
    name: '孕激素',
    colorSeries: ["ff9292", "ffd6a7"],
    value: 50,
  }
]

const modVal = (index: number, newVal: number) => {
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

<style scoped></style>