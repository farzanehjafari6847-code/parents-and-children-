# نقشه Routeها

## قرارداد URL

```text
/                         Home
/paths                    فهرست مسیرها
/paths/:pathSlug          جزئیات مسیر
/lessons/:lessonSlug      صفحه درس
/problems                 Problem Library
/problems/:problemSlug    جزئیات مشکل
/solutions/:solutionSlug  صفحه راهکار
/programs/7-day/:slug     برنامه ۷روزه
/programs/30-day/:slug    برنامه ۳۰روزه
/family-plan              برنامه خانواده
/child                    مسیر کودک
/search                   جست‌وجو
/about                    درباره
/contact                  تماس
```

## مسیرهای اصلی محصول

### والدگری و رابطه

```text
/paths/parenting-and-relationship
/paths/parenting-and-relationship/child-and-teen-understanding
/paths/parenting-and-relationship/generation-gap
/paths/parenting-and-relationship/parent-child-connection
/paths/parenting-and-relationship/healthy-boundaries
/paths/parenting-and-relationship/anger-and-conflict
/paths/parenting-and-relationship/repair-after-conflict
/paths/parenting-and-relationship/self-esteem-and-comparison
/paths/parenting-and-relationship/school-pressure
/paths/parenting-and-relationship/parent-burnout
/paths/parenting-and-relationship/the-parent-self
/paths/parenting-and-relationship/weekly-habits
```

### والدگری دیجیتال؛ لایه‌ی متصل

```text
/paths/digital-parenting
/paths/digital-parenting/mobile-and-tablet
/paths/digital-parenting/gaming
/paths/digital-parenting/game-transition
/paths/digital-parenting/social-media
/paths/digital-parenting/youtube
/paths/digital-parenting/tiktok
/paths/digital-parenting/roblox
/paths/digital-parenting/fortnite
/paths/digital-parenting/sleep-and-screens
/paths/digital-parenting/online-safety
/paths/digital-parenting/parental-controls
```

### مسیر کودک ۷ تا ۱۲ سال

```text
/child
/child/self-understanding
/child/my-day-and-routine
/child/feelings-and-regulation
/child/why-play
/child/when-the-game-ends
/child/weekly-plan
```

### کتابخانه مشکل و راهکار

```text
/problems
/problems/my-child-does-not-listen
/problems/screen-time-fights
/problems/child-hides-messages
/problems/constant-comparison
/problems/homework-conflict
/solutions/connection-before-correction
/solutions/one-clear-boundary
/solutions/repair-conversation
/solutions/digital-family-agreement
```

## Route registry

فایل `data/routes.js` فقط فهرست قابل‌ناوبری و metadata سبک را نگه می‌دارد. متن کامل درس، تمرین و ترجمه نباید داخل آن قرار بگیرد.

## ناوبری

- Sidebar: Home، والدگری و رابطه، دیجیتال، کودک، برنامه خانواده، Problem Library.
- Breadcrumb: Home ← Path ← Module ← Lesson.
- Previous/Next باید بر اساس `sequence` در یک Path/Module کار کند، نه ترتیب تصادفی کل آرایه.
- هر صفحه‌ی محتوا باید لینک «بازگشت به مسیر» و «راهکار مرتبط» داشته باشد.
