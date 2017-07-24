const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path');

chai.use(chaiHttp);

const assert = chai.assert;

const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    it('returns an object with name and date when /coder GET request', () => {
        return request.get('/coder')
            .then((req, res) => {
                assert.equal(res.body.name, 'jchurchman');
                assert.equal(res.body.since, 'Apr 20, 2017');
        });
    });

    it('responds to any other GET request with <p>Hello  World </p>', () => {

    });
});