const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
const User = require('../models/User');

const auth = {
    // Middleware to check if the user is authenticated
    verifyLogin: async (request, response, next) => {
        // get the token from the http only cookies
        const token = request.cookies.token;

        // if the token does not exist, return an error message
        if (!token) {
            return response.status(401).json({ message: 'Access denied' });
        }

        // verify the token
        try {
            const verified = jwt.verify(token, SECRET_KEY);
            request.userId = verified.id;
        } catch (error) {
            return response.status(400).json({ message: 'Invalid token' });
        }

        next();
    },
    // Middleware to authorize the user based on the role
    allowRoles: (roles) => {
        return async (request, response, next) => {
            // Get the id from the request object
            const userId = request.userId;

            // Get the user from the database
            const user = await User.findById(userId);

            // check if the user's role is in the roles array
            if (!roles.includes(user.role)) {
                return response.status(403).json({ message: 'Forbidden' });
            }

            next();
        }
    }
}

module.exports = auth;