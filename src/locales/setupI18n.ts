import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
    genderIdentity: {
      title: "Gender Identity",
      nonBinary: "non-binary",
      transGender: "transgender",
      female: "female",
      male: "male",
    },
    sexualIdentity: {
      title: "Sexual Identity",
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
      title: "性的アイデンティティ", //not sure
      queer: "クィア",
      pansexual: "パンセクシュアル/全性愛",
      homosexual: "ホモセクシュアル/同性愛",
      heterosexual: "バイセクシュアル/両性愛",
      asexual: "アセクシュアル/無性愛",
    },
    genderIdentity: {
      title: "性自認/ジェンダー・アイデンティティー",
      nonBinary: "Xジェンダー",
      transGender: "トランスジェンダー",
      female: "女性",
      male: "男性",
    },
  },
  "zh-CN": {
    message: {
      hello: "你好",
    },
    sexualIdentity: {
      title: "性/情欲倾向的认同/身份",
      queer: "酷儿",
      pansexual: "泛性恋",
      homosexual: "同性恋",
      heterosexual: "异性恋",
      asexual: "无性恋",
    },
    genderIdentity: {
      title: "性别认同/性别身份",
      nonBinary: "非二元性别",
      transGender: "跨性别",
      female: "女性",
      male: "男性",
    },
  },
};

export const setupI18n = createI18n({
  locale: "zh-CN",
  messages,
});
