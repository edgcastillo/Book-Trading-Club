import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { devices } from '../MediaQueries';
import Section from './Section';

const FooterStyles = styled.footer`
  width: 100%;
  align-self: end;
  justify-self: end;
  display: grid;
  padding: 5px 0;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  background: var(--color-beige);

  .author-name {
    margin: 0;
    font-weight: 300;
  }

  .links-block {
    display: flex;
    justify-content: space-around;

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  .footer-box {
    align-self: center;
    justify-self: center;

    .title {
      font-weight: 400;
    }

    & > ul > li > p {
      font-size: 0.88rem;
    }
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const MobileView = () => {
  return (
    <>
      <p className="author-name">Edwin Castillo</p>
      <div className="links-block">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </>
  );
};

const DesktopView = () => {
  return (
    <>
      <section className="footer-box">
        <h4 className="title">Project</h4>
        <ul>
          <li>
            <p>A FreeCodeCamp full-stack project</p>
          </li>
          <li>
            <p>
              Project requirements{' '}
              <a href="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/manage-a-book-trading-club">
                here
              </a>
            </p>
          </li>
        </ul>
      </section>
      <section className="footer-box">
        <h4 className="title">Tech Stack</h4>
        <ul>
          <li>
            <p>Front-end: React + Apollo + CSS in JS</p>
          </li>
          <li>
            <p>Back-end: GraphQL + MongoDB + KeystoneJS</p>
          </li>
        </ul>
      </section>
    </>
  );
};

const Footer = ({ isMobile }) => {
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 768);

  const updateFooterUi = () => {
    setMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateFooterUi);
    return () => window.removeEventListener('resize', updateFooterUi);
  });
  return (
    <FooterStyles>{isMobile ? <MobileView /> : <DesktopView />}</FooterStyles>
  );
};

export default Footer;
