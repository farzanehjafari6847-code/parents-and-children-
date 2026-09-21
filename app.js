import { routes } from './data/routes.js';
import { goldenLesson, sevenDayProgram } from './data/lessons.js';

const app = document.querySelector('#app');
const state = {
  language: 'fa',
  activeRoute: 'home',
  progress: 18,
  lesson: { scenarioChoice: null, checklist: {}, quiz: {}, steps: {} }
};
const routeFromPath = routes.find((r) => r.route === window.location.pathname);
if (routeFromPath) state.activeRoute = routeFromPath.id;

const translations = {
  fa: {
    home: 'خانه',
    parent: 'والدگری و رابطه',
    digital: 'والدگری دیجیتال',
    child: 'مسیر کودک',
    familyPlan: 'برنامه خانواده',
    dashboard: 'داشبورد اصلی',
    start: 'شروع',
    next: 'بعدی',
    previous: 'قبلی',
    checklist: 'چک‌لیست',
    summary: 'خلاصه',
    problemLibrary: 'کتابخانه مشکل‌ها',
    overallProgress: 'پیشرفت کلی'
  },
  en: {
    home: 'Home',
    parent: 'Parenting & Relationship',
    digital: 'Digital Parenting',
    child: 'Child Path',
    familyPlan: 'Family Plan',
    dashboard: 'Dashboard',
    start: 'Start',
    next: 'Next',
    previous: 'Previous',
    checklist: 'Checklist',
    summary: 'Summary',
    problemLibrary: 'Problem Library',
    overallProgress: 'Overall progress'
  }
};

