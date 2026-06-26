# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page Astro + Tailwind CSS portfolio website. Standard commands are in `package.json` and `README.md`.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 4321) |
| Build | `npm run build` |
| Type check | `npx astro check` |

### Notes

- `@astrojs/check` and `typescript` are devDependencies needed for `npx astro check`. They are installed by `npm install`.
- There is no dedicated lint or test script in `package.json`; use `npx astro check` for type/lint diagnostics.
- The contact form uses Web3Forms (external SaaS); it won't submit locally without a valid API key, but the rest of the site works fine.
- Astro dev server binds to `localhost:4321` by default. Pass `--host 0.0.0.0` to expose it on all interfaces.
