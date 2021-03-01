import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Navbar from '../Navbar/Navbar';

const HeaderStyles = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
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
