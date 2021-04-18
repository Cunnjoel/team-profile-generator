const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    
    this.getSchool = () => {
        console.log(`School: ${this.school}`);
    }
    this.getRole = () => {
        return console.log("Intern");
    }
}
}

module.exports = Intern;