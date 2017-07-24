const bodyParser = require('./utils/body-parser');
const parseUrl = require('./utils/url-parser');
const notFound = require('./utils/not-found');
const coder = require('./routes/coder');

const routes = { coder };

module.exprots = function app(req, res) {
    res.setHeader('Content-Type', 'application/json');
    req.url = parseUrl(req.url);

    bodyParser(req)
        .then(body => req.body = body)
        .then(() => {
            const route = routes[req.url.route] || notFound;
            route(req, res);
        })
        .catch(console.log);
};
