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

