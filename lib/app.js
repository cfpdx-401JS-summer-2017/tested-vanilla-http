const url = require('url');
const path = require('path');

function app(req, res) {

    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    const dir = parsedUrl.pathname.split('/')[1] || null;

    if (req.method === 'GET') {
        if (dir === 'coder') {
            res.end('{"name": "anwarmontasir", "since": "2017" }');
        } else {
            res.end('<p>Hello world</p>');
        }
    } else {
        let statement = `cannot ${req.method} ${dir}`;
        res.end(statement);
    }
}
module.exports = app;