import './MainNav.css';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as BS from 'reactstrap';
import { db_set } from '../Database';

// Use 'name' for the display text
// Use 'to' for the link
const NavLink = (props) => {return (
  <BS.NavItem>
    <Link className='nav-link' to={props.to}>
      {props.name}
    </Link>
  </BS.NavItem>
)}

// Use 'name' property for what it displays AND links to
const DropdownItem = (props) => {return (
  <BS.DropdownItem>
    <Link className='dropdown-item' to={'/'+props.name}>
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
  
  return (
    <div className='MainNav'>
      <BS.Navbar className='bg-dark p-2' expand='lg' dark>
        <BS.NavbarBrand href='/'>
          <img src='Icon64.png' width={32} height={32}/>
          <span className='p-2'>Home Goods</span>
        </BS.NavbarBrand>
        <BS.NavbarToggler onClick={toggle}/>
        <BS.Collapse isOpen={isOpen} navbar>
          <BS.Nav className='container-fluid' navbar>
            <NavLink name='Home' to='/'/>
            <NavLink name='Login' to='/Login'/>
            <BS.UncontrolledDropdown nav inNavbar>
              <BS.DropdownToggle nav caret>About</BS.DropdownToggle>
              <BS.DropdownMenu end>
                <DropdownItem name="Company"/>
                <DropdownItem name="User Guide"/>
                <DropdownItem name="About Us"/>
              </BS.DropdownMenu>
            </BS.UncontrolledDropdown>
            <MainNavSearchForm />
          </BS.Nav>
        </BS.Collapse>
      </BS.Navbar>
    </div>
  );
}

export default MainNav;
  