const HOST = 'http://localhost:8888'
const BASE_URL = '/v1/domains';

export default class DomainModel {

    getAllDomains() {
        return fetch(`${HOST}${BASE_URL}`, {
            method: 'GET'
        }).then(r => {
            if (r.ok) return r.json()
        })
    }
}