import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './routers'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';


const RouterDefault = () => (
  <Router>
    <Routers path="/*" />
  </Router>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterDefault />,
)
