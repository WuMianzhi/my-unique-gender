import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // source: https://transstudent.org/gender/
    genderExpression: {
      title: "Gender Expression",
      neutral: "nuetral/undefined",
      feminine: "feminine",
      masculine: "masculine",
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
    // source: https://transstudent.org/gender/
    genderExpression: {
      title: "見た目が表すジェンダー",
      neutral: "中性的/限定されていない",
      feminine: "女性らしい",
      masculine: "男性らしい",
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
      title: "自分が考えるジェンダー",
      nonBinary: "Xジェンダー",
      transGender: "トランスジェンダー",
      female: "女性",
      male: "男性",
    },
  },
  "zh-CN": {
    genderExpression: {
      title: "性别表达/性别气质",
      neutral: "中性/不被定义的",
      feminine: "阴柔/女性化",
      masculine: "阳刚/男性化",
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
