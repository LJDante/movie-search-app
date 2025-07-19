import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Remove this import since we deleted the file
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove this call since we don't have reportWebVitals
// reportWebVitals();