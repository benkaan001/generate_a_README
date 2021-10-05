const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

// console.log(inquirer);

const promptUser = (response) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project. (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions. (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide instructions or type N/A");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information. (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide usage information or typle N/A");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Please explain how others can contribute to your application. (Required)",
      validate: (contributionInput) => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please provide guidance for others to contribute.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message:
        "Pleae explain how others can run tests on your application. (Required)",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log(
            "Please provide guidance about testing of your applicaiton!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message:
        "Please enter an email address for others to contact you with questions. (Required)",
      validate: (contactInput) => {
        if (contactInput) {
          return true;
        } else {
          console.log("Please enter a valid e-mail address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "GitHub",
      message: "Please enter your GitHub username. (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message:
        "Please select the license that you would like to use for your application. ",
      choices: [
        "MIT",
        "General Public License V2",
        "Apache License 2.0",
        "Unlicense",
      ],
    },
  ]);
};

promptUser().then((response) => {
  console.log(response);
  const distributionReadyReadme = generateMarkdown(response);
  fs.writeFile("./dist/README.md", distributionReadyReadme, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Your README has been successfully created!");
    }
  });
});
