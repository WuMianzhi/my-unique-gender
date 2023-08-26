<template>
  <div>
    <h1 class="text-left font-bold pb-8 ">The Flying Gender Unicorn</h1>
    <div class="grid grid-cols-3 gap-x-10 gap-y-4  items-stretch">
      <div class="bg-red-100 row-span-5">
        Unicorn
      </div>
      <IdentityGroupVue :groupTitle="genderIdentity.title" :category="genderIdentity.category" />
      <div class="bg-red-100">
        Genitals
      </div>

      <div class=" divide-line"></div>
      <div class=" divide-line"></div>

      <IdentityGroupVue :groupTitle="genderExpression.title" :category="genderExpression.category" />
      <div class="bg-red-100">
        Hormone Levels(Vary Over Time)
      </div>

      <div class=" divide-line"></div>
      <div class=" divide-line"></div>

      <div class="bg-red-100">
        Gender Assigned At Birth
      </div>
      <div class="bg-red-100">
        Chromosomes
      </div>

      <div class="col-span-3 divide-line"></div>

      <IdentityGroupVue :groupTitle="sexualIdentity.title" :category="sexualIdentity.category" />
      <IdentityGroupVue :groupTitle="physicallyAttractedTo.title" :category="physicallyAttractedTo.category" />
      <IdentityGroupVue :groupTitle="emotionallyAttractedTo.title" :category="emotionallyAttractedTo.category" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IdentityGroupVue from "../components/IdentityGroup.vue";
const genderIdentity = {
  title: " Gender Identity",
  category: ["Non-Binary", "Transgender", "Woman/Girl", "Man/Boy", "Customer"],
};

const genderExpression = {
  title: " Gender Expression",
  category: ["Nature/Undefined", "Feminine", "Masculine"],
};

const sexualIdentity = {
  title: "Sexual Identity",
  category: ["Queer", "Bisexual", "Gay/Lesbian", "Straight", "Customer"],
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
};
</script>

<style lang="scss" scoped>
.divide-line {
  border-bottom: dashed rgb(205, 205, 205);
}
</style>
