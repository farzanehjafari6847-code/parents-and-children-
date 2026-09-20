const { routes } = await import('./data/routes.js');

const state = {
  language: 'fa',
  activeRoute: 'home',
  completed: {},
  checklist: {},
  progress: 10
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

const app = document.querySelector('#app');

function getText(key) {
  return translations[state.language]?.[key] ?? key;
}

function getRouteById(id) {
  return routes.find((route) => route.id === id) || routes[0];
}

function getParentRouteGroup(groupId) {
  const group = routes.find((route) => route.id === groupId);
  return group || null;
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
          <button class="nav-item active" data-route="home">
            <span>🏠</span>
            <span>${getText('home')}</span>
          </button>
          <button class="nav-item" data-route="parent">
            <span>❤️</span>
            <span>${getText('parent')}</span>
          </button>
          <button class="nav-item" data-route="digital">
            <span>📱</span>
            <span>${getText('digital')}</span>
          </button>
          <button class="nav-item" data-route="child">
            <span>🧒</span>
            <span>${getText('child')}</span>
          </button>
          <button class="nav-item" data-route="familyPlan">
            <span>📋</span>
            <span>${getText('familyPlan')}</span>
          </button>
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
            <p class="eyebrow"> relationship-first</p>
            <h3>فرزندم را بهتر بفهمم</h3>
            <p>
              هسته اصلی این دوره، ارتباط والد و فرزند است و در این مسیر، مسائل دیجیتال، امنیت آنلاین و برنامه خانواده در خدمت همان رابطه قرار می‌گیرند.
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
  const group = getParentRouteGroup(routeId);
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
              در این مسیر، پروژه بر پایه‌ی ارتباط، فهم، مرزگذاری و ترمیم رابطه طراحی شده است. بخش دیجیتال در خدمت همین مسیر قرار می‌گیرد.
            </p>
          </div>
        </section>

        <section class="cards-grid">
          ${children
            .map(
              (item) => `
                <article class="info-card" data-route="${item.id}">
                  <span class="icon">${item.group === 'digital' ? '📱' : item.group === 'parent' ? '❤️' : '🧒'}</span>
                  <h4>${item.label}</h4>
                  <p>${item.summary}</p>
                </article>
              `
            )
            .join('')}
        </section>
      </main>
    </div>
  `;
}

function renderPage(routeId) {
  const route = getRouteById(routeId);
  const hasChildren = routes.some((item) => item.group === routeId);

  if (hasChildren && route.type !== 'page') {
    return renderCategoryPage(routeId);
  }

  const title = route.title || 'صفحه';
  const summary = route.summary || 'توضیح کوتاه';

  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-badge">📘</div>
          <div>
            <p class="eyebrow">PAGE</p>
            <h1>${title}</h1>
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
            <p class="eyebrow">${summary}</p>
            <h2>${title}</h2>
          </div>
        </header>

        <section class="hero compact page-hero">
          <div>
            <p class="eyebrow">CORE CONTENT</p>
            <h3>${title}</h3>
            <p>
              این صفحه برای ادامه توسعه محتوای دوره آماده است. ساختار آن با الگوی استاندارد پروژه تنظیم شده است: مسئله، علت احتمالی، کارهایی که نباید انجام شود، کارهایی که باید انجام شود، جمله‌های آماده، چک‌لیست و برنامه ۷روزه.
            </p>
          </div>
        </section>

        <section class="content-boxes">
          <article class="content-box">
            <h4>چه چیزی می‌بینی؟</h4>
            <p>در این صفحه، رفتار واقعی کودک یا والد به‌صورت روشن توضیح داده می‌شود و مسئله از دید خانواده بررسی می‌شود.</p>
          </article>

          <article class="content-box">
            <h4>پشت این رفتار چه می‌تواند باشد؟</h4>
            <p>درک علت‌های روان‌شناختی، هیجانی و رفتاری قبل از پاسخ‌گویی ضروری است.</p>
          </article>

          <article class="content-box">
            <h4>این کارها را نکن</h4>
            <p>تحقیر، مقایسه، بیش از حد نصیحت کردن و حفظ رابطه با قضاوت باعث بدتر شدن مشکل می‌شود.</p>
          </article>

          <article class="content-box">
            <h4>همین امروز چه کار کنم؟</h4>
            <p>یک اقدام کوتاه، عینی و قابل اجرا برای ایجاد آرامش، همدلی یا مرزگذاری.</p>
          </article>

          <article class="content-box">
            <h4>جمله‌های آماده</h4>
            <ul>
              <li>«می‌خواهم واقعاً بفهمم چه اتفاقی افتاده است.»</li>
              <li>«قبل از تصمیم‌گیری، می‌خواهم حرفت را بشنوم.»</li>
              <li>«احساس خشم قابل قبول است، اما آسیب‌زدن قابل قبول نیست.»</li>
            </ul>
          </article>

          <article class="content-box">
            <h4>چک‌لیست</h4>
            <ul class="checklist">
              <li>✔ رفتار را بدون قضاوت دیده‌ام.</li>
              <li>✔ یک سؤال باز پرسیده‌ام.</li>
              <li>✔ یک راه‌حل کوتاه و منطقی پیشنهاد کرده‌ام.</li>
            </ul>
          </article>
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
  const routeId = state.activeRoute;
  const route = getRouteById(routeId);
  const html = route && (route.type === 'category' || route.id === 'home') ? renderCategoryPage(routeId) : renderPage(routeId);

  if (routeId === 'home') {
    app.innerHTML = renderHome();
    return;
  }

  app.innerHTML = html;
}

function attachEvents() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', () => {
      const routeId = button.dataset.route;
      if (routeId) {
        state.activeRoute = routeId;
        render();
        attachEvents();
      }
    });
  });

  document.querySelectorAll('[data-action="previous"]').forEach((button) => {
    button.addEventListener('click', () => {
      const currentIndex = routes.findIndex((route) => route.id === state.activeRoute);
      const prev = routes[Math.max(0, currentIndex - 1)];
      state.activeRoute = prev.id;
      render();
      attachEvents();
    });
  });

  document.querySelectorAll('[data-action="next"]').forEach((button) => {
    button.addEventListener('click', () => {
      const currentIndex = routes.findIndex((route) => route.id === state.activeRoute);
      const next = routes[Math.min(routes.length - 1, currentIndex + 1)];
      state.activeRoute = next.id;
      render();
      attachEvents();
    });
  });

  document.querySelectorAll('.lang').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.lang || 'fa';
      render();
      attachEvents();
    });
  });
}

function init() {
  render();
  attachEvents();
}

init();
