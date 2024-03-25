<template>
  <div class="">
    <h2
      class="text-2xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left"
    >
      <a href="#" class="question-title"
        >{{ $t("genderAssignedAtBirth.title") }}
      </a>
    </h2>
    <div class="flex justify-between px-6">
      <div
        class="grid cursor-pointer gap-4 justify-center justify-items-center"
        v-for="gender in genderAssign"
        :key="gender.iconName"
      >
        <input
          :id="gender.id + 'Assign'"
          class="hidden"
          name="genderAssign"
          @click="gender.checked = !gender.checked"
        />
        <label :for="gender.id + 'Assign'">
          <img
            class="w-12 h-12 rotate-90 transition-all"
            src="../assets/startB.svg"
            alt="start"
            srcset=""
            v-show="gender.checked"
          />
          <img
            class="w-12 h-12 transition-all"
            src="../assets/startA.svg"
            alt="start"
            srcset=""
            v-show="!gender.checked"
          />
        </label>
        <label
          :for="gender.id + 'Assign'"
          class="cursor-pointer label subtitle"
          @click=""
          >{{ gender.name }}</label
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from "vue";
import { setupI18n } from "../locales/setupI18n";
const genderAssign = reactive([
  {
    id: "female",
    name: setupI18n.global.t("genderAssignedAtBirth.female"),
    iconName: "solar:star-broken",
    checked: false,
  },
  {
    id: "intersex",
    name: setupI18n.global.t("genderAssignedAtBirth.intersex"),
    iconName: "solar:star-broken",
    checked: false,
  },
  {
    id: "male",
    name: setupI18n.global.t("genderAssignedAtBirth.male"),
    iconName: "solar:star-broken",
    checked: false,
  },
]);

watch(
  () => genderAssign[0].checked,
  () => {
    genderAssign[1].checked = !genderAssign[0].checked;
  }
);

watch(
  () => genderAssign[1].checked,
  () => {
    genderAssign[0].checked = !genderAssign[1].checked;
  }
);
</script>

<style lang="scss" scoped>
.gender-icon {
  width: 2rem;
  height: 2rem;
  color: #222;
}
</style>
