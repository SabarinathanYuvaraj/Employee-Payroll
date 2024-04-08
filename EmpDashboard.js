
document.addEventListener('DOMContentLoaded', function () {
    let employeeData = JSON.parse(localStorage.getItem("employeeData"));

    if (employeeData) {
        let contents = document.getElementById("contents");
        if (!contents) {
            contents = document.createElement('tr');
            contents.id = "contents";
        }

        if (Array.isArray(employeeData)) {
            employeeData.forEach(data => {
                let newRow = document.createElement('tr');
                newRow.id = "contents";

                let departmentDivs = data.department.map(department => `<div id="text">${department}</div>`);

                newRow.innerHTML = `
                    <td class="name"><div><img src="${data.profileImage}" alt="" style="height: 40px;"></div><div id="name">${data.name}</div></td>
                    <td>${data.gender}</td>
                    <td><div class="emp-reg-department-cnf">${departmentDivs.join('')}</div></td>
                    <td>${data.salary}</td>
                    <td>${data.date}</td>
                    <td class="buttons">
                        <button class="delete-button"><i class="fa-solid fa-trash-can-arrow-up" style="color: #658292;"></i></button>
                        <button class ="update-button"><i class="fa-solid fa-pen" style="color: #658292;"></i></button>
                    </td>
                `;
                document.querySelector('table').appendChild(newRow);
            });



            const addUser = document.getElementById('add-user');
            addUser.addEventListener('click', () => {
                window.location.href = 'http://127.0.0.1:5500/EmpRegistration.html';
            });

            document.querySelectorAll('.update-button').forEach(button => {
                button.addEventListener('click', function () {
                    let row = this.closest('tr');
                    let name = row.querySelector('#name').textContent.trim();
                    window.location.href = `EmpRegistration.html?editName=${encodeURIComponent(name)}`;

                    let storedData = JSON.parse(localStorage.getItem("employeeData"));

                    if (storedData) {

                        storedData = storedData.filter(employee => employee.name !== name);


                        localStorage.setItem("employeeData", JSON.stringify(storedData));


                        row.remove();



                    }

                });
            });
            



            

            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function () {
                    let row = this.closest('tr');
                    let name = row.querySelector('#name').textContent.trim();


                    let storedData = JSON.parse(localStorage.getItem("employeeData"));

                    if (storedData) {

                        storedData = storedData.filter(employee => employee.name !== name);


                        localStorage.setItem("employeeData", JSON.stringify(storedData));


                        row.remove();



                    }
                });
            });
        }
    }
});