const contentById = {
  generationGap: {
    title: 'شکاف نسل‌ها',
    intro: 'تفاوت بین والد و فرزند لزوماً نشانه‌ی بد بودن رابطه نیست. گاهی این تفاوت، نتیجه‌ی دو تجربه‌ی کاملاً متفاوت از زندگی، فناوری و احترام است.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['فرزند می‌گوید «تو مرا نمی‌فهمی»', 'والد احساس می‌کند همیشه باید کنترل کند', 'هر گفت‌وگو سریع به دعوا یا دفاع تبدیل می‌شود'] },
      { heading: 'پشت این رفتار چه می‌تواند باشد؟', body: ['تفاوت تجربه‌ی زندگی و سبک رشد', 'احساس خسته بودن، بی‌توجهی یا شنیده‌نشدن', 'تفاوت در مفهوم احترام، مرز و اقتدار'] },
      { heading: 'کارهایی که بهتر است انجام ندهیم', body: ['شروع بحث با جمله‌ی «زمان ما ... بود»', 'مقایسه با بچه‌های دیگر یا خودت در سن او', 'قطع کردن حرف او برای اینکه سریع نتیجه بگیری'] },
      { heading: 'همین امروز چه کار کنیم؟', body: ['یک بار بدون اصلاح، فقط گوش بده', 'برای فهم بهتر، سؤال باز بپرس', 'بعد از آرام شدن درباره‌ی قانون و مرز صحبت کن'] },
      { heading: 'جمله‌های آماده', body: ['می‌خواهم واقعاً بفهمم چه اتفاقی افتاده است.', 'قبل از تصمیم‌گیری، می‌خواهم حرفت را بشنوم.', 'می‌فهمم بعضی وقت‌ها احساس می‌کنی من تو را نمی‌فهمم.'] },
      { heading: 'چک‌لیست', body: ['✔ یک بار بدون قضاوت گوش دادم', '✔ یک سؤال باز پرسیدم', '✔ برای مرز یا قانون، زمان مناسب را انتخاب کردم'] }
    ]
  },
  parentConnection: {
    title: 'ارتباط والد و فرزند',
    intro: 'ارتباط خوب به معنی قبول همه چیز نیست؛ بلکه یعنی شنیدن، درک، تنظیم درست رابطه و حفظ امن بودن در مقابل قضاوت و تحقیر.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['گفت‌وگو کوتاه می‌شود', 'هر موضوعی به دعوا و انتقاد تبدیل می‌شود', 'فرزند با والد حرف نمی‌زند یا فقط کوتاه پاسخ می‌دهد'] },
      { heading: 'الگوی بهتر', body: ['۱) مشاهده و نام‌گذاری احساس', '۲) سؤال باز و بدون قضاوت', '۳) بازتاب احساس و تجربه', '۴) پیشنهاد راهکار فقط در پایان'] },
      { heading: 'کارهای نادرست', body: ['پرسیدن چند سؤال پشت سر هم', 'تبدیل گفتگو به درس و نصیحت', 'قطع کردن حرف کودک در لحظه آسیب‌پذیری'] },
      { heading: 'جمله‌های آماده', body: ['می‌خواهم واقعاً بفهمم چه اتفاقی افتاده است.', 'قبلاً می‌خواهم به‌جای راه‌حل، احساس تو را بفهمم.', 'من نمی‌خواهم با تو دعوا کنم؛ می‌خواهم کاملاً بفهمم مشکل کجاست.'] },
      { heading: 'چک‌لیست', body: ['✔ بدون قطع کردن حرف، گوش دادم', '✔ یک سؤال باز پرسیدم', '✔ احساس او را بازتاب دادم', '✔ بعد از آرام شدن، درباره‌ی راهکار فکر کردیم'] }
    ]
  },
  boundaries: {
    title: 'مرزگذاری سالم',
    intro: 'مرز یعنی روشن بودن، قابل‌پیش‌بینی بودن و اجرای منظم قانون؛ نه کنترل کامل و نه تحقیر.',
    sections: [
      { heading: 'قانون کوتاه', body: ['قانون را کوتاه و روشن بگو', 'دلیل را ساده و کوتاه توضیح بده', 'پیامد را روشن و منطقی اجرا کن'] },
      { heading: 'چه چیزهایی بدتر می‌کند؟', body: ['تهدیدهای غیرقابل اجرا', 'قانون‌های نامشخص و متعدد', 'سردرگمی در اجرای قانون', 'تحقیر در لحظه خشم'] },
      { heading: 'نمونه گفت‌وگو', body: ['«زمان بازی تمام شده است. می‌توانی گوشی را کنار بگذاری یا من بهت کمک کنم. بعد از تکلیف، زمان بازی دوباره می‌آید.»', '«من قانون را تغییر نمی‌دهم، اما می‌توانم با هم راه‌حل پیدا کنیم.»'] },
      { heading: 'چک‌لیست', body: ['✔ قانون روشن و کوتاه بود', '✔ پیامد منطقی و قابل اجرا بود', '✔ رابطه بعد از اجرا حفظ شد'] }
    ]
  },
  angerConflict: {
    title: 'خشم و تعارض',
    intro: 'در لحظه خشم، آموزش اولویت اول نیست؛ ایمنی، آرامش و کنترل اضطراب باید در اولویت قرار بگیرند.',
    sections: [
      { heading: 'در لحظه بحران', body: ['ایمنی را بررسی کن', 'صدایت را پایین نگه دار', 'فاصله بده و سپس دوباره صحبت کن'] },
      { heading: 'بازگشت به گفت‌وگو', body: ['چه اتفاقی افتاد؟', 'چه احساسی داشتی؟', 'در دفعه بعد چه چیزی کمک می‌کند؟'] },
      { heading: 'جمله‌های آماده', body: ['می‌بینم خیلی عصبانی هستی.', 'خشم قابل قبول است، اما آسیب رساندن یا خراب کردن چیزها قابل قبول نیست.', 'بیایید وقتی آرام شدیم درباره‌ی مسئله صحبت کنیم.'] },
      { heading: 'چک‌لیست', body: ['✔ ایمنی حفظ شد', '✔ صدای من آرام بود', '✔ در زمان مناسب، درباره‌ی مسئله حرف زدیم'] }
    ]
  },
  repairAfterConflict: {
    title: 'ترمیم رابطه بعد از دعوا',
    intro: 'ترمیم یعنی قبول سهم خود بدون توجیه، شنیدن احساس فرزند، و بازسازی رابطه بدون انکار مسئله.',
    sections: [
      { heading: 'الگوی ترمیم', body: ['اتفاق را دقیق توصیف کن', 'سهم خودت را بدون دفاع بپذیر', 'احساس او را بشناس', 'برای دفعه بعد برنامه‌ریزی کن'] },
      { heading: 'عذرخواهی سالم', body: ['واضح و صادقانه', 'بدون بهانه', 'بدون حذف قانون', 'با تغییر رفتار همراه'] },
      { heading: 'نمونه جمله', body: ['امروز در لحظه خشم، راه درست را انتخاب نکردم. می‌خواهم درباره‌ی آن با تو حرف بزنم و برای دفعه بعد بهتر عمل کنم.'] },
      { heading: 'چک‌لیست', body: ['✔ سِهم خودم را پذیرفتم', '✔ بدون توجیه عذرخواهی کردم', '✔ قبل از پایان، دوباره رابطه را آرام کردم'] }
    ]
  },
  selfEsteem: {
    title: 'عزت‌نفس و مقایسه',
    intro: 'کودک یا نوجوانی که خود را دائماً با دیگران می‌سنجد، معمولاً درون او حس ناکافی بودن و ترس از قضاوت شکل گرفته است. هدف این است که از مقایسه به رشد واقعی برسیم.',
    sections: [
      { heading: 'نشانه‌ها', body: ['همیشه می‌خواهد مثل دیگران باشد', 'سخت با اشتباه کنار می‌آید', 'احساس می‌کند «من کم‌ترم» یا «من بدترم»'] },
      { heading: 'چه کار کنیم؟', body: ['احساس کودک را بپذیریم', 'به‌جای تحقیر، روی رشد واقعی تمرکز کنیم', 'تفاوت را با بدتر بودن اشتباه نگیریم'] },
      { heading: 'جمله‌های آماده', body: ['تفاوت میان دو نفر به معنی بدتر بودن یکی نیست.', 'ما به‌جای مقایسه، روی رشد واقعی تمرکز می‌کنیم.', 'من می‌خواهم ببینم چه چیزی برایت سخت است، نه فقط نتیجه را بگویم.'] },
      { heading: 'چک‌لیست', body: ['✔ زود قضاوت نکردم', '✔ یک توانایی واقعی کودک را دیدم', '✔ درباره‌ی رشد و نه مقایسه صحبت کردم'] }
    ]
  },
  schoolPressure: {
    title: 'مدرسه و فشار',
    intro: 'فشار تحصیلی معمولاً فقط یک مسئله‌ی درس نیست؛ گاهی ترس از قضاوت، شکست، خستگی و ناامیدی پشت آن است.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['کودک در شروع درس مقاومت می‌کند', 'در هر بار بحث درس، حس دفاعی شکل می‌گیرد', 'والد هم با فشار و تکرار، مسئله را بدتر می‌کند'] },
      { heading: 'الگوی بهتر', body: ['مشکل را درست پیدا کن', 'کار را کوتاه و مشخص کن', 'با کودک برنامه را طراحی کن، نه فقط تحمیل کن'] },
      { heading: 'جمله‌های آماده', body: ['می‌خواهم بفهمم کدام مرحله از درس برایت سخت است؟', 'بیایید قدم به قدم، بدون فشار، پیش برویم.', 'من نمی‌خواهم فقط نتیجه را ببینم؛ می‌خواهم بفهمم مشکل کجا است.'] },
      { heading: 'چک‌لیست', body: ['✔ از قضاوت به مشاهده منتقل شدیم', '✔ مسئولیت روی مسئله مشخص شد', '✔ برای درس، زمان کوتاه و واقعی تعیین شد'] }
    ]
  },
  burnout: {
    title: 'والد کافی و فرسودگی',
    intro: 'فرسودگی والد به معنی بد بودن نیست؛ به معنی این است که باید مراقبت از خود را به همان اندازه‌ی مراقبت از فرزند مهم بدانیم.',
    sections: [
      { heading: 'نشانه‌ها', body: ['خستگی مداوم', 'حساسیت زیاد و کوتاه‌فهمی', 'کم‌حوصله شدن در گفت‌وگوها', 'احساس اینکه همه‌چیز باید خودش انجام شود'] },
      { heading: 'چه کار کنیم؟', body: ['وقتی خسته‌ای، مسئله را به زمان دیگری موکول کن', 'از زبان «من» استفاده کن', 'کمک بگیر یا استراحت برنامه‌ریزی کن'] },
      { heading: 'جمله‌های آماده', body: ['من الان خسته‌ام و نمی‌خواهم با خشم پاسخ بدهم.', 'والد بودن به معنی نداشتن نیاز نیست. من هم به کمک و آرامش نیاز دارم.', 'من نمی‌خواهم در لحظه خستگی یکی از اعضای خانواده را خراب کنم.'] },
      { heading: 'چک‌لیست', body: ['✔ زمان خستگی را شناختم', '✔ از قضاوت شدید فاصله گرفتم', '✔ کمک یا استراحت را پذیرفتم'] }
    ]
  },
  gameFinish: {
    title: 'بازی را تمام نمی‌کند',
    intro: 'وقتی کودک یا نوجوان نمی‌تواند در پایان بازی توقف کند، مسئله فقط «عادت بازی» نیست؛ معمولاً شبیه به مشکل تنظیم هیجان، خستگی، فشار و نارسایی در انتقال است.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['بازی را بدون پایان می‌گذارد', 'بعد از باخت یا شکست، خشم شدید می‌گیرد', 'هنگام توقف، مقاومت می‌کند یا گریه می‌کند'] },
      { heading: 'پشت این رفتار چه می‌تواند باشد؟', body: ['کمک‌نکردن به تنظیم هیجان', 'نیاز به پیروزی و حس موفقیت', 'خستگی، بی‌حوصلگی یا فشار درون‌اشخاصی'] },
      { heading: 'چه کار کنیم؟', body: ['به‌جای پیش‌گرفتن در لحظه جنگ، هشدار زودتر بده', 'قانون را کوتاه و معقول اجرا کن', 'برای توقف، زمان‌یادآوری و ساخت الگوی جدید ایجاد کن'] },
      { heading: 'جمله‌های آماده', body: ['بازی به پایان رسیده است. حالا زمان خاموش کردن است.', 'می‌خواهم در لحظه خشم، بهت کمک کنم اما نمی‌توانم اجازه بدهم بازی ادامه پیدا کند.'] },
      { heading: 'چک‌لیست', body: ['✔ هشدار زودتر داده شد', '✔ قانون روشن و نهایی بود', '✔ بعد از توقف، آرامش به‌جای دعوا برقرار شد'] }
    ]
  },
  strangers: {
    title: 'غریبه‌ها و پیام‌های نامناسب',
    intro: 'مسئله مهم این است که کودک به‌خوبی بداند وقتی با غریبه‌ها یا پیام‌های نامناسب برخورد می‌کند، چه کاری باید انجام دهد و چه کسی می‌تواند کمک کند.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['پیام‌های نامطمئن، غریبه‌ها یا دعوت‌های عجیب', 'دست‌به‌دست شدن اطلاعات شخصی', 'ترس یا کنجکاوی دربارهٔ آنچه دیده می‌شود'] },
      { heading: 'چه کار کنیم؟', body: ['درباره‌ی مفهوم غریبه و قانون امنیت صحبت کنیم', 'برای کودک یک مسیر روشن «همیشه به والد گزارش بده» بسازیم', 'به‌جای ترساندن، آموزش امن‌سازی را اولویت بدهیم'] },
      { heading: 'جمله‌های آماده', body: ['هیچ‌وقت نباید اطلاعات شخصی را با غریبه‌ها به اشتراک بگذاری.', 'اگر چیزی عجیب شد، به من خبر بده؛ من می‌خواهم کمک کنم، نه اینکه خشمگین شوم.'] },
      { heading: 'چک‌لیست', body: ['✔ قانون امنیت روشن است', '✔ راه گزارش‌دادن مشخص است', '✔ بچه با ترس، نه با خشم، می‌تواند کمک بخواهد'] }
    ]
  },
  aiSafety: {
    title: 'هوش مصنوعی و Deepfake',
    intro: 'با رشد هوش مصنوعی، کودک ممکن است با تصاویر، ویدیوها، صداها و داستان‌های جعلی هویت شخصی یا دانش کاذب روبه‌رو شود. آموزش در این زمینه باید واضح، ساده و آگاهانه باشد.',
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['صدا یا تصویر جعلی از دوستان یا افراد مشهور', 'گپ‌های مبتنی بر واتساپ یا شبکه‌های اجتماعی با محتوای نامطمئن', 'تفاوت بین واقعیت و ساخته‌ی هوش مصنوعی'] },
      { heading: 'چه کار کنیم؟', body: ['درباره‌ی واقعیت، جعل و خطری که در پنهان‌کاری نهفته است صحبت کنیم', 'به‌جای ترس، به کودک کمک کنیم «چه چیزی را باور نکند» را یاد بگیرد', 'نسبت به هر محتوای عجیب، از والد یا بزرگ‌تر سؤال بپرسد'] },
      { heading: 'جمله‌های آماده', body: ['اگر چیزی عجیب به نظر می‌رسد، اول از من بپرس؛ بعد از اینکه مطمئن شدیم، درباره‌ی آن تصمیم می‌گیریم.', 'بعضی چیزها ممکن است هم‌زمان واقع‌نما و غلط باشند. ما به واقعیت، نه فقط به ظاهر، اعتماد می‌کنیم.'] },
      { heading: 'چک‌لیست', body: ['✔ کودک می‌داند هنگام مواجهه با محتوا، باید از والد بپرسد', '✔ قانون امنیت و مدارک شخصی روشن است', '✔ مفهوم «بعضی چیزها ساختگی‌اند» به‌صورت ساده آموزش داده شده است'] }
    ]
  },
  technicalGuide: {
    title: 'راهنمای فنی',
    intro: 'در این قسمت، ابزارهای فنی برای والدین به شکل روشن و عملی توضیح داده می‌شوند: کنترل زمان، خانواده، قفل‌ها، محدودیت‌ها و چک‌لیست‌های عملکردی.',
    sections: [
      { heading: 'iPhone / iPad', body: ['Screen Time را فعال کن', 'محدودیت زمان برنامه‌ها و محتوای نامناسب را روشن کن', 'در صورت نیاز، درخواست برای خرید و نصب را کنترل کن'] },
      { heading: 'Android', body: ['Family Link فعال کن', 'مرزهای ایجاد برنامه، زمان و محتوای مناسب را تنظیم کن', 'دسترسی کودک به اپ‌ها و خریدهای درون‌برنامه‌ای را کنترل کن'] },
      { heading: 'آموزش عملی', body: ['قبل از ابزار، قانون خانواده را روشن کن', 'بعد از ابزار، یکی از قوانین را با کودک مرور کن', 'چک‌لیست هفتگی را اجرا کن و بازبینی انجام بده'] },
      { heading: 'چک‌لیست', body: ['✔ تنظیمات کودک انجام شده است', '✔ ساعت استفاده و محتوا مشخص است', '✔ قوانین در جلسه خانوادگی مرور شده‌اند'] }
    ]
  },
  familyPlan: {
    title: 'برنامه خانواده',
    intro: 'برنامه خانواده به والدین کمک می‌کند تا با یک نگاه شفاف و مشترک، قانون‌ها و رفتارهای دیجیتال و غیر دیجیتال را تنظیم کنند و مسیر ارتباط را هم حفظ کنند.',
    sections: [
      { heading: 'قانون‌های اصلی', body: ['در خانه، زمان مشخصی برای گوشی و صفحه وجود دارد', 'درباره‌ی محتوا و خریدهای آنلاین تصمیم مشترک می‌گیریم', 'در صورت مشکل، والد و فرزند در یک زمان آرام درباره‌ی آن حرف می‌زنند'] },
      { heading: 'برنامه ۷روزه', body: ['روز ۱: قانون‌های اصلی را مشخص کن', 'روز ۲: زمان صفحه و گوشی را تنظیم کن', 'روز ۳: یک جلسه کوتاه درباره‌ی محتوا در خانه داشته باش', 'روز ۴: زمان تعامل بدون صفحه بساز', 'روز ۵: درباره‌ی تجربه‌های کودک بپرس', 'روز ۶: بررسی و بازبینی قانون‌ها', 'روز ۷: جمع‌بندی و تصمیم برای هفته بعد'] },
      { heading: 'چک‌لیست', body: ['✔ قانون واضح است', '✔ زمان صفحه و بازی مشخص است', '✔ هر دو طرف در تصمیم‌گیری شریک‌اند'] }
    ]
  }
};

