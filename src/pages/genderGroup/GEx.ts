import { reactive } from "vue";
import { GenderGroup } from "../../types/index";

export const genderExpression: GenderGroup = reactive({
  title: "性别表达/性别气质",
  category: [
    { name: "中性/不被定义的", colorSeries: ["ff9292", "ffd6a7"], value: 50 },
    { name: "阴柔/女性化", colorSeries: ["ffd6a7", "fffb8f"], value: 50 },
    { name: "阳刚/男性化", colorSeries: ["fffb8f", "c9ffaf"], value: 50 },
  ],
  mainColor: "emerald",
  hasCustom: false,
});
