<template>
  <div>
    <h2 class="text-3xl text-left mb-4">
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

<script setup>

</script>

<style lang="scss" scoped>
.italic {
  font-style: italic;

}
</style>