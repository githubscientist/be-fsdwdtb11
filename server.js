const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database...');

        // listen for requests and start the server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running @ http://127.0.0.1:3000`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to the database...', error);
    })