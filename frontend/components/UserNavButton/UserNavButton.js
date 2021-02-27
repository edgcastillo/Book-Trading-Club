import { useState, useRef } from 'react';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import handleClickOutside from '../handleClickOutside';

import { NavButton } from '../Button/Button';
import { LoginTooltip } from '../Tooltip/Tooltip';
import UserMenuStyles from './UserMenuStyles';

const UserMenuLinks = () => {
  return (
    <UserMenuStyles>
      <li>Sign Up</li>
      <li>Login</li>
    </UserMenuStyles>
  );
};

const UserNavButton = () => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  handleClickOutside(node, () => {
    setOpen(false);
  });
  return (
    <>
      <NavButton ref={node} onClick={() => setOpen(!isOpen)}>
        <AccountCircleOutlinedIcon style={{ color: 'white' }} />
      </NavButton>
      {isOpen && (
        <LoginTooltip>
          <UserMenuLinks />
        </LoginTooltip>
      )}
    </>
  );
};

export default UserNavButton;
