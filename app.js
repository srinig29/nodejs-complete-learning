const http = require('http');

//Local file exported
const requestHandler = require('./route');

// To create server
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html> <body>Good Night</body> </html>')
        res.end();
    }
    if(req.url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html> <body><ui><li>User1</li><li>User2</li><li>User3</li></ui></body> </html>')
        res.end();
    }
});

// This is to start and listen the server on PORT 4000
server.listen(3000);