# CSS warm-up: head vs. header is fixed, but `<main>` is still missing from the skeleton

On 2026-11-02 the CSS warm-up from [[0005-html-redo-passed]] probed the two remaining weak spots.

**Passed:**
- The user mapped `<head>` to the envelope (metadata for the browser) and `<header>` to the letterhead (visible content). `<title>` goes in `<head>`. This was the error in 0005, and it's now resolved.
- They predicted correctly that `header { background: lightgray; }` paints only behind the visible title, not the browser tab, "because it is affecting content and not page metadata." This is good early CSS intuition: selectors only reach rendered elements.

**Missed in the from-memory skeleton:**
- They said "article goes in header." `<article>` belongs in `<main>`. `<header>` holds the site title and `<nav>`.
- They left out `<main>` entirely, so `<article>` sat directly inside `<body>`.
- They left out `<nav>` and `<footer>`.
- They left out `lang="en"` on `<html>`. This is minor.

**Pattern:** `<main>` has now been the weak link in two sessions (nested inside `<article>` in 0005, missing here). The user reliably remembers the top (head, header) and the content (article), but not the landmark wrapper between them.

**Implications:** Retry the skeleton once more with the letter analogy (header = letterhead, main = letter body, footer = sign-off). Then start CSS Lesson 3 by styling each landmark in `about.html` a different color, so the skeleton becomes visible.
