<template>
  <div class="bg-sky-50 rounded-xl p-6 shadow-xl md:p-24">
    <h1 class="text-left font-bold text-6xl pb-8 pt-12 rainbow-text md:text-center">
      飞起来的 <br> 性别独角兽
    </h1>

    <div
      class="grid items-stretch divide-y-4 sm:gap-x-32 sm:gap-y-16 sm:divide-y-0 md:gap-x-32 md:gap-y-32 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-4">
      <div class="bg-red-100 lg:row-span-3" ref="captureTarget">
        <div class="svg-container">
          <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Layer 1</title>
              <path transform="rotate(117.847 490.195 263.99)" id="leftWing"
                d="m447.195,315.98998l0,-104l85.99999,104l-85.99999,0z" stroke="#000" fill="green" />
              <path transform="rotate(146.647 303.465 271.05)" id="rightWing"
                d="m257.46497,317.04997l0,-92.00001l92.00001,92.00001l-92.00001,0z" stroke="#000" fill="blue" />
              <ellipse ry="54" rx="54" id="header" cy="214.99998" cx="387.99998" stroke="#000"
                fill="rgba(100, 50, 100, 50)" />
              <ellipse ry="93" rx="70" id="body" cy="366.99998" cx="402.99998" stroke="#000"
                fill="rgba(100, 50, 200, 50)" />
              <path id="svg_7"
                d="m164.42116,208.12685c-5.85999,-0.90381 -9.02401,-9.35246 -3.16868,-12.44734c6.10404,-3.05159 9.73436,7.81196 3.06683,8.8738c-3.65094,1.32707 4.74016,3.54943 6.30411,1.31797c4.8868,-2.29497 4.13191,-8.2681 2.95617,-12.47481c-0.40803,-3.22275 -0.91829,-6.67298 -5.10909,-4.84139c-10.11065,0.78928 -18.11524,-9.16282 -17.31122,-18.47297c0.27297,-8.78154 7.68655,-14.79617 13.17612,-20.89431c-1.80224,-7.9779 -2.34641,-17.19456 2.87811,-24.14669c4.81239,-5.65132 7.25505,4.69013 8.06909,8.19926c1.80818,8.20259 -1.79718,16.8222 -7.79645,22.60433c0.57284,2.74269 1.13647,5.48722 1.72024,8.22775c6.33971,-1.1876 12.39126,4.01006 12.73705,10.09814c0.97959,5.49763 -2.65466,10.68945 -7.61868,13.05217c-0.08163,4.72088 2.60689,9.61785 1.64087,14.49284c-0.92772,5.04031 -6.75362,7.51193 -11.54446,6.41124l0,0zm6.61845,-21.50834c1.79614,-3.27133 -1.46181,-9.04872 -1.64068,-13.24787c0.07035,-7.32242 -7.93487,1.41843 -5.55429,5.0143c0.70568,2.12776 6.83082,6.02975 1.20439,3.62324c-5.87414,-3.41113 -5.60509,-12.18779 -0.23781,-15.89356c4.50296,-0.96776 1.75272,-6.79794 0.90425,-8.71295c-5.53059,4.8904 -11.79927,11.0484 -10.84546,18.96355c0.71847,7.41884 9.05396,11.91935 16.16961,10.2533l0,0zm3.72122,-1.41608c5.27487,-3.2856 5.10176,-11.90842 -0.66933,-14.58281c-6.15779,-3.157 -1.9401,5.11381 -1.82727,8.26198c0.85457,1.20516 0.37049,8.22747 2.4966,6.32084zm-6.50099,-39.52516c3.24472,-3.80845 6.95378,-9.30669 4.67503,-14.34197c-4.90727,-3.14295 -7.63428,5.35446 -7.75496,9.07529c-0.04464,2.41267 -0.4111,10.72873 3.07994,5.26668l0,0l0,0z"
                stroke="#000" fill="none" />
              <path id="svg_8"
                d="m554.71542,190.16578c-3.94653,-0.62735 -6.07741,-6.49171 -2.13402,-8.63992c4.11089,-2.11816 6.55581,5.42242 2.06542,6.15946c-2.4588,0.92115 3.19236,2.46372 4.24564,0.91482c3.29112,-1.59298 2.78272,-5.73904 1.9909,-8.65898c-0.2748,-2.23697 -0.61844,-4.63183 -3.44083,-3.36049c-6.80923,0.54785 -12.20009,-6.36007 -11.65861,-12.82241c0.18384,-6.09542 5.17667,-10.27028 8.87374,-14.50311c-1.21376,-5.5376 -1.58024,-11.93505 1.93833,-16.76064c3.24101,-3.92268 4.88606,3.2555 5.4343,5.69125c1.21776,5.69356 -1.21035,11.67659 -5.25068,15.69006c0.38579,1.90375 0.76538,3.80878 1.15853,5.71102c4.26961,-0.82434 8.34515,2.78345 8.57803,7.0093c0.65972,3.816 -1.78784,7.41973 -5.13096,9.05974c-0.05497,3.27685 1.75567,6.67592 1.10508,10.05974c-0.62479,3.49857 -4.54837,5.21416 -7.77486,4.45016l0,0zm4.45733,-14.92932c1.20965,-2.27068 -0.98449,-6.28088 -1.10495,-9.19558c0.04738,-5.08262 -5.34391,0.98455 -3.74065,3.48051c0.47525,1.47692 4.60036,4.18535 0.81112,2.51495c-3.95606,-2.36773 -3.77487,-8.45976 -0.16016,-11.032c3.03261,-0.67174 1.18041,-4.71857 0.60899,-6.04781c-3.72469,3.39451 -7.94647,7.66889 -7.3041,13.16293c0.48387,5.14954 6.09758,8.27343 10.88976,7.117l0,0zm2.50613,-0.98292c3.55247,-2.28059 3.43589,-8.26584 -0.45078,-10.12218c-4.14709,-2.19133 -1.3066,3.54959 -1.23061,5.73478c0.57553,0.83652 0.24952,5.71083 1.68139,4.3874zm-4.37823,-27.43511c2.18522,-2.64351 4.68317,-6.45993 3.1485,-9.95501c-3.3049,-2.18158 -5.14146,3.71662 -5.22274,6.29932c-0.03007,1.67468 -0.27686,7.447 2.07425,3.65569l0,0l0,0z"
                stroke="#000" fill="none" />
              <ellipse ry="26" rx="49.5" id="leftLeg" cy="432.99998" cx="286.49998" stroke="#000" fill="red" />
              <ellipse ry="40.5" rx="30" id="circle" cy="460.49998" cx="515.99997" stroke="#000"
                fill="rgba(200, 90, 10, 1)" />
              <ellipse ry="41.5" rx="26.5" id="rightLeg" cy="493.49998" cx="430.49998" stroke="#000"
                fill="rgba(200, 200, 10, 1)" />
              <path transform="rotate(-175.14 374.734 113.542)" id="anchor"
                d="m370.74513,82.54181l7.51805,17.45198l-3.1,2.05961l9.46667,14.95252l-3.09861,2.49713l11.70278,25.03878l-19.85,-19.1881l3.78611,-2.66469l-12.33333,-12.29016l4.41944,-3.79806l-13.02222,-12.89291l14.51111,-11.1661z"
                stroke="#000" fill="rgba(100, 90, 10, 1)" />
            </g>
          </svg>
        </div>

        
        <!-- 捕获并下载的按钮 -->
        <button @click="captureAndDownload">Capture and Download</button>

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
import html2canvas from "html2canvas";
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

const captureAndDownload = async () => {
  if (!captureTarget.value) return;

  const canvas = await html2canvas(captureTarget.value);
  const imgData = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imgData;
  link.download = "screenshot.png";
  document.body.appendChild(link); // 在某些浏览器中可能需要将链接添加到body
  link.click();
  document.body.removeChild(link); // 下载后从body移除链接
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

.svg-container {
  width: 100%;
  height: 90%;
}
</style>
