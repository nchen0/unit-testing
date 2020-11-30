const axios = require('axios');

const getPeoplePromise = axios => {
    return axios.get('https://swapi.dev/api/people').then(response => {
        return {
            count: response.data.count,
            results: response.data.results
        }
    })
}


const getPeople = async (axios) => {
    const getRequest = await axios.get('https://swapi.dev/api/people');
    const data = getRequest.data;
    return {
        count: data.count,
        results: data.results
    }

}


getPeople(axios);

module.exports = {
    getPeople,
    getPeoplePromise
}