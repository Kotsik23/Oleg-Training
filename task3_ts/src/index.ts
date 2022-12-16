const TAX = 0.13

interface Employee {
	firstName: string
	lastName: string
	getSalary(): number
}

class Manager implements Employee {
	constructor(readonly firstName: string, readonly lastName: string, readonly salary: number) {}

	getSalary() {
		return this.salary * (1.0 - TAX)
	}
}

class Agent implements Employee {
	private _amounOfEmployees: number = 0

	constructor(readonly firstName: string, readonly lastName: string, readonly moneyPerEmployee: number) {}

	set amounOfEmployees(amount: number) {
		this._amounOfEmployees = amount
	}

	getSalary() {
		return this.moneyPerEmployee * this._amounOfEmployees * (1.0 - TAX)
	}
}

class Workman implements Employee {
	private _workingHours: number = 0

	constructor(readonly firstName: string, readonly lastName: string, readonly moneyPerHour: number) {}

	set workingHours(hours: number) {
		this._workingHours = hours
	}

	getSalary() {
		return this.moneyPerHour * this._workingHours * (1.0 - TAX)
	}
}

const showSalary = (employee: Employee): void => {
	console.log(`${employee.firstName} ${employee.lastName} has salary: \$${employee.getSalary()}`)
}

const sam = new Manager("Sam", "Winchester", 1600)
const din = new Agent("Din", "Winchester", 110)
const bob = new Workman("Bob", "Singer", 6)

din.amounOfEmployees = 8
bob.workingHours = 174

showSalary(sam)
showSalary(din)
showSalary(bob)
