<template>
  <div class=" rounded-xl p-0 md:p-24">
    <!-- <h1 class="text-left font-bold text-6xl pb-8 pt-12 rainbow-text md:text-center">
      飞起来的 <br> 性别独角兽
    </h1> -->

    <div
      class="grid items-stretch sm:gap-x-32 sm:gap-y-16 sm:divide-y-0 md:gap-x-32 md:gap-y-32 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
      <div class="lg:row-span-3 relative" ref="captureTarget">

        <div class="svg-container absolute"> </div>

        <div class="blur-background flex items-center justify-center w-64 h-64">
          <img src="../assets/unicorn.svg" alt="unicorn" srcset="" class="p-8">
        </div>

        <!-- 捕获并下载的按钮 -->
        <!-- <button @click="captureAndDownload">Capture and Download</button> -->

      </div>

      <div class="px-6">
        <!-- 性别认同 / 性别身份 -->
        <div v-show="current === 1">
          <IdentityCardComponent :title="genderIdentity.title" :category="genderIdentity.category"
            :mainColor="genderIdentity.mainColor" :has-custom="genderIdentity.hasCustom" @selfChange="updateGIdByMod"
            @update-val="updateGId" />
        </div>

        <!-- 外生殖器形态 -->
        <!-- <GenitalsVue /> -->

        <!-- 性别表达气质 -->
        <div v-show="current === 2">
          <IdentityCardComponent :title="genderExpression.title" :category="genderExpression.category"
            :mainColor="genderExpression.mainColor" :has-custom="genderExpression.hasCustom" @selfChange="updateGexByMod"
            @update-val="updateGex">
            <template #afterSlot>
              <!-- 出生指派性别 -->
              <GenderAssignedAtBirthVue />
            </template>
          </IdentityCardComponent>
        </div>

        <div v-show="current === 3">
          <PhysioChar></PhysioChar>
        </div>

        <!-- 性激素水平 -->
        <!-- <HormoneLevelsVue /> -->


        <!-- 性染色体 -->
        <!-- <ChromosomesVue /> -->

        <!-- 性 / 情欲倾向的认同 / 身份 -->
        <div v-show="current === 4">
          <IdentityCardComponent :title="sexualIdentity.title" :category="sexualIdentity.category"
            :mainColor="sexualIdentity.mainColor" :has-custom="sexualIdentity.hasCustom" @self-change="updateSIdByMod"
            @update-val="updateSId">

          </IdentityCardComponent>
        </div>

        <!-- 生理上的吸引 -->
        <div v-show="current === 5">
          <IdentityCardComponent :title="physicallyAttractedTo.title" :category="physicallyAttractedTo.category"
            :mainColor="physicallyAttractedTo.mainColor" :has-custom="physicallyAttractedTo.hasCustom"
            @self-change="updatePhyAddByMod" @update-val="updatePhyAdd">
            <template #before-slot>
              <IsAttractiveCom></IsAttractiveCom>
            </template>
          </IdentityCardComponent>
        </div>

        <!-- 亲密关系上的吸引 -->
        <div v-show="current === 6">
          <IdentityCardComponent :title="emotionallyAttractedTo.title" :category="emotionallyAttractedTo.category"
            :mainColor="emotionallyAttractedTo.mainColor" :has-custom="emotionallyAttractedTo.hasCustom"
            @self-change="updateEmoAddByMod" @update-val="updateEmoAdd">
            <template #before-slot>
              <IsAttractiveCom></IsAttractiveCom>
            </template>
          </IdentityCardComponent>
        </div>
      </div>

      <div class="flex justify-between items-center  ">
        <button @click="prevPage" class="p-0 m-0 bg-transparent">
          <img src="../assets/left.svg" />
        </button>
        <div class="steps rounded-full">
          <div class="flex justify-between backdrop-blur-xl items-center h-full rounded-full">
            <button class="step-btn"></button>
            <button class="step-btn"></button>
            <button class="step-btn"></button>
            <button class="step-btn"></button>
            <button class="step-btn"></button>
            <button class="step-btn"></button>
          </div>
        </div>
        <button @click="nextPage" class="p-0 m-0 bg-transparent">
          <img src="../assets/right.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import html2canvas from "html2canvas";
