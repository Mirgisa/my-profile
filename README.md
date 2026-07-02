# My Portfolio

A personal portfolio website built with [Angular](https://angular.dev) 20.

## Sections

- **Hero** — name, role, tagline, photo and call-to-action buttons
- **About** — a short bio and location
- **Skills** — grouped skill chips (frontend, backend, tools)
- **Projects** — featured project cards with tags and links
- **Hobbies** — things you enjoy outside of work
- **Contact** — email button and social links

## ✏️ Customizing your content

All personal content lives in **one file**:

```
src/app/portfolio.data.ts
```

Edit your name, role, tagline, about text, skills, projects, hobbies and
social links there — no other file needs to change.

### Replacing the photo

1. Drop your picture into the `public/` folder (e.g. `public/me.jpg`).
2. In `src/app/portfolio.data.ts`, change `photo: 'profile.svg'` to
   `photo: 'me.jpg'`.

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build into dist/
```
