import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // source: https://transstudent.org/gender/
    // https://www.adelaide.edu.au/student/wellbeing/ua/media/1521/theflyinggenderunicorn.pdf
    genderExpression: {
      title: "Gender Expression",
      neutral: "Nuetral / Undefined",
      feminine: "Feminine",
      masculine: "Masculine",
    },
    genderIdentity: {
      title: "Gender Identity",
      nonBinary: "Non-binary",
      transGender: "Transgender",
      female: "Female",
      male: "Male",
    },
    sexualIdentity: {
      title: "Sexual or Romantic Identity",
      queer: "Queer",
      pansexual: "Pansexual / Bisexual",
      homosexual: "Lesbian / Gay",
      heterosexual: "Straight",
      asexual: "Asexual",
    },
    genderedBiology: {
      title: "Gendered Biology",
      vagina: "Vagina",
      undifferentiated: "Undifferentiated",
      penis: "Penis",
      estrogen: "Estrogen",
      androgen: "Androgen",
      progesterone: "Progesterone",
      chromosomes: "Chromosomes",
    },
    genderAssignedAtBirth: {
      title: "Gender Assigned At Birth",
      female: "Female",
      intersex: "Other / Intersex",
      male: "Male",
    },
    attracted: {
      phyTitle: "Physically Attracted To",
      emoTitle: "Emotionally Attracted To",
      plus: "Yay",
      minus: "Nay",
      nonBinary: "Non-binary",
      transF: "Transgender Female",
      transM: "Transgender Male",
      cisF: "Cisgender Female",
      cisM: "Cisgender Male",
    },
    customize: {
      placeholder: "(Write Your Own!)",
    },
  },
  ja: {
    // source: https://transstudent.org/gender/
    genderExpression: {
      title: "見た目が表すジェンダー",
      neutral: "中性的 / 限定されていない",
      feminine: "女性らしい",
      masculine: "男性らしい",
    },
    sexualIdentity: {
      title: "性または恋愛的アイデンティティ",
      queer: "クィア",
      pansexual: "パンセクシュアル / 全性愛",
      homosexual: "ホモセクシュアル / 同性愛",
      heterosexual: "バイセクシュアル / 両性愛",
      asexual: "アセクシュアル / 無性愛",
    },
    genderIdentity: {
      title: "自分が考えるジェンダー",
      nonBinary: "Xジェンダー",
      transGender: "トランスジェンダー",
      female: "女性",
      male: "男性",
    },
    genderedBiology: {
      title: "生物学的な性差",
      vagina: "膣",
      undifferentiated: "未分化",
      penis: "陰茎",
      estrogen: "エストロゲン",
      androgen: "アンドロゲン",
      progesterone: "ゲスターゲン",
      chromosomes: "性染色体",
    },
    genderAssignedAtBirth: {
      title: "生まれた時に決定された性別",
      female: "女性",
      intersex: "その他 / 間性",
      male: "男性",
    },
    attracted: {
      phyTitle: "身体的に惹きつけられる対象",
      emoTitle: "感情的に惹きつけられる対象",
      plus: "プラス",
      minus: "マイナス",
      nonBinary: "Xジェンダー",
      transF: "トランスジェンダーの女性",
      transM: "トランスジェンダーの男性",
      cisF: "シスジェンダーの女性",
      cisM: "シスジェンダーの男性",
    },
    customize: {
      placeholder: "（カスタマイズ！）",
    },
  },
  "zh-CN": {
    genderExpression: {
      title: "性别表达 / 性别气质",
      neutral: "中性 / 不被定义的",
      feminine: "阴柔 / 女性化",
      masculine: "阳刚 / 男性化",
    },
    sexualIdentity: {
      title: "性 / 情欲倾向的认同 / 身份",
      queer: "酷儿",
      pansexual: "泛性恋 / 双性恋",
      homosexual: "同性恋",
      heterosexual: "异性恋",
      asexual: "无性恋",
    },
    genderIdentity: {
      title: "性别认同 / 性别身份",
      nonBinary: "非二元性别",
      transGender: "跨性别",
      female: "女性",
      male: "男性",
    },
    genderedBiology: {
      title: "生理特征",
      vagina: "阴道",
      undifferentiated: "未分化",
      penis: "阴茎",
      estrogen: "雌性激素",
      androgen: "雄性激素",
      progesterone: "孕激素",
      chromosomes: "性染色体",
    },
    genderAssignedAtBirth: {
      title: "出生指派性别",
      female: "女性",
      intersex: "其它 / 间性",
      male: "男性",
    },
    attracted: {
      phyTitle: "生理上受怎样的人吸引",
      emoTitle: "亲密关系上受怎样的人吸引",
      plus: "被吸引",
      minus: "不被吸引",
      nonBinary: "非二元性别者",
      transF: "跨性别女性",
      transM: "跨性别男性",
      cisF: "顺性别女性",
      cisM: "顺性别男性",
    },
    customize: {
      placeholder: "（自定义！）",
    },
  },
};

export const setupI18n = createI18n({
  locale: "zh-CN",
  messages,
});
