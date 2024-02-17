<template>
  <div>
    <IdentityCardComponent :title="genderExpression.title" :category="genderExpression.category"
      :mainColor="genderExpression.mainColor" :has-custom="genderExpression.hasCustom" @selfChange="updateGexByMod"
      @update-val="updateGex">
      <template #afterSlot>
        <!-- 出生指派性别 -->
        <GenderAssignedAtBirthVue />
      </template>
    </IdentityCardComponent>
  </div>
</template>

<script setup lang="ts">
import GenderAssignedAtBirthVue from "../../../components/GenderAssignedAtBirth.vue";
import IdentityCardComponent from "../../../components/IdentityCardComponent.vue";
import { genderExpression } from './GEx';
import { updateVal, updateValByMod } from '../../../utils/updateVal';

const updateGex = (index: number, val: number) =>
  updateVal(index, val, genderExpression)

const updateGexByMod = (index: number, val: number) =>
  updateValByMod(index, val, genderExpression)

</script>

<style scoped></style>