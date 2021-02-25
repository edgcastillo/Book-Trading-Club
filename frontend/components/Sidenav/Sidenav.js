import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const SideNavContainerStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: var(--white);
`;

const SideNav = () => {
  return (
    <SideNavContainerStyles>
      <h1>hello</h1>
    </SideNavContainerStyles>
  );
};

export default SideNav;
