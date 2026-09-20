# مدل منطقی محتوا

این مدل فعلاً مستند معماری است و به Payload CMS وابسته نیست.

## Entityهای اصلی

### Path

```text
id, slug, title, summary, description
kind, parentPathId, audience, ageRange, level
moduleIds, goalIds, relatedPathIds, localeKeys
status, sequence, isFeatured
```

`kind` می‌تواند `core`, `digital-support`, `child`, `family` یا `library` باشد.

### Module

```text
id, pathId, slug, title, summary
lessonIds, problemIds, sequence, prerequisites
```

### Lesson

```text
id, pathId, moduleId, slug, title, summary
estimatedMinutes, level, ageRange, bodyBlocks
objectiveIds, takeawayIds, exerciseIds
checklistIds, quizIds, problemIds, solutionIds
previousLessonId, nextLessonId, localeKeys
status, sequence
```

### Problem

```text
id, slug, title, shortDescription
symptoms, contextTags, ageRange, relatedLessonIds
solutionIds, safetyNote, localeKeys
```

### Solution

```text
id, slug, title, problemIds, principle
steps, readyPhrases, doNotList, relatedLessonIds
exerciseIds, checklistIds, programIds
```

### Exercise

```text
id, type, title, instructions, duration
prompt, expectedOutput, reflectionQuestions
relatedLessonId, programDay
```

`type` می‌تواند `reflection`, `conversation`, `observation`, `role-play`, `family-action` باشد.

### Checklist

```text
id, title, items[], completionMode, relatedContentIds
```

هر item دارای `id`, `label`, `required` و `sequence` است. وضعیت تیک‌زدن در Progress Store ذخیره می‌شود، نه در متن محتوا.

### Quiz

```text
id, title, questions[], resultMode, relatedContentIds
```

Quiz برای بازتاب و پیشنهاد مسیر است و نباید بدون ارزیابی تخصصی، تشخیص روان‌شناختی تولید کند.

### Program

```text
id, slug, kind, title, durationDays, goal
steps[], relatedPathIds, relatedLessonIds, reviewSchedule
```

`kind` برابر `7-day` یا `30-day` است.

### Family Plan

```text
id, title, familyValues[], rules[], screenWindows[]
offlineTimes[], sleepRules[], safetyRules[]
reviewDays[], participants[], exportFormat
```

Family Plan باید قابل ویرایش، قابل ذخیره و در آینده قابل چاپ/خروجی باشد.

## رابطه‌ها

```text
Path 1---N Module
Module 1---N Lesson
Lesson N---N Problem
Problem N---N Solution
Lesson N---N Exercise
Lesson N---N Checklist
Lesson N---N Quiz
Program N---N Lesson
FamilyPlan N---N Rule
```

## Progress Store

قرارداد پیشنهادی برای localStorage و بعداً حساب کاربری:

```text
progress:{
  completedLessons: string[],
  checklistItems: Record<string, boolean>,
  quizAttempts: Record<string, QuizAttempt>,
  programDays: Record<string, DayState>,
  lastRoute: string,
  updatedAt: string
}
```

در مرحله‌ی عضویت، همین کلیدها به user profile منتقل می‌شوند تا UI بازنویسی نشود.

## چندزبانه

هیچ Entity نباید برای هر زبان کپی شود. هر محتوای متنی باید یکی از این دو الگو را داشته باشد:

```text
contentId + locale -> localized fields
```

یا:

```text
translationKey -> { fa, en, sv, de, ... }
```

زبان فعال باید شامل `code`, `direction`, `fontFamily` و `fallback` باشد. تغییر زبان باید `document.dir` و `document.lang` را هم تغییر دهد.
