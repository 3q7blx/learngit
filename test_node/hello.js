const http = require('http') ;
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello');
}).listen(8000);
console.log('ddddddd')