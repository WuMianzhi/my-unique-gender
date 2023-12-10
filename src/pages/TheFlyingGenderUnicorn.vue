<template>
  <div class="bg-sky-50 rounded-xl shadow-xl md:p-24">
    <!-- <h1 class="text-left font-bold text-6xl pb-8 pt-12 rainbow-text md:text-center">
      飞起来的 <br> 性别独角兽
    </h1> -->

    <div
      class="grid items-stretch divide-y-4 sm:gap-x-32 sm:gap-y-16 sm:divide-y-0 md:gap-x-32 md:gap-y-32 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
      <div class="lg:row-span-3 relative" ref="captureTarget">

        <div class="svg-container absolute">

        </div>

        <div class="blur-background flex items-center justify-center w-64 h-64 pt-16">
          <img src="../assets/unicorn.svg" alt="unicorn" srcset="" class="p-8">
        </div>



        <!-- 捕获并下载的按钮 -->
        <!-- <button @click="captureAndDownload">Capture and Download</button> -->

      </div>

      <!-- 性别认同 / 性别身份 -->
      <IdentityCardComponent :groupTitle="genderIdentity.title" :category="genderIdentity.category"
        :mainColor="genderIdentity.mainColor" :has-custom="genderIdentity.hasCustom" @selfChange="changeHandle" />

      <!-- 外生殖器形态 -->
      <GenitalsVue />

      <!-- 性别表达气质 -->
      <IdentityCardComponent :groupTitle="genderExpression.title" :category="genderExpression.category"
        :mainColor="genderExpression.mainColor" :has-custom="genderExpression.hasCustom" />

      <!-- 性激素水平 -->
      <HormoneLevelsVue />

      <!-- 出生指派性别 -->
      <GenderAssignedAtBirthVue />

      <!-- 性染色体 -->
      <ChromosomesVue />

      <!-- 性 / 情欲倾向的认同 / 身份 -->
      <IdentityCardComponent :groupTitle="sexualIdentity.title" :category="sexualIdentity.category"
        :mainColor="sexualIdentity.mainColor" :has-custom="sexualIdentity.hasCustom" />

      <!-- 生理上的吸引 -->
      <IdentityCardComponent :groupTitle="physicallyAttractedTo.title" :category="physicallyAttractedTo.category"
        :mainColor="physicallyAttractedTo.mainColor" :has-custom="physicallyAttractedTo.hasCustom" />

      <!-- 亲密关系上的吸引 -->
      <IdentityCardComponent :groupTitle="emotionallyAttractedTo.title" :category="emotionallyAttractedTo.category"
        :mainColor="emotionallyAttractedTo.mainColor" :has-custom="emotionallyAttractedTo.hasCustom" />



    </div>
  </div>
</template>

<script setup lang="ts">
// import html2canvas from "html2canvas";
import ChromosomesVue from "../components/Chromosomes.vue";
import GenderAssignedAtBirthVue from "../components/GenderAssignedAtBirth.vue";
import GenitalsVue from "../components/Genitals.vue";
import HormoneLevelsVue from "../components/HormoneLevels.vue";
import IdentityCardComponent from "../components/IdentityCardComponent.vue";
import { ref } from "vue";

const genderIdentity = {
  title: "性别认同/性别身份",
  category: ["非二元性别", "跨性别", "女性", "男性"],
  mainColor: "red",
  hasCustom: true
};

const genderExpression = {
  title: "性别表达/性别气质",
  category: ["中性/未定义", "阴柔/女性化", "阳刚/男性化"],
  mainColor: "emerald",
  hasCustom: false
};

const sexualIdentity = {
  title: "性/情欲倾向的认同/身份",
  category: ["酷儿", "双性恋", "同性恋", "异性恋", "Customer"],
  mainColor: "fuchsia",
  hasCustom: true
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
  hasCustom: false
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
  hasCustom: false
};

const changeHandle = (change: number[]) => {
  console.log('changed', change);
}

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
</style>
