// Page to create function which generates the markdown
module.exports = data => {
    return `# ${data.title}

![badmath](https://img.shields.io/badge/License-${data.license}-green)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License
The following application is covered under the ${data.license} License

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
[Github](https://github.com/${data.github})


Direct any additional questions you have regarding this application to ${data.email}


    `
}