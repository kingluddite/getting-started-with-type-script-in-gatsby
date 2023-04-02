// npm
import React, { useState, useEffect } from 'react';
import 'normalize.css'; // reset
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';

// components
import Footer from './Footer';
import Nav from './Nav';
import ScrollToTopButton from '../atoms/buttons/ScrollToTopButton';

// styles
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Theme from '../../styles/theme';
import LayoutContainer from './layout/LayoutContainer';

interface LayoutProps {
  children: React.ReactNode;
}
// // import stripes from '../assets/images/stripes.svg';

// eslint-disable-next-line react/prop-types
function Layout({ children }: LayoutProps) {
  // function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const menuStyles: React.CSSProperties = {
    margin: 0,
    height: `100%`,
    overflow: `hidden`,
  };

  return (
    <>
      <Helmet>
        <body style={menuOpen ? menuStyles : undefined} />
      </Helmet>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Typography />
        <LayoutContainer
          style={{
            position: `relative`,
            zIndex: 10,
          }}
        >
          <div>
            <SkipNavLink />
            <Nav
              location={location}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <SkipNavContent />
          </div>
        </LayoutContainer>
        <main
          style={{
            display: menuOpen ? `none` : `block`,
            position: `relative`,
            zIndex: 0,
          }}
        >
          {children}
        </main>
      </ThemeProvider>
      <div className="footer-wrapper">
        <LayoutContainer
          className={
            menuOpen ? `footer-container menu-open` : `footer-container`
          }
        >
          <Footer />
        </LayoutContainer>
      </div>
      {children}
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
