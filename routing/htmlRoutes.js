// Dependencies
const path = require("path");

// Import object to store new friends
let friends = require("../app/data/friends");

module.exports = function (app) {
    // Return the home page when requested

    app.get("/survey", (req, res) => {
        res.sendfile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", (req, res) => {
        res.sendfile(path.join(__dirname, "../public/home.html"));
    });
};
