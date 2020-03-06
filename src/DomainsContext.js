import React, { Component } from 'react';
import DomainModel from './Domains/model';

const DomainContext = React.createContext();

class DomainProvider extends Component {

    constructor(props) {
        super(props);
        this.domainModel = new DomainModel();
    }

    state = {
        domains: [],
    };


    updateDomainList = () => this.domainModel.getAllDomains()
        .then(r => this.setState({domains:this.parseDomains(r)}))
        .catch(err => console.error(err));

    parseDomains = domains => {
        return domains.map(i => {
            return {
                ID: i.ID,
                Name: i.Name,
                HTTPCodeLast: (i.HTTPCodeLast.Valid) ? i.HTTPCodeLast.Int32 : '-',
                HTTPLatencyLast: (i.HTTPLatencyLast.Valid) ? i.HTTPLatencyLast.Int32 : '-'
            }
        });
    };

    addDomain = data => this.domainModel.addDomain(data);

    render() {
        const { children } = this.props;
        const { domains } = this.state;

        return (
            <DomainContext.Provider
                value={{
                    domains,
                    updateDomainList: this.updateDomainList,
                    addDomain: this.addDomain
                }}
            >
                {children}
            </DomainContext.Provider>
        )
    }
}


export default DomainContext;

export { DomainProvider };