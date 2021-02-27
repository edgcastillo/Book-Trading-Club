import { NavbarStyles, NavMenuStyles } from './NavbarStyle';
import Logo from './Logo';
import UserNavButton from '../UserNavButton/UserNavButton';
import BookNavButton from '../BookNavButton/BookNavButton';
import MobileNavButton from '../MobileNavButton/MobileNavButton';

const Navbar = () => {
  return (
    <NavbarStyles>
      <Logo name="Bookie" />
      <NavMenuStyles>
        <UserNavButton />
        <BookNavButton />
        <MobileNavButton />
      </NavMenuStyles>
    </NavbarStyles>
  );
};

export default Navbar;
