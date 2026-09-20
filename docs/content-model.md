# مدل داده جامع محتوا

این سند قرارداد مستقل از UI برای کل معماری Parenting Course است. فعلاً هیچ CMS یا backend خاصی را تحمیل نمی‌کند و باید بتواند بعداً به Payload CMS، API یا فایل‌های JSON متصل شود؛ بدون اینکه Presentation Layer بازنویسی شود.

## 1. اصول معماری

- **Content از Presentation جدا است:** مدل‌ها فقط داده، رابطه و قواعد انتشار را تعریف می‌کنند؛ HTML، CSS و template داخل آن‌ها قرار نمی‌گیرد.
- **هسته محصول:** `parenting-and-relationship`.
- **والدگری دیجیتال:** محتوای مستقل قابل استفاده مجدد است، اما با `relationshipSkills`, `problemIds` و `pathIds` به مهارت‌های اصلی والدگری متصل می‌شود.
- **شناسه پایدار:** رابطه‌ها فقط با `id` یا `slug` پایدار ذخیره می‌شوند، نه با عنوان نمایشی.
- **عدم تکثیر محتوا:** یک Lesson، Solution، Checklist یا Exercise فقط یک بار تعریف می‌شود و با `placements` یا رابطه‌های چندبه‌چند در چند مسیر نمایش داده می‌شود.
- **محتوای چندزبانه:** Entity اصلی یک‌بار ساخته می‌شود و متن‌های آن در `translations` با localeهای جدا نگهداری می‌شوند.
- **نسخه‌پذیری:** تغییر محتوای منتشرشده باید نسخه جدید بسازد و Progress قبلی را با `contentId` و `version` قابل ردیابی نگه دارد.
- **ایمنی:** محتوا آموزشی و حمایتی است و جای تشخیص، درمان یا فوریت پزشکی را نمی‌گیرد.

## 2. انواع مشترک و قراردادهای پایه

### شناسه و وضعیت مشترک

تمام Entityهای محتوایی این فیلدهای پایه را دارند:

```text
id: string                  # immutable؛ مانند lesson.parent.connection.active-listening
slug: string                # unique در نوع محتوا و locale-independent
entityType: string          # path | lesson | problem | solution | exercise | checklist | quiz | program | family-plan | child-path | digital-guide
status: draft | review | published | archived
version: number
createdAt: ISODate
updatedAt: ISODate
publishedAt: ISODate | null
archivedAt: ISODate | null
localeStrategy: shared-id | translated-fields
translationGroupId: string  # برای همه نسخه‌های زبانی یکسان
```

### فیلدهای محتوایی مشترک

```text
title: LocalizedText
summary: LocalizedText
purpose: LocalizedRichText
ageRange: AgeRange
level: beginner | intermediate | advanced | mixed
estimatedMinutes: number | null
categoryIds: string[]
pathRefs: ContentRef[]
problemRefs: ContentRef[]
solutionRefs: ContentRef[]
relatedContentRefs: ContentRef[]
body: ContentBlock[]
realExample: ExampleBlock | null
readyPhrases: LocalizedList[]
practicalSteps: Step[]
doNotDo: LocalizedList[]
checklistRefs: ContentRef[]
exerciseRefs: ContentRef[]
quizRefs: ContentRef[]
programRefs: ContentRef[]
previousRef: ContentRef | null
nextRef: ContentRef | null
specialistHelp: HelpGuidance | null
sources: SourceRef[]
seo: SEOFields
```

این فیلدها در Entityهایی که به آن‌ها نیاز ندارند حذف نمی‌شوند؛ بلکه به‌صورت `null` یا آرایه خالی ذخیره می‌شوند تا adapterها قرارداد یکسان داشته باشند.

### انواع داده مشترک

