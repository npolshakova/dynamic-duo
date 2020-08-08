//Load HTTP module
const http = require("http");
const fs = require("fs");
const hostname = '0.0.0.0';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    fs.readFile('./index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write(error);
            res.end();
         } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    })
  //Set the response HTTP header with HTTP status and Content type
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

