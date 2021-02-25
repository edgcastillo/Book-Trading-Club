import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import Logo from '../../public/Closed_Book_Icon.svg';
import Tooltip from '../Tooltip/Tooltip';

const NavbarStyles = styled.nav`
  height: 4.15rem;
  /* margin: 0 auto; */
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-left: 0.5rem;

  /* @media screen and (min-width: 1100px) {
    max-width: var(--max-width-medium);
  }

  @media screen and (min-width: 1300px) {
    max-width: var(--max-width-desktop);
  } */
`;

const LogoStyles = styled.div`
  svg {
    height: 35px;
    width: 35px;
  }
  span {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    grid-template-columns: 40px 200px;
    align-items: center;
    justify-content: start;
    /* padding-left: 1rem;
    padding-right: 1rem; */
    h1 {
      color: var(--white);
      width: 5.6rem;
      cursor: pointer;
      font-weight: 200;
      font-size: 1rem;
      /* font-size: 2rem; */
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

const NavLinkStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  position: relative;
  a {
    font-weight: 200;
    font-size: 1.25rem;
    color: var(--white);
  }
`;

const UserLinkStyles = styled.ul`
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

const UserLinks = () => {
  return (
    <UserLinkStyles>
      <li>Sign Up</li>
      <li>Login</li>
    </UserLinkStyles>
  );
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <NavbarStyles>
      <LogoStyles>
        <Link href="/">
          <span>
            <Logo />
            <h1>Bookie</h1>
          </span>
        </Link>
      </LogoStyles>
      <NavLinkStyles>
        <AccountCircleOutlinedIcon
          style={{ color: 'white' }}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        <MenuRoundedIcon style={{ color: 'white' }} />
        {showDropdown && (
          <>
            <Tooltip>
              <UserLinks />
            </Tooltip>
          </>
        )}
      </NavLinkStyles>
    </NavbarStyles>
  );
};

export default Navbar;
