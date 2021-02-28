import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';

const HeaderStyles = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--color-secondary);
`;

const Header = ({ isMobile }) => {
  // props drilling - not ideal but easier than rewrite half of the app with React ctx.
  return (
    <HeaderStyles>
      <Navbar isMobile={isMobile} />
    </HeaderStyles>
  );
};

export default Header;
