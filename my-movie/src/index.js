import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import Deploy from './components/Deploy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        {/* <App /> */}
        <Deploy />
    </BrowserRouter>


);
