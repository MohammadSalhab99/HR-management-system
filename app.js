function Employee(EmployeeId, fullName, department, level, imageUrl) {
    this.EmployeeId = EmployeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageUrl;
    Employee.allEmployees.push(this);


}
Employee.prototype.CalculateSalary = function() {
    if (this.level == "Senior") {
        this.salary = Math.floor((Math.random() * (2000 - 1500)) + 1500)
        this.salary = this.salary - (this.salary * 0.075)
    } else if (this.level == "Mid-senior") {
        this.salary = Math.floor((Math.random() * (1500 - 1000)) + 1000)
        this.salary = this.salary - (this.salary * 0.075)
    }
    if (this.level == "Junior") {
        this.salary = Math.floor((Math.random() * (1000 - 500)) + 500)
        this.salary = this.salary - (this.salary * 0.075)
    }

}

Employee.allEmployees = [];


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

let render2 = function() {
    let divEl = document.getElementById('div');
    for (let i = 0; i < Employee.allEmployees.length; i++) {
        let Emp = Employee.allEmployees[i];

        let imgEl = document.createElement('img')
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', Emp.imageURL);
        imgEl.setAttribute('alt', "image");
        let pEl = document.createElement('p');
        divEl.appendChild(pEl);
        pEl.textContent = `Name:${Emp.fullName}-ID:${Emp.EmployeeId},
     Department:${Emp.department}-level:${Emp.level}
     , salary: ${Emp.salary}`;
    }

}



Employee1.CalculateSalary();
Employee2.CalculateSalary();
Employee3.CalculateSalary();
Employee4.CalculateSalary();
Employee5.CalculateSalary();
Employee6.CalculateSalary();
Employee7.CalculateSalary();

// render1();
// Employee1.render();
// Employee2.render();
// Employee3.render();
// Employee4.render();
// Employee5.render();
// Employee6.render();
// Employee7.render();

let EmployeeForm = document.getElementById('EmployeeForm');

let addNewEmployee = function(event) {
    event.preventDefault();


    let name = event.target.name.value;
    let imgUrl = event.target.imgUrl.value;
    let department = event.target.Department.value;
    let level = event.target.Level.value;
    let employeeId = Math.floor((Math.random() * (1025 - 1007)) + 1007)
    console.log(name, imgUrl, department, level, employeeId);
    const newEmployee = new Employee(employeeId, name, department, level, imgUrl)
    newEmployee.CalculateSalary();
    render2();
    settingItems();


}
EmployeeForm.addEventListener('submit', addNewEmployee);
console.log(Employee.allEmployees)

// save the data in local storage
function settingItems() {
    let data = JSON.stringify(Employee.allEmployees)
    localStorage.setItem('Employees', data);

}

function gittingItems() {
    let stringObj = localStorage.getItem('Employees')
    let parseObj = JSON.parse(stringObj)
    if (parseObj !== null) {
        Employee.allEmployees = parseObj;
    }
    render2();
}
gittingItems();

let Dept = ['Adminstration', 'Development', 'Marketing', 'Finance']

function render3() {
    let divEl = document.getElementById('div')
    let taEl = document.createElement('table')
    taEl.setAttribute('border', 1)
    divEl.appendChild(taEl);
    let trEl = document.createElement('tr')
    divEl.appendChild(trEl)
    let thEl = document.createElement('th')
    let th1El = document.createElement('th')
    let th2El = document.createElement('th')
    let th3El = document.createElement('th')
    trEl.appendChild(thEl)
    trEl.appendChild(th1El)
    trEl.appendChild(th2El)
    trEl.appendChild(th3El)

    thEl.textContent = 'Department Name  '
    th1El.textContent = 'Number of employees  '
    th2El.textContent = 'Avarage Salary  '
    th3El.textContent = 'Total salary  '
    for (let i = 0; i < 4; i++) {
        let trEl = document.createElement('tr')
        divEl.appendChild(trEl)
        let tdEl = document.createElement('td')
        let td1El = document.createElement('td')
        let td2El = document.createElement('td')
        let td3El = document.createElement('td')
        trEl.appendChild(tdEl)
        trEl.appendChild(td1El)
        trEl.appendChild(td2El)
        trEl.appendChild(td3El)
        tdEl.textContent = `${Dept[i]}`
        td1El.textContent = `${departmentNum(Dept[i])}`
        td2El.textContent = `${AvarageSalary(Dept[i])}`
        td3El.textContent = `${TotalSalary(Dept[i])}`





    }


}
render3();


function departmentNum(dept) {
    let num = 0;



    for (let i = 0; i < Employee.allEmployees.length; i++) {
        if (dept == Employee.allEmployees[i].department)
            num++;
    }
    return num;
}

function AvarageSalary(dept) {
    let totalSalary = 0;
    let count = 0;


    for (let i = 0; i < Employee.allEmployees.length; i++) {
        if (dept == Employee.allEmployees[i].department) {
            totalSalary += Employee.allEmployees[i].salary;
            count++
        }

    }
    return totalSalary / count;
}

function TotalSalary(dept) {
    let totalSalary = 0;
    let count = 0;


    for (let i = 0; i < Employee.allEmployees.length; i++) {
        if (dept == Employee.allEmployees[i].department) {
            totalSalary += Employee.allEmployees[i].salary;
            count++
        }

    }
    return totalSalary;
}