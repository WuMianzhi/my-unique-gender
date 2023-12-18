import { reactive } from "vue";
import { GenderGroup } from "../../types/index";

export const emotionallyAttractedTo: GenderGroup = reactive({
  title: "亲密关系上受到怎样的人吸引？",
  category: [
    { name: "非二元性别者", colorSeries: ["ff9292", "ffd6a7"], value: 50 },
    { name: "跨性别男性", colorSeries: ["ffd6a7", "fffb8f"], value: 50 },
    { name: "跨性别女性", colorSeries: ["fffb8f", "c9ffaf"], value: 50 },
    { name: "顺性别女性", colorSeries: ["c9ffaf", "90f8ff"], value: 50 },
    { name: "顺性别男性", colorSeries: ["90f8ff", "9390ff"], value: 50 },
  ],
  mainColor: "fuchsia",
  hasCustom: true,
});
