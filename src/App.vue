<template>
  <TheFlyingGenderUnicorn />
</template>

<script setup lang="ts">
import TheFlyingGenderUnicorn from "./pages/TheFlyingGenderUnicorn.vue";
</script>

<style lang="scss" >
.card {
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
  color: #222222;
  box-shadow: 4px 4px 8px -4px #7b7b7b97;
  border-radius: 1rem;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   display: block;
  //   bottom: 0rem;
  //   left: 0rem;
  //   width: 20rem;
  //   height: 20rem;
  //   border-radius: 100%;
  //   background: #949494;
  //   opacity: 0.1;
  //   z-index: 0;
  //   transform: translate(-50%, 50%);
  // }
}

.text-slate {
  @apply bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text transparent-text
}

.text-gray {
  @apply bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text transparent-text
}

.text-zinc {
  @apply bg-gradient-to-r from-zinc-500 to-zinc-300 bg-clip-text transparent-text
}

.text-neutral {
  @apply bg-gradient-to-r from-neutral-500 to-neutral-300 bg-clip-text transparent-text
}

.text-stone {
  @apply bg-gradient-to-r from-stone-500 to-stone-300 bg-clip-text transparent-text
}

.text-red {
  @apply bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text transparent-text
}

.colors{
  @apply to-red-500 to-emerald-500 to-fuchsia-500 to-pink-500 to-rose-500
}

.text-orange {
  @apply bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text transparent-text
}

.text-amber {
  @apply bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text transparent-text
}

.text-yellow {
  @apply bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text transparent-text
}

.text-lime {
  @apply bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text transparent-text
}

.text-green {
  @apply bg-gradient-to-r from-green-500 to-green-300 bg-clip-text transparent-text
}

.text-emerald {
  @apply bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text transparent-text
}

.text-teal {
  @apply bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text transparent-text
}

.text-cyan {
  @apply bg-gradient-to-r from-cyan-500 to-cyan-300 bg-clip-text transparent-text
}

.text-sky {
  @apply bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text transparent-text
}

.text-blue {
  @apply bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text transparent-text
}

.text-indigo {
  @apply bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text transparent-text
}

.text-violet {
  @apply bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text transparent-text
}

.text-purple {
  @apply bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text transparent-text
}

.text-fuchsia {
  @apply bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text transparent-text
}

.text-pink {
  @apply bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text transparent-text
}

.text-rose {
  @apply bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text transparent-text
}

.transparent-text {
  -webkit-text-fill-color: transparent;
}
</style>
