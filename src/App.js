import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Login from './components/Login';
import Error404 from './components/Error404';
import TermsAndService from './components/TermsAndService';
import Contact from './components/Contact';
import MainNav from './components/MainNav';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNav/>}>
            <Route index element={<HomePage/>}/>
            <Route path="Search" element={<Search/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="TermsAndService" element={<TermsAndService/>}/>
            <Route path="Ticket" element={<Ticket/>}/>

            <Route path="*" element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
