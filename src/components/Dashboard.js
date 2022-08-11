import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ItemBoard from './dashboard/ItemBoard';
import UserBoard from './dashboard/UserBoard';



function Dashboard (props) {
  const [mode, setMode] = useState('');

  function goTo (event, tab) {
    event.preventDefault();
    setMode(tab);
  }

  function MyTab ({ name }) {
    const isActive = mode === name;
    return (
      <NavItem>
        <NavLink active={isActive}  href='' onClick={e=>goTo(e, name)}>
          {name}
        </NavLink>
      </NavItem>
    )
  }

  return (
    <div className='Dashboard p-1 p-lg-5'>
      <Nav fill tabs>
        <MyTab name='Users' />
        <MyTab name='Items' />
      </Nav>
      <div className='MainContent p-2 p-lg-5'>
        {
          mode==='Users' ? <UserBoard/>
          : mode==='Items' ? <ItemBoard/>
          : <div>Click a tab to open that view.</div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
