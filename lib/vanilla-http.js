const url = require('url');


function app(req, res) {
    const parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });
    const parsedPath = parsedUrl.pathname.split('/');
    const path = parsedPath[1];

    if (req.method === 'GET' && path === 'coder') {
        res.setHeader('Content-Type', 'application/json');
        const obj = {
            'name': 'sevfitz',
            'since': '2-2-17'
        };
        res.end(JSON.stringify(obj));

    }
    else if (req.method === 'GET') {
        res.end('Hellow World');

    } else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }
}



module.exports = app;