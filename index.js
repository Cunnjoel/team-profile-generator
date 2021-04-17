const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'What job will you be performing here?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your E-mail address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            when: (answers) => answers.role === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of you school?',
            when: (answers) => answers.role === "Intern"
        }
    ])

