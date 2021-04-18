const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    
    this.getGithub = () => {
        console.log(`Github: ${this.github}`);
    }
    this.getRole = () => {
        return console.log("Engineer");
    }
}
}

module.exports = Engineer;