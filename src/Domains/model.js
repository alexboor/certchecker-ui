const HOST = 'http://localhost:8888';
const BASE_URL = '/v1/domains';

/**
 * DomainModel class
 * Domain model contain methods to interact with back-end api
 */
export default class DomainModel {

    /**
     * getAllDomains
     * Return domains list
     * @returns {Promise<Response>}
     */
    getAllDomains() {
        return fetch(`${HOST}${BASE_URL}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(r => {
            if (r.ok) return r.json()
        })
    }

    /**
     * addDomain
     * Add new domain to back-end
     * @param data {object} Domains data attributes
     * @returns {Promise<unknown>}
     */
    addDomain(data) {
        return  new Promise((resolve,reject) => {
            fetch(`${HOST}${BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(r => r.json()).then(r => resolve(r)).catch(err => reject(err))
        })
    };

    /**
     * removeDomain
     * Remove domain in back-end
     * @param id {numeric} ID of domain will be deleted
     * @returns {Promise<unknown>}
     */
    removeDomain(id) {
        return new Promise((resolve, reject) => {
            fetch(`${HOST}${BASE_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(r => resolve(r)).catch(err => reject(err))
        })
    }
}