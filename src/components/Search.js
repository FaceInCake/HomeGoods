import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Spinner, List, Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { post } from '../Database';

function Search (props) {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  const [maxPerPage, setMaxPerPage] = useState(50);

  useEffect(() => {
    if (state === null) return;
    const { query } = state;
    if (query === null) return;

    console.log(("Querying..."));
    console.log(query);
    post("./php/Search.php", {
      query: query
    }, d => {
      if (d.success) {
        setLoading(false);
        setItemList(d.results);
      } else
        alert(d.message);
    });
  }, []);

  function ResultCard (props) {
    const { item } = props;
    return (
      <div className='ResultCard m-0 p-3 col-sm-6 col-md-4 col-lg-3'>
        <Card>
          <CardImg top alt={item.caption} src={item.imageurls.split(';',1)[0]} />
          <CardBody>
            <CardTitle tag='h3' className='title pb-3'>{item.name}</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>{item.caption}</CardSubtitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function SearchResults () {
    return (
      <div className='SearchResults'>
        <h3>Search results for '{state.query??"ERROR"}'</h3>
        <div className='SearchResultCards row row-cols-md-3 row-cols-lg-4'>
          {itemList.map(item => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='Search p-3 p-lg-5'>
      { loading ?
        <Spinner color='primary'>Loading...</Spinner>
      :
        <SearchResults/>
      }
    </div>
  );
}

export default Search;
