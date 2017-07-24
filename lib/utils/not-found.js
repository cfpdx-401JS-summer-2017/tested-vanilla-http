
module.exports = function notFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    const message = res.statusMessage = `${req.method} ${req.url.path} not found`;
    res.end(message);
};