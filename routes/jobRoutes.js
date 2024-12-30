// import express library
const express = require('express');

// Create a express router
const jobRouter = express.Router();

jobRouter.get('/', (request, response) => {
    response.json({ message: 'GET' });
});

module.exports = jobRouter;