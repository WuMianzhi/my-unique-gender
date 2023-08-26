<template>
  <div class="
            bg-white p-12 rounded-md shadow-sm
            md:bg-white md:p-12 md:rounded-md md:shadow-md
              sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
              lg:bg-transparent lg:p-0 lg:shadow-none">
    <h2 class="text-3xl text-center lg:text-left mb-4">
      <a href="#" :class="['font-semibold', `text-blue-500`]"> &#x1F308 Genitals(At Birth)
      </a>
    </h2>
    <div>
      <div class="flex justify-between font-serif lg:text-base">
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

<style lang="scss" scoped></style>