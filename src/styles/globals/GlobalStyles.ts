import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* add css custom properties */

:root {
  /* --main-font: 'Krub', sans-serif; */

  /* theme */

  // Fonts
  --font-open-sans: "Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-montserrat: Montserrat, Arial, sans-serif;

  // Whites
  --c-white: #ffffff;
  --c-aef-white: #FBFBF9;

  // Greys
  --c-grey-1: #E0E1E2;
  --c-grey-2: #B4B7BA;
  --c-grey-3: #808489;
  --c-grey-4: #55595E;

  // Dark Greys
  --c-dark-grey-1: #373C43;
  --c-dark-grey-2: #2D3239;
  --c-dark-grey-3: #1E242B;
  --c-dark-grey-4: #121820;
  
  // Hues
  --c-yellow-1: #F9BB1B;
  --c-yellow-2: #D39903;
  --c-yellow-3: #99720C;
  --c-red-1: #D04145;
  --c-steel-blue-1: #7A92A1;
  --c-browser-blue-1: #5E9ED6;


  /* breakpoints */
  --phone-breakpoint: 480px;
  --tablet-breakpoint: 768px;
  --desktop-breakpoint: 1000px;

  /* Unit Sizes */
  --size-nudge: 0.25rem;              // 4px
  --size-half: 0.5rem;                // 8px
  --size-dual-nudge: 0.75rem;         // 12px
  --size-1: 1rem;                     // 16px
  --size-1n: 1.25rem;                 // 20px
  --size-1h: 1.5rem;                  // 24px
  --size-1dn: 1.75rem;                // 30px
  --size-2: 2rem;                     // 32px
  --size-2n: 2.25rem;                 // 36px
  --size-2h: 2.5rem;                  // 40px
  --size-2dn: 2.75rem;                // 44px
  --size-3: 3rem;                     // 48px
  --size-3n: 3.25rem;                 // 52px
  --size-3h: 3.5rem;                  // 56px
  --size-3dn: 3.75rem;                // 60px
  --size-4: 4rem;                     // 64px
  --size-4n: 4.25rem;                 // 68px
  --size-4h: 4.5rem;                  // 72px
  --size-4dn: 4.75rem;                // 76px
  --size-5: 5rem;                     // 80px
  --size-5n: 5.25rem;                 // 84px
  --size-5h: 5.5rem;                  // 88px
  --size-5dn: 5.75rem;                // 92px
  --size-6: 6rem;                     // 96px
  --size-6n: 6.25rem;                 // 100px
  --size-6h: 6.5rem;                  // 104px
  --size-6dn: 6.75rem;                // 108px
  --size-7: 7rem;                     // 112px
  --size-7n: 7.25rem;                 // 116px
  --size-7h: 7.5rem;                  // 120px
  --size-7dn: 7.75rem;                // 124px

  --animation-bezier: cubic-bezier(0.16, 0.84, 0.58, 0.99);

  --radius-xs: var(--size-nudge);      // 4px
  --radius-sm: var(--size-half);       // 8px
  --radius-md: var(--size-1);          // 16px
  --radius-lg: var(--size-1h);         // 24px
  --radius-full: 2000px;
}

html {
  font-size: 16px
}

/* flexbox footer at bottom */
html, body {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex; /* flexbox footer at bottom */
  min-height: 100vh;
  flex-direction: column; /* flexbox footer at bottom */
  font-size: var(--size-1);
  background: var(--c-aef-white)
}

/* responsive images */
img {
  display: block;
  max-width: 100%;
}

main {
  min-height: calc(100vh - 220px);
  margin-bottom: var(--size-7); 
}

/* for all "read more" blog excerpts */
.read-more-excerpt {
  font-weight: strong;
  font-size: var(--size-dual-nudge);
  color: var(--c-yellow-2);  
}
  
.footer-wrapper {
  background: #ffffff;
  padding: var(--size-4) 0 var(--size-3) 0;
  @media only screen and (max-width: 768px) {
    padding: var(--size-2) 0 var(--size-2);
  }
}

.menu-open main,
.menu-open.footer-container {
  height: 0;
  overflow: hidden;
}

[data-reach-skip-link],
[data-reach-skip-link]:focus {
  z-index: 1000;
}`;

export default GlobalStyles;
