// Page to create function which generates the markdown
module.exports = data => {
    return `# ${data.title}

![badmath](https://img.shields.io/badge/License-${data.license}-green)

## <u>Table of Contents</u>
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## <u>Description</u>

${data.description}

## <u>Installation</u>

${data.installation}

## <u>Usage</u>

${data.usage}

## <u>License</u>
The following application is covered under the ${data.license} License

## <u>Contributing</u>

${data.contributing}

## <u>Tests</u>

${data.tests}

## <u>Questions</u>
[Github](https://github.com/${data.github})


Direct any additional questions you have regarding this application to ${data.email}
    `
}