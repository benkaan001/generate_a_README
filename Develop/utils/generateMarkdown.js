// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {

  if(!license.licenses){
  license.licenses =[];
  }

  if (license === 'MIT' ) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  };
  if (license === 'GNU General Public License 2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'
  };
  if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  };
  if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  };






}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ## Table of Contents

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[E-mail](#e-mail)
  *[GitHub](#GitHub)
  *[License](#license)

  ##Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##E-mail
  ${data.E-mail}

  ##GitHub
  ${data.GitHub}

  ##License
  ${data.license}


`
};

module.exports = generateMarkdown;
