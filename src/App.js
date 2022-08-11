import { Route, Routes, BrowserRouter }
from 'react-router-dom';

import HomePage from './components/HomePage';
import Search from './components/Search';
import Login from './components/Login';
import Error404 from './components/Error404';
import TermsAndService from './components/TermsAndService';
import Contact from './components/Contact';
import MainNav from './components/MainNav';
import Ticket from './components/Ticket';
import About from './components/About';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import UserGuide from './components/UserGuide';

////////////////////////
//    Theme Stuff     //
////////////////////////

export const themes = [
  "ThemePrimary", "ThemePrimaryDark", "ThemeSecondary", "ThemeSecondaryDark", "Bootstrap"
];

const __theme = localStorage.getItem("theme") ?? "ThemePrimary";
import("./styles/"+__theme+".scss");
// import "./styles/Default.scss"; // Import default after

export function changeTheme (theme) {
  localStorage.setItem("theme", theme); 
  import("./styles/"+theme+".scss");
  window.location.reload();
}

/////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNav/>}>
            <Route index element={<HomePage/>}/>
            <Route path="Search" element={<Search/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Settings" element={<Settings/>}/>
            <Route path="UserGuide" element={<UserGuide/>}/>
            <Route path="About" element={<About/>}/>
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
