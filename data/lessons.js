const goldenLesson = {
  id: 'lesson.child-understanding.generation-gap',
  slug: 'understanding-child-and-generation-gap',
  entityType: 'lesson',
  status: 'published',
  version: 2,
  createdAt: '2026-09-20T21:00:00Z',
  updatedAt: '2026-09-20T22:20:00Z',
  publishedAt: '2026-09-20T22:20:00Z',
  archivedAt: null,
  localeStrategy: 'shared-id',
  translationGroupId: 'translation.lesson.child-understanding.generation-gap',
  title: { default: 'شناخت کودک و شکاف نسل‌ها', translations: { en: 'Understanding Children and the Generation Gap' } },
  summary: { default: 'تفاوت نسلی، فرهنگی و دیجیتال را از مسئله واقعی رابطه و ایمنی جدا کن؛ بعد با اتصال و مرز، پاسخ متناسب با سن بساز.', translations: { en: 'Distinguish generational, cultural, and digital differences from relationship and safety concerns, then respond with connection and boundaries.' } },
  purpose: { default: [{ type: 'paragraph', data: { text: 'این درس به والد کمک می‌کند رفتار کودک را در زمینه سن، تجربه، نیاز، فرهنگ و رابطه ببیند؛ نه فقط به‌عنوان بی‌احترامی، لجبازی یا فاصله گرفتن.' } }] },
  pathRefs: [{ id: 'parent', type: 'path', relation: 'primary', sequence: 1 }, { id: 'child', type: 'path', relation: 'supporting', sequence: 1 }],
  moduleId: 'module.parenting-and-relationship.child-understanding',
  categoryIds: ['parenting-and-relationship', 'child-understanding', 'generation-gap', 'cultural-gap', 'digital-gap'],
  ageRange: { min: 7, max: 18, labelKey: 'school-age-to-adolescence' },
  ageWindows: [
    {
      id: 'age-7-9', label: '۷–۹ سال', min: 7, max: 9,
      prominentNeed: 'قابل‌پیش‌بینی بودن، تعلق، بازی، نام‌گذاری احساس و مشارکت محدود اما واقعی.',
      sameBehaviorDifferentMeaning: '«تو همیشه دستور می‌دهی» ممکن است یعنی کودک بین چند دستور پشت‌سرهم گم شده، خسته است یا برای انتخاب کوچک و دیده‌شدن نیاز دارد؛ لزوماً به معنی رد والد نیست.',
      parentResponse: 'یک دستور کوتاه، انتخاب دوگزینه‌ای، تماس و بازی کوتاه برای اتصال، و توضیح ساده پیامد.',
      autonomyPrivacyParticipation: 'استقلال در انتخاب‌های کوچک و حریم خصوصی پایه؛ والد هنوز بیشتر تصمیم می‌گیرد و کودک در قانون‌گذاری با زبان ساده مشارکت می‌کند.'
    },
    {
      id: 'age-10-12', label: '۱۰–۱۲ سال', min: 10, max: 12,
      prominentNeed: 'شایستگی، عدالت، پذیرفته‌شدن نزد همسالان و فرصت بیان نظر پیش از تصمیم.',
      sameBehaviorDifferentMeaning: '«تو اصلاً من را نمی‌فهمی» ممکن است یعنی کودک احساس کرده نتیجه‌گیری والد جای تجربه او را گرفته، یا بین خانه و مدرسه دو معیار متفاوت دارد.',
      parentResponse: 'بازتاب دادن، پرسش درباره زمینه، مذاکره محدود درباره قانون و توضیح اینکه کدام بخش قابل تغییر و کدام بخش مربوط به ایمنی است.',
      autonomyPrivacyParticipation: 'حریم خصوصی و مسئولیت در حال افزایش است؛ کودک باید در برنامه، زمان و بعضی پیامدهای منطقی مشارکت کند، اما نظارت والد همچنان فعال است.'
    },
    {
      id: 'age-13-18', label: '۱۳–۱۸ سال', min: 13, max: 18,
      prominentNeed: 'هویت، اختیار، احترام متقابل، تعلق و رابطه‌ای که امکان بازگشت امن برای گفتن مسئله را حفظ کند.',
      sameBehaviorDifferentMeaning: 'کم‌حرفی یا در میان نگذاشتن مسائل شخصی می‌تواند بخشی از استقلال طبیعی باشد، یا نشانه شرم، فشار همسالان، افسردگی، خطر آنلاین یا ترس از واکنش والد.',
      parentResponse: 'حریم را پیش‌فرض بگیر، دعوت بدون بازجویی ارائه کن، درباره ایمنی مستقیم و آرام بپرس و فقط در صورت خطر روشن یا مسئولیت مشترک مرز لازم را تعیین کن.',
      autonomyPrivacyParticipation: 'استقلال، حریم خصوصی و مشارکت در تصمیم‌گیری باید بیشتر شود؛ نظارت باید شفاف، متناسب با خطر و همراه با توافق باشد، نه کنترل پنهانی.'
    }
  ],
  level: 'beginner',
  estimatedMinutes: 40,
  learningObjectives: [
    { default: 'یک رفتار واحد را از زاویه کودک و والد تفسیر کنم و بین مشاهده و داستان ذهنی فرق بگذارم.' },
    { default: 'پاسخ خود را بر اساس سه پنجره سنی ۷–۹، ۱۰–۱۲ و ۱۳–۱۸ تغییر دهم.' },
    { default: 'شکاف نسلی، فرهنگی و دیجیتال را از اختلاف ارزش و مسئله واقعی ایمنی جدا کنم.' },
    { default: 'با نقشه تصمیم، زمان گوش دادن، مرزبندی، فضا دادن و کمک گرفتن را انتخاب کنم.' }
  ],
  body: [
    { type: 'heading', data: { level: 2, text: 'شکاف نسل‌ها: یک جمله، دو تفسیر' } },
    { type: 'paragraph', data: { text: 'کودک می‌گوید: «تو من را نمی‌فهمی.» والد ممکن است بشنود: «به من احترام نمی‌گذارد.» اما کودک شاید می‌گوید: «تجربه من را با معیار تجربه خودت تفسیر نکن.» این اختلاف ترجمه، نقطه آغاز کار است: اول بفهمیم هر طرف چه معنایی به جمله داده، بعد درباره رفتار و مرز تصمیم بگیریم.' } },
    { type: 'callout', data: { tone: 'aha', title: 'لحظه آها', text: 'رفتار قابل مشاهده یکی است، اما معنای آن هنوز قطعی نیست. «در را بست» مشاهده است؛ «می‌خواهد مرا تنبیه کند» یک فرضیه است.' } },
    { type: 'heading', data: { level: 2, text: 'فهمیدن به معنی تأیید همه رفتارها نیست' } },
    { type: 'paragraph', data: { text: 'فلسفه این دوره Connection + Boundary است: اتصال بدون مرز کودک را بی‌پناه می‌کند و مرز بدون رابطه، همکاری و اعتماد را فرسوده می‌کند. احساس و تجربه کودک را می‌توان معتبر دانست، بدون اینکه هر انتخاب یا رفتار او را تأیید کنیم.' } },
    { type: 'heading', data: { level: 2, text: 'Generation Gap + Cultural Gap + Digital Gap' } },
    { type: 'paragraph', data: { text: 'در خانواده مهاجر، والد ممکن است در یک فرهنگ بزرگ شده باشد و کودک در فرهنگ دیگری رشد کند. علاوه بر اختلاف سن، زبان، مدرسه، هنجار همسالان و فناوری نیز تجربه مشترک خانواده را تغییر می‌دهند. هیچ فرهنگ خاصی ذاتاً بهتر یا بدتر نیست؛ کار والد تشخیص نوع تفاوت است.' } },
    { type: 'list', data: { items: ['استقلال: «کمک خواستن» ممکن است برای والد نشانه تربیت باشد و برای کودک نشانه ناتوانی؛ درباره سطح کمک مذاکره کنید.', 'احترام: تماس چشمی، لحن و مخالفت در خانه و مدرسه ممکن است معنای متفاوت داشته باشد؛ رفتار را به نیت بد ترجمه نکنید.', 'دوستی و مدرسه: شبکه دوستان و روش مشارکت کودک ممکن است با تجربه مهاجرت والد متفاوت باشد؛ ابتدا درباره قواعد و فشار همسالان بپرسید.', 'حریم خصوصی و لباس: تفاوت هنجار به‌تنهایی مسئله ایمنی نیست؛ معیار را به خطر، توافق خانوادگی و مسئولیت روشن وصل کنید.', 'فناوری: کودک ممکن است زبان و مهارت دیجیتال بیشتری داشته باشد؛ این برتری فنی به معنی بلوغ کامل برای تصمیم‌های پرخطر نیست.', 'تمایز چهارگانه: ارزش خانوادگی، تفاوت فرهنگی، تفاوت نسلی و خطر واقعی ایمنی را جداگانه نام‌گذاری کنید.'] } },
    { type: 'heading', data: { level: 2, text: 'سه پنجره رشدی' } },
    { type: 'list', data: { items: ['۷–۹ سال: دستور کوتاه، انتخاب محدود، همراهی و آموزش مستقیم.', '۱۰–۱۲ سال: توضیح دلیل، شنیدن نظر، مذاکره محدود و مسئولیت تدریجی.', '۱۳–۱۸ سال: احترام به حریم، گفت‌وگوی دوطرفه، توافق شفاف و مداخله متناسب با ایمنی.'] } },
    { type: 'heading', data: { level: 2, text: 'Case 1 — حدود ۸ سال: «تو همیشه دستور می‌دهی»' } },
    { type: 'list', data: { items: ['What you see: کودک چند بار می‌گوید «تو همیشه دستور می‌دهی» و از انجام کار فاصله می‌گیرد.', 'What it might mean: دستورها پشت‌سرهم، طولانی یا بدون فرصت انتخاب‌اند؛ کودک به اتصال و قابل‌پیش‌بینی بودن نیاز دارد.', 'What NOT to assume: ناسپاسی، لجبازی عمدی یا اینکه کودک باید مانند یک بزرگسال استدلال کند.', 'What to ask: «کدام بخشش برایت سخت بود؟ دوست داری اول لباس را جمع کنی یا مسواک بزنی؟»', 'What to say: «می‌فهمم دستورهای زیاد خسته‌کننده است. من فقط این یک کار را الآن لازم دارم.»', 'When to set a boundary: وقتی کار مربوط به ایمنی، بدن، آسیب به دیگران یا مسئولیت روشن است؛ مرز کوتاه و قابل اجرا باشد.', 'When to give space: وقتی کودک از نظر هیجانی پر شده اما ایمنی برقرار است؛ چند دقیقه مکث و سپس بازگشت مشخص.', 'When to seek help: اگر مخالفت شدید، اضطراب، پرخاشگری یا اختلال عملکرد در چند محیط پایدار و رو به افزایش است.'] } },
    { type: 'heading', data: { level: 2, text: 'Case 2 — حدود ۱۲ سال: «تو اصلاً من را نمی‌فهمی»' } },
    { type: 'list', data: { items: ['What you see: کودک درباره مدرسه یا دوستانش حرف نمی‌زند و می‌گوید والد نمی‌فهمد.', 'What it might mean: تجربه او پیش از شنیده شدن تفسیر شده، یا میان خانه و مدرسه فشار و معیار متفاوت وجود دارد.', 'What NOT to assume: پنهان‌کاری خطرناک، بی‌احترامی یا بی‌نیازی کامل به والد.', 'What to ask: «کدام قسمت حرف من نشان داد که تجربه‌ات را نفهمیدم؟»', 'What to say: «ممکن است برداشت من ناقص باشد؛ اول می‌خواهم نسخه تو را بشنوم.»', 'When to set a boundary: اگر توهین، تهدید، آسیب یا نقض توافق ایمنی رخ دهد؛ احساس قابل شنیدن است، آسیب قابل قبول نیست.', 'When to give space: وقتی کودک می‌تواند زمان بازگشت را بداند؛ فضا باید همراه با دعوت و زمان پیگیری باشد، نه رها کردن.', 'When to seek help: افت تحصیلی یا اجتماعی شدید، ترس، انزوا، نشانه‌های افسردگی یا خطر آنلاین.'] } },
    { type: 'heading', data: { level: 2, text: 'Case 3 — حدود ۱۶ سال: مسائل شخصی را نمی‌گوید' } },
    { type: 'list', data: { items: ['What you see: نوجوان دیگر مسائل شخصی‌اش را با والد در میان نمی‌گذارد.', 'What it might mean: استقلال طبیعی، ترس از قضاوت، تجربه واکنش شدید قبلی، فشار همسالان یا مسئله‌ای پنهان.', 'What NOT to assume: هر حریم خصوصی نشانه خطر یا هر سکوت نشانه سلامت است.', 'What to ask: «می‌خواهم حریم تو را رعایت کنم؛ چه چیزهایی را دوست داری خصوصی بماند و چه چیزهایی اگر خطر داشت باید با هم در میان بگذاریم؟»', 'What to say: «لازم نیست همه جزئیات را بگویی؛ می‌خواهم بدانی اگر کمک خواستی، بدون تحقیر کنارت هستم.»', 'When to set a boundary: در خطر فوری، سوءاستفاده، خودآسیب‌رسانی، تهدید، مواد یا موقعیتی که مسئولیت قانونی/ایمنی مشترک ایجاد می‌کند.', 'When to give space: وقتی نشانه خطر نیست و نوجوان می‌تواند زمان یا شکل گفت‌وگو را انتخاب کند.', 'When to seek help: تغییر ناگهانی و پایدار خواب، خلق، حضور، عملکرد، روابط، بدن یا امنیت؛ با متخصص نوجوان مشورت کن.'] } },
    { type: 'heading', data: { level: 2, text: 'Decision Map — نقشه تصمیم در یک نگاه' } },
    { type: 'list', data: { items: ['چه می‌بینم؟ → رفتار قابل مشاهده را بدون برچسب بنویس.', 'چه چیزهایی ممکن است پشت رفتار باشد؟ → نیاز رشدی، خستگی، فرهنگ، فشار همسالان، تعارض یا خطر.', 'چه چیزی را هنوز نمی‌دانم؟ → نیت و داستان ذهنی را قطعی نکن.', 'چه سؤالی بپرسم؟ → یک سؤال باز و کوتاه؛ سپس مکث.', 'آیا الآن باید گوش کنم؟ → اگر ایمنی برقرار است و هیجان بالاست، بله؛ اول اتصال و تنظیم.', 'آیا مرز لازم است؟ → اگر آسیب، مسئولیت روشن یا قانون توافق‌شده مطرح است، مرز کوتاه و متناسب.', 'آیا باید فضا بدهم؟ → بله، اگر زمان بازگشت و راه ارتباط روشن باشد.', 'آیا موضوع مربوط به ایمنی است؟ → خطر فوری، سوءاستفاده، خودآسیب‌رسانی، تهدید یا خطر آنلاین را جداگانه بررسی کن.', 'آیا کمک تخصصی لازم است؟ → اگر نشانه‌ها پایدار، شدید، رو به افزایش یا خارج از توان خانواده‌اند، کمک بگیر.'] } },
    { type: 'heading', data: { level: 2, text: 'از اتفاق تا اقدام' } },
    { type: 'paragraph', data: { text: 'در هر سن، یک رفتار را به نیت قطعی تبدیل نکن. مشاهده، پرسش، بازتاب و سپس تصمیم؛ این ترتیب کمک می‌کند اتصال و مرز مقابل هم قرار نگیرند.' } },
    { type: 'callout', data: { tone: 'action', title: 'Final Action Card — اگر فردا دوباره اتفاق افتاد', text: '۱) مکث می‌کنم و رفتار قابل مشاهده را نام می‌برم. ۲) یک سؤال باز می‌پرسم و ده ثانیه گوش می‌دهم. ۳) احساس یا تجربه قابل فهم را بازتاب می‌دهم. ۴) بر اساس ایمنی و مسئولیت، یا یک مرز کوتاه می‌گذارم یا زمان و فضای مشخص برای بازگشت می‌دهم.' } },
    { type: 'quote', data: { text: 'جمله شروع: «ممکن است برداشت من کامل نباشد؛ می‌خواهم اول بفهمم برای تو چه اتفاقی افتاد، بعد با هم درباره قدم بعدی تصمیم بگیریم.»' } },
    { type: 'callout', data: { tone: 'safety', title: 'مرز ایمنی', text: 'اگر کودک یا نوجوان از تهدید، آزار، زورگویی، خودآسیب‌رسانی، سوءاستفاده یا ترس شدید صحبت کرد، فقط به گفت‌وگوی خانگی اکتفا نکنید و از متخصص یا خدمات حمایتی قابل اعتماد کمک بگیرید.' } }
  ],
  realExample: { context: { default: 'پسر ۱۲ ساله‌ای بعد از مدرسه پاسخ کوتاه می‌دهد و با شنیدن سؤال درباره دوستانش عصبانی می‌شود.' }, observedBehavior: { default: 'او کیفش را رها می‌کند، می‌گوید «ولم کن» و وارد اتاقش می‌شود.' }, possibleInterpretation: { default: 'ممکن است خسته، خجالت‌زده، نگران قضاوت یا نیازمند زمان انتقال از مدرسه به خانه باشد؛ هنوز نمی‌دانیم.' }, suggestedResponse: { default: 'والد می‌گوید: «می‌بینم الان حوصله حرف زدن نداری. بیست دقیقه به تو زمان می‌دهم؛ بعد فقط می‌پرسم به کمک نیاز داری یا نه.»' } },
  readyPhrases: [{ default: '«می‌خواهم بفهمم، نه اینکه فوراً قضاوت کنم.»' }, { default: '«اینکه تجربه‌ات با من فرق دارد، به معنی بی‌اهمیت بودنش نیست.»' }, { default: '«احساس تو را می‌شنوم؛ درباره رفتار و ایمنی هم باید تصمیم بگیریم.»' }, { default: '«لازم نیست همه جزئیات را بگویی؛ اگر خطر یا نیاز به کمک بود، کنار تو هستم.»' }],
  practicalSteps: [
    { id: 'step.observe', sequence: 1, title: { default: 'یک موقعیت را توصیف کن' }, instruction: { default: [{ type: 'paragraph', data: { text: 'امروز یک رفتار دشوار را بدون برچسب و قضاوت در یک جمله بنویس.' } }] }, durationMinutes: 3, completionRequired: true },
    { id: 'step.ask', sequence: 2, title: { default: 'یک سؤال باز بپرس' }, instruction: { default: [{ type: 'paragraph', data: { text: 'در زمان آرام بپرس: «آن لحظه برایت چه اتفاقی افتاد؟» سپس حداقل ده ثانیه مکث کن.' } }] }, durationMinutes: 5, completionRequired: true },
    { id: 'step.reflect', sequence: 3, title: { default: 'یک بخش را بازتاب بده' }, instruction: { default: [{ type: 'paragraph', data: { text: 'قبل از راه‌حل، یک جمله بگو که نشان دهد بخش قابل فهم تجربه کودک را شنیده‌ای.' } }] }, durationMinutes: 5, completionRequired: true },
    { id: 'step.decide', sequence: 4, title: { default: 'اتصال یا مرز را انتخاب کن' }, instruction: { default: [{ type: 'paragraph', data: { text: 'با Decision Map مشخص کن آیا اکنون گوش دادن، مرز، فضا یا کمک تخصصی لازم است.' } }] }, durationMinutes: 7, completionRequired: true }
  ],
  doNotDo: [{ default: 'گفت‌وگو را در اوج خشم یا جلوی دیگران شروع نکن.' }, { default: 'تفاوت فرهنگی یا نسلی را خودکار به خطر یا بی‌احترامی ترجمه نکن.' }, { default: 'شنیدن را با تسلیم شدن یا حذف همه مرزها اشتباه نگیر.' }, { default: 'حریم خصوصی نوجوان را بدون نشانه خطر بازرسی دائمی نکن.' }],
  scenario: {
    id: 'scenario.generation-gap.after-school', title: { default: 'سه پاسخ ظاهراً معقول به «تو من را نمی‌فهمی»' }, context: { default: 'نوجوان ۱۶ ساله بعد از یک روز سخت می‌گوید: «تو اصلاً من را نمی‌فهمی» و در اتاقش را می‌بندد. خطر فوری مشاهده نشده است.' }, choices: [
      { id: 'space-only', label: { default: 'A: «باشه، هر وقت خواستی خودت بیا صحبت کنیم.»' }, feedback: { good: 'حریم و اختیار را محترم می‌گذارد.', risk: 'ممکن است نوجوان آن را رهاشدن یا بی‌تفاوتی بشنود و راه بازگشت مشخص نباشد.', whenAppropriate: 'وقتی نوجوان صریحاً زمان مشخصی برای گفت‌وگو می‌خواهد و نشانه خطر وجود ندارد.', betterAlternative: 'اگر قطع ارتباط طولانی یا ابهام وجود دارد، B بهتر است.' }, score: 2 },
      { id: 'return-time', label: { default: 'B: «می‌بینم الآن نمی‌خواهی حرف بزنی. بیست دقیقه دیگر برمی‌گردم و فقط می‌پرسم حالت چطور است.»' }, feedback: { good: 'هم فضا می‌دهد و هم رابطه و زمان بازگشت را حفظ می‌کند.', risk: 'اگر نوجوان کاملاً به خلوت نیاز دارد یا والد لحن کنترل‌گر داشته باشد، ممکن است فشار شنیده شود.', whenAppropriate: 'وقتی هیجان بالاست اما ایمنی برقرار است و رابطه به پیگیری قابل پیش‌بینی نیاز دارد.', betterAlternative: 'اگر خطر فوری مطرح شد، به جای مکث، C با پرسش مستقیم ایمنی یا کمک فوری لازم است.' }, score: 3 },
      { id: 'boundary-first', label: { default: 'C: «می‌فهمم ناراحتی، ولی طرز صحبتت با من قابل قبول نیست.»' }, feedback: { good: 'احترام متقابل و مرز را فراموش نمی‌کند.', risk: 'ممکن است احساس نوجوان را به حاشیه ببرد و گفت‌وگو را به دفاع از لحن تبدیل کند.', whenAppropriate: 'وقتی توهین یا تهدید واقعاً رخ داده و لازم است مرز کوتاه، آرام و مشخص شود.', betterAlternative: 'اگر فقط جمله‌ای از درد و فاصله شنیده‌ایم، B و سپس گفت‌وگوی مرزی بهتر است.' }, score: 2 }
    ], reflectionPrompt: { default: 'در خانواده شما کدام نشانه می‌گوید «فضا» لازم است و کدام نشانه می‌گوید «پیگیری» نباید رها شود؟' }
  },
  feedback: { successMessage: { default: 'تصمیم خوب همیشه یک جمله ثابت نیست؛ پاسخ خوب، سن، زمینه، رابطه و ایمنی را هم‌زمان می‌سنجد.' }, retryMessage: { default: 'به تفاوت ظریف بین احترام به حریم، رها کردن رابطه و گذاشتن مرز فکر کن.' }, completionRule: { type: 'score', minimumScore: 6, maximumScore: 9 } },
  checklist: { id: 'checklist.understanding-before-correction', title: { default: 'چک‌لیست فهمیدن قبل از اصلاح' }, completionMode: 'percentage', requiredItemCount: 6, items: [{ id: 'observe', sequence: 1, label: { default: 'رفتار را بدون برچسب توصیف کردم.' }, required: true }, { id: 'age', sequence: 2, label: { default: 'سن و نیاز رشدی را در نظر گرفتم.' }, required: true }, { id: 'context', sequence: 3, label: { default: 'زمینه فرهنگی، دیجیتال و موقعیت را بررسی کردم.' }, required: true }, { id: 'regulate', sequence: 4, label: { default: 'پیش از گفت‌وگو، تنش خودم را تنظیم کردم.' }, required: true }, { id: 'open-question', sequence: 5, label: { default: 'یک سؤال باز پرسیدم و مکث کردم.' }, required: true }, { id: 'reflect', sequence: 6, label: { default: 'یک بخش از تجربه کودک را بازتاب دادم.' }, required: true }, { id: 'boundary', sequence: 7, label: { default: 'اگر لازم بود، یک مرز کوتاه و قابل اجرا تعیین کردم.' }, required: false }, { id: 'space', sequence: 8, label: { default: 'اگر خطر نبود، فضا و زمان بازگشت مشخص دادم.' }, required: false }] },
  quiz: { id: 'quiz.generation-gap.foundation', title: { default: 'مرور یادگیری: شناخت کودک و شکاف نسل‌ها' }, resultMode: 'completion', questions: [
    { id: 'q1', sequence: 1, prompt: { default: '«تو من را نمی‌فهمی» کدام تفسیر را هم می‌تواند داشته باشد؟' }, type: 'single', required: true, options: [{ id: 'a', label: { default: 'فقط بی‌احترامی' }, score: 0 }, { id: 'b', label: { default: 'تجربه من را با معیار خودت تفسیر نکن' }, score: 1 }, { id: 'c', label: { default: 'درخواست حذف همه قوانین' }, score: 0 }] },
    { id: 'q2', sequence: 2, prompt: { default: 'در ۱۳–۱۸ سال، کدام تغییر معمولاً مناسب‌تر است؟' }, type: 'single', required: true, options: [{ id: 'a', label: { default: 'کنترل پنهانی بیشتر' }, score: 0 }, { id: 'b', label: { default: 'حریم و مشارکت بیشتر همراه با مرز ایمنی روشن' }, score: 1 }, { id: 'c', label: { default: 'رها کردن کامل تصمیم‌ها' }, score: 0 }] },
    { id: 'q3', sequence: 3, prompt: { default: 'کدام‌ها باید از تفاوت فرهنگی جداگانه بررسی شوند؟' }, type: 'multiple', required: true, options: [{ id: 'value', label: { default: 'ارزش و توافق خانوادگی' }, score: 1 }, { id: 'culture', label: { default: 'هنجار فرهنگی یا نسلی' }, score: 1 }, { id: 'safety', label: { default: 'خطر واقعی ایمنی' }, score: 1 }, { id: 'label', label: { default: 'برچسب زدن به یک فرهنگ' }, score: 0 }] },
    { id: 'q4', sequence: 4, prompt: { default: 'اگر خطر فوری وجود ندارد و هیجان بالاست، قدم اول چیست؟' }, type: 'single', required: true, options: [{ id: 'a', label: { default: 'سخنرانی درباره احترام' }, score: 0 }, { id: 'b', label: { default: 'تنظیم، گوش دادن و تعیین زمان بازگشت' }, score: 1 }, { id: 'c', label: { default: 'رها کردن رابطه بدون پیگیری' }, score: 0 }] }
  ], resultRules: [{ id: 'complete', condition: { minScore: 4 }, message: { default: 'مرور کامل شد. حالا Final Action Card را در یک موقعیت واقعی اجرا کن.' }, recommendationRefs: [{ id: 'program.7-day.understanding-child', type: 'program', relation: 'primary' }] }] },
  programRefs: [{ id: 'program.7-day.understanding-child', type: 'program', relation: 'optional' }],
  problemRefs: [{ id: 'problem.child-does-not-listen', type: 'problem', relation: 'supporting' }, { id: 'problem.constant-comparison', type: 'problem', relation: 'supporting' }, { id: 'problem.homework-conflict', type: 'problem', relation: 'optional' }, { id: 'problem.child-hides-messages', type: 'problem', relation: 'optional' }],
  solutionRefs: [{ id: 'solution.connection-before-correction', type: 'solution', relation: 'primary' }, { id: 'solution.repair-conversation', type: 'solution', relation: 'supporting' }, { id: 'solution.one-clear-boundary', type: 'solution', relation: 'supporting' }],
  exerciseRefs: [{ id: 'exercise.generational-lens', type: 'exercise', relation: 'primary' }],
  checklistRefs: [{ id: 'checklist.understanding-before-correction', type: 'checklist', relation: 'primary' }],
  quizRefs: [{ id: 'quiz.generation-gap.foundation', type: 'quiz', relation: 'primary' }],
  relatedContentRefs: [{ id: 'parentConnection', type: 'lesson', relation: 'next' }, { id: 'boundaries', type: 'lesson', relation: 'supporting' }, { id: 'gameFinish', type: 'lesson', relation: 'optional' }],
  previousRef: null,
  nextRef: { id: 'parentConnection', type: 'lesson', relation: 'primary' },
  specialistHelp: { indicators: [{ default: 'ترس پایدار، قطع کامل ارتباط، افت شدید عملکرد، تغییر ناگهانی خواب یا خلق، خودآسیب‌رسانی، سوءاستفاده یا خطر آنلاین.' }], urgency: 'timely', guidance: { default: [{ type: 'paragraph', data: { text: 'در خطر فوری با خدمات اضطراری محلی تماس بگیرید؛ در موارد پایدار یا رو به افزایش با روان‌شناس کودک و نوجوان یا خدمات حمایتی مشورت کنید.' } }] }, disclaimer: { default: 'این درس آموزشی است و جایگزین ارزیابی یا درمان تخصصی نیست.' } },
  sources: [
    { id: 'cdc-developmental-milestones', title: { default: 'Developmental Milestones' }, publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'harvard-developing-child', title: { default: 'Serve and Return Interaction Shapes Brain Architecture' }, publisher: 'Center on the Developing Child, Harvard University', url: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'relational-health', title: { default: 'Parenting and Child Development: A Relational Health Perspective' }, publisher: 'American Journal of Lifestyle Medicine / PubMed Central', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7781063/', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'adolescent-relationships-conflict', title: { default: 'Development of Parent–Adolescent Relationships: Conflict Interactions' }, publisher: 'Child Development Perspectives', url: 'https://academic.oup.com/cdpers/article/12/3/171/8231536', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'reciprocal-negative-emotion', title: { default: 'Parent–Adolescent Conflict as Sequences of Reciprocal Negative Emotion' }, publisher: 'Development and Psychopathology / PubMed Central', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7992108/', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'emotion-regulation-relationships', title: { default: 'Emotion Regulation in Parent–Child Relationships: A Decade Review' }, publisher: 'Journal of Family Therapy', url: 'https://link.springer.com/article/10.1007/s10591-025-09742-2', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'supportive-adolescent-relationships', title: { default: 'Supportive Parent-Adolescent Relationships as a Foundation for Adjustment' }, publisher: 'Frontiers in Psychology', url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1193449/full', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'unicef-parenting', title: { default: 'Parenting' }, publisher: 'UNICEF', url: 'https://www.unicef.org/parenting/', accessedAt: '2026-09-20T00:00:00Z' }
  ],
  evidenceNotes: [{ claim: 'ارتباط پاسخ‌گو و رابطه حمایتی به رشد اجتماعی-هیجانی کمک می‌کند.', sourceIds: ['harvard-developing-child', 'relational-health'] }, { claim: 'تعارض نوجوان و والد می‌تواند بخشی از مذاکره استقلال باشد، اما الگوهای منفی پایدار نیازمند توجه‌اند.', sourceIds: ['adolescent-relationships-conflict', 'reciprocal-negative-emotion'] }, { claim: 'تنظیم هیجان والد و رابطه حمایتی در تنظیم هیجان نوجوان نقش دارند.', sourceIds: ['emotion-regulation-relationships', 'supportive-adolescent-relationships'] }, { claim: 'تفاوت فرهنگی خانواده‌های مهاجر باید بدون برچسب‌زنی و با توجه به زمینه بررسی شود.', sourceIds: ['relational-health', 'unicef-parenting'] }],
  seo: { metaTitle: { default: 'شناخت کودک و شکاف نسل‌ها | Relationship Academy' }, metaDescription: { default: 'درس عملی برای فهم تفاوت نسل، فرهنگ و فناوری و انتخاب بین اتصال، مرز، فضا و کمک.' }, canonicalPath: '/lessons/understanding-child-and-generation-gap', keywords: [{ default: 'شناخت کودک' }, { default: 'شکاف نسل‌ها' }, { default: 'شکاف فرهنگی' }, { default: 'استقلال نوجوان' }], noIndex: false },
  sequence: 1,
  completionRule: 'combined',
  progressWeight: 1,
  progress: { storageKey: 'parenting-course:progress:v1:lesson.child-understanding.generation-gap', trackedItems: ['scenario.generation-gap.after-school', 'checklist.understanding-before-correction', 'quiz.generation-gap.foundation', 'step.observe', 'step.ask', 'step.reflect', 'step.decide'], completion: 'lesson-read-and-practice' }
};

const sevenDayProgram = {
  id: 'program.7-day.understanding-child', slug: '7-day-understanding-child', entityType: 'program', kind: '7-day', durationDays: 7, status: 'published', lessonRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'primary' }],
  dayRefs: [
    { id: 'day-1', dayNumber: 1, title: { default: 'مشاهده بدون برچسب' }, objective: { default: 'یک رفتار را دقیق و خنثی ثبت کن.' }, contentRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'primary' }], required: true, estimatedMinutes: 5 },
    { id: 'day-2', dayNumber: 2, title: { default: 'شناخت سن و زمینه' }, objective: { default: 'پنجره سنی و شکاف فرهنگی/دیجیتال را بررسی کن.' }, contentRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'supporting' }], required: true, estimatedMinutes: 10 },
    { id: 'day-3', dayNumber: 3, title: { default: 'تنظیم والد' }, objective: { default: 'پیش از پاسخ، مکث و تنظیم بدن را تمرین کن.' }, contentRefs: [{ id: 'step.observe', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 5 },
    { id: 'day-4', dayNumber: 4, title: { default: 'یک سؤال باز' }, objective: { default: 'سؤال بپرس و برای پاسخ عجله نکن.' }, contentRefs: [{ id: 'step.ask', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 10 },
    { id: 'day-5', dayNumber: 5, title: { default: 'بازتاب تجربه' }, objective: { default: 'پیش از راه‌حل، آنچه فهمیدی بازتاب بده.' }, contentRefs: [{ id: 'step.reflect', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 10 },
    { id: 'day-6', dayNumber: 6, title: { default: 'اتصال و مرز' }, objective: { default: 'با Decision Map بین گوش دادن، مرز و فضا انتخاب کن.' }, contentRefs: [{ id: 'checklist.understanding-before-correction', type: 'checklist', relation: 'primary' }, { id: 'step.decide', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 12 },
    { id: 'day-7', dayNumber: 7, title: { default: 'سناریو و مرور' }, objective: { default: 'سناریو و آزمون را کامل کن و Final Action Card را اجرا کن.' }, contentRefs: [{ id: 'quiz.generation-gap.foundation', type: 'quiz', relation: 'primary' }, { id: 'scenario.generation-gap.after-school', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 15 }
  ],
  reviewSchedule: [{ dayNumber: 7, prompt: { default: 'کدام تغییر کوچک، گفت‌وگو را امن‌تر کرد؟' } }], completionRule: 'all-required'
};

const lessons = [goldenLesson];
const programs = [sevenDayProgram];

export { goldenLesson, lessons, sevenDayProgram, programs };
