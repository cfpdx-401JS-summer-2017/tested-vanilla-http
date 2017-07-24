const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;


const app = require('../lib/vanilla-http');

describe('/coder', () => {
    const request = chai.request(app);
    it('responds with json of the object', done => {
        request.get('/coder')
            .end((err, res) => {
                if (err) done(err);
                assert.equal(res.text, {
                    'name': 'sevfitz',
                    'since': '2-2-17'
                });
                done();
            });
    });
});