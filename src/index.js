import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './Components/context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<AppProvider><App /></AppProvider>);