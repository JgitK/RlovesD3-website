# Skeleton retry: `<main>` is now in place, but the user wrote a second `<body>` and nested `<footer>` inside `<main>`

On 2026-11-05, after a few days away, the user retried the from-memory skeleton from [[0006-css-warmup-skeleton-probe]].

**Fixed since 0006:**
- `<main>` is present.
- `<article>` sits inside `<main>`.
- `<nav>` sits inside `<header>`.

**New errors:**
- They wrote a **second `<body>` tag** after `</header>`. A likely cause is the teacher's own analogy: 0006 called `<main>` the "letter body," which collides with the `<body>` tag. The user seems to have read it as "header, then body."
- They put `<footer>` **inside `<main>`** instead of as its sibling.
- `lang` is still missing from `<html>`. This is minor.

**Teaching change:** The letter analogy is retired for page structure and replaced with a **house** analogy:
- head = mailbox paperwork
- body = the whole house, and there is only one
- header = front porch
- main = living room
- footer = back yard

**Lesson 3 created:** `lessons/0003-first-css-paint-the-skeleton.html`. It teaches type selectors and rule anatomy (selector / property / value). A live playground is pre-loaded with the user's exact answer. CSS colors each landmark, and automatic checks flag the duplicate body and the misplaced footer. The preview *looks* fine with two bodies because the parser ignores the second one, which shows that rendering is not validation. The lesson ends with a real-file exercise: create `about.css`, link it from `<head>`, and style four landmarks.

**Next:** Review their `about.css`. If the skeleton checks pass without help, the structure weak spot is closed. Then move to class selectors (`.name`), which bridge to D3's `.attr("class", ...)`.
