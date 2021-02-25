import React, { useState } from 'react';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import {
  NavbarStyles,
  LogoStyles,
  NavLinkStyles,
  UserLinkStyles,
} from './NavbarStyle';
import Logo from '../../public/Closed_Book_Icon.svg';
import Tooltip from '../Tooltip/Tooltip';
import SideNav from '../Sidenav/Sidenav';
import { RoundButton } from '../Button/Button';

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
  const [showSidenav, setShowSidenav] = useState(false);
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
        <MenuRoundedIcon
          style={{ color: 'white' }}
          onClick={() => setShowSidenav(true)}
        />
        {showSidenav && (
          <div className="close-btn-container">
            <RoundButton close onClick={() => setShowSidenav(false)}>
              <CloseRoundedIcon />
            </RoundButton>
          </div>
        )}
        {showSidenav && <SideNav toggleSidenav={showSidenav} />}
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
