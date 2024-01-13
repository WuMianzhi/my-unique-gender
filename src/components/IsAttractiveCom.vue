<template>
  <div>
    <div
      class="rounded-full w-20 h-8 relative mx-auto cursor-pointer bg-slate-500 flex items-center border-2 border-white/50 switch-btn-wrapper"
      :class="isAttract ? 'justify-start' : 'justify-end'" @click="isAttract = !isAttract">
      <span class="switch-btn w-4 h-4 rounded-full absolute border border-white/50 mx-1"
        :class="isAttract ? 'right-0' : 'left-0'"></span>
      <span class="subtitle px-1" v-show="isAttract">被吸引</span>
      <span class="subtitle px-1" v-show="!isAttract">没有人</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isAttract = ref(true)
</script>

<style scoped>
.switch-btn {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: inline-block;
  background:
    radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.48) 45%, rgba(163, 177, 198, 0.36) 100%);
  box-shadow: 0 0 1px 1px #a3b1c64a;
}

.switch-btn-wrapper {
  background: linear-gradient(90deg, rgba(217, 227, 251, 0.5) 0%, rgba(194, 199, 203, 0.5) 169.54%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
}
</style>