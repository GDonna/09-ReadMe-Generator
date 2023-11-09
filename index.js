const inquire = require("inquirer");
const fs = require("fs");

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

function licenseBadge(license) {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
        case "GPL":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
        case "BSD":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
        case "None":
            return "No license selected.";
    }

    function generateMarkdown(data) {
        return `
        # ${data.title}
        ${licenseBadge(data.license)}  
        ## Description
        ${data.description}
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [License](#license)
        * [Questions](#questions)
        ## Installation
        ${data.installation}
        ## Usage
        ${data.usage}
        ## Contributing
        ${data.contributing}
        ## Tests
        ${data.tests}
        ## License
        ${data.license}
        ## Questions
        If you have any questions, please contact me at ${data.email}.
       
        GitHub: [${data.github}]()// how to link to github profile?
        `;
    }
init();
        }