<template>
  <div>
    <IdentityCardComponent :title="physicallyAttractedTo.title" :category="physicallyAttractedTo.category"
      :mainColor="physicallyAttractedTo.mainColor" :has-custom="physicallyAttractedTo.hasCustom"
      @self-change="updatePhyAddByMod" @update-val="updatePhyAdd">
      <template #before-slot>
        <IsAttractiveCom></IsAttractiveCom>
      </template>
    </IdentityCardComponent>
  </div>
</template>

<script setup lang="ts">
import IsAttractiveCom from "../../../components/IsAttractiveCom.vue";
import IdentityCardComponent from "../../../components/IdentityCardComponent.vue";
import {physicallyAttractedTo} from "./PhyAdd";
import { updateVal, updateValByMod } from '../../../utils/updateVal';

const updatePhyAddByMod = (index: number, param: number) =>
  updateValByMod(index, param, physicallyAttractedTo)

  const updatePhyAdd = (index: number, val: number) =>
  updateVal(index, val, physicallyAttractedTo)
</script>

<style scoped></style>