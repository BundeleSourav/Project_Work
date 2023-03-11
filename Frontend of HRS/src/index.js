import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter , Router ,Route } from 'react-router-dom';
import { RoomProvider } from './Context';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <AuthProvider>
            <Route path="/*" exact component={App}/>
          </AuthProvider>
        </BrowserRouter>
      </RoomProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
