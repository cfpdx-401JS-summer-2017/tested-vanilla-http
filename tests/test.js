const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('server', () => {
    const request = chai.request(app);

    it('says hello world', done => {
        request.get('/coder')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, 'hello world');
                done();
            });
    });
    describe('404 error', ()=> {
    //tests incomplete
   const request = chai.request(app);
   it('should return status code 404 Not Found',        
   (done) => {
       request.post('/coder/yep')
            .end((err,res) => {
                assert.ok(res.notFound);
                done();
            });
    });
});