```text
LocalizedText = {
  default: string,
  translations?: Record<LocaleCode, string>
}

LocalizedRichText = {
  default: ContentBlock[],
  translations?: Record<LocaleCode, ContentBlock[]>
}

AgeRange = {
  min: number | null,
  max: number | null,
  labelKey: string | null
}

ContentRef = {
  id: string,
  type: EntityType,
  relation: primary | supporting | optional | prerequisite,
  sequence?: number
}

ContentBlock = {
  type: paragraph | heading | list | quote | callout | image | video | audio | table | divider,
  data: object
}

ExampleBlock = {
  context: LocalizedText,
  observedBehavior: LocalizedText,
  possibleInterpretation: LocalizedText,
  suggestedResponse: LocalizedText
}

Step = {
  id: string,
  sequence: number,
  title: LocalizedText,
  instruction: LocalizedRichText,
  durationMinutes?: number,
  completionRequired?: boolean
}

HelpGuidance = {
  indicators: LocalizedList[],
  urgency: general | timely | urgent,
  guidance: LocalizedRichText,
  disclaimer: LocalizedText
}

SourceRef = {
  id: string,
  title: LocalizedText,
  authors?: string,
  publisher?: string,
  year?: number,
  url?: string,
  doi?: string,
  accessedAt?: ISODate
}

SEOFields = {
  metaTitle: LocalizedText,
  metaDescription: LocalizedText,
  canonicalPath: string,
  keywords: LocalizedList[],
  noIndex: boolean,
  ogImageRef?: string
}
```

## 3. Path

Path یک مسیر یادگیری سطح بالا است و می‌تواند شامل Module و Lesson باشد. یک Path محتوای کامل درس‌ها را در خود تکرار نمی‌کند.

```text
Path {
  id
  slug
  title
  summary
  purpose
  description
  kind: core | digital-support | child | family | library
  parentPathId: string | null
  categoryIds: string[]
  audience: parent | caregiver | child | educator | mixed
  ageRange
  level
  estimatedMinutes: number | null
  moduleRefs: ContentRef[]
  lessonRefs: ContentRef[]
  problemRefs: ContentRef[]
  solutionRefs: ContentRef[]
  programRefs: ContentRef[]
  relatedPathRefs: ContentRef[]
  learningGoals: LocalizedList[]
  prerequisites: ContentRef[]
  completionRule: all-required | percentage | manual | none
  sequence: number
  isFeatured: boolean
  body
  realExample
  readyPhrases
  practicalSteps
  doNotDo
  checklistRefs
  exerciseRefs
  quizRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}
```

نمونه Pathهای اصلی:

- `parenting-and-relationship`: هسته محصول؛ شناخت کودک و نوجوان، شکاف نسل‌ها، ارتباط، مرز، خشم، ترمیم، عزت‌نفس، مدرسه، فرسودگی، خود والد و عادت‌های هفتگی.
- `digital-parenting`: مسیر/لایه پشتیبان برای موبایل، بازی، شبکه‌های اجتماعی، YouTube، TikTok، Roblox، Fortnite، خواب، امنیت و کنترل والدین.
- `child-7-12`: مسیر اختصاصی کودک با زبان و فعالیت مناسب سن.
- `family-plan`: برنامه‌های مشترک خانواده و مرور عادت‌ها.

## 4. Module

Module برای سازمان‌دهی Path است و در UI الزاماً صفحه مستقل نیست.

```text
Module {
  id
  pathId
  slug
  title
  summary
  purpose
  categoryIds
  lessonRefs: ContentRef[]
  problemRefs: ContentRef[]
  solutionRefs: ContentRef[]
  prerequisiteModuleIds: string[]
  sequence: number
  estimatedMinutes
  level
  ageRange
  status/version/timestamps
  translationGroupId
}
```

## 5. Lesson

Lesson واحد اصلی آموزش است؛ محتوای علمی و عملی آن در داده ذخیره می‌شود و Renderer فقط آن را نمایش می‌دهد.

