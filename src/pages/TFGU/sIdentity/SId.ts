import { reactive } from "vue";
import { GenderGroup } from "../../../types/index";
import { setupI18n } from "../../../locales/setupI18n";

export const sexualIdentity: GenderGroup = reactive({
  title: setupI18n.global.t("sexualIdentity.title"),
  category: [
    {
      name: setupI18n.global.t("sexualIdentity.queer"),
      colorSeries: ["ff9292", "ffd6a7"],
      value: 50,
    },
    {
      name: setupI18n.global.t("sexualIdentity.pansexual"),
      colorSeries: ["ffd6a7", "fffb8f"],
      value: 50,
    },
    {
      name: setupI18n.global.t("sexualIdentity.homosexual"),
      colorSeries: ["fffb8f", "c9ffaf"],
      value: 50,
    },
    {
      name: setupI18n.global.t("sexualIdentity.heterosexual"),
      colorSeries: ["c9ffaf", "90f8ff"],
      value: 50,
    },
    { name: "customer", colorSeries: ["90f8ff", "9390ff"], value: 50 },
  ],
  mainColor: "fuchsia",
  hasCustom: true,
});
