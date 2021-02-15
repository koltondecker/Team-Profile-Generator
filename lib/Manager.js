const Employee = require("Employee");

class Manager extends Employee {

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {

    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;