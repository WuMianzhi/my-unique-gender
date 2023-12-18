import { reactive } from "vue";
import { GenderGroup } from "../../types/index";

export const sexualIdentity: GenderGroup = reactive({
  title: "性/情欲倾向的认同/身份",
  category: [
    { name: "酷儿", colorSeries: ["ff9292", "ffd6a7"], value: 50 },
    { name: "双性恋", colorSeries: ["ffd6a7", "fffb8f"], value: 50 },
    { name: "同性恋", colorSeries: ["fffb8f", "c9ffaf"], value: 50 },
    { name: "异性恋", colorSeries: ["c9ffaf", "90f8ff"], value: 50 },
    { name: "Customer", colorSeries: ["90f8ff", "9390ff"], value: 50 },
  ],
  mainColor: "fuchsia",
  hasCustom: true,
});
