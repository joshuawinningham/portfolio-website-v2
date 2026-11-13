# Summit Theme Kit

A themeable event landing page written in plain HTML and hand-written CSS. No Tailwind, no Bootstrap, no build step. One page, three event themes, switched with a `data-theme` attribute and three tiers of CSS custom properties.

This is a guided build. The HTML and `css/base.css` are given. Every other file has numbered TODOs that match the exercises in the Hand-Coded CSS Plan. Write the code yourself, by hand, without AI autocomplete.

## Run it

Open `index.html` straight in a browser, or run the portfolio dev server and visit:

```
npm run dev
http://localhost:4321/projects/summit-theme-kit/index.html
```

Because it lives in `public/`, Astro copies it to the live site as is. After merge it is served at `joshwinningham.com/projects/summit-theme-kit/`.

## Files and exercises

| Day | Exercise | Files | Done when |
|-----|----------|-------|-----------|
| 1 | Custom properties | `css/tokens.css`, `css/components.css` (1.8 to 1.11), `js/theme-picker.js` | The picker restyles the whole page, and `tokens.css` is the only file with hex colors. |
| 2 | Flexbox and Grid | `css/layout.css` (2.1 to 2.7) | Nav is a flex row, speakers go from 1 to 4 columns with no media query, agenda and register card are laid out. |
| 3 | @media queries | `css/layout.css` (3.1 to 3.5) | No horizontal scroll at 375px, hero splits into two columns at 48em, agenda gets a time column. |
| 4 | Custom element | `js/event-countdown.js`, `css/components.css` (4.3) | The countdown ticks, matches every theme, and its CSS doesn't leak into the page. |
| 5 | Prove it | `css/tokens.css`, `index.html` | A Grove theme works by changing brand tokens and one `<option>` only. |

## Workflow

1. Check out the branch: `git fetch && git checkout claude/project-thread-brh6pj`
2. Do one exercise, commit it with a message like `Exercise 1: tokens and theme picker`, and push.
3. Ask Claude in the project thread to review the commit. The review checks the "done when" line and asks you to explain one or two choices, the way an interviewer would.
4. When all five are done: remove the `noindex` meta tag, add the project card to the portfolio, and merge.

## How to talk about it

- **Tokens:** "Three tiers: system, brand, component. Themes override brand tokens only, so adding an event is one block of CSS."
- **Layout:** "Flex for one direction, Grid for two. The speaker grid uses auto-fit and minmax, so it needs no breakpoint."
- **Responsive:** "Mobile first. Base styles are the phone layout, and min-width queries add columns."
- **Custom element:** "Its styles are sealed in shadow DOM, but custom properties inherit through, so the theme reaches it."
