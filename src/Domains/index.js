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
        this.props.model.getAllDomains().then(r => this.setState({domains:this.parseDomains(r)})).catch(err => console.error(err))
    }

    parseDomains(domains) {
        return domains.map(i => {
            return {
                ID: i.ID,
                Name: i.Name,
                HTTPCodeLast: (i.HTTPCodeLast.Valid) ? i.HTTPCodeLast.Int32 : '-',
                HTTPLatencyLast: (i.HTTPLatencyLast.Valid) ? i.HTTPLatencyLast.Int32 : '-'
            }
        });
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