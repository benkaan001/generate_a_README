// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  console.log ('hello');

  if (license === 'MIT' ) {
    console.log(renderLicenseBadge('MIT'));
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  };
  // if (license === 'GNU General Public License 2.0') {
  //   return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'
  // };
  






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

`;
}

module.exports = generateMarkdown;
