const User = require('../models/User');
const bcrypt = require('bcrypt');

const authController = {
    register: async (request, response) => {
        try {
            // Get user input
            const { name, email, password } = request.body;

            // check if user with the same email exists
            const user = await User.findOne({ email });

            if (user) {
                return response.status(400).json({ message: 'User already exists' });
            }

            const passwordHash = await bcrypt.hash(password, 10);

            // create user object
            const newUser = new User({
                name,
                email,
                password: passwordHash
            });

            // save user
            await newUser.save();

            // send a response
            response.json({ message: 'User registered successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    login: async (request, response) => {
        try {

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    logout: async (request, response) => {
        try {

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    me: async (request, response) => {
        try {

        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = authController;