```text
Lesson {
  id
  slug
  title
  summary
  purpose
  pathRefs: ContentRef[]
  moduleId: string | null
  categoryIds: string[]
  ageRange
  level
  estimatedMinutes
  learningObjectives: LocalizedList[]
  body: ContentBlock[]
  realExample
  readyPhrases
  practicalSteps
  doNotDo
  problemRefs
  solutionRefs
  exerciseRefs
  checklistRefs
  quizRefs
  programRefs
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  sequence: number
  completionRule: open | read | checklist | quiz | combined
  progressWeight: number
  status/version/timestamps
  translationGroupId
}
```

`pathRefs` چندمقداری است؛ بنابراین یک Lesson مشترک می‌تواند در مسیر رابطه، مسیر دیجیتال و Child Path نمایش داده شود، بدون اینکه متن آن Duplicate شود.

## 6. Problem

Problem نقطه ورود کاربر از «مشکلی که الآن دارم» است. Problem تشخیص پزشکی نیست؛ یک توصیف قابل جست‌وجو از تجربه یا موقعیت روزمره است.

```text
Problem {
  id
  slug
  title
  summary
  purpose
  categoryIds: string[]
  ageRange
  level
  contextTags: string[]
  symptoms: LocalizedList[]
  userPhrases: LocalizedList[]
  triggers: LocalizedList[]
  possibleNeeds: LocalizedList[]
  body
  realExample
  readyPhrases
  practicalSteps
  doNotDo
  solutionRefs: ContentRef[]
  lessonRefs: ContentRef[]
  exerciseRefs: ContentRef[]
  checklistRefs: ContentRef[]
  quizRefs: ContentRef[]
  programRefs: ContentRef[]
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  searchAliases: LocalizedList[]
  status/version/timestamps
  translationGroupId
}
```

## 7. Solution

Solution یک پاسخ عملی قابل استفاده مجدد است و می‌تواند از چند Problem و چند Lesson تغذیه کند.

```text
Solution {
  id
  slug
  title
  summary
  purpose
  principle: LocalizedRichText
  categoryIds
  ageRange
  level
  estimatedMinutes
  problemRefs: ContentRef[]
  pathRefs: ContentRef[]
  lessonRefs: ContentRef[]
  exerciseRefs: ContentRef[]
  checklistRefs: ContentRef[]
  quizRefs: ContentRef[]
  programRefs: ContentRef[]
  body
  realExample
  readyPhrases
  practicalSteps
  doNotDo
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}
```

## 8. Exercise

Exercise اقدام یا بازتابی است که از Lesson، Solution یا Program قابل فراخوانی است.

```text
Exercise {
  id
  slug
  title
  summary
  purpose
  type: reflection | conversation | observation | role-play | family-action | child-activity
  audience
  ageRange
  level
  durationMinutes
  instructions: LocalizedRichText
  prompt: LocalizedRichText
  expectedOutput: LocalizedText | null
  reflectionQuestions: LocalizedList[]
  practicalSteps
  doNotDo
  problemRefs
  solutionRefs
  lessonRefs
  programRefs
  checklistRefs
  quizRefs
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}
```

## 9. Checklist

Checklist قابل تیک‌زدن است؛ وضعیت آن هرگز داخل محتوای ثابت ذخیره نمی‌شود.

```text
Checklist {
  id
  slug
  title
  summary
  purpose
  categoryIds
  ageRange
  level
  items: ChecklistItem[]
  completionMode: all | percentage | any | manual
  requiredItemCount: number | null
  problemRefs
  solutionRefs
  lessonRefs
  exerciseRefs
  programRefs
  familyPlanRefs
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}

ChecklistItem {
  id
  sequence
  label: LocalizedText
  description: LocalizedText | null
  required: boolean
  evidencePrompt: LocalizedText | null
}
```

## 10. Quiz

Quiz برای بازتاب، سنجش یادگیری و پیشنهاد محتواست؛ نباید تشخیص روان‌شناختی یا پزشکی تولید کند.

