import { routes } from './data/routes.js';

const app = document.querySelector('#app');
const state = {
  language: 'fa',
  activeRoute: 'home',
  progress: 18
};

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
    intro: 'تفاوت‌ها واقعاً به معنی فاصله و درگیری هستند؛ اما اگر درست فهمیده شوند، می‌توانند زمینه‌ی نزدیکی و درک بهتر شوند.',
    sections: [
      {
        heading: 'چه چیزی می‌بینی؟',
        body: ['فرزند می‌گوید «تو مرا نمی‌فهمی»', 'والد احساس می‌کند همیشه باید کنترل کند', 'هریک از طرفین، رفتار طرف مقابل را اشتباه می‌بیند']
      },
      {
        heading: 'پشت این رفتار چه می‌تواند باشد؟',
        body: ['تفاوت تجربه و فضای زندگی', 'احساس خسته بودن و عدم شنیده شدن', 'تفاوت در مفهوم احترام و اقتدار']
      },
      {
        heading: 'دستورالعمل کوتاه',
        body: ['در لحظه آتش‌سوزی، قضاوت نکن', 'احساس کودک را بازتاب بده', 'بعد از آرام شدن درباره‌ی قانون و مرز حرف بزن']
      }
    ]
  },
  parentConnection: {
    title: 'ارتباط والد و فرزند',
    intro: 'ارتباط خوب به معنی قبول همه چیز نیست؛ به معنی شنیدن، درک و تنظیم درست رابطه بدون تحقیر است.',
    sections: [
      {
        heading: 'چه چیزی می‌بینی؟',
        body: ['گفت‌وگو کوتاه می‌شود', 'هر موضوعی به دعوا تبدیل می‌شود', 'کودک با والد حرف نمی‌زند']
      },
      {
        heading: 'الگوی بهتر',
        body: ['مشاهده اول', 'سؤال باز دوم', 'بازتاب احساس سوم', 'راهکار در پایان']
      },
      {
        heading: 'جمله‌ی آماده',
        body: ['می‌خواهم واقعاً بفهمم چه اتفاقی افتاده است.', 'قبل از تصمیم‌گیری، می‌خواهم حرفت را بشنوم.']
      }
    ]
  },
  boundaries: {
    title: 'مرزگذاری سالم',
    intro: 'مرز به معنی کنترل نیست؛ مرز یعنی روشن‌بودن، قابل پیش‌بینی بودن و اجرای منظم قانون.',
    sections: [
      {
        heading: 'قانون کوتاه',
        body: ['قانون را کوتاه بگو', 'دلیل را ساده توضیح بده', 'پیامد را روشن و منطقی اجرا کن']
      },
      {
        heading: 'چه چیزهایی بدتر می‌کند؟',
        body: ['اخطارهای غیرقابل اجرا', 'قانون‌های ناپیوسته', 'تحقیر در لحظه ناراحتی']
      },
      {
        heading: 'چک‌لیست',
        body: ['قانون مشخص است', 'پیامد منطقی است', 'رابطه از دست نرفته است']
      }
    ]
  },
  angerConflict: {
    title: 'خشم و تعارض',
    intro: 'در لحظه خشم، آموزش نباید اولویت اول باشد؛ ایمنی و آرامش باید اولویت باشند.',
    sections: [
      {
        heading: 'در لحظه بحران',
        body: ['ایمنی را بررسی کن', 'صدایت را پایین نگه دار', 'فاصله بده و بعد دوباره صحبت کن']
      },
      {
        heading: 'گفت‌وگو بعدی',
        body: ['چه اتفاقی افتاد؟', 'چه احساسی داشتی؟', 'در دفعه بعد چه چیزی کمک می‌کند؟']
      },
      {
        heading: 'جمله‌ی آماده',
        body: ['می‌بینم خیلی عصبانی هستی.', 'خشم قابل قبول است، آسیب‌زدن قابل قبول نیست.']
      }
    ]
  },
  repairAfterConflict: {
    title: 'ترمیم رابطه بعد از دعوا',
    intro: 'ترمیم یعنی قبول سهم خود، شنیدن احساس فرزند، و بازسازی اعتماد بدون توجیه یا انکار.',
    sections: [
      {
        heading: 'الگوی ترمیم',
        body: ['اتفاق را دقیق توصیف کن', 'سهم خودت را بپذیر', 'احساس فرزند را بشناس', 'برای دفعه بعد برنامه‌ریزی کن']
      },
      {
        heading: 'عذرخواهی سالم',
        body: ['بیان روشن', 'بدون بهانه', 'بدون حذف قانون', 'با تغییر رفتار همراه']
      },
      {
        heading: 'نمونه جمله',
        body: ['امروز در لحظه خشم، راه درست را انتخاب نکردم. می‌خواهم درباره‌اش با تو حرف بزنم.']
      }
    ]
  },
  selfEsteem: {
    title: 'عزت‌نفس و مقایسه',
    intro: 'کودک یا نوجوانی که دائما خود را با دیگران می‌سنجد، اغلب به احساس ناکافی بودن رسیده است. هدف این است که از مقایسه به رشد واقعی برسیم.',
    sections: [
      {
        heading: 'نشانه‌ها',
        body: ['زیاد از خود می‌پرسد «چقدر خوبم؟»', 'همیشه از کسی بهتر می‌خواهد باشد', 'نسبت به اشتباه‌های کوچک خیلی زود شرم می‌خورد']
      },
      {
        heading: 'چه کار کنیم؟',
        body: ['احساس را بپذیریم', 'به‌جای تحقیر، روی رشد تمرکز کنیم', 'نکات مثبت واقعی را بپذیریم']
      },
      {
        heading: 'جمله آماده',
        body: ['تفاوت میان دو نفر به معنی بدتر بودن یکی نیست.', 'ما به‌جای مقایسه، روی رشد واقعی تمرکز می‌کنیم.']
      }
    ]
  },
  schoolPressure: {
    title: 'مدرسه و فشار',
    intro: 'فشار تحصیلی معمولاً فقط یک مسئله‌ی درس نیست؛ گاهی ترس از قضاوت، ناکامی، خستگی و ناامیدی پشت آن است.',
    sections: [
      {
        heading: 'چه چیزهایی دیده می‌شود؟',
        body: ['بازگشت به بحث درس', 'دفاع از خود', 'سردرگمی، خستگی یا اجتناب']
      },
      {
        heading: 'الگوهای بهتر',
        body: ['مشکل را پیدا کن', 'کار را کوتاه و مشخص کن', 'برنامه را با کودک طراحی کن']
      },
      {
        heading: 'جمله آماده',
        body: ['می‌خواهم بفهمم کدام مرحله از درس برایت سخت است؟', 'بیایید قدم به قدم، بدون فشار، پیش برویم.']
      }
    ]
  },
  burnout: {
    title: 'والد کافی و فرسودگی',
    intro: 'فرسودگی والد به معنی بد بودن نیست؛ به معنی این است که باید به مراقبت از خود و تنظیم نیازها هم توجه کنیم.',
    sections: [
      {
        heading: 'نشانه‌ها',
        body: ['خستگی مداوم', 'حساسیت زیاد', 'کم‌حوصله شدن', 'فرسودگی پس از چند روز مداوم']
      },
      {
        heading: 'چه کنیم؟',
        body: ['قبل از قضاوت، آرامش را پیدا کنیم', 'از زبان «من» استفاده کنیم', 'کمک بگیریم و استراحت تعیین کنیم']
      },
      {
        heading: 'جمله آماده',
        body: ['من خسته‌ام، و این یعنی به استراحت و کمک نیاز دارم.', 'والد بودن یعنی مراقبت از خود هم هست.']
      }
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
            <p>
              هسته اصلی این دوره، ارتباط والد و فرزند است. در این مسیر، مسائل دیجیتال و خانواده به‌عنوان ابزارهای عملی در خدمت همان رابطه قرار می‌گیرند.
            </p>
          </div>
          <button class="primary-btn" data-route="parent">${getText('start')}</button>
        </section>

        <section class="cards-grid">
          <article class="info-card" data-route="parent">
            <span class="icon">❤️</span>
            <h4>والدگری و رابطه</h4>
            <p>شکاف نسل‌ها، ارتباط، مرز، خشم و ترمیم رابطه</p>
          </article>

          <article class="info-card" data-route="digital">
            <span class="icon">📱</span>
            <h4>والدگری دیجیتال</h4>
            <p>بازی، گوشی، شبکه‌های اجتماعی، غریبه‌ها و محدودیت‌ها</p>
          </article>

          <article class="info-card" data-route="child">
            <span class="icon">🧒</span>
            <h4>مسیر کودک ۷ تا ۱۲ سال</h4>
            <p>خودشناسی، احساس، هدف، بازی و برنامه هفتگی</p>
          </article>

          <article class="info-card" data-route="familyPlan">
            <span class="icon">📋</span>
            <h4>برنامه خانواده</h4>
            <p>قوانین، زمان بدون صفحه و برنامه ۳۰روزه</p>
          </article>
        </section>

        <section class="problem-section">
          <div class="section-title-wrap">
            <h3>${getText('problemLibrary')}</h3>
          </div>
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
            <p>
              در این مسیر، تمرکز اصلی روی فهم کودک و نوجوان، مرزگذاری، خشم، ترمیم رابطه و ارتباط است. بخش دیجیتال در خدمت همین مسیر است.
            </p>
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

function renderStaticPage(routeId) {
  const route = routes.find((item) => item.id === routeId) || routes[0];
  const content = contentById[routeId] || {
    title: route.title,
    intro: route.summary,
    sections: [
      { heading: 'چه چیزی می‌بینی؟', body: ['درک و تشخیص مسئله', 'مشاهده رفتار و واکنش‌ها', 'بازتاب احساس یکدیگر'] },
      { heading: 'چه کار کنیم؟', body: ['سکوت قضاوت‌آمیز', 'گفت‌وگوی آرام', 'مرز روشن و کوتاه'] }
    ]
  };

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
              <ul>
                ${section.body.map((line) => `<li>${line}</li>`).join('')}
              </ul>
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
