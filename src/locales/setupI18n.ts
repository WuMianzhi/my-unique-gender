import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
    sexualIdentity: {
      identity: "Sexual Identity",
      queer: "queer",
      pansexual: "pansexual",
      homosexual: "homosexual",
      heterosexual: "heterosexual",
      asexual: "asexual",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
    sexualIdentity: {
      identity: "性的アイデンティティ", //not sure
      queer: "クィア",
      pansexual: "パンセクシュアル（全性愛）",
      homosexual: "ホモセクシュアル（同性愛）",
      heterosexual: "バイセクシュアル（両性愛）",
      asexual: "アセクシュアル（無性愛）",
    },
  },
  "zh-CN": {
    message: {
      hello: "你好",
    },
    sexualIdentity: {
      identity: "性/情欲倾向的认同/身份",
      queer: "酷儿",
      pansexual: "泛性恋",
      homosexual: "同性恋",
      heterosexual: "异性恋",
      asexual: "无性恋",
    },
  },
};

export const setupI18n = createI18n({
  locale: "zh-CN",
  messages,
});
