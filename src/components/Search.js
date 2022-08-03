import { useEffect, useState } from 'react';
import { Spinner, List } from 'reactstrap';
import { db_get } from '../Database';

function Search (props) {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    db_get("SearchHistory")
      .then(data => {
        setLoading(false);
        setHistory(data);
      });
  }, []);

  const SimpleLi = props => (<li key={props.value}>{props.value}</li>)

  return (
    <div className='HomePage container-fluid'>
      {loading ?
        <Spinner color='primary'>Loading...</Spinner>
      :
        <List>
          {Object.keys(history).map((key,index) => (
            <li key={index}>{history[key].value}</li>
          ))}
        </List>
      }
    </div>
  );
}

export default Search;
