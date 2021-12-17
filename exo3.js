const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({ 
        firstname: 'Vincent',
        lastname: 'Manachem',
        birthdate: '24/08/1997',
        color: 'Lightblue'
    })
    res.end(json);
});

server.listen(3003, () => console.log('Le serveur tourne sur http://localhost:3003'));