Remember this only for this session, okay.

You are a professional nextjs developer and an expert. You write clean, maintainable, reusable (plug-and-play so that I can place it anywhere.), secure and scalable code.

I have initialized a project using Next.js version 16.3.6 and taliwind version 4.3.

By the way, Don't use HTML tags instead of Next.js provided component. For example, you should use the link component from next.js instead of anchor tag.

One more thing, if next.js recommend something for better performance or standard then please use that instead. For example, react recommend to use next.js framework.

## Project Configuration
- **Next.js 16.3.6** with **Tailwind 4.3**
- Use Next.js components (Link, Image, etc.) instead of HTML equivalents
- Follow Next.js recommendations for performance and best practices

## Code Principles
- Small, single-purpose modules
- Fix root causes, not workarounds
- Strict TypeScript throughout; no `any` types
- Validate external input at system boundaries

## Next.js Best Practices
- **Default to React Server Components** (RSC)
- Add `"use client"` only for interactivity, hooks, or real-time state
- Focused route handlers; long-running work → background tasks

## Styling Approach
- **Use CSS custom property tokens only** — no raw Tailwind classes like `zinc-*` or hardcoded hex values
- Available tokens from your theme:
  - **Primary (Navy)**: `--primary`, `--primary-light`, `--primary-lighter`, `--primary-dark`, `--primary-darker`
  - **Secondary (Sage Green)**: `--secondary`, `--secondary-light`, `--secondary-lighter`, `--secondary-dark`, `--secondary-darker`
  - **Accent (Gold)**: `--accent`, `--accent-light`, `--accent-lighter`, `--accent-dark`, `--accent-darker`
  - **Text classes**: `.text-h1` through `.text-h6`, `.text-body`, `.text-small`

- global.css file content is given below

```css
:root {
  /* Primary: Deep Royal Navy (Trust, Stability, Security) */
  --primary-300: hsl(220, 85%, 88%);
  --primary-400: hsl(220, 75%, 72%);
  --primary-500: hsl(220, 65%, 35%);
  --primary-600: hsl(220, 75%, 22%);
  --primary-700: hsl(220, 80%, 12%);

  /* Secondary: Mineral Sage Green (Authenticity, Land, Growth) */
  --secondary-300: hsl(158, 45%, 82%);
  --secondary-400: hsl(158, 50%, 68%);
  --secondary-500: hsl(158, 55%, 32%);
  --secondary-600: hsl(158, 60%, 20%);
  --secondary-700: hsl(158, 65%, 12%);

  /* Tertiary: Warm Architectural Gold (Luxury, Prestige) */
  --tertiary-300: hsl(38, 85%, 82%);
  --tertiary-400: hsl(38, 80%, 66%);
  --tertiary-500: hsl(38, 90%, 38%);
  --tertiary-600: hsl(38, 95%, 26%);
  --tertiary-700: hsl(38, 100%, 16%);

  --neutral-0: hsl(0, 0%, 100%);
  --neutral-200: hsl(0, 0%, 88%);
  --neutral-400: hsl(0, 0%, 65%);
}

/* Tailwind v4 Theme Configuration - MUST be at root level */
@theme inline {
  --color-primary: var(--primary-500);
  --color-primary-light: var(--primary-300);
  --color-primary-lighter: var(--primary-400);
  --color-primary-dark: var(--primary-600);
  --color-primary-darker: var(--primary-700);

  --color-secondary: var(--secondary-500);
  --color-secondary-light: var(--secondary-300);
  --color-secondary-lighter: var(--secondary-400);
  --color-secondary-dark: var(--secondary-600);
  --color-secondary-darker: var(--secondary-700);

  --color-accent: var(--tertiary-500);
  --color-accent-light: var(--tertiary-300);
  --color-accent-lighter: var(--tertiary-400);
  --color-accent-dark: var(--tertiary-600);
  --color-accent-darker: var(--tertiary-700);

  --color-neutral-0: var(--neutral-0);
  --color-neutral-200: var(--neutral-200);
  --color-neutral-400: var(--neutral-400);
}

/* Base font size is 20px and scale ratio is Minor third: 1.200 */
.text-h1 {
  font-size: clamp(2.125rem, 2vw, 3.75rem);
}

.text-h2 {
  font-size: clamp(1.875rem, 2vw, 3.125rem);
}

.text-h3 {
  font-size: clamp(1.6875rem, 2vw, 2.625rem);
}

.text-h4 {
  font-size: clamp(1.5rem, 2vw, 2.1875rem);
}

.text-h5 {
  font-size: clamp(1.3125rem, 2vw, 1.8125rem);
}

.text-h6 {
  font-size: clamp(1.1875rem, 2vw, 1.5rem);
}

.text-body {
  font-size: clamp(1.0625rem, 2vw, 1.25rem);
}

.text-small {
  font-size: clamp(0.9375rem, 2vw, 1rem);
}
```


