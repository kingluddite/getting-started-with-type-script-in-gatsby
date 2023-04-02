import { createGlobalStyle } from 'styled-components';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const Typography = createGlobalStyle`
  html {
    color: var(--c-dark-grey-3);
    font-family: var(--font-open-sans);
  }
  
  h2,h3,h4,h5,h6 {
    margin: 0;
    font-family: var(--font-montserrat);
    font-style: normal;
  }
  
  h1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: var(--size-4);
    line-height: var(--size-4n);
    font-size: clamp(var(--size-1dn), -0.1559rem + 8.4706vw, var(--size-4));
    line-height: clamp(var(--size-2), 0.0941rem + 8.4706vw, var(--size-4n));
  }
  
  h2 {
    font-weight: bold;
    font-size: var(--size-2n);
    line-height: var(--size-2dn);
    font-size: clamp(var(--size-1n),-0.4824rem + 6.5882vw, var(--size-2n));
    line-height: clamp(var(--size-1d), 0.4412rem + 4.7059vw, var(--size-2dn));
  }
  
  h3 {
    font-weight: 600;
    font-size: var(--size-1n);
    line-height: var(--size-1h);
  }
  
  p, li {
    letter-spacing: 0.5px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--size-1);
    line-height: var(--size-1h);
  }

  a {
    color: var(--c-grey-4);
    text-decoration-color: var(--red);
    
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  
  .center {
    text-align: center;
  }
  `;
export default Typography;
