import { useEffect, useState, useRef } from 'react';
import { Spinner, List, Card, CardImg, CardTitle, CardText, CardSubtitle,
  Form, Label, Input } from 'reactstrap';
import { post } from '../Database';

function Search (props) {
  const searchInput = useRef("");
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);

  function onSearchCallback() {
    setWaiting(false);
    post("./php/Search.php", {
      query: searchInput.current.value
    }, d => {
      if (d.success) {
        setLoading(false);
        setItemList(d.items);
      } else
        alert(d.message);
    });
  }

  function ResultCard (props) {
    const item = props.item;
    return (
      <div className='m-0 p-3 col-lg-4'>
        <Card>
          <CardImg top alt={item.caption} src={item.imageurls.split(';',1)[0]} />
          <CardBody>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>{item.caption}</CardSubtitle>
            <CardTitle className='title pb-3'>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function SearchResults () {
    return (
      <List>
        {itemList.map(key => (
          <ResultCard key={key} item={itemList[key]} />
        ))}
      </List>
    )
  }

  return (
    <div className='Search p-3 p-lg-5'>
      {waiting ?
        <Form className='form float-lg-right ms-lg-auto' onSubmit={onSearchCallback}>
          {/* FIXME: 'my-lg-1' is a temporary fix, cant get the search bar to vertically align and I'm wasting time */}
          <Label htmlFor='search' hidden>Quick Search</Label>
          <Input id='search' className='search my-lg-1' bsSize='sm' placeholder='Search' innerRef={searchInput} />
          <Input type='submit' hidden />
        </Form>
      : loading ?
        <Spinner color='primary'>Loading...</Spinner>
      :
        <SearchResults/>
      }
    </div>
  );
}

export default Search;
