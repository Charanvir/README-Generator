const inquirer = require("inquirer");
const fs = require("fs");
const makeFile = require("./develop-tools/makeFile.js")
const generateMarkdown = require("./develop-tools/generateMarkdown.js");

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your Github username',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your email for users to contact you",
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'list',
                name: "license",
                message: "What license would you like to have you project use?",
                choices: ["MIT", "GNU_AGPLv3", "Apache_2.0", "BSD", "ISC"],
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description explaining your application. You should state your motivation behind building it, the prolem that is solved, why you built it and more.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide the user how to install your application',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide the user how to use your application, the more specific the better as it will help the user get the best experience out of our application.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please provide how other developers can contribute to your application.',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide how to test your application',
                validate: input => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a name of your project")
                        return false
                    }
                }
            }
        ])
}

promptUser()
    .then(answers => {
        return generateMarkdown(answers)
    })
    .then(content => {
        return makeFile.makeREADME(content)
    })

