const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
    message: "Enter a GitHub username:",
    name: "username"
    })
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/profile?per_page=100`;

        axios.get(queryUrl).then(function (res) {
            const repoNames = res.data.map(function (repo) {
                return repo.name;
            });

            const repoNamesStr = repoNames.join("\n");

            fs.writeFile("profile.pdf", repoNamesStr, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`Saved ${repoNames.length} repos`);
            });
        });
    });

const questions = [``

];

function writeToFile(fileName, data) {

}

function init() {

init();
