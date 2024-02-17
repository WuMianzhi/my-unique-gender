import { reactive } from "vue";
import { GenderGroup } from "../../../types/index";

export const physicallyAttractedTo: GenderGroup = reactive({
  title: "生理上被怎样的人吸引",
  category: [
    // { name:"无性吸引",colorSeries: , value: 50 },
    { name: "非二元性别者", colorSeries: ["ff9292", "ffd6a7"], value: 50 },
    { name: "跨性别女性", colorSeries: ["ffd6a7", "fffb8f"], value: 50 },
    { name: "跨性别男性", colorSeries: ["fffb8f", "c9ffaf"], value: 50 },
    { name: "顺性别女性", colorSeries: ["c9ffaf", "90f8ff"], value: 50 },
    { name: "顺性别男性", colorSeries: ["90f8ff", "9390ff"], value: 50 },
  ],
  mainColor: "pink",
  hasCustom: false,
});
