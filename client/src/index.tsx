// client/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This line imports your TailwindCSS styles!
import App from './App';

// Get the root HTML element from public/index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render your main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// No reportWebVitals() call here anymore