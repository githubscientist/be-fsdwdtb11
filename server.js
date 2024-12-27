// import http module to setup http server
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    // set the response header
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (request.url === '/posts') {
        // endpoints for posts
        if (request.method === 'GET') {
            response.write(JSON.stringify({ message: 'GET POSTS' }));
        } else if (request.method === 'POST') {
            response.write(JSON.stringify({ message: 'POST POSTS' }))
        }
    } else if (request.url === '/comments') {
        // endpoints for comments
        response.write(JSON.stringify({ message: 'Comments' }));
    }
    response.end();
});

// listen to the server on port 3000
server.listen(3000, "127.0.0.1", () => {
    console.log('Server is running on http://127.0.0.1:3000');
});