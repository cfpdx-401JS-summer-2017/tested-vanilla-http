const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');

describe('app', () => {
    const request = chai.request(app);

    it('gets a coder', done => {
        request.get('/coder')
            .end((err, res) => {
                assert.equal(res.text, '{"name": "anwarmontasir", "since": "2017" }');
                done();
            });
    });
    it('gets a non-coder', done => {
        request.get('/misc')
            .end((err, res) => {
                assert.equal(res.text, '<p>Hello world</p>');
                done();
            });
    });
    it('receives a 404', done => {
        request.put('/coder')
            .end((err, res) => {
                assert.equal(res.text, 'cannot PUT coder');
                done();
            });
    });
});