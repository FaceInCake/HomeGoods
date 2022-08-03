import './MainNav.css';
import { useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as BS from 'reactstrap';
import { db_set } from '../Database';

// Use 'name' for the display text
// Use 'to' for the link
const NavLink = (props) => {return (
  <BS.NavItem>
    <Link className='nav-link' to={props.to} {...props}>
      {props.name}
    </Link>
  </BS.NavItem>
)}

// Use 'name' property for what it displays AND links to
const DropdownItem = (props) => {return (
  <BS.DropdownItem>
    <Link className='dropdown-item' to={'/'+props.to}>
      {props.name}
    </Link>
  </BS.DropdownItem>
)}

// Search bar and form functionality
function MainNavSearchForm (props) {
  const navigate = useNavigate();
  const searchInput = useRef("Search");

  function onSearchCallback (event) {
    event.preventDefault();
    db_set("SearchHistory", {value: searchInput.current.value})
      .then(() => navigate('/Search'));
  }

  return (
    <BS.Form className='form float-lg-right ms-lg-auto' onSubmit={onSearchCallback}>
      {/* FIXME: 'my-lg-1' is a temporary fix, cant get the search bar to vertically align and I'm wasting time */}
      <BS.Label htmlFor='search' hidden>Quick Search</BS.Label>
      <BS.Input id='search' className='search my-lg-1' bsSize='sm' placeholder='Search' innerRef={searchInput} />
      <BS.Input type='submit' hidden />
    </BS.Form>
  )

}

// Our main nav thing
function MainNav (props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen(!isOpen);

  function logoutCallback (event) {
    event.preventDefault();
    console.log("Logging out");
    fetch("php/Logout.php")
    .catch(reason => {
      console.error("Logout error occured: "+reason);
    });
  }
  
  return (
    <div className='MainNav'>
      <BS.Navbar className='bg-dark p-2' expand='lg' dark>
        <BS.NavbarBrand>
          <img src='Icon64.png' width={32} height={32}/>
          <span className='p-2'>Home Goods</span>
        </BS.NavbarBrand>
        <BS.NavbarToggler onClick={toggle}/>
        <BS.Collapse isOpen={isOpen} navbar>
          <BS.Nav className='container-fluid' navbar>
            <NavLink name='Home' to='/'/>
            <NavLink name='Login' to='/Login'/>
            <BS.NavItem>
              <Link className='nav-link' to='/' onClick={logoutCallback}>
                Logout
              </Link>
            </BS.NavItem>
            <BS.UncontrolledDropdown nav inNavbar>
              <BS.DropdownToggle nav caret>About</BS.DropdownToggle>
              <BS.DropdownMenu end>
                <DropdownItem name="About Us"/>
                <DropdownItem name="User Guide"/>
                <DropdownItem name="Contact Us" to="Contact"/>
                <DropdownItem name="Terms and Services" to="TermsAndService"/>
              </BS.DropdownMenu>
            </BS.UncontrolledDropdown>
            <MainNavSearchForm />
          </BS.Nav>
        </BS.Collapse>
      </BS.Navbar>
      <Outlet/>
    </div>
  );
}

export default MainNav;
  