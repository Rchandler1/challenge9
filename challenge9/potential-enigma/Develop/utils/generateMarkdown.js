// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.programName}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [Credits](#Credits)
 * [License](#License)

 ## Installation
${data.installation}

## Usage
${data.usage}


![alt text](assets/images/screenshot.png)
 

## Credits
${data.credit}
  ${data.gitHub}
  ${data.email}
  ${data.collaborators}
  ${data.collaboratorsGit}

  ## License
  Operating under license by ${data.license}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}
  
  ## Questions
  
  For any questions please feel free to contact me. ${data.credit} at my email ${data.email}  or on my github ${data.gitHub}`;

  
  }


module.exports = generateMarkdown;