// import ChromosomesVue from "../components/Chromosomes.vue";
import GenderAssignedAtBirthVue from "../components/GenderAssignedAtBirth.vue";
// import GenitalsVue from "../components/Genitals.vue";
// import HormoneLevelsVue from "../components/HormoneLevels.vue";
import IdentityCardComponent from "../components/IdentityCardComponent.vue";
import { ref } from "vue";
import { genderIdentity } from './genderGroup/GId'
import { genderExpression } from './genderGroup/GEx'
import { sexualIdentity } from './genderGroup/SId'
import { GenderGroup } from "../types/index";
import { physicallyAttractedTo } from './genderGroup/PhyAdd'
import { emotionallyAttractedTo } from './genderGroup/EmoAdd'
import PhysioChar from "../components/PhysioChar.vue";
import IsAttractiveCom from "../components/IsAttractiveCom.vue";

const updateVal = (index: number, val: number, ds: GenderGroup) =>
  ds.category[index].value = val

const updateValByMod = (index: number, mod: number, ds: GenderGroup) => {
  const res = ds.category[index].value + mod;
  (res < 101 && res > 0) ? ds.category[index].value += mod : null
}

const updateGex = (index: number, val: number) =>
  updateVal(index, val, genderExpression)

const updateGexByMod = (index: number, val: number) =>
  updateValByMod(index, val, genderExpression)

const updateGId = (index: number, val: number) =>
  updateVal(index, val, genderIdentity)

const updateGIdByMod = (index: number, param: number) =>
  updateValByMod(index, param, genderIdentity)

const updateSId = (index: number, val: number) =>
  updateVal(index, val, sexualIdentity)

const updateSIdByMod = (index: number, param: number) =>
  updateValByMod(index, param, sexualIdentity)

const updatePhyAdd = (index: number, val: number) =>
  updateVal(index, val, physicallyAttractedTo)

const updatePhyAddByMod = (index: number, param: number) =>
  updateValByMod(index, param, physicallyAttractedTo)

const updateEmoAdd = (index: number, val: number) =>
  updateVal(index, val, emotionallyAttractedTo)

const updateEmoAddByMod = (index: number, param: number) =>
  updateValByMod(index, param, emotionallyAttractedTo)

const current = ref(1)

const nextPage = () => current.value < 6 ? (current.value += 1) : null

const prevPage = () => current.value > 1 ? (current.value -= 1) : null;


// 使用 ref 创建一个引用，以指向我们想要捕获的 DOM 元素
const captureTarget = ref(null);

// const captureAndDownload = async () => {
//   if (!captureTarget.value) return;

//   const canvas = await html2canvas(captureTarget.value);
//   const imgData = canvas.toDataURL("image/png");
//   const link = document.createElement("a");
//   link.href = imgData;
//   link.download = "screenshot.png";
//   document.body.appendChild(link); // 在某些浏览器中可能需要将链接添加到body
//   link.click();
//   document.body.removeChild(link); // 下载后从body移除链接
// };

</script>

<style lang="scss" scoped>
.divide-line {
  border-bottom: dashed rgb(205, 205, 205);
}

.rainbow-text {
  width: max-content;
  background-size: 10%;
  // background-image: radial-gradient(to right, #d80b05, #f29c1d, #e6fc35, #00bd26, #002097, #770d87);
  background-image: linear-gradient(217deg, rgba(216, 11, 5, 0.8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 189, 38, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(119, 13, 135, 0.8), rgba(0, 0, 255, 0) 70.71%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.svg-container {
  top: 50%;
  left: 50%;
  width: 248px;
  height: 248px;
  border-radius: 50%;
  background-image: conic-gradient(from 180deg at 50% 50%, #FFCA55 -24.22deg, #FF685D 19.49deg, #FF64F0 60.23deg, #5155FF 137.93deg, #54EDFF 212.82deg, #5BFF7B 256.57deg, #FDFF59 294.74deg, #FFCA55 335.78deg, #FF685D 379.49deg);
  transform: translate(-50%, -50%);
}

.blur-background {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(36px);
}

.steps {
  width: 12rem;
  height: 2rem;
  box-shadow: -5.2px -5.2px 9.2px 0 rgba(255, 255, 255, 0.6);
  border: solid 2.4px rgba(255, 255, 255, 0.3);
  background-image: linear-gradient(to right, #f00 0%, #f90 20%, #fff500 41%, #00ff29 61%, #0038ff 81%, #8f00ff 101%);
}

.step-btn {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  padding: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
}
</style>
