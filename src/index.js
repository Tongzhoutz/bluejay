import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login/Login';
import SignUp from './Containers/Register/index';
import { startVconsole } from './utils';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SignUp />
);

startVconsole();