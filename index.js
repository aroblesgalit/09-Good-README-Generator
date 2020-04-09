const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "Enter your GitHub username:",
//             name: "username"
//         }
//     ])
// }

// function getGitHubData(username) {
//     const queryUrl = `https://api.github.com/search/users?q=${username}`;

//     return axios
//         .get(queryUrl)
//         .then(function (response) {
//             const { avatar_url } = response.data.items[0];
//         })
// }