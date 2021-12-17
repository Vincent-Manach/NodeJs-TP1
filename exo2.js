const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello world', status: res.statusCode }));
});

server.listen(3002, () => console.log('Le serveur tourne sur http://localhost:3002'));