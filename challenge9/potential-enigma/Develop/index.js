// TODO: Include packages needed for this application
//external modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//interna; modules
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'programName',
        message: 'What is the name of your program?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type:'input',
        name: 'description',
        message: 'Please describe your project.  What problem did this project solve?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step by step of how to install your proejct.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'credit',
        message: 'What is your name?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Please list names of collaborators.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'collaboratorsGit',
        message: 'Please list collabotators Githubs',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license did you use?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Response required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests exist for this application?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then(inquirerResponses => {
    console.log("Creating README");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
});
}

// Function call to initialize app
init();
