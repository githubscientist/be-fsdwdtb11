// import express
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');

// create an express app
const app = express();

// use the logger middleware
app.use(logger);

app.get('/', (request, response) => {
    response.json({ message: 'GET' });
});

app.use(errorRoute);

// export the app
module.exports = app;