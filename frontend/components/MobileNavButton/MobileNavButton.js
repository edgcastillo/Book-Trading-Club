import { useState } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import SideNav from '../Sidenav/Sidenav';
import { NavButton } from '../Button/Button';

const MobileNavButton = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      <NavButton onClick={() => setShowSidenav(true)}>
        <MenuRoundedIcon style={{ color: 'white' }} />
      </NavButton>
      {showSidenav && (
        <NavButton onClick={() => setShowSidenav(false)}>
          <CloseRoundedIcon style={{ color: 'white' }} />
        </NavButton>
      )}
      {showSidenav && <SideNav toggleSidenav={showSidenav} />}
    </>
  );
};

export default MobileNavButton;
