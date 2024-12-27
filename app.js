// import express
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
// const morgan = require('morgan');

// create an express app
const app = express();

// use the logger middleware
app.use(logger);
// app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.json({ message: 'GET' });
});

app.post('/', (request, response) => {
    response.json({ message: 'POST' });
});

app.patch('/', (request, response) => {
    response.json({ message: 'PATCH' });
});

app.put('/', (request, response) => {
    response.json({ message: 'PUT' });
});

app.delete('/', (request, response) => {
    response.json({ message: 'DELETE' });
});

app.get('/posts', (request, response) => {
    response.json({ message: 'GET POSTS' });
});

app.use(errorRoute);

// export the app
module.exports = app;