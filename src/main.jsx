import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import the App component

const container = document.getElementById('root');
const root = createRoot(container);

// Render the main App component here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);