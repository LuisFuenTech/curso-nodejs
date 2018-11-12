const os = require('os');
const fs = require('fs');

const http = require('http');
const handleServer = function (request, response){
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<h1>Esto es solo un texto</h1>');
    response.end();
}
const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server in port 3000');
})

/*
createServer recibe una función como valor. Esta función recibe como argumentos
una solicitud (cliente) y una respuesta (servidor). La función debe ser escuchada
desde un puerto, en este caso el 3000.

response.write() permite escribir algo como respuesta. Luego debe ser terminada.
*/


/*
fs.writeFile('./texto.txt', 'Linea número uno', function (err){
    if(err)
        console.log(err);
    else
        console.log('Archivo creado');
});

fs.readFile('./texto.txt', function (err, data){
    if(err)
        console.log(err);
    else
        console.log(data.toString());
});

console.log('Última linea');

/*
console.log(os.platform());
console.log(os.release());
console.log('Free memory', os.freemem, 'bytes');
console.log('Total memory', os.totalmem, 'bytes');
*/