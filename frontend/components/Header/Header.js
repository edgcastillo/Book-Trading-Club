import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';

const HeaderStyles = styled.header`
  width: 100%;
  height: 66px;
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
