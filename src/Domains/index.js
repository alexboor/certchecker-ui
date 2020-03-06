import React, { Component } from 'react';
import './Domains.css';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";

import DomainContext from "../DomainsContext";


export default class Domains extends Component {

    static contextType = DomainContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.context.updateDomainList()
    }



    render() {
        const { domains } = this.context;

        return (
            <DataTable value={domains}>
                <Column field="ID" header="#" style={{width:'50px'}}/>
                <Column field="Name" header="Domain" />
                <Column field="HTTPCodeLast" header="Code" style={{width:'60px'}}/>
                <Column field="HTTPLatencyLast" header="Latency (ms)" style={{width:'130px'}}/>
            </DataTable>
        );
    }
}