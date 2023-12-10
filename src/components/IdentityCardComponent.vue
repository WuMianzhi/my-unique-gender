<template>
  <div class="identify-card card grid bg-white px-6 py-10 rounded-2xl 
            sm:bg-white  sm:rounded-lg
            md:bg-white md:p-12 md:rounded-lg md:shadow-lg
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left question-title">
      <a href="#" :class="['question-title']">
        {{ groupTitle }}
      </a>
    </h2>

    <div class="identify-card-body">
      <template v-for="(identity, index) in category" :key="index">
        <div class="w-full">
          <div class="flex items-center gap-8">
            <button class="linear-bg-btn">
              -
            </button>
            <input type="range" min=0 max=100 v-model.number="colorVal[index]" @change="valueChange" :class="[
              'w-full',
              'h-2',
              'rounded-full',
              'bg-gradient-to-r',
              'from-slate-100',
              `to-${mainColor}-500`,
            ]" />
            <button class="linear-bg-btn">
              +
            </button>
          </div>


          <div class="">
            <label class="identify-card__label text-center">
              {{ identity }}
            </label>
          </div>
        </div>

      </template>
      <template v-if="hasCustom">
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
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from 'vue';

const props = defineProps({
  groupTitle: {
    type: String,
    default: "testTitle",
  },
  category: {
    type: Array<string>,
  },
  mainColor: {
    type: String,
    default: 'red'
  },
  hasCustom: {
    type: Boolean,
    default: false
  }
});

const colorVal: Ref<number[]> = ref(Array(props.category?.length).fill(0))

const emit = defineEmits<{
  selfChange: [value: number[]]; // named tuple syntax
}>();


// 监听items的变化
watch(colorVal, (newItems, oldItems) => {
  console.log('Items changed:', newItems, oldItems);
  emit("selfChange", colorVal.value);
});

const valueChange = function () {
  console.log(colorVal.value);

  emit("selfChange", colorVal.value);
};

</script>

<style lang="scss" scoped>
.identify-card {
  background: linear-gradient(123.84deg, rgba(229, 229, 229, 0.2) 0.32%, rgba(205, 213, 224, 0.2) 32.08%, rgba(205, 213, 224, 0.2) 60.87%, rgba(255, 255, 255, 0.2) 95.61%),
    linear-gradient(160.61deg, rgba(255, 255, 255, 0.48) 13.02%, rgba(255, 255, 255, 0.4) 55.88%, rgba(255, 255, 255, 0) 99.64%);

  &-body {
    // @apply grid gap-1 items-center;
    // grid-template-columns: max-content 1fr;
  }

  &__label {
    // @apply pr-4 w-auto block text-right;
    font-family: Dosis;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: center;
    color: #BCBCBC;

    &-input {
      width: 10rem;
    }
  }
}

.question-title {
  font-family: Dosis;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  color: #BCBCBC
}

.linear-bg-btn {
  box-sizing: border-box;
  border: none;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: radial-gradient(64.29% 64.29% at 50% 50%, #E0E6EC 0%, rgba(224, 230, 236, 0) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
  padding: 8px;
  line-height: 8px;
  font-size: 0.5rem;
  box-shadow: -7px -7px 12px 0px #FFFFFF99;
  box-shadow: 3px 3px 12px 0px #A3B1C699;

}
</style>