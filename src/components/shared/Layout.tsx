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
import ScrollToTopButton from '@components/atoms/buttons/ScrollToTopButton';
import LayoutContainer from './layout/LayoutContainer';

// styles
import GlobalStyles from '@styles/globals/GlobalStyles';
import Typography from '@styles/globals/Typography';
import Theme from '@styles/globals/theme';

// types
interface LayoutProps {
  children: React.ReactNode;
}

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
              location={typeof window !== `undefined` ? location : undefined}
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
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
