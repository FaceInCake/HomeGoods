import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, CardImg, Spinner } from 'reactstrap';
import { post } from "../Database";



function ViewItem (props) {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [curItem, setCurItem] = useState({
    name:'',
    caption: '',
    description: '',
    available: 0,
    price: '0.00',
    imageurls: '',
    keywords: '',
  });

  useEffect(() => {
    if (state === undefined) return;
    const { itemid } = state;
    if (itemid === undefined) return;
    const data = { itemid: itemid };
    post("./php/GetItem.php", data, result => {
      if (result.success) {
        setCurItem(result.item);
        setLoading(false);
      } else
        alert(result.message);
    });
  }, []);

  return (
    <div className='ViewItem p-1 p-lg-5'>
    {loading ?
      <Spinner className='m-5'/>
      :
      <Card className='MainContent col-lg-6 mx-auto p-2 p-lg-5'>
        <CardImg src={curItem.imageurls.split(';',1)[0]} alt={curItem.caption}/>
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
            <Button className='my-2' color='success'>Buy now!</Button>
            <Button color='warning'>Add to shopping cart</Button>
          </div>
        </div>
      </Card>
    }    
    </div>
  );
}

export default ViewItem;
