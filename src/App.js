import React from 'react';
import './App.css';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';

import Domains from './Domains'

function App() {
  return (
    <div className="app">
      <div className="menu">
        <a>
            <p className="menu-title">
                <i className="pi pi-globe" style={{'position':'relative','top': '3px'}}></i>
                HTTP Guard UI
            </p>
        </a>
      </div>
        <div className="container">
            <Domains/>
        </div>


    </div>
  );
}

export default App;
