import { NavbarStyles, NavMenuStyles } from './NavbarStyle';
import Logo from './Logo';
import UserNavButton from '../../Button/UserNavButton';
import BookNavButton from '../../Button/BookNavButton';
import MobileNavButton from '../../Button/MobileNavButton';

const Navbar = ({ isMobile, styleType }) => {
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
