import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="1003229561634-7rns0vdr15r0ciaml7jsr4k2itgq1r00.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
    <React.StrictMode>
    </React.StrictMode>
  </GoogleOAuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
