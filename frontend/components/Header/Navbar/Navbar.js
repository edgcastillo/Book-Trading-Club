import { NavbarStyles, NavMenuStyles } from './NavbarStyle';
import Logo from './Logo';
import UserNavButton from '../../Buttons/UserNavButton';
import BookNavButton from '../../Buttons/BookNavButton';
import MobileNavButton from '../../Buttons/MobileNavButton';

const Navbar = ({ isMobile }) => {
  return (
    <NavbarStyles>
      <Logo name="Bookie" />
      <NavMenuStyles>
        {!isMobile && <BookNavButton />}
        {!isMobile && <UserNavButton />}
        {isMobile && <MobileNavButton />}
      </NavMenuStyles>
    </NavbarStyles>
  );
};

export default Navbar;