function getText(key) {
  return translations[state.language]?.[key] ?? key;
}

function getRouteById(id) {
  return routes.find((route) => route.id === id) || routes[0];
}

function renderHome() {
  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-badge">👨‍👩‍👧</div>
          <div>
            <p class="eyebrow">COURSE</p>
            <h1>Parenting Course</h1>
          </div>
        </div>
        <nav class="nav">
          <button class="nav-item active" data-route="home"><span>🏠</span><span>${getText('home')}</span></button>
          <button class="nav-item" data-route="parent"><span>❤️</span><span>${getText('parent')}</span></button>
          <button class="nav-item" data-route="digital"><span>📱</span><span>${getText('digital')}</span></button>
          <button class="nav-item" data-route="child"><span>🧒</span><span>${getText('child')}</span></button>
          <button class="nav-item" data-route="familyPlan"><span>📋</span><span>${getText('familyPlan')}</span></button>
        </nav>
        <div class="side-card">
          <p class="eyebrow">${getText('overallProgress')}</p>
          <div class="progress-bar"><span style="width:${state.progress}%"></span></div>
          <strong>${state.progress}%</strong>
        </div>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">${getText('dashboard')}</p>
            <h2>داشبورد اصلی</h2>
          </div>
          <div class="lang-switch">
            <button class="lang active" data-lang="fa">فارسی</button>
            <button class="lang" data-lang="en">EN</button>
          </div>
        </header>
        <section class="hero">
          <div>
            <p class="eyebrow">relationship-first</p>
            <h3>فرزندم را بهتر بفهمم</h3>
            <p>هسته اصلی این دوره، ارتباط والد و فرزند است. در این مسیر، مسائل دیجیتال و خانواده به‌عنوان ابزارهای عملی در خدمت همان رابطه قرار می‌گیرند.</p>
          </div>
          <button class="primary-btn" data-route="parent">${getText('start')}</button>
        </section>
        <section class="cards-grid">
          <article class="info-card" data-route="parent"><span class="icon">❤️</span><h4>والدگری و رابطه</h4><p>شکاف نسل‌ها، ارتباط، مرز، خشم و ترمیم رابطه</p></article>
          <article class="info-card" data-route="digital"><span class="icon">📱</span><h4>والدگری دیجیتال</h4><p>بازی، گوشی، شبکه‌های اجتماعی، غریبه‌ها و محدودیت‌ها</p></article>
          <article class="info-card" data-route="child"><span class="icon">🧒</span><h4>مسیر کودک ۷ تا ۱۲ سال</h4><p>خودشناسی، احساس، هدف، بازی و برنامه هفتگی</p></article>
          <article class="info-card" data-route="familyPlan"><span class="icon">📋</span><h4>برنامه خانواده</h4><p>قوانین، زمان بدون صفحه و برنامه ۳۰روزه</p></article>
        </section>
        <section class="problem-section">
          <div class="section-title-wrap"><h3>${getText('problemLibrary')}</h3></div>
          <div class="problem-list">
            <button class="problem-chip" data-route="generationGap">شکاف نسل‌ها</button>
            <button class="problem-chip" data-route="parentConnection">ارتباط والد و فرزند</button>
            <button class="problem-chip" data-route="gameFinish">بازی را تمام نمی‌کند</button>
            <button class="problem-chip" data-route="strangers">غریبه‌ها و پیام‌ها</button>
            <button class="problem-chip" data-route="aiSafety">Deepfake</button>
            <button class="problem-chip" data-route="schoolPressure">مدرسه و فشار</button>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderCategoryPage(routeId) {
  const group = routes.find((route) => route.id === routeId);
  const children = routes.filter((item) => item.group === routeId && item.id !== routeId);
  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-badge">📚</div>
          <div>
            <p class="eyebrow">PATH</p>
            <h1>${group?.title || 'مسیر'}</h1>
          </div>
        </div>
        <nav class="nav">
          <button class="nav-item" data-route="home">🏠 خانه</button>
          <button class="nav-item active" data-route="${routeId}">${group?.label || 'مسیر'}</button>
        </nav>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">${group?.summary || 'مسیر'}</p>
            <h2>${group?.title || 'مسیر'}</h2>
          </div>
        </header>
        <section class="hero compact">
          <div>
            <h3>${group?.title || 'مسیر'}</h3>
            <p>در این مسیر، تمرکز اصلی روی فهم کودک و نوجوان، مرزگذاری، خشم، ترمیم رابطه و ارتباط است. بخش دیجیتال در خدمت همین مسیر است.</p>
          </div>
        </section>
        <section class="cards-grid">
          ${children.map((item) => `
            <article class="info-card" data-route="${item.id}">
              <span class="icon">${item.group === 'digital' ? '📱' : item.group === 'parent' ? '❤️' : '🧒'}</span>
              <h4>${item.label}</h4>
              <p>${item.summary}</p>
            </article>
          `).join('')}
        </section>
      </main>
    </div>
  `;
}


function localText(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value.translations?.[state.language] || value.default || '';
}

function renderBlocks(blocks = []) {
  return blocks.map((block) => {
    if (block.type === 'heading') return `<h3>${block.data.text}</h3>`;
    if (block.type === 'paragraph') return `<p>${block.data.text}</p>`;
    if (block.type === 'quote') return `<blockquote class="lesson-quote">${block.data.text}</blockquote>`;
    if (block.type === 'list') return `<ul>${block.data.items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    if (block.type === 'callout') return `<div class="lesson-callout ${block.data.tone || ''}"><strong>${block.data.title}</strong><p>${block.data.text}</p></div>`;
    return '';
  }).join('');
}

