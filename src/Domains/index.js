import React, { Component } from 'react';
import './Domains.css';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";


export default class Domains extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.model.getAllDomains().then(r => this.setState({domains:r})).catch(err => console.error(err))
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