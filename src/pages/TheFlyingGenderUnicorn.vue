<template>
  <div class="bg-sky-50 rounded-xl shadow-xl md:p-24 ">
    <h1 class="text-left font-bold pb-8 pt-12 rainbow-text md:text-center">The Flying Gender Unicorn</h1>
    <div class="grid items-stretch divide-y-4 
                sm:gap-x-32 sm:gap-y-16 sm:divide-y-0
                md:gap-x-32 md:gap-y-32 
                lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4
                ">
      <div class="bg-red-100 lg:row-span-3 ">
        Unicorn
      </div>
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
  title: "性别认同",
  category: ["非二元", "跨性别", "女性", "男性", "Customer"],
  mainColor: 'green'
};

const genderExpression = {
  title: "性别表达",
  category: ["Nature/Undefined", "女性化", "男性化"],
  mainColor: 'teal'
};

const sexualIdentity = {
  title: "性向认同",
  category: ["Queer", "Bisexual", "Gay/Lesbian", "Straight", "Customer"],
  mainColor: 'lime'
};

const physicallyAttractedTo = {
  title: "生理性吸引",
  category: [
    "无性吸引",
    "非二元性别",
    "跨性别女性",
    "跨性别男性",
    "顺性别女性",
    "顺性别男性",
  ],
  mainColor: 'orange'
};

const emotionallyAttractedTo = {
  title: "浪漫吸引",
  category: [
    "无浪漫吸引",
    "非二元性别",
    "跨性别女性",
    "跨性别男性",
    "顺性别女性",
    "顺性别男性",
  ],
  mainColor: 'rose'
};
</script>

<style lang="scss" scoped>
.divide-line {
  border-bottom: dashed rgb(205, 205, 205);
}

.rainbow-text {
  // background-image: linear-gradient(to right, #d80b05, #f29c1d, #e6fc35, #00bd26, #002097, #770d87);
  // background-clip: text;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
}
</style>
