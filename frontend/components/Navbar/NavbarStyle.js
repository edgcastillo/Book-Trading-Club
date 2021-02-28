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

export const NavMenuStyles = styled.ul`
  position: relative;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.63rem;

  .close-btn-container {
    position: absolute;
    z-index: 1;
    bottom: -35%;
    left: 30%;
  }

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
  }
`;
