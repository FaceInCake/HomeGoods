import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Login from './components/Login';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="Search" element={<Search/>}/>
            <Route path="Login" element={<Login/>}/>
            
            <Route path="*" element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
