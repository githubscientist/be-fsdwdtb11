const express = require('express');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// create a router
const authRouter = express.Router();

// define the routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', auth.verifyLogin, authController.me);
// export the router
module.exports = authRouter;