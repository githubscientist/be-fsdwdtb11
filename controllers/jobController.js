const { request } = require("../app");

const jobController = {
    getJobs: (request, response) => {
        response.json({ message: 'GET' });
    },
    createJob: (request, response) => {
        response.json({ message: 'POST' });
    },
    getJobByID: (request, response) => {
        response.json({ message: 'GET by ID' });
    },
    searchJobs: (request, response) => {
        response.json({ message: 'GET by search' });
    }
}

module.exports = jobController;