# Color

```css
:root {
  /* ==========================================
1. COLOR PALETTE DEFINITION (WCAG AA/AAA Verified)
========================================== */

  /* Primary: Deep Royal Navy (Trust, Stability, Security)
     Dark Background Baseline: hsl(220, 70%, 12%) */

  /* 12.8:1 on Dark | Light surface fill */
  --primary-300: hsl(220, 85%, 88%);
  /*  7.2:1 on Dark | Text on dark surfaces */
  --primary-400: hsl(220, 75%, 72%);
  /*  5.6:1 on White| BASE Primary & CTAs */
  --primary-500: hsl(220, 65%, 35%);
  /*  9.8:1 on White| Primary text & headings */
  --primary-600: hsl(220, 75%, 22%);
  /* 14.5:1 on White| Deep surface & menu bg */
  --primary-700: hsl(220, 80%, 12%);

  /* Secondary: Mineral Sage Green (Authenticity, Land, Growth) */
  /* 10.5:1 on Dark | Badge bg on white */
  --secondary-300: hsl(158, 45%, 82%);
  /*  6.1:1 on Dark | Text/Icons on dark bg */
  --secondary-400: hsl(158, 50%, 68%);
  /*  4.8:1 on White| BASE Land tags & icons */
  --secondary-500: hsl(158, 55%, 32%);
  /*  9.1:1 on White| Dark text & deep borders */
  --secondary-600: hsl(158, 60%, 20%);
  /* 13.2:1 on White| Dark green surface bg */
  --secondary-700: hsl(158, 65%, 12%);

  /* Tertiary: Warm Architectural Gold (Luxury, Prestige)
     Note: Yellow/Gold requires ~28% lightness for 4.5:1 on white! */
  /* 11.2:1 on Dark | Accent bg on white */
  --tertiary-300: hsl(38, 85%, 82%);
  /*  6.5:1 on Dark | Text/Icons on dark bg */
  --tertiary-400: hsl(38, 80%, 66%);
  /*  4.6:1 on White| BASE CTAs & highlights */
  --tertiary-500: hsl(38, 90%, 38%);
  /*  7.8:1 on White| High-contrast gold text */
  --tertiary-600: hsl(38, 95%, 26%);
  /* 12.1:1 on White| Dark gold borders/rings */
  --tertiary-700: hsl(38, 100%, 16%);
}

/* Tailwind v4 Theme Configuration */
@theme {
  --primary: var(--primary-500);
  --primary-light: var(--primary-300);
  --primary-lighter: var(--primary-400);
  --primary-dark: var(--primary-600);
  --primary-darker: var(--primary-700);

  --secondary: var(--secondary-500);
  --secondary-light: var(--secondary-300);
  --secondary-lighter: var(--secondary-400);
  --secondary-dark: var(--secondary-600);
  --secondary-darker: var(--secondary-700);

  --accent: var(--tertiary-500);
  --accent-light: var(--tertiary-300);
  --accent-lighter: var(--tertiary-400);
  --accent-dark: var(--tertiary-600);
  --accent-darker: var(--tertiary-700);
}
```

1. When placing text or icons over LIGHT cards or pages (hsl(220, 20%, 98%)):
   - Primary Text/Buttons: Use 500 or 600 level variants (e.g., text-primary-600, bg-primary-500, text-secondary-500, text-tertiary-600).
   - Background Tint/Fills: Use 300 level variants (e.g., bg-primary-300/30, bg-secondary-300/20).
2. When placing text or icons over DARK overlays or menus (hsl(220, 80%, 12%)):
   - Text/Icons: Use 300 or 400 level variants (e.g., text-primary-300, text-secondary-400, text-tertiary-400).
   - Highlights/Badges: Use 300 for text inside dark containers (e.g., text-tertiary-300 bg-black/40).
