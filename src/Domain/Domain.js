import React, {Component} from 'react';
import DomainContext from "../DomainsContext";

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

        return (<div>Domain {this.props.id}</div>)
    }
}

// const Domain = (props) => {
//
//     return (
//         <div>Domain {props.id}</div>
//     )
// };
//
// export default Domain;