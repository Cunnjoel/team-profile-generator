const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        console.log(`Github: ${this.github}`);
    }
    getRole(){
        return console.log("Engineer");
    }
}

module.exports = Engineer;