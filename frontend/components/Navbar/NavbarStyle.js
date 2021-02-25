import styled from 'styled-components';
import { devices } from '../MediaQueries';

export const NavbarStyles = styled.nav`
  height: 4.15rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media ${devices.tablet} {
    margin: 0 auto;
    max-width: 44rem;
  }

  @media ${devices.laptop} {
    margin: 0 auto;
    max-width: 60rem;
  }

  @media ${devices.desktop} {
    margin: 0 auto;
    max-width: 65rem;
  }
`;

export const LogoStyles = styled.div`
  svg {
    height: 35px;
    width: 35px;
  }
  span {
    display: grid;
    grid-template-columns: 40px 200px;
    align-items: center;
    justify-content: start;
    h1 {
      color: var(--white);
      width: 5.6rem;
      cursor: pointer;
      font-weight: 200;
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${devices.laptop} {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const NavLinkStyles = styled.ul`
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.63rem;
  position: relative;
  a {
    font-weight: 200;
    font-size: 1.25rem;
    color: var(--white);
  }

  .close-btn-container {
    position: absolute;
    z-index: 1;
    bottom: -35%;
    left: 30%;
  }
`;

export const UserLinkStyles = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  li:first-child {
    margin-bottom: 5px;
  }
`;
