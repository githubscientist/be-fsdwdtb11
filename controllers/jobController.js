const jobController = {
    getJobs: (request, response) => {
        response.json({ message: 'GET' });
    },
    createJob: (request, response) => {
        response.json({ message: 'POST' });
    },
}

module.exports = jobController;