import React, { Component } from 'react';
import './Domains.css';
import {Dialog} from "primereact/dialog";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';



export default class AddDomainDialog extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            name: '',
            http_time: 5,
            domain_time: 86400,
            tls_time: 86400
        };
    }

    // componentDidMount() {
    //     this.model.getAllDomains().then(r => this.setState({domains:r})).catch(err => console.error(err))
    // }

    render() {
        const footer = (
            <>
                <Button label="Add" />
                <Button label="Cancel" className="p-button-secondary" onClick={this.props.onHide} />
            </>
        );

        return (
            <Dialog header="Add new domain"
                    style={{width:'500px'}}
                    visible={this.props.visible}
                    footer={footer}
                    modal={true}
                    onHide={this.props.onHide} >

                <div className="p-grid">
                    <div className="p-col fieldset">
                        <h5>Domain name:</h5>
                        <InputText id="in"
                                   value={this.state.name}
                                   onChange={(e) => this.setState({value: e.target.name})}
                                   style={{width: '100%'}}
                                   placeholder="Domain name"/>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col fieldset">
                        <h5>FQDN check interval:</h5>
                        <InputText id="in"
                                   value={this.state.domain_time}
                                   onChange={(e) => this.setState({value: e.target.domain_time})}
                                   style={{width: '100px'}}
                                   placeholder="FQDN interval"/>
                    </div>

                    <div className="p-col fieldset">
                        <h5>HTTP check interval:</h5>
                        <InputText id="in"
                                   value={this.state.http_time}
                                   onChange={(e) => this.setState({value: e.target.http_time})}
                                   style={{width: '100px'}}
                                   placeholder="HTTP check interval"/>
                    </div>


                    <div className="p-col fieldset">
                        <h5>TLS check interval:</h5>
                        <InputText id="in"
                                   value={this.state.tls_time}
                                   onChange={(e) => this.setState({value: e.target.tls_time})}
                                   style={{width: '100px'}}
                                   placeholder="TLS check interval"/>
                    </div>
                </div>

            </Dialog>
        );
    }
}