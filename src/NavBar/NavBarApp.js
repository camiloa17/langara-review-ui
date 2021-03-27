import { Navbar } from 'react-bootstrap';
import Search from './Search/Search';
import NavLinks from './NavLinks/NavLinks';
import navBarStyles from './navBarStyles.module.css';
export default function NavBarApp() {
  return (
    <Navbar className={navBarStyles.NavBarFlex} bg='dark' variant='dark'>
      <Navbar.Brand>Story World</Navbar.Brand>
      <NavLinks />
      <Search />
    </Navbar>
  );
}
