import './MainNav.css';
import { useContext, useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as BS from 'reactstrap';
import { UserContext } from '../store/UserContext';

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
    navigate("/Search", {
      params: { query: searchInput.current.value}
    });
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ()=> setIsOpen(!isOpen);
  const userContext = useContext(UserContext);

  function logoutCallback (event) {
    event.preventDefault();
    console.log("Logging out");
    fetch("php/Logout.php")
    .catch(reason => {
      console.error("Logout error occured: "+reason);
    });
    userContext.logout();
    navigate("./Login");
  }

  const dashboardItem = () => userContext.admin && <DropdownItem name="Admin Dashboard" to="Dashboard"/>;
  
  return (
    <div className='MainNav'>
      <BS.Navbar className='bg-primary p-2' expand='lg' dark>
        <BS.NavbarBrand>
          <img src='Icon64.png' width={32} height={32}/>
          <span className='p-2'>Home Goods</span>
        </BS.NavbarBrand>
        <BS.NavbarToggler onClick={toggle}/>
        <BS.Collapse isOpen={isOpen} navbar>
          <BS.Nav className='container-fluid' navbar>
            <NavLink name='Home' to='/'/>
            {userContext.loggedin ?
              <BS.UncontrolledDropdown nav inNavbar>
                <BS.DropdownToggle nav caret>Account</BS.DropdownToggle>
                <BS.DropdownMenu end>
                  <DropdownItem name="Settings" to="Settings" />
                  <dashboardItem/>
                  <DropdownItem name="User Guide" to="UserGuide"/>
                  <BS.DropdownItem>
                    <Link className='dropdown-item' to={'./Login'} onClick={logoutCallback}>
                      Logout
                    </Link>
                  </BS.DropdownItem>
                </BS.DropdownMenu>
              </BS.UncontrolledDropdown>
            :
              <NavLink name='Login' to='/Login'/>
            }
            <BS.UncontrolledDropdown nav inNavbar>
              <BS.DropdownToggle nav caret>About</BS.DropdownToggle>
              <BS.DropdownMenu end>
                <DropdownItem name="About Us" to="About"/>
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
  