"use strict";
const TAX = 0.13;
class Manager {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getSalary() {
        return this.salary * (1.0 - TAX);
    }
}
class Agent {
    constructor(firstName, lastName, moneyPerEmployee) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.moneyPerEmployee = moneyPerEmployee;
        this._amounOfEmployees = 0;
    }
    set amounOfEmployees(amount) {
        this._amounOfEmployees = amount;
    }
    getSalary() {
        return this.moneyPerEmployee * this._amounOfEmployees * (1.0 - TAX);
    }
}
class Workman {
    constructor(firstName, lastName, moneyPerHour) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.moneyPerHour = moneyPerHour;
        this._workingHours = 0;
    }
    set workingHours(hours) {
        this._workingHours = hours;
    }
    getSalary() {
        return this.moneyPerHour * this._workingHours * (1.0 - TAX);
    }
}
const showSalary = (employee) => {
    console.log(`${employee.firstName} ${employee.lastName} has salary: \$${employee.getSalary()}`);
};
const sam = new Manager("Sam", "Winchester", 1600);
const din = new Agent("Din", "Winchester", 110);
const bob = new Workman("Bob", "Singer", 6);
din.amounOfEmployees = 8;
bob.workingHours = 174;
showSalary(sam);
showSalary(din);
showSalary(bob);
