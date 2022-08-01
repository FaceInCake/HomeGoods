import './Search.css';
import MainNav from './MainNav';
import * as BS from 'reactstrap';
import { useEffect, useState } from 'react';
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
    <div className='HomePage'>
      <MainNav/>
      <div className='MainContent container-fluid'>
        {loading ?
          <BS.Spinner color='primary'>Loading...</BS.Spinner>
        :
          <BS.List>
            {Object.keys(history).map((key,index) => (
              <li key={index}>{history[key].value}</li>
            ))}
          </BS.List>
        }
      </div>
    </div>
  );
}

export default Search;
