<template>
  <div>
    <IdentityCardComponent :title="genderIdentity.title" :category="genderIdentity.category"
      :mainColor="genderIdentity.mainColor" :has-custom="genderIdentity.hasCustom" @selfChange="updateGIdByMod"
      @update-val="updateGId" />
  </div>
</template>

<script setup lang="ts">
import IdentityCardComponent from "../../../components/IdentityCardComponent.vue";
import { genderIdentity } from './GId'
import { updateVal, updateValByMod } from '../../../utils/updateVal';

const updateGId = (index: number, val: number) =>
  updateVal(index, val, genderIdentity)

const updateGIdByMod = (index: number, param: number) =>
  updateValByMod(index, param, genderIdentity)

</script>

<style scoped></style>