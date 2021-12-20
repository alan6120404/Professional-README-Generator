// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else{
                    console.log('Please enter a project name!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the Project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }else{
                    console.log('Please enter a project description!');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a installation instructions of the Project (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                }else{
                    console.log('Please enter a project installation instruction!');
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a usage information of the Project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide a contribution guideline of the Project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide a test instructions of the Project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                }else{
                    console.log('Please enter a test instruction!');
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is placed on this project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unilicense']  
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                }else{
                    console.log('Please enter a username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: userInput => {
                if (userInput) {
                    return true;
                }else{
                    console.log('Please enter a email address!');
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const generateMarkdown = (data) => {
    const markdownMd = generateReadme(data);
        
    fs.writeFile('markdown.md', markdownMd, err => {
        if(err) throw new Error(err);
    
        console.log('Markdown created! checkout markdown.md to see the output!');
    });
};

// TODO: Create a function to initialize app

 questions()
 .then(projectAnswers => generateMarkdown(projectAnswers))

    

