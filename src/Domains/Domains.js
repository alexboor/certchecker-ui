import React, { Component } from 'react';
import './Domains.css';
import {DataTable} from 'primereact/datatable';
import {Column} from "primereact/column";
import {Button} from "primereact/button";

import DomainContext from "../DomainsContext";
import AddDomainDialog from "./AddDialog";

/**
 * Domains class
 * UI component to operate with domains
 */
export default class Domains extends Component {
    static contextType = DomainContext;

    constructor(props) {
        super(props);
        this.state = {
            showAddDialog: false
        };
    }

    componentDidMount() {
        this.context.updateDomainList()
    }

    /**
     * actionsCol
     * Column element with delete button
     * @param domain {object} raw object from domains
     * @returns {*}
     */
    actionsCol(domain) {
        return <React.Fragment>
            <Button type="button" icon="pi pi-times" className="p-button-danger" onClick={() => this.onRemove(domain)}></Button>
        </React.Fragment>;
    }

    /**
     * onRemove
     * EVENT on press the Delete domain button
     * @param domain {object} raw object was pressed
     */
    onRemove = domain => {
        this.context.removeDomain(domain.ID).then(r => {
            if (r.ok === true) {
                this.context.updateDomainList();
            } else {
                throw new Error(r.message)
            }
        }).catch(err => console.error(err.message))
    };

    /**
     * render
     * @returns {*}
     */
    render() {
        const { domains } = this.context;

        return (<>
                <div className="container-bar">
                    <Button label="Add new domain" onClick={() => this.setState({showAddDialog:true})}/>
                </div>
                <DataTable value={domains}>
                    <Column field="ID" header="#" style={{width:'50px'}}/>
                    <Column field="Name" header="Domain" />
                    <Column field="HTTPCodeLast" header="Code" style={{width:'60px'}}/>
                    <Column field="HTTPLatencyLast" header="Latency (ms)" style={{width:'130px'}}/>
                    <Column body={this.actionsCol.bind(this)} style={{textAlign:'right', width: '60px'}}/>
                </DataTable>
                <AddDomainDialog
                    visible={this.state.showAddDialog}
                    onHide={() => this.setState({showAddDialog:false})}
                />
            </>
        );
    }
}