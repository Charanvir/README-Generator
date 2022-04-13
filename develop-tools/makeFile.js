// page to create a function which takes the template from generateMarkdown.js and creates a READM.md file in the product folder
const fs = require("fs")
const makeREADME = content => {
    fs.writeFile("./product/README.md", `${content}`, (error) => {
        if (error) {
            console.log(error)
        }
    })
}
module.exports = { makeREADME }
