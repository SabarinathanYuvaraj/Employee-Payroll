
document.addEventListener('DOMContentLoaded', function () {
    let employeeData = JSON.parse(localStorage.getItem("employeeData"));

    function createEmployeeRow(data) {
  let newRow = document.createElement('tr');
  newRow.id = "contents";

  let departmentDivs = data.department.map(department => `<div id="text">${department}</div>`);

  newRow.innerHTML = `
    <td class="name"><div><img src="${data.profileImage}" alt="" style="height: 40px;"></div><div id="name">${data.name}</div></td>
    <td>${data.gender}</td>
    <td class = "department"><div class="emp-reg-department-cnf">${departmentDivs.join('')}</div></td>
    <td>${data.salary}</td>
    <td>${data.date}</td>
    <td class="buttons">
      <button class="delete-button"><i class="fa-solid fa-trash-can-arrow-up" style="color: #658292;"></i></button>
      <button class ="update-button"><i class="fa-solid fa-pen" style="color: #658292;"></i></button>
    </td>
  `;

  return newRow;
}

if (employeeData) {
  if (Array.isArray(employeeData)) {
    let searchBarClicked = false;
    const searchBar = document.getElementById('searchBar');
    const searchText = document.getElementById('searchText');




    searchBar.addEventListener('click', () => {
      searchBarClicked = true;
      const searchTerm = searchText.value.toLowerCase(); 

      let filteredData = employeeData.filter(employee => employee.name.toLowerCase().includes(searchTerm));

      const tableBody = document.querySelector('table tbody');
      tableBody.innerHTML = ''; 

      if (filteredData.length > 0) {
        filteredData.forEach(data => {
          const newRow = createEmployeeRow(data);
          tableBody.appendChild(newRow);
        });
      } else {
        console.log("No search results found");
      }
    });

    searchCancel.addEventListener('click', () => {
        searchBarClicked = false;
      
        const searchText = document.getElementById('searchText');
        searchText.value = '';
      
        const tableBody = document.querySelector('table tbody');
      
        while (tableBody.firstChild) {
          tableBody.removeChild(tableBody.firstChild);
        }
      
        employeeData.forEach(data => {
          const newRow = createEmployeeRow(data);
          tableBody.appendChild(newRow);
        });
      });


    const tableBody = document.querySelector('table tbody');
    employeeData.forEach(data => {
      const newRow = createEmployeeRow(data);
      tableBody.appendChild(newRow);
    });
  } else {
    console.error("employeeData is not an array");
  }
} else {
  console.error("employeeData is not defined");
}



                const addUser = document.getElementById('add-user');
                addUser.addEventListener('click', () => {
                    window.location.href = 'http://127.0.0.1:5500/EmpRegistration.html';
                });

                const searchUser = document.getElementById('searchBar');
                searchUser.addEventListener('click',() => {

                })

                document.querySelectorAll('.update-button').forEach(button => {
                    button.addEventListener('click', function () {
                        let row = this.closest('tr');
        
                        let name = row.querySelector('#name').textContent.trim();
                        console.log(name);
                        
                        
                        const editUrl = `EmpRegistration.html?editName=${encodeURIComponent(name)}`
                        document.getElementById('name').value = decodeURIComponent(name);
                        window.location.href = editUrl
        ;
                        
    
                    // let salary = row.cells[3].textContent.trim(); // Assuming salary is in the fourth column
                    // let startDate = row.cells[4].textContent.trim(); // 

                    // console.log(name, gender ,department ,salary ,startDate);

                        // if (gender) document.getElementById('gender').value = decodeURIComponent(gender);
                        // if (departmentArray) document.getElementById('department').value = decodeURIComponent(departmentArray);
                        // if (salary) document.getElementById('salary').value = decodeURIComponent(salary);
                        // if (startDate) document.getElementById('startDate').value = decodeURIComponent(startDate);
                        console.log(name)
                    // window.location.href = `EmpRegistration.html?editName=${encodeURIComponent(name)}`;
                    // if (name) document.getElementById('name').value = decodeURIComponent(name);

                    // let storedData = JSON.parse(localStorage.getItem("employeeData"));

                    // if (storedData) {

                    //     storedData = storedData.filter(employee => employee.name !== name);


                    //     localStorage.setItem("employeeData", JSON.stringify(storedData));


                    //     row.remove();



                    // }

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
    // }
// }
);