function checklistPercent() {
  const required = goldenLesson.checklist.items.filter((x) => x.required);
  const done = required.filter((x) => state.lesson.checklist[x.id]).length;
  return Math.round((done / required.length) * 100);
}

function quizScore() {
  return goldenLesson.quiz.questions.reduce((sum, q) => {
    const answer = state.lesson.quiz[q.id];
    if (!answer) return sum;
    if (q.type === 'multiple') {
      const selected = Array.isArray(answer) ? answer : [];
      return sum + q.options.filter((o) => selected.includes(o.id)).reduce((s,o)=>s+o.score,0);
    }
    return sum + (q.options.find((o) => o.id === answer)?.score || 0);
  }, 0);
}

function renderGoldenLesson() {
  const lesson = goldenLesson;
  const checked = checklistPercent();
  const score = quizScore();
  const scenario = lesson.scenario;
  const selected = scenario.choices.find((x) => x.id === state.lesson.scenarioChoice);
  const completedSteps = Object.values(state.lesson.steps).filter(Boolean).length;
  const totalUnits = lesson.checklist.items.filter(x=>x.required).length + lesson.quiz.questions.length + lesson.practicalSteps.length + 1;
  const doneUnits = Math.round(checked / 100 * lesson.checklist.items.filter(x=>x.required).length) + Object.keys(state.lesson.quiz).length + completedSteps + (state.lesson.scenarioChoice ? 1 : 0);
  const lessonProgress = Math.min(100, Math.round(doneUnits / totalUnits * 100));
  return `
  <div class="shell">
    <aside class="sidebar">
      <div class="brand-block"><div class="brand-badge">🌉</div><div><p class="eyebrow">GOLDEN LESSON</p><h1>${localText(lesson.title)}</h1></div></div>
      <nav class="nav">
        <button class="nav-item" data-route="home">🏠 خانه</button>
        <button class="nav-item" data-route="parent">❤️ والدگری و رابطه</button>
        <button class="nav-item active" data-route="generationGap">🌉 شکاف نسل‌ها</button>
      </nav>
      <div class="side-card"><p class="eyebrow">پیشرفت این درس</p><div class="progress-bar"><span style="width:${lessonProgress}%"></span></div><strong>${lessonProgress}%</strong></div>
    </aside>
    <main class="main-panel lesson-shell">
      <header class="topbar"><div><p class="eyebrow">Connection + Boundary</p><h2>${localText(lesson.title)}</h2></div><div class="lang-switch"><button class="lang ${state.language==='fa'?'active':''}" data-lang="fa">فارسی</button><button class="lang ${state.language==='en'?'active':''}" data-lang="en">EN</button></div></header>

      <section class="hero compact lesson-hero"><div><h3>${localText(lesson.title)}</h3><p>${localText(lesson.summary)}</p><div class="lesson-meta"><span class="meta-pill">⏱ ${lesson.estimatedMinutes} دقیقه</span><span class="meta-pill">👧 ۷–۱۸ سال</span><span class="meta-pill">🎯 عملی و تعاملی</span></div></div></section>

      <section class="lesson-section"><h3>سه پنجره سنی</h3><div class="lesson-grid">${lesson.ageWindows.map(a=>`<article class="lesson-card age-card"><h4>${a.label}</h4><p><strong>نیاز برجسته:</strong> ${a.prominentNeed}</p><p><strong>این رفتار ممکن است یعنی:</strong> ${a.sameBehaviorDifferentMeaning}</p><p><strong>پاسخ والد:</strong> ${a.parentResponse}</p><p><strong>استقلال و حریم:</strong> ${a.autonomyPrivacyParticipation}</p></article>`).join('')}</div></section>

      <section class="lesson-section"><h3>هسته آموزشی</h3><div class="lesson-card lesson-body">${renderBlocks(lesson.body)}</div></section>

      <section class="lesson-section"><h3>سه Case واقعی</h3><div class="lesson-grid">
        ${[
          ['۸ سال','«تو همیشه دستور می‌دهی»','دستورها را کوتاه کن، یک انتخاب محدود بده و مرز ایمنی را روشن نگه دار.'],
          ['۱۲ سال','«تو اصلاً من را نمی‌فهمی»','قبل از نتیجه‌گیری، نسخه کودک را بشنو و بین احساس و رفتار فرق بگذار.'],
          ['۱۶ سال','مسائل شخصی را نمی‌گوید','حریم را محترم بدان، دعوت بدون بازجویی بده و فقط خطر واقعی را جداگانه بررسی کن.']
        ].map(x=>`<article class="lesson-card case-card"><span class="tag-pill">${x[0]}</span><h4>${x[1]}</h4><p>${x[2]}</p></article>`).join('')}
      </div></section>

      <section class="lesson-section"><h3>Decision Map — نقشه تصمیم</h3><div class="lesson-card map-flow">
        ${['چه می‌بینم؟ رفتار را بدون برچسب توصیف کن','چه چیزی ممکن است پشت رفتار باشد؟','آیا اول باید هیجان آرام شود؟','اتصال: یک سؤال باز و کوتاه','مرز: آیا ایمنی یا مسئولیت روشن مطرح است؟','اقدام کوچک را انتخاب کن','نتیجه را مشاهده کن','اگر لازم بود روش را تنظیم یا کمک تخصصی بگیر'].map(x=>`<div class="map-step">${x}</div>`).join('')}
      </div></section>

      <section class="lesson-section"><h3>جمله‌های آماده</h3><div class="lesson-grid">${lesson.readyPhrases.map(x=>`<article class="lesson-card"><p>${localText(x)}</p></article>`).join('')}</div></section>

      <section class="lesson-section"><h3>قدم‌های عملی</h3><div class="lesson-grid">${lesson.practicalSteps.map(s=>`<article class="lesson-card"><label class="check-row"><input type="checkbox" data-step="${s.id}" ${state.lesson.steps[s.id]?'checked':''}><span><strong>${s.sequence}. ${localText(s.title)}</strong><br>${renderBlocks(localText(s.instruction))}</span></label></article>`).join('')}</div></section>

      <section class="lesson-section interactive-panel"><h3>سناریوی تعاملی</h3><p>${localText(scenario.context)}</p><div class="choice-list">${scenario.choices.map(ch=>`<button class="choice-button ${state.lesson.scenarioChoice===ch.id?'selected':''}" data-scenario="${ch.id}">${localText(ch.label)}</button>`).join('')}</div>
        ${selected?`<div class="feedback-box"><strong>نکته خوب:</strong> ${selected.feedback.good}<br><strong>ریسک:</strong> ${selected.feedback.risk}<br><strong>چه زمانی مناسب است:</strong> ${selected.feedback.whenAppropriate}<br><strong>گزینه بهتر در شرایط دیگر:</strong> ${selected.feedback.betterAlternative}</div>`:''}
      </section>

      <section class="lesson-section"><h3>Checklist — فهمیدن قبل از اصلاح</h3><div class="lesson-card"><div class="progress-summary"><span>موارد ضروری انجام‌شده</span><strong>${checked}%</strong></div><div class="progress-bar"><span style="width:${checked}%"></span></div>${lesson.checklist.items.map(i=>`<label class="check-row"><input type="checkbox" data-check="${i.id}" ${state.lesson.checklist[i.id]?'checked':''}><span>${localText(i.label)} ${i.required?'<small>• ضروری</small>':''}</span></label>`).join('')}</div></section>

      <section class="lesson-section interactive-panel"><h3>${localText(lesson.quiz.title)}</h3>${lesson.quiz.questions.map(q=>`<div class="quiz-question"><strong>${q.sequence}. ${localText(q.prompt)}</strong>${q.options.map(o=>`<label class="quiz-option"><input type="${q.type==='multiple'?'checkbox':'radio'}" name="quiz-${q.id}" data-quiz="${q.id}" value="${o.id}" ${q.type==='multiple'?(state.lesson.quiz[q.id]||[]).includes(o.id)?'checked':'':state.lesson.quiz[q.id]===o.id?'checked':''}> ${localText(o.label)}</label>`).join('')}</div>`).join('')}<div class="feedback-box"><strong>امتیاز فعلی: ${score} / 6</strong><br>${score>=4?'مرور کامل شد؛ حالا کارت اقدام نهایی را در یک موقعیت واقعی اجرا کن.':'پاسخ‌ها را مرور کن؛ هدف فهم تفاوت میان اتصال، حریم و مرز است.'}</div></section>

      <section class="lesson-section action-card"><h3>Final Action Card — اگر فردا دوباره اتفاق افتاد</h3><ol><li>مکث می‌کنم و رفتار قابل مشاهده را نام می‌برم.</li><li>یک سؤال باز می‌پرسم و گوش می‌دهم.</li><li>بخش قابل فهم تجربه کودک را بازتاب می‌دهم.</li><li>بر اساس ایمنی، یا مرز کوتاه می‌گذارم یا زمان بازگشت می‌دهم.</li></ol><p>«ممکن است برداشت من کامل نباشد؛ می‌خواهم اول بفهمم برای تو چه اتفاقی افتاد.»</p></section>

      <section class="lesson-section"><h3>برنامه ۷روزه</h3><div class="lesson-grid">${sevenDayProgram.dayRefs.map(d=>`<article class="lesson-card program-day"><span class="day-number">${d.dayNumber}</span><div><h4>${localText(d.title)}</h4><p>${localText(d.objective)}</p><small>حدود ${d.estimatedMinutes} دقیقه</small></div></article>`).join('')}</div></section>

      <section class="lesson-section"><h3>چه زمانی کمک تخصصی بگیریم؟</h3><div class="lesson-card lesson-callout safety"><p>${localText(lesson.specialistHelp.indicators[0])}</p><p>${localText(lesson.specialistHelp.disclaimer)}</p></div></section>

      <section class="lesson-section"><h3>منابع علمی</h3><div class="lesson-card"><ul class="resource-list">${lesson.sources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${localText(s.title)}</a> — ${s.publisher}</li>`).join('')}</ul></div></section>

      <section class="lesson-section"><h3>موضوعات مرتبط</h3><div class="problem-list"><button class="problem-chip" data-route="parentConnection">ارتباط والد و فرزند</button><button class="problem-chip" data-route="boundaries">مرزگذاری سالم</button><button class="problem-chip" data-route="gameFinish">پایان بازی</button></div></section>

      <div class="pager"><button class="secondary-btn" data-route="parent">قبلی: مسیر والدگری</button><button class="primary-btn" data-route="parentConnection">بعدی: ارتباط والد و فرزند</button></div>
    </main>
  </div>`;
}

function renderStaticPage(routeId) {
  const route = routes.find((item) => item.id === routeId) || routes[0];
  const content = contentById[routeId] || { title: route.title, intro: route.summary, sections: [{ heading: 'چه چیزی می‌بینی؟', body: ['درک و تشخیص مسئله', 'مشاهده رفتار و واکنش‌ها', 'بازتاب احساس یکدیگر'] }, { heading: 'چه کار کنیم؟', body: ['سکوت قضاوت‌آمیز', 'گفت‌وگوی آرام', 'مرز روشن و کوتاه'] }] };
  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-badge">📘</div>
          <div>
            <p class="eyebrow">PAGE</p>
            <h1>${content.title}</h1>
          </div>
        </div>
        <nav class="nav">
          <button class="nav-item" data-route="home">🏠 خانه</button>
          <button class="nav-item" data-route="parent">❤️ والدگری</button>
          <button class="nav-item" data-route="digital">📱 دیجیتال</button>
          <button class="nav-item" data-route="child">🧒 کودک</button>
        </nav>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">${route.summary}</p>
            <h2>${content.title}</h2>
          </div>
        </header>
        <section class="hero compact page-hero">
          <div>
            <p class="eyebrow">CORE CONTENT</p>
            <h3>${content.title}</h3>
            <p>${content.intro}</p>
          </div>
        </section>
        <section class="content-boxes">
          ${content.sections.map((section) => `
            <article class="content-box">
              <h4>${section.heading}</h4>
              <ul>${section.body.map((line) => `<li>${line}</li>`).join('')}</ul>
            </article>
          `).join('')}
        </section>
        <div class="pager">
          <button class="secondary-btn" data-action="previous">${getText('previous')}</button>
          <button class="primary-btn" data-action="next">${getText('next')}</button>
        </div>
      </main>
    </div>
  `;
}

