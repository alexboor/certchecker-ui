import React, {Component} from 'react';
import {navigate} from 'hookrouter';
import DomainContext from "../DomainsContext";
import {Button} from "primereact/button";

/**
 * Domain component
 * @props id {numeric} Domain ID will be shown
 */
export default class Domain extends Component {
    static contextType = DomainContext;

    constructor(props) {
        super(props);
        this.state = {
            domain: {}
        }
    }

    componentDidMount() {
        this.context.getDomain(this.props.id)
            .then(r => this.setState({domain:r}))
            .catch(err => console.error(err));
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <Buttons />

                { !!Object.keys(this.state.domain).length ? <DomainContainer domain={this.state.domain}/> : <Loader />}
            </div>
        )
    }
}

const Loader = props => <div style={{'margin':'10px 0 0 0'}}><i className="pi pi-spin pi-spinner"></i></div>

const Buttons = (props) => {
    return (
        <>
            <Button icon="pi pi-angle-left" onClick={e => navigate('/')}/>
            <Button label="Remove" className="p-button-danger" style={{'marginLeft':'5px'}}/>
        </>
    )
};

const DomainContainer = props => {
    console.log(props.domain)
    return (
        <div>
            <h1>{props.domain.Name}</h1>
        </div>
    )
};

// const Domain = (props) => {
//
//     return (
//         <div>Domain {props.id}</div>
//     )
// };
//
// export default Domain;