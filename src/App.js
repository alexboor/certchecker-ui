import React, {Component} from 'react';
import './App.css';
import {Button} from 'primereact/button';
import DomainModel from './Domains/model'


import Domains from './Domains'
import AddDomainDialog from "./Domains/AddDialog";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.domainModel = new DomainModel();

        this.state = {
            addDomainVisible: false
        }
    }

    showAddDialog(e) {
        this.setState({ addDomainVisible:true });
    }

    render() {
        return (
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
                    <div className="container-bar">
                        <Button label="Add new domain" onClick={this.showAddDialog.bind(this)}/>
                    </div>
                    <Domains model={this.domainModel}/>
                </div>


                <AddDomainDialog
                    visible={this.state.addDomainVisible}
                    onAdd={this.domainModel.addDomain}
                    onHide={() => this.setState({addDomainVisible:false})}
                />
            </div>
        );
    }
}


