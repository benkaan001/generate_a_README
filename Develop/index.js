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
        type: 'confirm',
        name: 'installation instructions',
        message: 'Would you like to provide installation instructions?',
        default: true 
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide the GitHub link to the repository. (Required)',
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('Please enter a GitHub link!');
                return false;
            };
        }
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
