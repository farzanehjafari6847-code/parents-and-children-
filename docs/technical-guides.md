# نقشه فنی و مراحل توسعه

## وضعیت فعلی

پروژه یک prototype استاتیک و mobile-first است. هنوز Payload CMS، احراز هویت، فروش، پرداخت و backend پیاده‌سازی نشده‌اند.

## ساختار پیشنهادی نهایی

```text
parents-and-children-/
├── README.md
├── index.html
├── styles.css
├── app.js
├── .gitignore
├── data/
│   ├── routes.js
│   ├── content-registry.js
│   ├── problems.js
│   ├── solutions.js
│   ├── programs.js
│   └── locales/
│       ├── fa.js
│       ├── en.js
│       ├── sv.js
│       └── de.js
├── components/
│   ├── app-shell.js
│   ├── sidebar.js
│   ├── breadcrumbs.js
│   ├── path-card.js
│   ├── lesson-card.js
│   ├── content-block.js
│   ├── checklist.js
│   ├── quiz.js
│   ├── progress-bar.js
│   └── family-plan-form.js
├── pages/
│   ├── home.js
│   ├── paths.js
│   ├── path-detail.js
│   ├── lesson-detail.js
│   ├── problem-library.js
│   ├── problem-detail.js
│   ├── solution-detail.js
│   ├── program-detail.js
│   ├── child-path.js
│   ├── family-plan.js
│   ├── search.js
│   ├── about.js
│   └── contact.js
├── services/
│   ├── router.js
│   ├── content-service.js
│   ├── progress-store.js
│   ├── locale-service.js
│   └── search-service.js
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── docs/
│   ├── content-architecture.md
│   ├── content-model.md
│   ├── route-map.md
│   └── technical-guides.md
└── assets/
    ├── icons/
    └── images/
```

## نقش فایل‌ها

- `pages/`: composition صفحه؛ بدون نگهداری محتوای حجیم.
- `components/`: اجزای قابل استفاده مجدد.
- `data/`: registry و محتوای ساختاریافته‌ی نسخه‌ی prototype.
- `services/`: منطق route، ترجمه، جست‌وجو و ذخیره Progress.
- `styles/`: CSS ماژولار با mobile-first.
- `docs/`: قراردادهای محصول و محتوا.

## ترتیب مهاجرت از نسخه فعلی

1. اصلاح جداسازی HTML و CSS و تثبیت App Shell.
2. انتقال route metadata به registry پایدار.
3. استخراج content data از `app.js` به `data/`.
4. ساخت renderer مشترک برای Path، Lesson و Problem.
5. افزودن Progress Store و checklist/quiz state.
6. افزودن جست‌وجو و locale service.
7. اتصال اختیاری Payload بدون تغییر قراردادهای UI.
8. افزودن حساب کاربری، پرداخت و دسترسی پولی.

## عضویت و فروش در آینده

لایه‌ی domain آینده باید این entityها را اضافه کند:

```text
User, Enrollment, Entitlement, Order, Payment, Certificate
```

UI باید فعلاً با interface ساده‌ی `access.canOpen(contentId)` کار کند تا بعداً منطق فروش داخل صفحات پخش نشود.
