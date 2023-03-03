// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How will users install your project?',
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'How can users contribute to your project? Are their any guidelines for contributors?',
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How can users test your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used?'
    },

    {
        type: 'input',
        name: 'license',
        message: 'Would you like to use licensing on your project?',
        options: ['BSD','GPL','MIT','Apache','None'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your github username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the best Email to reach you?',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('ReadMe file successfully created')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const data = generateMarkdown(answers);
        writeToFile("ReadME.md", data);
    })
    .catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();
