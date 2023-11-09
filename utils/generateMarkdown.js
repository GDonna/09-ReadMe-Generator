// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
}};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}  
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

module.exports = generateMarkdown;
