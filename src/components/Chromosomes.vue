<template>
  <div class="card bg-white p-12 rounded-md shadow-sm
  md:bg-white md:p-12 md:rounded-md md:shadow-md 
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left mb-4 ">
      <a href="#" :class="['font-semibold', 'text-violet']">性染色体
      </a>
    </h2>
    <div class="flex justify-between font-serif">
      <div class="grid cursor-pointer">
        <label for="femaleChromosomes">女性</label>
        <label for="femaleChromosomes" class="text-4xl italic cursor-pointer">XX</label>
        <input name="Chromosomes" id="femaleChromosomes" type="radio">
      </div>

      <div class="grid cursor-pointer">
        <label for="interSexChromosomes">间性</label>
        <label for="interSexChromosomes" class="text-2xl italic cursor-pointer"><span class="text-4xl">XXY</span> <span
            class="text-4xl">XYY</span></label>
        <input name="Chromosomes" id="interSexChromosomes" type="radio">
      </div>

      <div class="grid cursor-pointer">
        <label for="maleChromosomes">男性</label>
        <label for="maleChromosomes" class="text-4xl italic cursor-pointer">XY</label>
        <input name="Chromosomes" id="maleChromosomes" type="radio">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.italic {
  font-style: italic;

}
</style>