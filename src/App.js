import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="Search" element={<Search/>}/>
        <a
            
            {/* <Route path="*" element={<Error404/>} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
