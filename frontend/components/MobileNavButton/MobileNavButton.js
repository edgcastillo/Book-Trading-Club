import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import SideNav from '../Sidenav/Sidenav';
import { NavButton } from '../Button/Button';

const MobileNavButton = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      {!showSidenav && (
        <NavButton primary onClick={() => setShowSidenav(true)}>
          <MenuRoundedIcon style={{ color: 'white' }} />
        </NavButton>
      )}
      {showSidenav && (
        <NavButton secondary onClick={() => setShowSidenav(false)}>
          <CloseRoundedIcon />
        </NavButton>
      )}
      {showSidenav && <SideNav toggleSidenav={showSidenav} />}
    </>
  );
};

export default MobileNavButton;
