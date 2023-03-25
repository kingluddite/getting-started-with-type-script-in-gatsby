import React from 'react';
// import 'normalize.css'; // reset
// import { ThemeProvider } from 'styled-components';
// import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
// import { Helmet } from 'react-helmet';
import Footer from './Footer';
// import Nav from './Nav';
// import ScrollToTopButton from './atoms/ScrollToTopButton';
// import GlobalStyles from '../styles/GlobalStyles';
// import Typography from '../styles/Typography';
// import Theme from '../styles/theme';
// import LayoutContainer from './layout/LayoutContainer';
// // import stripes from '../assets/images/stripes.svg';
// import '@reach/skip-nav/styles.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  // function Layout() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);

  return (
    <>
      {/* <Helmet>
        <body
          style={menuOpen ? `margin: 0; height: 100%; overflow: hidden` : null}
        />
      </Helmet> */}
      {/* <ThemeProvider theme={Theme}>
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
      </ThemeProvider> */}
      {/* <div className="footer-wrapper">
        <LayoutContainer
          className={
            menuOpen ? `footer-container menu-open` : `footer-container`
          }
        >
          <Footer />
        </LayoutContainer>
      </div> */}
      {children}
      <div className="footer-wrapper">
        <Footer />
      </div>
      {/* <ScrollToTopButton /> */}
    </>
  );
}

export default Layout;
