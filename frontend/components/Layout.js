import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { createGlobalStyle } from 'styled-components';
import { devices } from './MediaQueries';

const DynamicFooterWithNoSSR = dynamic(
  // in cases when you don't want the component/module on the server-side
  // because there are some dependencies or it only works in the browser.
  () => import('../components/Footer/FooterContainer'),
  { ssr: false }
);

import Header from '../components/Header/Header';

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
    --color-dark-text: #2C293B;
    --white: #fff;
    --red-primary: #DE2454;
    --color-beige: #FFEEE6;
    --color-secondary: #573ba3;
    --color-secondary-dark: #2b0f42;
    --color-light-gray: #ededed;
    --max-width-desktop: 1024px;
    --max-width-tablet: 768px;
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
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 50px;

  @media ${devices.laptop} {
    grid-template-rows: 1fr;
  }
`;

const Layout = ({ children }) => {
  const [isMobile, setMobile] = useState(false);
  const handleAppWidth = (isMobile) => {
    setMobile(isMobile);
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header isMobile={isMobile} />
        {children}
        <DynamicFooterWithNoSSR handleAppWidth={handleAppWidth} />
      </Container>
    </>
  );
};

export default Layout;
