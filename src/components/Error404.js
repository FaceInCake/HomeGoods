import './Error404.css';
import MainNav from './MainNav';

function Error404 (props) {
  return (
    <div className='Error404'>
      <MainNav />
      <p>Error404: That page does not exist :(</p>
    </div>
  );
}

export default Error404;
