const HOST = 'http://localhost:8888'
const BASE_URL = '/v1/domains';

export default class DomainModel {

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

    }
}