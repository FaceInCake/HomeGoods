import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardImg, Nav, NavItem, NavLink } from 'reactstrap';



function ViewItem (props) {
  const { state } = useLocation();
  const [curItem, setCurItem] = useState({
    name: 'Test Name',
    caption: 'Test Caption',
    description: 'This is a test description.\nHere is another line',
    available: 123,
    price: '321.45',
    imageurls: 'images/items/Untitled.png',
    keywords: 'test;fake',
  });

  useEffect(() => {
    if (state === null) return;
    const { id } = state;
    if (id === null) return;
    const data = {id: id};
    post("php/GetItem.php", data, result => {
      if (result.success) {
        setCurItem(result.item);
      } else
        alert(result.message);
    });
  }, []);

  return (
    <div className='ViewItem p-1 p-lg-5'>
      <Card className='MainContent col-lg-6 mx-auto p-2 p-lg-5'>
        <CardImg src={curItem.imageurls} alt={curItem.caption}/>
        <div className='row d-flex'>
          <div className='col-8'>
            <h3>{curItem.name}</h3>
            <h5 className='text-muted'>{curItem.caption}</h5>
            <p>{curItem.description}</p>
            <h5>{curItem.keywords}</h5>
          </div>
          <div className='col'>
            <h3>${curItem.price}</h3>
            <h5>Available: {curItem.available}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ViewItem;
