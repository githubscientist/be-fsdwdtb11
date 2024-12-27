// import express
const express = require('express');

// create an express app
const app = express();

// custom middleware for logging requests
const logger = (request, response, next) => {
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);
    console.log(`Request Headers: ${JSON.stringify(request.headers)}`);
    console.log(`Request Query: ${JSON.stringify(request.query)}`);
    console.log(`Request Params: ${JSON.stringify(request.params)}`);
    console.log(`Request Body: ${JSON.stringify(request.body)}`);
    console.log(`Request Cookies: ${JSON.stringify(request.cookies)}`);
    console.log(`-----------------------------`);

    next();
}

// use the logger middleware
app.use(logger);

app.get('/', (request, response) => {
    response.json({ message: 'GET' });
});


// middleware for handling 404 errors
const notFound = (request, response, next) => {
    response.json({ message: 'Route not found' });

    next();
}

app.use(notFound);

// listen for requests and start the server
app.listen(3000, () => {
    console.log(`Server is running @ http://127.0.0.1:3000`);
});