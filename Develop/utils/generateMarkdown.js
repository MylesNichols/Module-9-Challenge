// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"; 
  }

  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }

  if (license === "IPL") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  }

  if (license === "None") {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }

  if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }

  if (license === "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";;
  }

  if (license === "IPL") {
    return "(https://opensource.org/licenses/IPL-1.0)"
  }

  if (license === "none") {
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project is licensed under a [${license}]${renderLicenseLink(license)} license. ${renderLicenseBadge(license)}
  `}
  return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = "";
  var licenseLink = "";
  var licenseSection = "";
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.testing}

  ## Questions

  If you have any questions about the project or the repository, you are able to contact me at ${data.github} 
  or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
