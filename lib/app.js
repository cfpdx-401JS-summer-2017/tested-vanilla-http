function app(req, res) {
    let thisUrl = req.url.split('/');
    let path = thisUrl[1];

    if (req.method === 'GET' && path === '/coder') {
        let body = '';

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const obj = body;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(obj));
        });
    }
    else {
        res.end('hello world');
    }
}

module.exports = app;