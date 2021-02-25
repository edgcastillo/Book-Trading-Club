import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const SideNavContainerStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 100%;
  background: var(--white);
  transform: translateX(${(props) => (props.toggleSidenav ? '-100%' : '0')});
`;

const SideNav = ({ toggleSidenav }) => {
  return (
    <SideNavContainerStyles toggleSidenav={toggleSidenav}>
      <p>hola</p>
    </SideNavContainerStyles>
  );
};

export default SideNav;
