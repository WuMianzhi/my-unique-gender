import { reactive } from "vue";
import { GenderGroup } from "@/types/index";
import { setupI18n } from "../../../locales/setupI18n";

export const emotionallyAttractedTo: GenderGroup = reactive({
  title: setupI18n.global.t("attracted.emoTitle"),
  category: [
    {
      name: setupI18n.global.t("attracted.nonBinary"),
      colorSeries: ["ff9292", "ffd6a7"],
      value: 50,
    },
    {
      name: setupI18n.global.t("attracted.transF"),
      colorSeries: ["ffd6a7", "fffb8f"],
      value: 50,
    },
    {
      name: setupI18n.global.t("attracted.transM"),
      colorSeries: ["fffb8f", "c9ffaf"],
      value: 50,
    },
    {
      name: setupI18n.global.t("attracted.cisF"),
      colorSeries: ["c9ffaf", "90f8ff"],
      value: 50,
    },
    {
      name: setupI18n.global.t("attracted.cisM"),
      colorSeries: ["90f8ff", "9390ff"],
      value: 50,
    },
  ],
  mainColor: "fuchsia",
  hasCustom: true,
});
