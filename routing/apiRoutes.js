const express = require("express");

let friends = require("../app/data/friends");

module.exports = function (app) {
    // Route to return JSON objects
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    // Route to handle form submission from survey page
    app.post("/api/friends", (req, res) => {
        const friend = req.body;
        // Store the difference in answers between new friend and existing friends
        let totalDifference = [];
        // Variables for the new friend score and existing friends scores
        let currentScore = [], friendScore = [];
        // Get the index of the friend with the lowest difference
        

        // Get the new friend's score
        for (let i = 0; i < friend.answers.length; i++) {
            currentScore.push(parseInt(friend.answers[i]));
        }

        // Find the scores for the existing friends
        for (let i = 0; i < friends.length; i++) {
            let difference = 0;
            for (let j = 0; j < friends[i].answers.length; j++) {

                friendScore[j] = parseInt(friends[i].answers[j]);
                difference += Math.abs(friendScore[j] - currentScore[j]);
            }
            totalDifference.push(difference);
        }
        // Set the index to be used to identify match
        let matchIndex = totalDifference.indexOf(Math.min(...totalDifference));
        // Identify match
        let friendMatch = friends[matchIndex];

        // Add the new friend to the existing array of friends
        friend.name = req.body.name;
        friend.photo = req.body.photo;
        friend.answers = req.body.answers;
        friends.push(friend);



        // TODO: Change this to send the match instead of the newly created friend
        res.json(friendMatch);
    });
};
