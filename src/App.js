import React from 'react';
import './App.css';

import { DomainProvider } from "./DomainsContext";

import Domains from './Domains';
import Domain from './Domain';
import NotFound from "./NotFound";

import {useRoutes} from 'hookrouter';

const routes = {
    '/': () => <Domains />,
    '/domain/:id': ({id}) => <Domain id={id} />
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
                    { router || <NotFound/> }
                </div>

            </div>
        </DomainProvider>
    )
};

export default App;
