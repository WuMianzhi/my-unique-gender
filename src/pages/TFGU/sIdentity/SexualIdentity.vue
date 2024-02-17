<template>
  <div>
    <IdentityCardComponent :title="sexualIdentity.title" :category="sexualIdentity.category"
            :mainColor="sexualIdentity.mainColor" :has-custom="sexualIdentity.hasCustom" @self-change="updateSIdByMod"
            @update-val="updateSId">

          </IdentityCardComponent>
  </div>
</template>

<script setup lang="ts">
import IdentityCardComponent from "../../../components/IdentityCardComponent.vue";
import { updateVal, updateValByMod } from '../../../utils/updateVal';
import { sexualIdentity } from './SId';
const updateSId = (index: number, val: number) =>
  updateVal(index, val, sexualIdentity)

const updateSIdByMod = (index: number, param: number) =>
  updateValByMod(index, param, sexualIdentity)
</script>

<style scoped>

</style>