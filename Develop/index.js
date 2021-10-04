// TODO: Include packages needed for this application

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const inquirer = require('inquirer');

// console.log(inquirer);



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else{
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Please provide installation instructions. (Required)',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log('Please provide instructions or type N/A');
                return false;
            }
        }
        
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Please provide usage information. (Required)',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log('Please provide usage information or typle N/A');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please explain how others can contribute to your application. (Required)',
        validate: contributionInput => {
            if (contributionInput){
                return true;
            } else {
                console.log('Please provide guidance for others to contribute.');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'test',
        message: 'Pleae explain how others can run tests on your application. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide guidance about testing of your applicaiton!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter an email address for others to contact you with questions. (Required)',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please enter a valid e-mail address!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'username',
        message: 'Please enter your GitHub username. (Required)',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log('Enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license that you would like to use for your application. ',
        choices: ['MIT', 'GNU General Public License 2.0', 'Apache License 2.0', 'Unlicense']
    }
    // {
    //     type: 'input',
    //     name: 'link',
    //     message: 'Please provide the GitHub link to the repository. (Required)',
    //     validate: linkInput => {
    //         if(linkInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter a GitHub link!');
    //             return false;
    //         };
    //     }
    // }
];

inquirer.prompt(questions)
.then(answers => console.log(answers));




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {} 
let data = answers;

fs.writeFile("readme.md", data, (err) => {
    if (err){
        console.log(err);
    }else {
        console.log('Your README has been successfully created!');
    }
});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
