// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

// Initialize the PORT and Express server
const PORT = process.env.PORT || 8080;
const app = express();

// Mount the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Start listening for requests on assigned PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});
