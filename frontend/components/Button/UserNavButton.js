import { useState, useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import handleClickOutside from '../handleClickOutside';

import { NavButton } from './Button';
import { LoginTooltip } from '../Common/Tooltip';
import { UserMenuStyles } from './ButtonStyles';

const UserMenuLinks = ({ handleClick }) => {
  return (
    <UserMenuStyles>
      <li>Sign Up</li>
      <li>Login</li>
    </UserMenuStyles>
  );
};

const UserMenuContainer = styled.div`
  align-self: center;
`;

const UserNavButton = () => {
  const theme = useContext(ThemeContext);
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    setOpen(!isOpen);
  };

  handleClickOutside(node, () => {
    setOpen(false);
  });
  return (
    <UserMenuContainer ref={node}>
      <NavButton {...theme} onClick={() => setOpen(!isOpen)}>
        <AccountCircleOutlinedIcon style={{ color: theme.color }} />
      </NavButton>
      {isOpen && (
        <LoginTooltip>
          <UserMenuLinks handleClick={handleClick} />
        </LoginTooltip>
      )}
    </UserMenuContainer>
  );
};

export default UserNavButton;