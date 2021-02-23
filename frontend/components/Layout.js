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
  html {
    box-sizing: border-box;
    --black: #393939;
    --white: #fff;
    --color-beige: #FFEEE6;
    --color-secondary: #573ba3;
    --color-secondary-dark: #2b0f42;
    --max-width: 1024px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
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
  display: grid;
  grid-template-rows: 66px 1fr auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
