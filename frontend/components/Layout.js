import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/public/radnikanext-medium-webfont.woff2') format()('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  html {
    box-sizing: border-box;
    --black: #393939;
    --white: #fff;
    --red-primary: #DE2454;
    --color-beige: #FFEEE6;
    --color-secondary: #573ba3;
    --color-secondary-dark: #2b0f42;
    --max-width-desktop: 1024px;
    --max-width-medium: 960px;
    --max-width-small: 620px;
    font-size: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
