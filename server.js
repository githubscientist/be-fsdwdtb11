// import express
const express = require('express');

// create an express app
const app = express();

app.get('/', (request, response) => {
    response.json({ message: 'GET /' });
});

app.post('/', (request, response) => {
    response.json({ message: 'POST /' });
});

// listen for requests and start the server
app.listen(3000, () => {
    console.log(`Server is running @ http://127.0.0.1:3000`);
});