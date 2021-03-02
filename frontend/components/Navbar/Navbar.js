import { NavbarStyles, NavMenuStyles } from './NavbarStyle';
import Logo from './Logo';
import UserNav from '../Button/UserNav';
import BookNav from '../Button/BookNav';
import MobileNav from '../Button/MobileNav';

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
