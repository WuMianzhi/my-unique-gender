<template>
  <div class="bg-sky-50 p-24 rounded-xl shadow-xl">
    <h1 class="text-left font-bold pb-8 rainbow-text ">The Flying Gender Unicorn</h1>
    <div class="grid grid-cols-3 gap-x-10 gap-y-4  items-stretch">
      <div class="bg-red-100 row-span-5">
        Unicorn
      </div>
      <IdentityGroupVue :groupTitle="genderIdentity.title" :category="genderIdentity.category"
        :mainColor="genderIdentity.mainColor" />
      <GenitalsVue />

      <div class=" divide-line"></div>
      <div class=" divide-line"></div>

      <IdentityGroupVue :groupTitle="genderExpression.title" :category="genderExpression.category"
        :mainColor="genderExpression.mainColor" />
      <HormoneLevelsVue />

      <div class=" divide-line"></div>
      <div class=" divide-line"></div>

      <GenderAssignedAtBirthVue />
      <ChromosomesVue />

      <div class="col-span-3 divide-line"></div>

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
  title: " Gender Identity",
  category: ["Non-Binary", "Transgender", "Woman/Girl", "Man/Boy", "Customer"],
  mainColor: 'green'
};

const genderExpression = {
  title: " Gender Expression",
  category: ["Nature/Undefined", "Feminine", "Masculine"],
  mainColor: 'teal'
};

const sexualIdentity = {
  title: "Sexual Identity",
  category: ["Queer", "Bisexual", "Gay/Lesbian", "Straight", "Customer"],
  mainColor: 'lime'
};

const physicallyAttractedTo = {
  title: "Physically Attracted To",
  category: [
    "No one",
    "Non-Binary People",
    "Trans Men",
    "Trans Women",
    "Cisgender Women",
    "Cisgender Men",
  ],
  mainColor: 'orange'
};

const emotionallyAttractedTo = {
  title: "Emotionally Attracted To",
  category: [
    "No one",
    "Non-Binary People",
    "Trans Men",
    "Trans Women",
    "Cisgender Women",
    "Cisgender Men",
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
