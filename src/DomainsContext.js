import React, { Component } from 'react';
import DomainModel from './Domains/model';

const DomainContext = React.createContext();

/**
 * DomainProvider class
 * Domain entity React Context provider
 */
class DomainProvider extends Component {

    constructor(props) {
        super(props);
        this.domainModel = new DomainModel();
    }

    state = {
        domains: [],
    };

    getDomain = id => this.domainModel.getByID(id)
        .then(r => this.parseDomain(r))

    /**
     * updateDomainList
     * Get domain list from back-end
     * @returns {Promise<void>}
     */
    updateDomainList = () => this.domainModel.getAllDomains()
        .then(r => this.setState({domains:this.parseDomains(r)}))
        .catch(err => console.error(err));


    parseDomain = (d) => {
        return {
            ...d,
            HTTPUpdatedLast: (d.HTTPUpdatedLast.Valid) ? d.HTTPUpdatedLast.Time : null,
            HTTPCodeLast: (d.HTTPCodeLast.Valid) ? d.HTTPCodeLast.Int32 : '-',
            HTTPLatencyLast: (d.HTTPLatencyLast.Valid) ? d.HTTPLatencyLast.Int32 : '-'
        }
    };

    /**
     * parseDomains
     * Parse response from back-end and return valid object for Datatable
     *
     * @param domains {object} Raw response from back-end
     * @returns {*}
     */
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



    /**
     * addDomain
     * Add new Domain entity to back-end
     * @param data
     * @returns {Promise<unknown>}
     */
    addDomain = data => this.domainModel.addDomain(data);

    /**
     * removeDomain
     * Remove Domain entity from back-end
     * @param id
     * @returns {Promise<unknown>}
     */
    removeDomain = id => this.domainModel.removeDomain(id);

    /**
     * render
     * @returns {*}
     */
    render() {
        const { children } = this.props;
        const { domains } = this.state;

        return (
            <DomainContext.Provider
                value={{
                    domains,
                    updateDomainList: this.updateDomainList,
                    getDomain: this.getDomain,
                    addDomain: this.addDomain,
                    removeDomain: this.removeDomain,
                }}
            >
                {children}
            </DomainContext.Provider>
        )
    }
}


export default DomainContext;

export { DomainProvider };