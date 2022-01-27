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