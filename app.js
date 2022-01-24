function Employee(EmployeeId, fullName, department, level) {
    this.EmployeeId = EmployeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = `./images/${this.fullName}.PNG`;


}
Employee.prototype.CalculateSalary = function() {
    if (this.level == "Senior") {
        this.salary = Math.floor((Math.random() * (2000 - 1500)) + 1500)

    } else if (this.level == "Mid-senior") {
        this.salary = Math.floor((Math.random() * (1500 - 1000)) + 1000)

    }
    if (this.level == "Junior") {
        this.salary = Math.floor((Math.random() * (1000 - 500)) + 500)

    }

}

Employee.prototype.render = function() {
    document.write(`<table border=1 width="200px height="200px "></tr><tr><td>${this.fullName}</td><td> ${this.salary}</td>`);
}
render1 = function() {
    document.write(`<table border = 1 width="200px height="200px"><tr><td>Name</td><td>Salary</td></table>`);
}
const Employee1 = new Employee(1000, "Ghazi sameer", "Adminstration", "Senior");
const Employee2 = new Employee(1001, "Lana", "Finance", "Senior");
const Employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const Employee4 = new Employee(1003, "Safi Waleed", "Adminstration", "Mid-senior");
const Employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
const Employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
const Employee7 = new Employee(1006, "Hadi Ahamad", "Finance", "Mid-senior");




Employee1.CalculateSalary();
Employee2.CalculateSalary();
Employee3.CalculateSalary();
Employee4.CalculateSalary();
Employee5.CalculateSalary();
Employee6.CalculateSalary();
Employee7.CalculateSalary();

render1();
Employee1.render();
Employee2.render();
Employee3.render();
Employee4.render();
Employee5.render();
Employee6.render();
Employee7.render();