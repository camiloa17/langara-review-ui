import { useContext } from 'react';
import { Nav,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
export default function NavLinks() {
  const isAuth = useContext(AuthContext);
 
  return (
    <Nav>
      <NavLink className='nav-link' activeClassName='active' exact to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link' activeClassName='active' to='/xbox'>
        Xbox
      </NavLink>
      <NavLink className='nav-link' activeClassName='active' to='/playstation'>
        Playstation
      </NavLink>
      <NavLink className='nav-link' activeClassName='active' to='/pc'>
        PC
      </NavLink>
      <NavLink className='nav-link' activeClassName='active' to='/Nintendo'>
        Nintendo
      </NavLink>
      {isAuth.user ? (<>
        <NavLink className='nav-link' activeClassName='active' to='/publish'>
          Publish
        </NavLink>
        <NavLink className='nav-link' activeClassName='active' to='/studio'>
          Studio
        </NavLink>
        <NavLink className='nav-link' activeClassName='active' to='/platform'>
          Platform
        </NavLink>
        <NavLink className='nav-link' activeClassName='active' to='/genre'>
          Genre
        </NavLink>
        <NavLink className='nav-link' activeClassName='active' to='/games'>
          Games
        </NavLink>
      </>) : (
        <NavLink className='nav-link' activeClassName='active' to='/signin'>
          Sign in
        </NavLink>
      )}
      {isAuth.user && <Button variant='secondary' onClick={()=>isAuth.signout()}>Log out</Button>}
    </Nav>
  );
}
