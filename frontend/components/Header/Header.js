import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';

const HeaderStyles = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--color-secondary);
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Navbar />
    </HeaderStyles>
  );
};

export default Header;
