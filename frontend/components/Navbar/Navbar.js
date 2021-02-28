import { NavbarStyles, NavMenuStyles } from './NavbarStyle';
import Logo from './Logo';
import UserNavButton from '../UserNavButton/UserNavButton';
import BookNavButton from '../BookNavButton/BookNavButton';
import MobileNavButton from '../MobileNavButton/MobileNavButton';

const Navbar = ({ isMobile }) => {
  console.log(isMobile);
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
