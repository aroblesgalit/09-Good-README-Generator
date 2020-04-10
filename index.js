const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },
        {
            type: "input",
            message: "Give your project a title:",
            name: "title"
        },
        {
            type: "input",
            message: "Give your project a short description:",
            name: "shortDescription"
        },
        {
            type: "input",
            message: "Give your project a long description:",
            name: "longDescription"
        },
        {
            type: "input",
            message: "Provide a step-by-step description of how to install your project: (separate using a comma)",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use:",
            name: "usage"
        },
        {
            type: "input",
            message: "List your collaborators, third-party assets, etc. if any: (separate using a comma)",
            name: "credits"
        },
        {
            type: "list",
            message: "Choose a license for your project:",
            name: "license",
            choices: [
                "MIT License",
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "GNU GPLv2",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "ISC License",
                "Boost Software License 1.0",
                "The Unlicense"
            ]
        },
        {
            type: "input",
            message: "Write tests for your application: (separate using a comma)",
            name: "tests"
        }
    ])
}

promptUser()
    .then(function (response) {
        console.log(response);
    });


// function getGitHubData(username) {
//     const queryUrl = `https://api.github.com/search/users?q=${username}`;

//     return axios
//         .get(queryUrl)
//         .then(function (response) {
//             const { avatar_url } = response.data.items[0];
//         })
// }

function generateREADME() {
    return `
# Project Title   ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
> Short Description  


## Description

This was a homework assignment where we built a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. We were tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Specifically, we used [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities.


![Screenshot](screenshotAddress)


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Author](#author)


## Installation

1. Step 1
2. Step 2
3. Step 3
4. Step 4


## Usage

Provide instructions and examples for use. Include screenshots as needed.

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.


## Author

Name: Alvin Galit  
GitHub: github.com/aroblesgalit  
![Image of me](imageurl)

---
© 2020 Alvin Galit. All Rights Reserved.
    `
}