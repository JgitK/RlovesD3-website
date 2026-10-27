---
name: 0002-lesson-1-complete
description: Lesson 1 completed — variables and data types, key misconceptions resolved
metadata:
  type: project
---

## Session 2 — 2026-06-09

**Lesson completed:** 0001-variables-and-data-types.html

**Exercises completed:** Exercise 2 (template literals). Exercise 3 (typeof) skipped — user ready to move on.

**Misconceptions caught and resolved:**

1. `${}` confused with jQuery's `$`. Clarified: `${}` is native ES6 template literal syntax, unrelated to jQuery. jQuery uses `$` as a variable name for its library function. User understood the distinction.

2. `67M` — tried to append a unit letter directly to a number literal. Corrected to `const population = 67` with `M` placed inside the string.

3. Mixed concatenation and template literal (`country + ": " + \`${pop}\``). Showed that `\`${pop}\`` is redundant — resolved to a pure template literal.

**Final correct solution:**
```js
const country = "France";
const population = 67;
const label = `${country}: ${population}M`;
```

**Zone of proximal development:** Ready for arrays and objects — the core D3 data structure. User has solid grasp of variables and types, which are prerequisites.

**Next lesson:** 0002-arrays-and-objects.html
