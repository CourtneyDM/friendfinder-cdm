// Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("/app/routing/apiRoutes")(app);
// require("/app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Server running running on http://localhost, listening on PORT ${PORT}...`);
})