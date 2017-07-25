const url = require('url');

function app(req, res) {
    
    const parsedUrl = url.parse(req.url, { parseQueryString: true });

    const pathArray = parsedUrl.pathname.split('/');
    let path = pathArray[1];

    if (req.method === 'GET' && path === 'coder') {
        res.setHeader();
        res.end({ 'name': 'jchurchman',
            'since': 'Apr 20, 2017'});
    }
}

module.exports = app;