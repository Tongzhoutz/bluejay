import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login/Login';
import { startVconsole } from './utils';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Login/>
);

startVconsole();