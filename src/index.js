import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from './bootstrap/bootstrap.min.css';
import App from './App';
import { UserContextProvider } from './store/UserContext';
// import reportWebVitals from './reportWebVitals';
import './Default.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
