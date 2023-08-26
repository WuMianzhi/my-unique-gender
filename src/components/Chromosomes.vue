<template>
  <div class="bg-white p-12 rounded-md shadow-sm
  md:bg-white md:p-12 md:rounded-md md:shadow-md 
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-transparent lg:p-0 lg:shadow-none">
    <h2 class="text-3xl mb-4 text-center lg:text-left">
      <a href="#" :class="['font-semibold',]"> &#x1F308 Chromosomes
      </a>
    </h2>
    <div class="flex justify-between font-serif">
      <div class="grid cursor-pointer">
        <label for="femaleChromosomes">Female</label>
        <label for="femaleChromosomes" class="text-4xl italic cursor-pointer">XX</label>
        <input name="Chromosomes" id="femaleChromosomes" type="radio">
      </div>

      <div class="grid cursor-pointer">
        <label for="interSexChromosomes">Intersex</label>
        <label for="interSexChromosomes" class="text-2xl italic cursor-pointer"><span class="text-4xl">XXY</span> <span
            class="text-4xl">XYY</span></label>
        <input name="Chromosomes" id="interSexChromosomes" type="radio">
      </div>

      <div class="grid cursor-pointer">
        <label for="maleChromosomes">Male</label>
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