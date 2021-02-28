import { useState, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import handleClickOutside from '../handleClickOutside';

import { NavButton } from '../Button/Button';
import { LoginTooltip } from '../Tooltip/Tooltip';
import UserMenuStyles from './UserMenuStyles';

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
      <NavButton primary onClick={() => setOpen(!isOpen)}>
        <AccountCircleOutlinedIcon style={{ color: 'white' }} />
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
