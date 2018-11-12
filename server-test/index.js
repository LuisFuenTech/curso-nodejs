const http = require('http');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<p>Soy un nuevo servidor</p>');
    res.end();
}

const server = http.createServer(handleServer);
server.listen(3000, () => console.log('Server is working!'));