```text
Quiz {
  id
  slug
  title
  summary
  purpose
  categoryIds
  ageRange
  level
  questions: QuizQuestion[]
  resultMode: score | reflection | recommendation | completion
  resultRules: QuizResultRule[]
  problemRefs
  solutionRefs
  lessonRefs
  exerciseRefs
  programRefs
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}

QuizQuestion {
  id
  sequence
  prompt: LocalizedText
  type: single | multiple | scale | text
  options: QuizOption[]
  required: boolean
}

QuizOption {
  id
  label: LocalizedText
  score: number | null
  recommendationRefs: ContentRef[]
}

QuizResultRule {
  id
  condition: object
  message: LocalizedText
  recommendationRefs: ContentRef[]
}
```

## 11. Program: هفت‌روزه و سی‌روزه

Program یک توالی زمان‌دار است و محتوای Lesson یا Exercise را کپی نمی‌کند؛ فقط به آن‌ها ارجاع می‌دهد.

```text
Program {
  id
  slug
  title
  summary
  purpose
  kind: 7-day | 30-day
  durationDays: 7 | 30
  categoryIds
  ageRange
  level
  goal: LocalizedRichText
  dayRefs: ProgramDay[]
  pathRefs
  problemRefs
  solutionRefs
  lessonRefs
  exerciseRefs
  checklistRefs
  quizRefs
  familyPlanRefs
  reviewSchedule: ReviewRule[]
  completionRule
  previousRef
  nextRef
  relatedContentRefs
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}

ProgramDay {
  id
  dayNumber
  title: LocalizedText
  objective: LocalizedText
  contentRefs: ContentRef[]
  required: boolean
  estimatedMinutes
  reflectionPrompt: LocalizedText | null
}

ReviewRule {
  dayNumber
  prompt: LocalizedText
  compareWithDay?: number
}
```

## 12. Family Plan

Family Plan سند قابل ویرایش خانواده است؛ بخشی از آن محتوای راهنماست و بخشی state متعلق به خانواده.

### Template ثابت

```text
FamilyPlanTemplate {
  id
  slug
  title
  summary
  purpose
  categoryIds
  ageRange
  sections: FamilyPlanSection[]
  problemRefs
  solutionRefs
  lessonRefs
  programRefs
  checklistRefs
  sources
  seo
  status/version/timestamps
  translationGroupId
}
```

### Instance خانواده

```text
FamilyPlanInstance {
  id
  templateId
  ownerId: string | null
  participantIds: string[]
  familyValues: LocalizedText[]
  rules: FamilyRule[]
  screenWindows: TimeWindow[]
  offlineTimes: TimeWindow[]
  sleepRules: FamilyRule[]
  safetyRules: FamilyRule[]
  weeklyHabits: Habit[]
  reviewDays: ReviewDate[]
  completedChecklistItems: Record<string, boolean>
  exportFormat: printable | json | pdf
  createdAt
  updatedAt
}
```

`FamilyPlanTemplate` محتوای عمومی است؛ `FamilyPlanInstance` داده خصوصی و قابل ذخیره کاربر است. این دو نباید در یک Entity مخلوط شوند.

## 13. Child Path (۷ تا ۱۲ سال)

Child Path نوع تخصصی Path است، نه یک کپی جدا از مدل Path.

```text
ChildPath {
  id
  pathId: string
  slug
  title
  summary
  purpose
  ageRange: { min: 7, max: 12 }
  childSafeTitle: LocalizedText
  childSafeBody: LocalizedRichText
  caregiverGuidance: LocalizedRichText
  modules
  lessonRefs
  exerciseRefs
  checklistRefs
  quizRefs
  programRefs
  parentBridgeRefs: ContentRef[]
  problemRefs
  solutionRefs
  relatedContentRefs
  previousRef
  nextRef
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}
```

هر Lesson کودک می‌تواند یک بخش `childView` و یک بخش `caregiverView` داشته باشد تا زبان کودک با راهنمای والد قاطی نشود.

## 14. Digital Guide

Digital Guide محتوای فنی/سیاستی است و با مهارت‌های والدگری ارتباط دارد.

