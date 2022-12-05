
// Creating a nodejs server application.

// 1. import http library part of core library.
const http = require("http");

// What is HTTP. 
// HyperText Transfer Protocol.

const requestListener = (req, res)=>{
    res.end("Hello world from NodeJS");
}

// 2. Create server.
const server = http.createServer(requestListener);
// configuring port number.
server.listen(4000);

console.log("Server is listening on port 4000");


