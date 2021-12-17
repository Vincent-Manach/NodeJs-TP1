const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});

server.listen(3001, () => console.log('Le serveur tourne sur http://localhost:3001'));