const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    
    this.getOfficeNumber = () => {
        console.log(`Office: ${this.office}`)
    }

    this.getRole = () => {
        return console.log("Manager");
    }
}
}

module.exports = Manager;