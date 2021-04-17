const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github){
        super(name, id, email);
        this.github = gethub;
    }
    getGithub(){
        console.log(`Github: ${this.github}`);
    }
    getRole(){
        return console.log("Engineer");
    }
}