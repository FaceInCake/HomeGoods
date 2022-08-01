import './HomePage.css';
import MainNav from './MainNav';

function HomePage (props) { return (
  <div className='HomePage'>
    <MainNav/>
    <div className='MainContent container-fluid'>
      That was a navbar
    </div>
  </div>
);}

export default HomePage;
