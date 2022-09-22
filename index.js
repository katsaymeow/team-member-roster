const inquirer = require('inquirer');
const fs = require('fs');
const TeamMember = require('./lib/team-members.js');
const generateHtml = require("./src/generate-html.js");

// email and user name need to open and function in the html to take the user to the employee roster

// email and user name need to open and function in the html to take the user to the employee roster
// need team members name, id email address and office number
// nedds to start with team manager, then add engineer, intern or employee. This list must include an exit option to print the html. 

function promptTheUser(){//manager menu prompt to add nect set of questions
    return inquirer.prompt([
        {
            type: "input",
            name: "memberName",
            message: "Let's begin! Enter full name of the team member.",
        },
        {
            type: "input",
            name: "memberId",
            message: "Please enter the team members id number.",
        },
        {
            type: "input",
            name: "memberEmail",
            message: "Please enter the team members email address that is best for team contact."
        },
        {
            type: "list",
            name: "title",
            message: "Which team member type are we logging today?",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
                "That is all! Generate HTML"
            ]
        }
    ]).then (answers => {// callback answers.memberEmail ex
    const htmlGeneration = generateHtml(answers);
    fs.writeFile('./dist/index-roster.html', htmlGeneration, (error) => error ? console.log(error) : console.log('the html is generated🦎'));
    })
}
promptTheUser();


// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json  