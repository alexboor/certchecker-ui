import React from 'react';
import './App.css';

import { DomainProvider } from "./DomainsContext";

import Domains from './Domains'

import {useRoutes} from 'hookrouter';

const routes = {
    '/': () => <Domains />,
    '/dashboard': () => <h1>Dashboard</h1>
};

/**
 * App class
 * Application bootstrap class
 * Contains router and context providers
 */
const App = () => {
    const router = useRoutes(routes);

    return (
        <DomainProvider>
            <div className="app">
                <div className="menu">
                    <a href="/">
                        <p className="menu-title">
                            <i className="pi pi-globe" style={{'position':'relative','top': '3px'}}></i>
                            HTTP Guard UI
                        </p>
                    </a>
                </div>

                <div className="container">
                    {router}
                </div>

            </div>
        </DomainProvider>
    )
};

export default App;