```text
DigitalGuide {
  id
  slug
  title
  summary
  purpose
  platform: general | ios | android | youtube | tiktok | roblox | fortnite | gaming | web
  categoryIds
  ageRange
  level
  estimatedMinutes
  relationshipSkillIds: string[]
  pathRefs
  problemRefs
  solutionRefs
  lessonRefs
  exerciseRefs
  checklistRefs
  quizRefs
  programRefs
  body
  realExample
  readyPhrases
  practicalSteps
  doNotDo
  settingsSteps: SettingsStep[]
  previousRef
  nextRef
  relatedContentRefs
  specialistHelp
  sources
  seo
  status/version/timestamps
  translationGroupId
}

SettingsStep {
  platform
  stepNumber
  title: LocalizedText
  instruction: LocalizedText
  verification: LocalizedText
  lastVerifiedAt: ISODate | null
}
```

راهنمای فنی باید تاریخ بررسی داشته باشد؛ چون مسیر منوها و تنظیمات پلتفرم‌ها تغییر می‌کند.

## 15. Progress

Progress داده محتوایی نیست؛ state کاربر یا خانواده است و باید مستقل از UI و قابل انتقال از localStorage به حساب کاربری باشد.

```text
Progress {
  id
  ownerId: string | null
  anonymousKey: string | null
  contentId
  contentType
  contentVersion
  status: not-started | in-progress | completed | skipped
  percent: number
  startedAt: ISODate | null
  completedAt: ISODate | null
  lastOpenedAt: ISODate
  lastRoute: string | null
  checklistItems: Record<string, ChecklistItemProgress>
  exerciseStates: Record<string, ExerciseState>
  quizAttempts: QuizAttempt[]
  programDays: Record<string, DayState>
  familyPlanInstanceId: string | null
  updatedAt: ISODate
}

ChecklistItemProgress {
  checked: boolean
  checkedAt: ISODate | null
}

ExerciseState {
  status: not-started | in-progress | completed
  response: string | object | null
  updatedAt: ISODate
}

QuizAttempt {
  id
  answers: Record<string, string | string[] | number>
  result: object
  submittedAt: ISODate
}

DayState {
  status: not-started | in-progress | completed | skipped
  completedContentIds: string[]
  completedAt: ISODate | null
}
```

کلیدهای پیشنهادی برای ذخیره موقت:

```text
parenting-course:progress:v1:{ownerKey}
parenting-course:locale:v1
parenting-course:family-plan:v1:{ownerKey}
```

## 16. Language و Translation

### Language

```text
Language {
  code: string       # fa, en, sv, de
  label: string
  nativeLabel: string
  direction: rtl | ltr
  fontFamily: string
  fallback: string | null
  enabled: boolean
}
```

### Translation

```text
Translation {
  id
  translationGroupId
  entityId
  entityType
  locale
  title
  summary
  purpose
  body
  labels
  readyPhrases
  practicalSteps
  doNotDo
  seo
  status
  reviewedBy: string | null
  reviewedAt: ISODate | null
}
```

قواعد:

- `entityId` در همه زبان‌ها ثابت است.
- `slug` ترجمه‌پذیر نیست مگر اینکه در آینده routeهای localized لازم شوند؛ در آن حالت alias اضافه می‌شود و شناسه ثابت می‌ماند.
- نبود ترجمه باید از `fallback` همان Language استفاده کند.
- تغییر زبان باید `document.lang`, `document.dir` و font token را تغییر دهد.
- Progress به زبان وابسته نیست.

## 17. روابط رسمی

```text
Path 1---N Module
Module 1---N Lesson
Path N---N Lesson

Problem N---N Solution
Problem N---N Lesson
Solution N---N Lesson

Lesson N---N Exercise
Lesson N---N Checklist
Lesson N---N Quiz

Program N---N Lesson
Program N---N Exercise
Program N---N Checklist

FamilyPlanTemplate N---N Program
FamilyPlanTemplate N---N Lesson
FamilyPlanInstance 1---1 FamilyPlanTemplate

ChildPath 1---1 Path(kind=child)
DigitalGuide N---N Path
DigitalGuide N---N Lesson

Any ContentEntity 1---N Translation
Any ContentEntity 1---N Progress
```

