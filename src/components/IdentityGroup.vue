<template>
  <div>
    <h2 class="text-xl  text-left"> <a href="#" class=" font-semibold "> &#x1F308 {{ GroupTitle }} </a></h2>
    <template v-for="identity in identityGroup">
      <ColorSlider :title="identity" @change="changeListener" />
    </template>
  </div>
</template>

<script setup lang="ts">
import ColorSlider from "../components/ColorSlider.vue";
const GroupTitle = 'Sexual Identity'

const changeListener = function (change: number) {
  console.log("changed:", change);
};

const identityGroup = ["Queer", "Bisexual", "Gay/Lesbian", "Straight", 'Customer'];
</script>

<style scoped></style>
