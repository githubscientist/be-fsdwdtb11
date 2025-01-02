const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');

const auth = {
    // Middleware to check if the user is authenticated
    verifyLogin: async (request, response, next) => {
        // get the token from the request header
        const token = request.header('Authorization').substring(7);

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
    }
}

module.exports = auth;