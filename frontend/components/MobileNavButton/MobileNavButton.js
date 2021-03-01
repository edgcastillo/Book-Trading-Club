import { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import SideNav from '../Sidenav/Sidenav';
import { NavButton, RoundButton } from '../Button/Button';

const MobileNavButton = () => {
  const theme = useContext(ThemeContext);
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      {!showSidenav && (
        <NavButton {...theme} onClick={() => setShowSidenav(true)}>
          <MenuRoundedIcon style={{ color: theme.color }} />
        </NavButton>
      )}
      {showSidenav && (
        <RoundButton close onClick={() => setShowSidenav(false)}>
          <CloseRoundedIcon />
        </RoundButton>
      )}
      {showSidenav && <SideNav toggleSidenav={showSidenav} />}
    </>
  );
};

export default MobileNavButton;
