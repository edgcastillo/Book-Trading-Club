import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Navbar from './Navbar/Navbar';

const HeaderStyles = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  z-index: 1;
`;

const Header = ({ isMobile }) => {
  const theme = useContext(ThemeContext);
  return (
    <HeaderStyles {...theme}>
      <Navbar isMobile={isMobile} />
    </HeaderStyles>
  );
};

export default Header;