Please update the codes so that it only uses colors and typography from the global.css files.

```css
/* Tailwind v4 Theme Configuration - MUST be at root level */
@theme inline {
  --color-primary: var(--primary-500);
  --color-primary-light: var(--primary-300);
  --color-primary-lighter: var(--primary-400);
  --color-primary-dark: var(--primary-600);
  --color-primary-darker: var(--primary-700);

  --color-secondary: var(--secondary-500);
  --color-secondary-light: var(--secondary-300);
  --color-secondary-lighter: var(--secondary-400);
  --color-secondary-dark: var(--secondary-600);
  --color-secondary-darker: var(--secondary-700);

  --color-accent: var(--tertiary-500);
  --color-accent-light: var(--tertiary-300);
  --color-accent-lighter: var(--tertiary-400);
  --color-accent-dark: var(--tertiary-600);
  --color-accent-darker: var(--tertiary-700);

  --color-neutral-0: var(--neutral-0);
  --color-neutral-200: var(--neutral-200);
  --color-neutral-400: var(--neutral-400);
}

/* Base font size is 20px and scale ratio is Minor third: 1.200 */
.text-h1 {
  font-size: clamp(2.125rem, 2vw, 3.75rem);
}

.text-h2 {
  font-size: clamp(1.875rem, 2vw, 3.125rem);
}

.text-h3 {
  font-size: clamp(1.6875rem, 2vw, 2.625rem);
}

.text-h4 {
  font-size: clamp(1.5rem, 2vw, 2.1875rem);
}

.text-h5 {
  font-size: clamp(1.3125rem, 2vw, 1.8125rem);
}

.text-h6 {
  font-size: clamp(1.1875rem, 2vw, 1.5rem);
}

.text-body {
  font-size: clamp(1.0625rem, 2vw, 1.25rem);
}

.text-small {
  font-size: clamp(0.9375rem, 2vw, 1rem);
}
```

You have to create me exactly this design. There are some things to note down.

- I have the images used in the design so you don't have to worry about that. Just use some placeholder text in the src field.
- There is a hover effect in it. When I hover over the card then the cards fill with color from the top right to the bottom right.
- The image moves to the top slightly to make the design feel alive.
- Do not introduce anything new other than the current stack which is tailwind css and react and next.js. Always prioritize the variables defined in the global.css

There are two problems with your approach.

- The image took the whole card. The image I provided only took the bottom portion. Then when I hover over it the image moves slightly to the top that's good but it makes a white space in the bottom which is not like the original design.
- You are missing the arrow on the top right and the hover effect that I mention. The color should be behind the heading and the image.

There are two problem with your suggested solution.

- First, the animation comes from the top to bottom but I mention that it should come from the top right to the bottom left.
- Second, The images are at the center of the card but I mention it that it should be at the bottom left in my image.
One more thing when I hover over it then the images moves thats cool but it creates a small gap at the bottom but in the original design instead of the gap it shows more of the images from the bottom when it moves to the top.

Please help me solve it.
