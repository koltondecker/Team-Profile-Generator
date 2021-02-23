# Team Profile Generator

## Table of Contents: 
- [Description](#description)
- [Installation](#installation)
- [User Story](#user-story)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
<hr>

## Description: 
A project team needs some way to track team flow and contact information. With the team profile generator, you can build your team from the ground up by including information from the command line to add a manager, and as many engineers and interns as your heart desires. These employees will have there own dynamically created card generated and added to an HTML page for your viewing pleasure. 

<a href="https://www.npmjs.com/package/inquirer">Inquirer</a> was used for this project. 

Check out a video walkthrough of this application <a href="https://drive.google.com/file/d/1MswAFQzV8EoDAGtqjl5ZQVK31eMyj28E/view">HERE</a>
<hr>

## Installation: 
Upon downloading the files from this repo, use 'npm init' to initialize npm package and 'npm i' to install necessary dependencies for this project.
<hr>

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
<hr>

## Contributing: 
Feel free to contribute to this project in whatever ways you see beneficial. I will review pull requests and update with appropriate additions.
<hr>

## Tests: 
4 different test files were built and exectued to test the Employye, Manager, Engineer, and Intern constructor classes.
<hr>

### License: 
No license was used for this project. 
<hr>

### Questions: 
If you would like to learn more, please take a look through my github below:
<a href="https://github.com/koltondecker"><img src="./assets/images/github-brands.svg" height="40px" width="auto" alt="github icon"> </a>Visit my GitHub at <a href="https://github.com/koltondecker">github.com/koltondecker</a>
If you still have questions, please send me an email and I will respond as soon as I can:
<a href="mailto:deckerman25@gmail.com">deckerman25@gmail.com</a>