## 18. زنجیره Problem تا Family Plan

```text
Problem
  -> Solution
      -> Lesson
          -> Exercise + Checklist + Quiz
              -> Program(7-day | 30-day)
                  -> FamilyPlanTemplate
                      -> FamilyPlanInstance
                          -> Progress
```

این زنجیره الزاماً خطی نیست؛ هر رابطه باید با نوع رابطه مشخص شود:

```text
ContentRef.relation = primary | supporting | optional | prerequisite
```

مثال:

```text
Problem: screen-time-fights
  primary Solution: one-clear-boundary
  primary Lesson: game-transition
  supporting Exercise: transition-warning-practice
  supporting Checklist: calm-screen-boundary
  optional Program: 7-day-screen-transition
  familyPlan Template: digital-family-agreement
```

## 19. نمایش یک محتوا در چند مسیر بدون Duplicate

محتوا فقط یک بار در registry تعریف می‌شود:

```text
lesson.active-listening
  pathRefs: [parenting-and-relationship, digital-parenting, child-7-12]
  placements:
    - pathId: parenting-and-relationship
      moduleId: parent-child-connection
      sequence: 2
      labelOverrideKey: null
    - pathId: digital-parenting
      moduleId: digital-relationship-foundation
      sequence: 1
      labelOverrideKey: digital.active-listening
```

- `body`, `sources`, `exerciseRefs` و `id` مشترک باقی می‌مانند.
- فقط جایگاه، ترتیب و در صورت نیاز label/summary نمایشی override می‌شود.
- نسخه ترجمه نیز برای همان `translationGroupId` نگهداری می‌شود.
- حذف یا اصلاح محتوا در یک مسیر، محتوای اصلی را برای همه مسیرها تغییر می‌دهد؛ اگر تفاوت واقعی لازم باشد، باید Lesson جدید با رابطه روشن ساخته شود، نه fork پنهان.

## 20. مرز Content و Presentation

### Content Layer

```text
data/content-registry.js
data/paths.js
data/modules.js
data/lessons.js
data/problems.js
data/solutions.js
data/exercises.js
data/checklists.js
data/quizzes.js
data/programs.js
data/family-plans.js
data/child-paths.js
data/digital-guides.js
data/locales/*.js
```

### Domain/Service Layer

```text
services/content-service.js
services/relationship-resolver.js
services/progress-store.js
services/locale-service.js
services/search-service.js
```

### Presentation Layer

```text
pages/
components/
styles/
```

Page و Component فقط باید از `content-service` داده بگیرند. هیچ متن آموزشی طولانی، منطق رابطه‌ای یا منطق انتشار نباید داخل `app.js` یا component template قفل شود.

## 21. انتشار، اعتبارسنجی و دسترسی آینده

قبل از `published` شدن:

- تمام IDهای رابطه‌ای معتبر باشند.
- locale پیش‌فرض کامل باشد.
- منابع علمی برای ادعاهای حساس ثبت شده باشند.
- `specialistHelp` برای محتوای حساس بررسی شده باشد.
- Lesson دارای هدف، body، یک اقدام عملی و معیار تکمیل باشد.
- Digital Guide دارای `lastVerifiedAt` باشد.
- Quiz متن تشخیصی یا ادعای درمانی نداشته باشد.

برای فروش و عضویت آینده، این مدل‌ها خارج از Content Layer اضافه می‌شوند:

```text
User
Enrollment
Entitlement
Order
Payment
Certificate
```

UI باید در آینده از interfaceای مانند `access.canOpen(contentId)` استفاده کند؛ Content Model نباید به پرداخت یا provider خاص وابسته شود.
