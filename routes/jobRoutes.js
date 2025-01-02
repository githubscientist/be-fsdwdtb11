// import express library
const express = require('express');
const jobController = require('../controllers/jobController');
const auth = require('../middlewares/auth');

// Create a express router
const jobRouter = express.Router();

// public routes
jobRouter.get('/', auth.verifyLogin, auth.allowRoles(['admin']), jobController.getJobs);
jobRouter.get('/:id', jobController.getJobByID);
jobRouter.get('/search', jobController.searchJobs);

// protected routes
jobRouter.post('/', auth.verifyLogin, auth.allowRoles(['admin']), jobController.createJob);
jobRouter.put('/:id', auth.verifyLogin, auth.allowRoles(['admin']), jobController.updateJob);
jobRouter.delete('/:id', auth.verifyLogin, auth.allowRoles(['admin']), jobController.deleteJob);

module.exports = jobRouter;