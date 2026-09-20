const routes = [
  {
    id: "home",
    label: "خانه",
    group: "main",
    type: "landing",
    title: "خانه",
    route: "/",
    summary: "داشبورد اصلی و انتخاب مسیر"
  },
  {
    id: "parent",
    label: "والدگری و رابطه",
    group: "main",
    type: "category",
    title: "والدگری و رابطه",
    route: "/parent",
    summary: "ارتباط، مرزگذاری، شکاف نسل‌ها و ترمیم رابطه"
  },
  {
    id: "generationGap",
    label: "شکاف نسل‌ها",
    group: "parent",
    type: "page",
    title: "شکاف نسل‌ها",
    route: "/parent/generation-gap",
    summary: "چطور تفاوت‌ها را به ارتباط تبدیل کنیم"
  },
  {
    id: "parentConnection",
    label: "ارتباط والد و فرزند",
    group: "parent",
    type: "page",
    title: "ارتباط والد و فرزند",
    route: "/parent/connection",
    summary: "گفت‌وگویی که آرام‌تر، عمیق‌تر و امن‌تر باشد"
  },
  {
    id: "boundaries",
    label: "مرزگذاری سالم",
    group: "parent",
    type: "page",
    title: "مرزگذاری سالم",
    route: "/parent/boundaries",
    summary: "قوانین روشن و بدون تحقیر"
  },
  {
    id: "angerConflict",
    label: "خشم و تعارض",
    group: "parent",
    type: "page",
    title: "خشم و تعارض",
    route: "/parent/anger-conflict",
    summary: "در لحظه خشم، چگونه ایمن و روشن بمانیم"
  },
  {
    id: "repairAfterConflict",
    label: "ترمیم رابطه",
    group: "parent",
    type: "page",
    title: "ترمیم رابطه بعد از دعوا",
    route: "/parent/repair-after-conflict",
    summary: "بازسازی ارتباط پس از تنش"
  },
  {
    id: "selfEsteem",
    label: "عزت‌نفس و مقایسه",
    group: "parent",
    type: "page",
    title: "عزت‌نفس و مقایسه",
    route: "/parent/self-esteem",
    summary: "از مقایسه به رشد واقعی برسیم"
  },
  {
    id: "schoolPressure",
    label: "مدرسه و فشار",
    group: "parent",
    type: "page",
    title: "مدرسه و فشار",
    route: "/parent/school-pressure",
    summary: "فشار تحصیلی بدون قضاوت یا تسلیم"
  },
  {
    id: "burnout",
    label: "والد کافی و فرسودگی",
    group: "parent",
    type: "page",
    title: "والد کافی و فرسودگی",
    route: "/parent/burnout",
    summary: "خسته‌بودن به معنی شکست نیست"
  },
  {
    id: "digital",
    label: "والدگری در دنیای دیجیتال",
    group: "main",
    type: "category",
    title: "والدگری در دنیای دیجیتال",
    route: "/digital",
    summary: "بازی، گوشی، امنیت، و تنظیمات فنی"
  },
  {
    id: "gameFinish",
    label: "بازی را تمام نمی‌کند",
    group: "digital",
    type: "page",
    title: "بازی را تمام نمی‌کند",
    route: "/digital/game-finish",
    summary: "وقتی بازی و توقف برای کودک دشوار می‌شود"
  },
  {
    id: "strangers",
    label: "غریبه‌ها و پیام‌ها",
    group: "digital",
    type: "page",
    title: "غریبه‌ها و پیام‌های نامناسب",
    route: "/digital/strangers",
    summary: "امنیت آنلا��ن و ارتباط‌های نامناسب"
  },
  {
    id: "aiSafety",
    label: "هوش مصنوعی و Deepfake",
    group: "digital",
    type: "page",
    title: "هوش مصنوعی و Deepfake",
    route: "/digital/ai-safety",
    summary: "محتوای جعلی، تصویر و صدای شخصی"
  },
  {
    id: "technicalGuide",
    label: "راهنمای فنی",
    group: "digital",
    type: "page",
    title: "راهنمای فنی",
    route: "/digital/technical-guide",
    summary: "Screen Time، Family Link، محدودیت‌ها و قفل‌ها"
  },
  {
    id: "child",
    label: "مسیر کودک ۷ تا ۱۲ سال",
    group: "main",
    type: "category",
    title: "مسیر کودک ۷ تا ۱۲ سال",
    route: "/child",
    summary: "خودشناسی، احساس، هدف و بازی مشترک"
  },
  {
    id: "childPath",
    label: "مسیر کودک",
    group: "child",
    type: "page",
    title: "مسیر کودک ۷ تا ۱۲ سال",
    route: "/child/path",
    summary: "مسیر کودک و خودشناسی"
  },
  {
    id: "familyPlan",
    label: "برنامه خانواده",
    group: "main",
    type: "page",
    title: "برنامه خانواده",
    route: "/family-plan",
    summary: "قرارهای مشترک و ترتیبات زندگی دیجیتال"
  }
];

export { routes };
