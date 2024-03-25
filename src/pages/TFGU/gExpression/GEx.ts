import { reactive } from "vue";
import { GenderGroup } from "@/types/index";
import { setupI18n } from "../../../locales/setupI18n";

export const genderExpression: GenderGroup = reactive({
  title: setupI18n.global.t("genderExpression.title"),
  category: [
    {
      name: setupI18n.global.t("genderExpression.neutral"),
      colorSeries: ["ff9292", "ffd6a7"],
      value: 50,
    },
    {
      name: setupI18n.global.t("genderExpression.feminine"),
      colorSeries: ["ffd6a7", "fffb8f"],
      value: 50,
    },
    {
      name: setupI18n.global.t("genderExpression.masculine"),
      colorSeries: ["fffb8f", "c9ffaf"],
      value: 50,
    },
  ],
  mainColor: "emerald",
  hasCustom: false,
});
