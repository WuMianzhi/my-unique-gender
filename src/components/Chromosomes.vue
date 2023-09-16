<template>
  <div class="card bg-white p-12 rounded-md shadow-sm
  md:bg-white md:p-12 md:rounded-md md:shadow-md 
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left mb-4 ">
      <a href="#" :class="['font-semibold', 'text-violet']">性染色体
      </a>
    </h2>
    <div class="flex justify-between px-6 ">

      <div class="grid gap-2 cursor-pointer" v-for="chromosomes in chromosomesCate">
        <label for="femaleChromosomes">{{ chromosomes.name }}</label>
        <label for="femaleChromosomes" class="text-4xl italic font-serif cursor-pointer">{{ chromosomes.chromosome
        }}</label>
        <input name="Chromosomes" id="femaleChromosomes" type="radio">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const chromosomesCate = [{
  name: '女性',
  chromosome: 'XX',
}, {
  name: '间性',
  chromosome: 'XYY',
}, {
  name: '男性',
  chromosome: 'XY',
}]

</script>

<style lang="scss" scoped>
.italic {
  font-style: italic;

}
</style>