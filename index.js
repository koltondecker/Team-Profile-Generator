const fs = require("fs");
const inquire = require("inquirer");
const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

function addEmployee() {
    inquire.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the employee?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the employee?"
        }
    ]).then( (answers) => {

        const employee = new Employee(answers.name, answers.id, answers.email);
        // console.log(employee);
        console.log(employee.getName());
    })   
}

addEmployee();

// employee.getName();
// const manager = new Manager();
// Employee.getName();
// if(nextEmployee === "Engineer") {
//     const engineer = new Engineer();
// }
// else {
//     const intern = new Intern();
// }