function render() {
  const route = routes.find((item) => item.id === state.activeRoute) || routes[0];
  if (state.activeRoute === 'home') {
    app.innerHTML = renderHome();
    return;
  }
  if (state.activeRoute === 'generationGap') {
    app.innerHTML = renderGoldenLesson();
    return;
  }
  if (route.type === 'category') {
    app.innerHTML = renderCategoryPage(route.id);
    return;
  }
  app.innerHTML = renderStaticPage(route.id);
}

function bindEvents() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => {
      const routeId = button.dataset.route;
      if (!routeId) return;
      state.activeRoute = routeId;
      const nextRoute = getRouteById(routeId);
      if (nextRoute?.route && window.location.pathname !== nextRoute.route) history.pushState({ routeId }, '', nextRoute.route);
      render();
      bindEvents();
    });
  });
  document.querySelectorAll('[data-action="previous"]').forEach((button) => {
    button.addEventListener('click', () => {
      const idx = routes.findIndex((route) => route.id === state.activeRoute);
      const prev = routes[Math.max(0, idx - 1)];
      state.activeRoute = prev.id;
      render();
      bindEvents();
    });
  });
  document.querySelectorAll('[data-action="next"]').forEach((button) => {
    button.addEventListener('click', () => {
      const idx = routes.findIndex((route) => route.id === state.activeRoute);
      const next = routes[Math.min(routes.length - 1, idx + 1)];
      state.activeRoute = next.id;
      render();
      bindEvents();
    });
  });
  document.querySelectorAll('[data-scenario]').forEach((button) => {
    button.addEventListener('click', () => { state.lesson.scenarioChoice = button.dataset.scenario; render(); bindEvents(); });
  });
  document.querySelectorAll('[data-check]').forEach((input) => {
    input.addEventListener('change', () => { state.lesson.checklist[input.dataset.check] = input.checked; render(); bindEvents(); });
  });
  document.querySelectorAll('[data-step]').forEach((input) => {
    input.addEventListener('change', () => { state.lesson.steps[input.dataset.step] = input.checked; render(); bindEvents(); });
  });
  document.querySelectorAll('[data-quiz]').forEach((input) => {
    input.addEventListener('change', () => {
      const q = goldenLesson.quiz.questions.find(x => x.id === input.dataset.quiz);
      if (q?.type === 'multiple') {
        const values = [...document.querySelectorAll(`[data-quiz="${q.id}"]:checked`)].map(x=>x.value);
        state.lesson.quiz[q.id] = values;
      } else state.lesson.quiz[input.dataset.quiz] = input.value;
      render(); bindEvents();
    });
  });
  document.querySelectorAll('.lang').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.lang || 'fa';
      render();
      bindEvents();
    });
  });
}

render();
bindEvents();


window.addEventListener('popstate', () => {
  const matched = routes.find((r) => r.route === window.location.pathname);
  state.activeRoute = matched?.id || 'home';
  render();
  bindEvents();
});
