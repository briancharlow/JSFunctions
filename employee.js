//  Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.Include a method to calculate annual salary.Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department.Override the annual salary calculation method to include bonuses for managers.Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}
class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    annualSalary() {
        return super.annualSalary() + this.bonus;
    }
}

const manager1 = new Manager("John Doe", 50000, "IT", 5000);
const manager2 = new Manager("Jane Doe", 60000, "HR", 10000);

const employee = new Employee("John Smith", 40000);

console.log(manager1.name, manager1.annualSalary());
console.log(manager2.name, manager2.annualSalary());
console.log(employee.name, employee.annualSalary());
