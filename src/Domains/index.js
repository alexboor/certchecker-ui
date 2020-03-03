import React, { Component } from 'react';
import './Domains.css';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import DomainModel from './model'

export default class Domains extends Component {

    constructor(prop) {
        super(prop);
        this.state = {};
        this.model = new DomainModel();
    }

    componentDidMount() {
        this.model.getAllDomains().then(r => this.setState({domains:r})).catch(err => console.error(err))
    }

    render() {
        return (
            <DataTable value={this.state.domains}>
                <Column field="ID" header="#" style={{width:'50px'}}/>
                <Column field="Name" header="Domain" />
                <Column field="HTTPCodeLast" header="Code" style={{width:'60px'}}/>
                <Column field="HTTPLatencyLast" header="Latency (ms)" style={{width:'130px'}}/>
            </DataTable>
        );
    }
}