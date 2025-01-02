const Job = require('../models/Job');

const jobController = {
    getJobs: async (request, response) => {
        try {
            // Get all jobs from the database
            const jobs = await Job.find();

            // Send a response
            response.json(jobs);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    createJob: async (request, response) => {
        try {
            // Get the data from the request body
            const { title, company, location, salary, description, experience, skills } = request.body;

            // Create a new job object
            const newJob = new Job({
                title,
                company,
                location,
                salary,
                description,
                experience,
                skills
            });

            // Save the job to the database
            await newJob.save();

            // Send a response
            response.json({ message: 'Job created successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getJobByID: async (request, response) => {
        try {
            // Get the job ID from the request parameters
            const { id } = request.params;

            // Find the job by ID
            const job = await Job.findById(id);

            // Send a response
            response.json(job);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    searchJobs: async (request, response) => {
        response.json({ message: 'GET by search' });
    },
    updateJob: async (request, response) => {
        try {
            // Get the job ID from the request parameters
            const { id } = request.params;

            // Get the data from the request body
            const { title, company, location, salary, description, experience, skills } = request.body;

            // create a new object
            const updatedJob = {
                title,
                company,
                location,
                salary,
                description,
                experience,
                skills
            };

            // Update the job in the database
            await Job.findByIdAndUpdate(id, updatedJob);

            // Send a response
            response.json({ message: 'Job updated successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    deleteJob: async (request, response) => {
        try {
            // Get the job ID from the request parameters
            const { id } = request.params;

            // Delete the job from the database
            await Job.findByIdAndDelete(id);

            // Send a response
            response.json({ message: 'Job deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = jobController;