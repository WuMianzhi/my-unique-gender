<template>
  <div>
    <IdentityCardComponent :title="emotionallyAttractedTo.title" :category="emotionallyAttractedTo.category"
      :mainColor="emotionallyAttractedTo.mainColor" :has-custom="emotionallyAttractedTo.hasCustom"
      @self-change="updateEmoAddByMod" @update-val="updateEmoAdd">
      <template #before-slot>
        <IsAttractiveCom></IsAttractiveCom>
      </template>
    </IdentityCardComponent>
  </div>
</template>

<script setup lang="ts">
import { emotionallyAttractedTo } from "./EmoAdd"
import IsAttractiveCom from "../../../components/IsAttractiveCom.vue";
import IdentityCardComponent from "../../../components/IdentityCardComponent.vue";
import { updateVal, updateValByMod } from '../../../utils/updateVal';

const updateEmoAdd = (index: number, val: number) =>
  updateVal(index, val, emotionallyAttractedTo)

const updateEmoAddByMod = (index: number, param: number) =>
  updateValByMod(index, param, emotionallyAttractedTo)

</script>

<style scoped></style>