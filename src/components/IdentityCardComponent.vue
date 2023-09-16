<template>
  <div class="card grid bg-white px-6 py-10 rounded-2xl my-8 shadow-sm
            sm:bg-white sm:p-12 sm:rounded-md sm:shadow-md
            md:bg-white md:p-12 md:rounded-lg md:shadow-lg
              lg:bg-slate-50 lg:p-6 lg:shadow-lg">
    <h2 class="text-4xl pb-6 z-10 md:text-center md:text-4xl lg:text-3xl lg:text-left ">
      <a href="#" :class="['font-semibold', `text-${mainColor}`, 'transparent-text']">
        {{ groupTitle }}
      </a>
    </h2>

    <div class="identify-card-body">
      <template v-for="identity in category">
        <label class="identify-card__label">
          <span>
            {{ identity }}
          </span>
          :
        </label>

        <input type="range" min="0" max="100" value="0" :class="[
          'w-full',
          'h-2',
          'rounded-full',
          'bg-gradient-to-r',
          'from-slate-100',
          `to-${mainColor}-500`,
        ]" />
      </template>
      <template v-if="hasCustom">
        <label :class="'identify-card__label'">
          <input :class="['identify-card__label-input',
            'flex-none',
            'input-gender',
            'bg-slate-100',
            'rounded',
            'px-2',
            'focus:outline-none',
            'focus:ring',
            'focus:border-blue-500',
            'rounded',
          ]" placeholder="自定义" />:
        </label>

        <input type="range" min="0" max="100" value="0" :class="[
          'w-full',
          'h-2',
          'rounded-full',
          'bg-gradient-to-r',
          'from-slate-100',
          `to-${mainColor}-500`,
        ]" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
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


</script>

<style lang="scss" scoped>
.identify-card {
  &-body {
    @apply grid gap-1 items-center;
    grid-template-columns: max-content 1fr;
  }

  &__label {
    @apply pr-4 w-auto block text-right;

    &-input {
      width: 10rem;
    }
  }
}
</style>