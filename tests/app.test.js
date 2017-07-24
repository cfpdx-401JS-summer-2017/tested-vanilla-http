const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {assert} = chai;

describe('coder server', () => {
    it('responds with Hello World if no path is given', () => {
        return request.get('/')
            .then( res => {
                const hello = res.body;
                assert.equal(hello, `<p>Hello World</p>`);
            });
    });
});