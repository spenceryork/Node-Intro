const { readFile } = require('fs');
const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
    readFile('./index.html', (err, file) => {
        if (err) {
            res.statusCode = 404;
            return res.end('Not found.');
        }
        res.end(file);
    });
});

server.listen(8080);
