const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown.js");

const generateQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines for your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions for your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }
];

function writeToFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README.md file successfully created!");
        }
    })
};

function init() {
    inquire
        .prompt(generateQuestions)
        .then((response) => {
            console.log(response);
            writeToFile("README.md", generateMarkdown(response));
        })
        .catch((err) => {
            console.log(err);
        })
};

init();
        