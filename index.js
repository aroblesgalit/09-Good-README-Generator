const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
        message: "Enter your GitHub username:",
        name: "username"
    })
    .then(function({ username }) {

        const queryUrl = `https://api.github.com/search/users?q=${username}`;

        axios
            .get(queryUrl)
            .then(function(response) {
                // console.log(response.data.items[0]);
                const data = response.data.items[0];
                const { avatar_url } = data;
                console.log(avatar_url);
                
                fs.writeFile("genREADME.md", avatar_url, function(err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log(`Saved ${avatar_url} to genREADME`);
                })
            
            });

    });