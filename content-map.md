# معماری محتوایی Parenting Course

## وضعیت این مرحله

- مدل داده جامع برای تمام انواع محتوای محصول در `docs/content-model.md` ثبت شده است.
- Payload CMS، احراز هویت، پرداخت و backend فعلاً پیاده‌سازی نشده‌اند.
- Route registry و مستندات فعلی فقط قرارداد معماری هستند.

## اصل محصول

هسته‌ی محصول «والدگری و رابطه» است. والدگری دیجیتال به‌عنوان لایه‌ی عملی همان مهارت‌ها طراحی می‌شود؛ نه به‌عنوان مسیر جدا از تربیت.

## خانواده‌های محتوایی

```text
home
paths
  parenting-and-relationship
  digital-parenting
  child-7-12
  family-plan
problems
solutions
programs
search
```

## Entityهای اصلی

```text
Path, Module, Lesson, Problem, Solution, Exercise, Checklist,
Quiz, Program, FamilyPlanTemplate, FamilyPlanInstance,
ChildPath, DigitalGuide, Progress, Language, Translation
```

## رابطه‌ی مرکزی

```text
Problem -> Solution -> Lesson -> Exercise/Checklist/Quiz
        -> Program(7-day/30-day) -> FamilyPlan -> Progress
```

این رابطه یک زنجیره‌ی ارجاعی است و به معنی کپی‌کردن محتوا نیست. هر Entity یک‌بار تعریف می‌شود و با `ContentRef` در چند مسیر یا صفحه استفاده می‌شود.

## مسیر والدگری و رابطه

```text
child-and-teen-understanding
generation-gap
parent-child-connection
healthy-boundaries
anger-and-conflict
repair-after-conflict
self-esteem-and-comparison
school-pressure
parent-burnout
the-parent-self
weekly-habits
```

## مسیر والدگری دیجیتال؛ متصل به رابطه

```text
mobile-and-tablet
gaming
game-transition
social-media
youtube
tiktok
roblox
fortnite
sleep-and-screens
online-safety
parental-controls
```

## مسیر کودک ۷ تا ۱۲ سال

```text
self-understanding
my-day-and-routine
feelings-and-regulation
why-play
when-the-game-ends
weekly-plan
```

## نکات مهم

- متن علمی و آموزشی داخل UI قفل نمی‌شود.
- Lesson، Solution، Exercise و Checklist می‌توانند هم‌زمان در چند Path ظاهر شوند.
- ترجمه‌ها به Entity اصلی وصل می‌شوند و Entity برای هر زبان Duplicate نمی‌شود.
- Progress به `contentId` وابسته است، نه به زبان یا متن نمایشی.
- Family Plan شامل Template عمومی و Instance خصوصی خانواده است.
- Digital Guide برای تنظیمات فنی، تاریخ آخرین بررسی دارد.
- این مستند باید قرارداد اتصال آینده به CMS و API باقی بماند.
