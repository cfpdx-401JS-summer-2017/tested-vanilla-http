module.exports = function hello(req,res) {

    if (req.method === 'GET') {
        res = `<p>Hello World</p>`;
    }
};