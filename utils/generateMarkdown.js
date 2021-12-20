// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return `![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-yellow)`;
  };
  if (license === "GNU GPLv3") {
    return `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)`;
  };
  if (license === "GNU LGPLv3") {
    return `![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)`;
  };
  if (license === "Mozilla Public License 2.0") {
    return `![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-yellowgreen)`;
  };
  if (license === "Apache License 2.0") {
    return `![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-orange)`;
  };
  if (license === "MIT License") {
    return `![MIT License](https://img.shields.io/badge/license-MIT%20License-red)`;
  };
  if (license === "Boost Software License 1.0") {
    return `![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-lightgrey)`;
  };
  if (license === "The Unilicense") {
    return `![The Unilicense](https://img.shields.io/badge/license-The%20Unilicense-blue)`;
  };
  if (!license) {
    " "
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return `[Licenses](https://choosealicense.com/licenses/agpl-3.0/)`;
  };
  if (license === "GNU GPLv3") {
    return `[Licenses](https://choosealicense.com/licenses/gpl-3.0/)`;
  };
  if (license === "GNU LGPLv3") {
    return `[Licenses](https://choosealicense.com/licenses/lgpl-3.0/)`;
  };
  if (license === "Mozilla Public License 2.0") {
    return `[Licenses](https://choosealicense.com/licenses/mpl-2.0/)`;
  };
  if (license === "Apache License 2.0") {
    return `[Licenses](https://choosealicense.com/licenses/apache-2.0/)`;
  };
  if (license === "MIT License") {
    return `[Licenses](https://choosealicense.com/licenses/mit/)`;
  };
  if (license === "Boost Software License 1.0") {
    return `[Licenses](https://choosealicense.com/licenses/bsl-1.0/)`;
  };
  if (license === "The Unilicense") {
    return `[Licenses](https://choosealicense.com/licenses/unlicense/)`;
  };
  if (!license) {
    " "
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GNU AGPLv3") {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
  };
  if (license === "GNU GPLv3") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  };
  if (license === "GNU LGPLv3") {
    return `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`;
  };
  if (license === "Mozilla Public License 2.0") {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
  };
  if (license === "Apache License 2.0") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  };
  if (license === "MIT License") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  };
  if (license === "Boost Software License 1.0") {
    return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  };
  if (license === "The Unilicense") {
    return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  };
  if (!license) {
    " "
  };
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return `

  # ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Content

  * [Installation](#Installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License
  
  ${renderLicenseSection(data.license)}

  For More Information: ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions
  
  GitHub Profile: [${data.username}](https://github.com/${data.username})

  Please send me an email for further question!

  Email: ${data.email}
`;
}

