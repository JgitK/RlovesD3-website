# HTML elements refresher: concepts solid, tag vocabulary and nesting shaky

On 2026-10-27 the user ran the learning loop on the course's "HTML elements" lesson. They **can reason** about block vs. inline (they predicted that an `<a>` wrapping a `<div>` keeps it on its own line), semantic meaning (they understood `<strong>` vs. `<b>`), and nested list numbering. They **cannot yet produce** correct markup from memory.

**Evidence:**
- They invented tags on 6 occasions: `<footnote>`, `<tbl>`, `<theader>`, `<dropdown>`, `<sub>` as a list item, and the typo `hred`.
- They built a table column by column instead of row by row.
- They dropped closing tags in a nested list and wrote `</a href>`.
- They forgot `target="_blank"` twice.
- They used `{{ width=300px` for an `<img>` attribute, which mixes up JSX braces and CSS units (the known braces weak spot).

**Discovered by running code:** a `<div>` inside a `<p>` makes the browser auto-close the `<p>`. They saw this in DevTools Inspect, which introduced the idea that the DOM can differ from the source.

**Implications:**
- The next session should open with the redo items: a nested list, a table, `<details open>`, and a new-tab link.
- Next new topics: whitespace collapse, then the full "About Me" page rebuild.
- A printable HTML element cheat sheet in `reference/` would help with the invented-tag habit.
- Tables built row by row are a direct bridge to Lesson 2 (arrays of objects, where one object is one row).
