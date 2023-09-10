<template>
  <div class="bg-sky-50 rounded-xl p-6 shadow-xl md:p-24">
    <h1 class="text-left font-bold text-6xl pb-8 pt-12 rainbow-text md:text-center">
      飞起来的 <br> 性别独角兽
    </h1>
    <div
      class="grid items-stretch divide-y-4 sm:gap-x-32 sm:gap-y-16 sm:divide-y-0 md:gap-x-32 md:gap-y-32 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
      <div class="bg-red-100 lg:row-span-3">Unicorn</div>

      <IdentityGroupVue :groupTitle="genderIdentity.title" :category="genderIdentity.category"
        :mainColor="genderIdentity.mainColor" />

      <GenitalsVue />

      <IdentityGroupVue :groupTitle="genderExpression.title" :category="genderExpression.category"
        :mainColor="genderExpression.mainColor" />

      <HormoneLevelsVue />

      <GenderAssignedAtBirthVue />
      
      <ChromosomesVue />

      <IdentityGroupVue :groupTitle="sexualIdentity.title" :category="sexualIdentity.category"
        :mainColor="sexualIdentity.mainColor" />
      <IdentityGroupVue :groupTitle="physicallyAttractedTo.title" :category="physicallyAttractedTo.category"
        :mainColor="physicallyAttractedTo.mainColor" />
      <IdentityGroupVue :groupTitle="emotionallyAttractedTo.title" :category="emotionallyAttractedTo.category"
        :mainColor="emotionallyAttractedTo.mainColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChromosomesVue from "../components/Chromosomes.vue";
import GenderAssignedAtBirthVue from "../components/GenderAssignedAtBirth.vue";
import GenitalsVue from "../components/Genitals.vue";
import HormoneLevelsVue from "../components/HormoneLevels.vue";
import IdentityGroupVue from "../components/IdentityGroup.vue";

const genderIdentity = {
  title: "性别认同/性别身份",
  category: ["非二元性别", "跨性别", "女性", "男性", "Customer"],
  mainColor: "red",
};

const genderExpression = {
  title: "性别表达/性别气质",
  category: ["中性/未定义", "阴柔/女性化", "阳刚/男性化"],
  mainColor: "emerald",
};

const sexualIdentity = {
  title: "性/情欲倾向的认同/身份",
  category: ["酷儿", "双性恋", "同性恋", "异性恋", "Customer"],
  mainColor: "fuchsia",
};

const physicallyAttractedTo = {
  title: "生理上的吸引",
  category: [
    "无性吸引",
    "非二元性别者",
    "跨性别女性",
    "跨性别男性",
    "顺性别女性",
    "顺性别男性",
  ],
  mainColor: "pink",
};

const emotionallyAttractedTo = {
  title: "亲密关系上的吸引",
  category: [
    "无情感吸引",
    "非二元性别者",
    "跨性别女性",
    "跨性别男性",
    "顺性别女性",
    "顺性别男性",
  ],
  mainColor: "rose",
};
</script>

<style lang="scss" scoped>
.divide-line {
  border-bottom: dashed rgb(205, 205, 205);
}

.rainbow-text {
  width: max-content;
  // background-image: radial-gradient(to right, #d80b05, #f29c1d, #e6fc35, #00bd26, #002097, #770d87);
  background-image: linear-gradient(217deg, rgba(216, 11, 5, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 189, 38, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(119, 13, 135, 0.8), rgba(0, 0, 255, 0) 70.71%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
