const axios = require('axios');
const swapi = require('./async');
axios.defaults.adapter = require('axios/lib/adapters/http');
//Done tells jest to wait until done is called before saying the test is finished. 
it ('calls swapi to get people', (done) => {
    //expect.assertions are the expect ..equal. Expect . asertions, we expect the # of assertions, a good way to test if async code is running. 
    expect.assertions(1);
    swapi.getPeople(axios).then(data => {
        expect(data.count).toEqual(82);
        done();
    })
})

//Another way to handle async like above. Jest is smart enoguh to know that with a return, it knows to wait until the return is done. 
// It's a good strategy to always test for `expect.assertions` to make sure your tests are running. 
// Jest Cheat sheet. 
it ('calls swapi to get peoplePromise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(axios).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
})