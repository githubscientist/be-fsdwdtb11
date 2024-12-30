const app = require("./app");
const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require("./utils/config");

// connect to the database
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to the database...');

        // listen for requests and start the server
        app.listen(PORT, () => {
            console.log(`Server is running @ http://127.0.0.1:3000`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to the database...', error);
    })