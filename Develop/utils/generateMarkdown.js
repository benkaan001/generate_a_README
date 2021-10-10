function renderLicenseBadge(data) {
  const licenseChoice = data.license[0];

  if (licenseChoice === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if (licenseChoice === "General Public License V2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]";
  }
  if (licenseChoice === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  if (licenseChoice === "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  } else {
    return "";
  }
};

const generateMarkdown = (data) => {
  return `# ${data.title}

  ## Table of Contents

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Email](#email)
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

  ##Email
  - Please reach out to me at ${data.email} for further questions. 🤗

  ##GitHub
  - Please visit my GitHub for more information: ${data.GitHub} 🤓

  ##License
  ${renderLicenseBadge(data)}

`;
};

module.exports = generateMarkdown;
