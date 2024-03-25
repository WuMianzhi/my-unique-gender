<template>
  <div
    class="identify-card m-4 card grid flex-1 bg-white p-6 md:bg-white md:p-12 md:rounded-lg md:shadow-lg lg:bg-slate-50 lg:p-6 lg:shadow-lg"
  >
    <h2
      class="text-2xl z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left"
    >
      <a href="#" class="question-title">
        {{ title }}
      </a>
    </h2>

    <div class="identify-card-body">
      <slot name="before-slot"></slot>
      <template v-for="(identity, index) in category" :key="index">
        <div class="w-full py-2">
          <div class="w-full flex items-center gap-2">
            <!-- 减少一级 -->
            <a
              class="linear-bg-btn click-btn flex m-0 p-0"
              @click="modValByParam(index, -5)"
            >
              <img src="../assets/svg/minus.svg" alt="" srcset="" />
            </a>
            <!-- 中间的按钮 -->
            <div class="flex-1 flex justify-between">
              <template v-for="i in 20" :key="i">
                <button
                  @click="modVal(index, i * 5)"
                  :style="{
                    'background-color': calInterColorByHex(
                      identity.colorSeries[0],
                      identity.colorSeries[1],
                      i
                    ),
                  }"
                  :class="[
                    ' h-4 p-0 b-0 bg-gray-900 step-btn transition-all',
                    i * 5 == identity.value ? 'relative bottom-2' : '',
                  ]"
                ></button>
              </template>
            </div>
            <!--  添加一级 -->
            <a
              class="linear-bg-btn click-btn m-0 p-0"
              @click="modValByParam(index, 5)"
            >
              <img src="../assets/svg/plus.svg" alt="" srcset="" />
            </a>
          </div>

          <div
            v-if="identity.name == 'customer'"
            class="p-0 m-0 h-4 flex items-center justify-around align-baseline bg-transparent rounded"
          >
            <input
              type="text"
              name="customer"
              id="customer"
              v-bind:placeholder="$t('customize.placeholder')"
              class="identify-card__label text-center rounded-lg bg-transparent text-sm"
            />
          </div>

          <div
            v-else
            class="p-0 m-0 h-4 flex items-center justify-around align-baseline relative bottom-1"
          >
            <label class="identify-card__label text-center">
              {{ identity.name }}
            </label>
          </div>
        </div>
      </template>
      <!-- <template v-if="hasCustom">
        <input type="range" min="0" max="100" value="0" :class="[
          'w-full',
          'h-2',
          'rounded-full',
          'bg-gradient-to-r',
          'from-slate-100',
          `to-${mainColor}-500`,
        ]" />

        <label :class="'identify-card__label'">
          <input :class="['identify-card__label-input',
            'flex-none',
            'input-gender',
            'bg-slate-100',
            'rounded',
            'focus:outline-none',
            'focus:ring',
            'focus:border-blue-500',
            'rounded',
          ]" placeholder="自定义" />
        </label>
      </template> -->
      <slot name="afterSlot"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, watch, Ref } from 'vue';
import { GenderGroup } from "../types";

defineProps<GenderGroup>();

const emit = defineEmits<{
  selfChange: [index: number, value: number];
  updateVal: [index: number, value: number];
}>();

const modVal = (index: number, newVal: number) => {
  emit("updateVal", index, newVal);
};

const modValByParam = (index: number, param: number) => {
  emit("selfChange", index, param);
};

const calInterColorByHex = (
  sColor: string,
  eColor: string,
  step: number,
  all = 20
) => {
  const sRGB = hex2RGB(sColor);
  const eRGB = hex2RGB(eColor);
  const colorGap = sRGB.map((v, i) => eRGB[i] - v);
  const result = sRGB.map((v, i) => v + Math.ceil(colorGap[i] * (step / all)));

  return `rgb(${result.join(",")})`;
};

const hex2RGB = (hex: string) => {
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16),
  ];
};
</script>

<style lang="scss" scoped>
.identify-card {
  // background: linear-gradient(123.84deg, rgba(229, 229, 229, 0.2) 0.32%, rgba(205, 213, 224, 0.2) 32.08%, rgba(205, 213, 224, 0.2) 60.87%, rgba(255, 255, 255, 0.2) 95.61%),
  //   linear-gradient(160.61deg, rgba(255, 255, 255, 0.48) 13.02%, rgba(255, 255, 255, 0.4) 55.88%, rgba(255, 255, 255, 0) 99.64%);
  &__label {
    height: 16px;
    font-family: Dosis;
    font-size: 12px;
    font-weight: bolder;
    text-align: center;
    color: #bcbcbc;
    font-weight: bolder;
    -webkit-text-stroke: 0.8px rgba(235, 235, 235, 0.5);

    &-input {
      width: 10rem;
    }
  }
}

.question-title {
  height: 26px;
  -webkit-text-stroke: 0.8px rgba(255, 255, 255, 0.5);
  font-family: Dosis;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  color: #bcbcbc;
  // text-shadow: 1px 6px 6px #fff,0 0 0 #f00,1px 3px 6px #fff;}
}

.step-btn {
  width: 6px;
  box-shadow: inset 1.5px 1.5px 3px 0 rgba(0, 0, 0, 0.25);
  border: solid 0.5px rgba(255, 255, 255, 0.5);
}

.linear-bg-btn {
  box-sizing: border-box;
  border: solid 1.5px rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;

  box-shadow: -6.7px -6.7px 11.9px 0 rgba(255, 255, 255, 0.6),
    3px 3px 11.9px 0 rgba(163, 177, 198, 0.6);
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(circle at 50% 50%, #e0e6ec, rgba(224, 230, 236, 0) 91%);

  color: #bcbcbc;
  -webkit-text-stroke: 0.8px rgba(255, 255, 255, 0.5);
  font-family: Dosis;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-inner {
  position: relative;
  top: -2px;
  // width: 1rem;
  // line-height: 1rem;
  // height: 1rem;
  // padding: 0;
  // line-height: 0.1rem;
}
</style>
