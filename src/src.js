const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const { inherits } = require('util');
 
    const generateHTML = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="container">
            <h1>My Team</h1>
        </header>
        <div class="employee"></div>
    </body>
    </html>`;

    const generateManager = (answers) =>
    `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager ${answers.name}</div>
        <div class="card-body text-primary">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">Offic Number: ${answers.name}</li>
    </ul>
        </div>
    </div>`;

    const generateEngineer = (answers) =>
    `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager ${answers.name}</div>
        <div class="card-body text-primary">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">Offic Number: ${answers.school}</li>
    </ul>
        </div>
    </div>`;

    const generateIntern = (answers) =>
    `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Manager ${answers.name}</div>
        <div class="card-body text-primary">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">Offic Number: ${answers.github}</li>
    </ul>
        </div>
    </div>`;

    const promptUser = () =>{
        return inquirer.prompt([
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
        .then((answers) => {
            const htmlPageContent = generateHTML(answers);
        
            fs.writeFile('index.html', htmlPageContent, (err) =>
              err ? console.log(err) : console.log('Successfully created index.html!')
            );
          });
    };

    const init = () => {
        promptUser()
        //   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
        //   .then(() => console.log('Successfully wrote to index.html'))
        //   .catch((err) => console.error(err));
      };
      
      init();