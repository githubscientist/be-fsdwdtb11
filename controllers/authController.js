const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');

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
            // get the email and password from request body
            const { email, password } = request.body;

            // check if user exists
            const user = await User.findOne({ email });

            // if the user does not exist, return an error message
            if (!user) {
                return response.status(400).json({ message: 'User does not exist' });
            }

            // compare the password
            const isMatch = await bcrypt.compare(password, user.password);

            // if the password does not match, return an error message
            if (!isMatch) {
                return response.status(400).json({ message: 'Invalid credentials' });
            }

            // generate a token
            const token = await jwt.sign(
                { id: user._id },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            // send a response
            response.json({ token, message: 'User logged in successfully' });

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
            // get the user id from the request object
            const userId = request.userId;

            // find the user
            const user = await User.findById(userId).select('-password -__v -created_at -updated_at');

            // send the user object
            response.json(user);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = authController;