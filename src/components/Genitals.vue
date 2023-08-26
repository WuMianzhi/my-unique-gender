<template>
  <div>
    <h2 class="text-3xl text-left mb-4">
      <a href="#" :class="['font-semibold', `text-blue-500`]"> &#x1F308 Genitals(At Birth)
      </a>
    </h2>
    <div>
      <div class="flex justify-between font-serif text-base">
        <span>Vagina</span>
        <span>Undifferentiated</span>
        <span>Penis</span>
      </div>
      <input type="range" min="0" max="100" value="0" :class="[
        'w-full',
        'h-2',
        'rounded-full',
        'bg-gradient-to-r',
        'from-pink-500',
        `to-blue-500`,
      ]" />
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
input[type="range"] {
  -webkit-appearance: none;
  outline: none;
}

/* Customize the range slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.6rem;
  height: 1.6rem;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border-radius: 50%;
  border: 4px solid #848484;
}
</style>