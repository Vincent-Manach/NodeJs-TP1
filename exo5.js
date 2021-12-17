const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    switch(req.url) {
		case '/welcome':
			res.end('Welcome');
			break;
		default: res.end('Not found');
			break;
	}
});

server.listen(3005, () => console.log('Le serveur tourne sur http://localhost:3005'));