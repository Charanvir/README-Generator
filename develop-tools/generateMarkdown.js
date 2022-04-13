// Page to create function which generates the markdown
module.exports = data => {
    return `# ${data.title}

![badmath](https://img.shields.io/badge/License-${data.license}-green)

## <u>Table of Contents</u>
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
[Github](https://github.com/${data.github})

Direct any additional questions you have regarding this application to ${data.email}

## License
The following application is covered under the ${data.license} License
    `
}