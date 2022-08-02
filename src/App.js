import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="Search" element={<Search/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
