// import express
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const jobRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan');

// create an express app
const app = express();

// use the express json middleware
app.use(express.json());

// use the cookie parser middleware
app.use(cookieParser());

// use the logger middleware
app.use(logger);
// app.use(morgan('dev'));

app.use('/jobs', jobRouter);
app.use('/auth', authRouter);

app.use(errorRoute);

// export the app
module.exports = app;