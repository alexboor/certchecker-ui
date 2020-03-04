import React, { Component } from 'react';
import './Domains.css';
import {Dialog} from "primereact/dialog";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Message} from 'primereact/message'
import * as classnames from "classnames";


export default class AddDomainDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: '',
            error: '',
            http_time: 5,
            domain_time: 86400,
            tls_time: 86400
        };
    }

    add() {
        this.setState({error:''});

        if (/(?=^.{1,254}$)(^(?:(?!\d+\.|-)[a-zA-Z0-9_\-]{1,63}(?<!-)\.?)+(?:[a-zA-Z]{2,})$)/.test(this.state.name) === false) {
            this.setState({ nameError: 'Value not valid' });
        } else {
            this.setState({ nameError: '' });

            this.props.onAdd({
                name: this.state.name,
                http_check_time: this.state.http_time,
                tls_check_time: this.state.tls_time,
                domain_check_time: this.state.domain_time
            }).then(r => {
                if (r.ok) {
                    console.log("OK", r)
                }
                throw new Error(r.message)
            }).catch(r => {
                this.setState({ error:r.message })
            })
        }
    }


    render() {
        const footer = (
            <>
                <Button label="Add" onClick={this.add.bind(this)} />
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
                        <InputText
                                   value={this.state.name}
                                   onChange={(e) => this.setState({name: e.target.value})}
                                   style={{width: '100%'}}
                                   className={classnames({"p-error":!!this.state.nameError})}
                                   placeholder="Domain name"/>
                        { this.state.nameError ? <div className="err">{this.state.nameError}</div> : null }
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col fieldset">
                        <h5>HTTP check interval:</h5>
                        <InputText
                                   value={this.state.http_time}
                                   onChange={(e) => this.setState({value: e.target.http_time})}
                                   style={{width: '100px'}}
                                   placeholder="HTTP check interval"/>
                    </div>

                    <div className="p-col fieldset">
                        <h5>FQDN check interval:</h5>
                        <InputText
                                   value={this.state.domain_time}
                                   onChange={(e) => this.setState({value: e.target.domain_time})}
                                   style={{width: '100px'}}
                                   placeholder="FQDN interval"/>
                    </div>

                    <div className="p-col fieldset">
                        <h5>TLS check interval:</h5>
                        <InputText
                                   value={this.state.tls_time}
                                   onChange={(e) => this.setState({value: e.target.tls_time})}
                                   style={{width: '100px'}}
                                   placeholder="TLS check interval"/>
                    </div>
                </div>

                { this.state.error ? <div className="errormsg">{this.state.error}</div> : null }

            </Dialog>
        );
    }
}