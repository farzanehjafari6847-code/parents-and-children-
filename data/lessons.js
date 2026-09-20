const goldenLesson = {
  id: 'lesson.child-understanding.generation-gap',
  slug: 'understanding-child-and-generation-gap',
  entityType: 'lesson',
  status: 'published',
  version: 1,
  createdAt: '2026-09-20T21:00:00Z',
  updatedAt: '2026-09-20T21:00:00Z',
  publishedAt: '2026-09-20T21:00:00Z',
  archivedAt: null,
  localeStrategy: 'shared-id',
  translationGroupId: 'translation.lesson.child-understanding.generation-gap',
  title: { default: 'شناخت کودک و شکاف نسل‌ها', translations: { en: 'Understanding Children and the Generation Gap' } },
  summary: { default: 'یاد می‌گیریم تفاوت نسل‌ها را به‌جای مانع، به نقطه شروع فهمیدن کودک و ساختن گفت‌وگوی امن تبدیل کنیم.', translations: { en: 'Turn generational differences into a starting point for understanding and safer conversations.' } },
  purpose: { default: [{ type: 'paragraph', data: { text: 'این درس به والد کمک می‌کند رفتار کودک را در زمینه سن، تجربه، نیاز و رابطه ببیند؛ نه فقط به‌عنوان بی‌احترامی، لجبازی یا فاصله گرفتن.' } }] },
  pathRefs: [
    { id: 'parent', type: 'path', relation: 'primary', sequence: 1 },
    { id: 'child', type: 'path', relation: 'supporting', sequence: 1 }
  ],
  moduleId: 'module.parenting-and-relationship.child-understanding',
  categoryIds: ['parenting-and-relationship', 'child-understanding', 'generation-gap'],
  ageRange: { min: 7, max: 18, labelKey: 'school-age-to-adolescence' },
  level: 'beginner',
  estimatedMinutes: 25,
  learningObjectives: [
    { default: 'بین تفاوت نسلی، نیاز رشدی و مسئله واقعی رابطه تمایز بگذارم.' },
    { default: 'قبل از اصلاح رفتار، مشاهده و پرسش بدون قضاوت را تمرین کنم.' },
    { default: 'یک گفت‌وگوی کوتاه و امن برای فهمیدن تجربه کودک آغاز کنم.' },
    { default: 'بدانم چه زمانی اختلاف نظر طبیعی است و چه زمانی به حمایت بیشتری نیاز داریم.' }
  ],
  body: [
    { type: 'heading', data: { level: 2, text: 'از «چرا این‌طور شده‌ای؟» به «چه چیزی را هنوز نمی‌فهمم؟»' } },
    { type: 'paragraph', data: { text: 'کودک و نوجوان در جهانی متفاوت از کودکی والد رشد می‌کند. زبان، فناوری، مدرسه، فشار همسالان و تصویر او از آینده ممکن است با تجربه والد همسان نباشد. این تفاوت به‌تنهایی نشانه خراب شدن رابطه نیست. مسئله زمانی سخت‌تر می‌شود که هر طرف، ناآشنا بودن تجربه طرف مقابل را به بد بودن نیت او تعبیر کند.' } },
    { type: 'callout', data: { tone: 'calm', title: 'اصل طلایی', text: 'فهمیدن به معنی تأیید همه رفتارها نیست. می‌توانیم تجربه کودک را بشنویم و هم‌زمان مرز امن و مسئولیت را حفظ کنیم.' } },
    { type: 'heading', data: { level: 2, text: 'سه لایه‌ای که باید از هم جدا شوند' } },
    { type: 'list', data: { items: ['تفاوت تجربه: چیزی که برای والد عادی بوده، ممکن است برای کودک بیگانه باشد.', 'نیاز رشدی: کودک در حال تمرین استقلال، تعلق، هویت و تنظیم احساس است.', 'مسئله رابطه: اگر گفت‌وگوها دائماً با تحقیر، تهدید یا ترس همراه شوند، نیاز به ترمیم و حمایت جدی‌تر وجود دارد.'] } },
    { type: 'heading', data: { level: 2, text: 'پیش از پاسخ، مشاهده کن' } },
    { type: 'paragraph', data: { text: 'به جای برچسب‌هایی مثل «بی‌مسئولیت» یا «ناسپاس»، رفتار قابل مشاهده را توصیف کن: «سه بار صدایت کردم و جواب ندادی» یا «وقتی درباره مدرسه پرسیدم، اتاقت را ترک کردی». سپس زمان، موقعیت، افراد حاضر و اتفاق پیش از رفتار را در نظر بگیر. این تغییر کوچک، گفت‌وگو را از حمله به بررسی مشترک مسئله می‌برد.' } },
    { type: 'heading', data: { level: 2, text: 'سناریوی واقعی: «تو دنیای ما را نمی‌فهمی»' } },
    { type: 'quote', data: { text: '«دخترم می‌گوید شما هیچ‌چیز از دنیای ما نمی‌فهمید. من هم احساس می‌کنم هرچه می‌گویم، رد می‌شود.»' } },
    { type: 'paragraph', data: { text: 'ممکن است پشت این جمله هم نیاز به دیده شدن باشد و هم ناامیدی از گفت‌وگوهای قبلی. پاسخ مفید، دفاع از نسل والد یا بازجویی درباره دوستان نیست. ابتدا می‌توان گفت: «می‌فهمم که تجربه‌ات با تجربه من فرق دارد. دوست دارم یک بخشش را بفهمم؛ از کجا شروع کنیم؟» بعد، اگر موضوع به امنیت یا قانون مربوط بود، مرز را کوتاه و روشن بیان کنیم.' } },
    { type: 'heading', data: { level: 2, text: 'گفت‌وگوی پنج‌مرحله‌ای' } },
    { type: 'list', data: { items: ['تنظیم خود: اگر عصبانی، عجول یا ترسیده‌ای، گفت‌وگو را چند دقیقه عقب بینداز.', 'مشاهده: بدون تفسیر، چیزی را که دیده‌ای کوتاه بگو.', 'پرسش باز: بپرس «آن لحظه برایت چه اتفاقی افتاد؟» و مکث کن.', 'بازتاب: بخش قابل فهم حرف او را با زبان خودت تکرار کن.', 'مرز یا قدم بعدی: اگر لازم است، یک قانون یا اقدام مشخص و قابل اجرا تعیین کنید.'] } },
    { type: 'heading', data: { level: 2, text: 'جمله‌های آماده' } },
    { type: 'list', data: { items: ['«ممکن است من همه بخش‌های دنیای تو را نشناسم؛ کمکم می‌کنی بفهمم؟»', '«قبل از اینکه راه‌حل بدهم، می‌خواهم حرفت را کامل بشنوم.»', '«با احساس تو مخالف نیستم؛ درباره کاری که انجام شد باید با هم تصمیم بگیریم.»', '«الان هر دو ناراحتیم. ساعت ... دوباره برمی‌گردیم و درباره‌اش حرف می‌زنیم.»'] } },
    { type: 'heading', data: { level: 2, text: 'چه کارهایی فاصله را بیشتر می‌کند؟' } },
    { type: 'list', data: { items: ['مقایسه با «زمان ما» یا با خواهر، برادر و همسالان.', 'پرسیدن چند سؤال پشت سر هم و تبدیل گفت‌وگو به بازجویی.', 'خندیدن به علاقه‌ها، زبان یا نگرانی‌های کودک.', 'استفاده از حرف کودک علیه خودش.', 'تهدید به قطع رابطه، محرومیت‌های نامحدود یا شرمنده کردن در جمع.'] } },
    { type: 'callout', data: { tone: 'safety', title: 'مرز ایمنی', text: 'اگر کودک از تهدید، آزار، زورگویی، خودآسیب‌رسانی، سوءاستفاده یا ترس شدید صحبت کرد، فقط به گفت‌وگوی خانگی اکتفا نکنید و از متخصص یا خدمات حمایتی قابل اعتماد کمک بگیرید.' } }
  ],
  realExample: {
    context: { default: 'پسر ۱۲ ساله‌ای بعد از مدرسه پاسخ کوتاه می‌دهد و با شنیدن سؤال درباره دوستانش عصبانی می‌شود.' },
    observedBehavior: { default: 'او کیفش را رها می‌کند، می‌گوید «ولم کن» و وارد اتاقش می‌شود.' },
    possibleInterpretation: { default: 'ممکن است خسته، خجالت‌زده، نگران قضاوت یا نیازمند زمان انتقال از مدرسه به خانه باشد؛ هنوز نمی‌دانیم.' },
    suggestedResponse: { default: 'والد می‌گوید: «می‌بینم الان حوصله حرف زدن نداری. بیست دقیقه به تو زمان می‌دهم؛ بعد فقط می‌پرسم به کمک نیاز داری یا نه.»' }
  },
  readyPhrases: [
    { default: '«می‌خواهم بفهمم، نه اینکه فوراً قضاوت کنم.»' },
    { default: '«اینکه تجربه‌ات با من فرق دارد، به معنی بی‌اهمیت بودنش نیست.»' },
    { default: '«می‌توانیم درباره احساس تو توافق داشته باشیم، حتی اگر درباره تصمیم نهایی هنوز گفت‌وگو کنیم.»' }
  ],
  practicalSteps: [
    { id: 'step.observe', sequence: 1, title: { default: 'یک موقعیت را توصیف کن' }, instruction: { default: [{ type: 'paragraph', data: { text: 'امروز یک رفتار دشوار را بدون برچسب و قضاوت در یک جمله بنویس.' } }] }, durationMinutes: 3, completionRequired: true },
    { id: 'step.ask', sequence: 2, title: { default: 'یک سؤال باز بپرس' }, instruction: { default: [{ type: 'paragraph', data: { text: 'در زمان آرام بپرس: «آن لحظه برایت چه اتفاقی افتاد؟» سپس حداقل ده ثانیه مکث کن.' } }] }, durationMinutes: 5, completionRequired: true },
    { id: 'step.reflect', sequence: 3, title: { default: 'یک بخش را بازتاب بده' }, instruction: { default: [{ type: 'paragraph', data: { text: 'قبل از راه‌حل، یک جمله بگو که نشان دهد بخش قابل فهم تجربه کودک را شنیده‌ای.' } }] }, durationMinutes: 5, completionRequired: true }
  ],
  doNotDo: [{ default: 'گفت‌وگو را در اوج خشم یا جلوی دیگران شروع نکن.' }, { default: 'شنیدن را با تسلیم شدن یا حذف همه مرزها اشتباه نگیر.' }],
  scenario: {
    id: 'scenario.generation-gap.after-school',
    title: { default: 'وقتی کودک بعد از مدرسه فاصله می‌گیرد' },
    context: { default: 'کودک وارد خانه شده، کوتاه جواب می‌دهد و می‌گوید «تو نمی‌فهمی».' },
    choices: [
      { id: 'listen', label: { default: 'اول زمان و فضا می‌دهم، بعد سؤال باز می‌پرسم.' }, feedback: { default: 'انتخاب مناسبی است: تنظیم و کنجکاوی، احتمال گفت‌وگو را بیشتر می‌کند.' }, score: 2 },
      { id: 'lecture', label: { default: 'یادآوری می‌کنم که در خانه باید مؤدبانه حرف بزند.' }, feedback: { default: 'احترام مهم است، اما شروع با سخنرانی ممکن است نیاز اصلی کودک را پنهان کند. ابتدا وضعیت را آرام و روشن کن.' }, score: 1 },
      { id: 'compare', label: { default: 'می‌گویم «هم‌سن‌های تو این‌طور رفتار نمی‌کنند».' }, feedback: { default: 'مقایسه معمولاً شرم و فاصله را بیشتر می‌کند و اطلاعاتی درباره مسئله نمی‌دهد.' }, score: 0 }
    ],
    reflectionPrompt: { default: 'در موقعیت مشابه، چه چیزی به تنظیم خودت کمک می‌کند؟' }
  },
  feedback: {
    successMessage: { default: 'تو تفاوت بین فهمیدن و تأیید کردن را دیدی. قدم بعدی، اجرای یک گفت‌وگوی کوتاه و بدون مقایسه است.' },
    retryMessage: { default: 'یک بار دیگر به نیاز پشت رفتار نگاه کن؛ هدف، حذف مرز نیست، بلکه انتخاب نقطه شروع امن‌تر است.' },
    completionRule: { type: 'score', minimumScore: 4, maximumScore: 6 }
  },
  checklist: {
    id: 'checklist.understanding-before-correction',
    title: { default: 'چک‌لیست فهمیدن قبل از اصلاح' },
    completionMode: 'percentage',
    requiredItemCount: 4,
    items: [
      { id: 'observe', sequence: 1, label: { default: 'رفتار را بدون برچسب توصیف کردم.' }, required: true },
      { id: 'regulate', sequence: 2, label: { default: 'پیش از گفت‌وگو، تنش خودم را تنظیم کردم.' }, required: true },
      { id: 'open-question', sequence: 3, label: { default: 'یک سؤال باز پرسیدم و مکث کردم.' }, required: true },
      { id: 'reflect', sequence: 4, label: { default: 'یک بخش از تجربه کودک را بازتاب دادم.' }, required: true },
      { id: 'boundary', sequence: 5, label: { default: 'اگر لازم بود، یک مرز کوتاه و قابل اجرا تعیین کردم.' }, required: false }
    ]
  },
  quiz: {
    id: 'quiz.generation-gap.foundation',
    title: { default: 'مرور یادگیری: شناخت کودک و شکاف نسل‌ها' },
    resultMode: 'completion',
    questions: [
      { id: 'q1', sequence: 1, prompt: { default: 'فهمیدن تجربه کودک یعنی چه؟' }, type: 'single', required: true, options: [{ id: 'a', label: { default: 'تأیید همه رفتارها' }, score: 0 }, { id: 'b', label: { default: 'شنیدن تجربه و حفظ مرزهای امن' }, score: 1 }, { id: 'c', label: { default: 'حذف قوانین' }, score: 0 }] },
      { id: 'q2', sequence: 2, prompt: { default: 'کدام شروع برای گفت‌وگو بهتر است؟' }, type: 'single', required: true, options: [{ id: 'a', label: { default: 'زمان ما این‌طور نبود' }, score: 0 }, { id: 'b', label: { default: 'چرا همیشه لجبازی می‌کنی؟' }, score: 0 }, { id: 'c', label: { default: 'می‌خواهم بفهمم؛ آن لحظه چه اتفاقی افتاد؟' }, score: 1 }] },
      { id: 'q3', sequence: 3, prompt: { default: 'قبل از اصلاح رفتار چه چیزی را بررسی می‌کنیم؟' }, type: 'multiple', required: true, options: [{ id: 'context', label: { default: 'زمان و موقعیت' }, score: 1 }, { id: 'need', label: { default: 'نیاز یا احساس احتمالی' }, score: 1 }, { id: 'comparison', label: { default: 'مقایسه با همسالان' }, score: 0 }] }
    ],
    resultRules: [{ id: 'complete', condition: { minScore: 3 }, message: { default: 'مرور کامل شد. حالا یک گفت‌وگوی واقعی را با چک‌لیست تمرین کن.' }, recommendationRefs: [{ id: 'program.7-day.understanding-child', type: 'program', relation: 'primary' }] }]
  },
  programRefs: [{ id: 'program.7-day.understanding-child', type: 'program', relation: 'optional' }],
  problemRefs: [{ id: 'problem.child-does-not-listen', type: 'problem', relation: 'supporting' }, { id: 'problem.constant-comparison', type: 'problem', relation: 'supporting' }, { id: 'problem.homework-conflict', type: 'problem', relation: 'optional' }],
  solutionRefs: [{ id: 'solution.connection-before-correction', type: 'solution', relation: 'primary' }, { id: 'solution.repair-conversation', type: 'solution', relation: 'supporting' }],
  exerciseRefs: [{ id: 'exercise.generational-lens', type: 'exercise', relation: 'primary' }],
  checklistRefs: [{ id: 'checklist.understanding-before-correction', type: 'checklist', relation: 'primary' }],
  quizRefs: [{ id: 'quiz.generation-gap.foundation', type: 'quiz', relation: 'primary' }],
  relatedContentRefs: [{ id: 'parentConnection', type: 'lesson', relation: 'next' }, { id: 'boundaries', type: 'lesson', relation: 'supporting' }, { id: 'gameFinish', type: 'lesson', relation: 'optional' }],
  previousRef: null,
  nextRef: { id: 'parentConnection', type: 'lesson', relation: 'primary' },
  specialistHelp: { indicators: [{ default: 'ترس پایدار، قطع کامل ارتباط، افت شدید عملکرد یا تکرار تعارض‌های آسیب‌زا.' }], urgency: 'timely', guidance: { default: [{ type: 'paragraph', data: { text: 'در صورت تداوم این نشانه‌ها، با روان‌شناس کودک و نوجوان یا خدمات حمایتی محلی مشورت کنید.' } }] }, disclaimer: { default: 'این درس آموزشی است و جایگزین ارزیابی یا درمان تخصصی نیست.' } },
  sources: [
    { id: 'cdc-developmental-milestones', title: { default: 'CDC: Developmental Milestones' }, publisher: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'harvard-developing-child', title: { default: 'Serve and Return Interaction Shapes Brain Architecture' }, publisher: 'Center on the Developing Child, Harvard University', url: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/', accessedAt: '2026-09-20T00:00:00Z' },
    { id: 'unicef-parenting', title: { default: 'Parenting: UNICEF Parenting' }, publisher: 'UNICEF', url: 'https://www.unicef.org/parenting/', accessedAt: '2026-09-20T00:00:00Z' }
  ],
  seo: { metaTitle: { default: 'شناخت کودک و شکاف نسل‌ها | دوره والدگری' }, metaDescription: { default: 'درس عملی برای فهم تفاوت نسل‌ها، شنیدن کودک و ساختن گفت‌وگوی امن بدون حذف مرزها.' }, canonicalPath: '/lessons/understanding-child-and-generation-gap', keywords: [{ default: 'شناخت کودک' }, { default: 'شکاف نسل‌ها' }, { default: 'گفت‌وگوی والد و فرزند' }], noIndex: false },
  sequence: 1,
  completionRule: 'combined',
  progressWeight: 1,
  progress: { storageKey: 'parenting-course:progress:v1:lesson.child-understanding.generation-gap', trackedItems: ['scenario.generation-gap.after-school', 'checklist.understanding-before-correction', 'quiz.generation-gap.foundation', 'step.observe', 'step.ask', 'step.reflect'], completion: 'lesson-read-and-practice' }
};

const sevenDayProgram = {
  id: 'program.7-day.understanding-child',
  slug: '7-day-understanding-child',
  entityType: 'program',
  kind: '7-day',
  durationDays: 7,
  status: 'published',
  lessonRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'primary' }],
  dayRefs: [
    { id: 'day-1', dayNumber: 1, title: { default: 'مشاهده بدون برچسب' }, objective: { default: 'یک رفتار را دقیق و خنثی ثبت کن.' }, contentRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'primary' }], required: true, estimatedMinutes: 5 },
    { id: 'day-2', dayNumber: 2, title: { default: 'شناخت زمینه' }, objective: { default: 'زمان، مکان و اتفاق پیش از رفتار را بررسی کن.' }, contentRefs: [{ id: 'step.observe', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 7 },
    { id: 'day-3', dayNumber: 3, title: { default: 'تنظیم والد' }, objective: { default: 'پیش از پاسخ، مکث و تنظیم بدن را تمرین کن.' }, contentRefs: [{ id: goldenLesson.id, type: 'lesson', relation: 'supporting' }], required: true, estimatedMinutes: 5 },
    { id: 'day-4', dayNumber: 4, title: { default: 'یک سؤال باز' }, objective: { default: 'سؤال بپرس و برای پاسخ عجله نکن.' }, contentRefs: [{ id: 'step.ask', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 10 },
    { id: 'day-5', dayNumber: 5, title: { default: 'بازتاب تجربه' }, objective: { default: 'پیش از راه‌حل، آنچه فهمیدی بازتاب بده.' }, contentRefs: [{ id: 'step.reflect', type: 'exercise', relation: 'primary' }], required: true, estimatedMinutes: 10 },
    { id: 'day-6', dayNumber: 6, title: { default: 'مرز امن' }, objective: { default: 'یک احساس را بپذیر و یک مرز روشن تعیین کن.' }, contentRefs: [{ id: 'checklist.understanding-before-correction', type: 'checklist', relation: 'primary' }], required: true, estimatedMinutes: 10 },
    { id: 'day-7', dayNumber: 7, title: { default: 'مرور و ادامه' }, objective: { default: 'سناریو و آزمون را کامل کن و یک عادت ادامه‌دار انتخاب کن.' }, contentRefs: [{ id: 'quiz.generation-gap.foundation', type: 'quiz', relation: 'primary' }, { id: goldenLesson.id, type: 'lesson', relation: 'primary' }], required: true, estimatedMinutes: 15 }
  ],
  reviewSchedule: [{ dayNumber: 7, prompt: { default: 'کدام تغییر کوچک، گفت‌وگو را امن‌تر کرد؟' } }],
  completionRule: 'all-required'
};

const lessons = [goldenLesson];
const programs = [sevenDayProgram];

export { goldenLesson, lessons, sevenDayProgram, programs };
