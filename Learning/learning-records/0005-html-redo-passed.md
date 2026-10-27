# HTML redo passed: nesting, tables and attributes fixed; page structure took scaffolding

In the blank-file About Me rebuild on 2026-10-27, the user produced several things correctly with no hints, all of which were misses in [[0004-html-elements-refresher]]:
- a nested list
- tables built row by row
- `target="_blank"`
- `&copy;`
- the `<img>` attributes

There were no invented tags.

Page-level structure took three rounds of hints. The user first wrote `<header>` where `<head>` belongs, then nested `<article>` around `<main>`, then crossed `<div>`/`</main>` tags. They also needed a hint for `<details open>`.

**Implications:**
- Element-level skills are solid.
- **head vs. header** and **page skeleton order** (`header` → `main` > `article` → `footer`) are the remaining weak spots. Probe them in the CSS warm-up, since CSS selectors will target these elements.
- They still don't check with Inspect on their own. Encourage it.
