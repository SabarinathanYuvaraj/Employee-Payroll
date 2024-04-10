// var form = document.getElementById("employee-reg-data-cnf")

// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     let name = document.getElementById("name").value
//     let allImages = document.getElementsByName("profileImage")
//     let image = ""
//     for(let i = 0;i<allImages.length;i++){
//         if(allImages[i].checked){
//             image = allImages[i].value
//         }
//     }
//     let genderNames = document.getElementsByName("gender")
//     let gender = ""
//     for(let i = 0; i<genderNames.length;i++){
//         if(genderNames[i].checked){
//             gender = genderNames[i].value
//         }
//     }
//     let allDepartments = document.getElementsByName('department')
//     let selectedDepartments = []
//     for(let i = 0 ; i<allDepartments.length;i++){
//         if(allDepartments[i].checked){
//             selectedDepartments.push(allDepartments[i].value)
//         }
//     }
//     let salary = document.getElementById('salaryDetail').value
//     let day = document.getElementById('day').value
//     let month = document.getElementById('month').value
//     let year = document.getElementById('year').value
//     let description = document.getElementById('emp-reg-noteText-cnf').value

    
//     let date = `${day}/${month}/${year}`

//    var employeeDetails = {
//         Name : `${name}`,
//         ProfileImage : `${image}`,
//         Department : `${selectedDepartments}`,
//         Salary : `${salary}`,
//         Date : `${date}`,
//         Note : `${description}`
//     }
//     console.log(employeeDetails);
// })


document.addEventListener('DOMContentLoaded', function () {
    let employeeData = JSON.parse(localStorage.getItem("employeeData"));
    
     const urlParams = new URLSearchParams(window.location.search);
     const editName = urlParams.get('editName');

     let editData = employeeData.filter(ele => editName == ele.name )
     console.log(editData[0].name);
     console.log(editData[0].department);
     console.log(editData[0].date);
    
   
    if(editData){
     document.getElementById('name').value = editData[0].name
     const profileImages = document.getElementsByName('profileImage');
     profileImages.forEach(radioButton => {
         if (radioButton.value === editData[0].profileImage) {
             radioButton.checked = true;
         }
     });
     const gender = document.getElementsByName('gender');
     gender.forEach(radioButton => {
         if (radioButton.value === editData[0].gender) {
             radioButton.checked = true;
         }
     });
     document.getElementById("salaryDetail").value = editData[0].salary
     document.getElementById("emp-reg-noteText-cnf").value = editData[0].note

     editData[0].department.forEach(departments => {
        // console.log(departments);
        const checkboxes = document.getElementsByName('department');
        checkboxes.forEach(checkbox => {
            if ( checkbox.value == departments) {
               
                console.log(checkbox.value);
                checkbox.checked = true;
            }
        });
    });

    editData[0].department.forEach(departmentName => {
        const checkboxes = document.querySelectorAll(`input[name*="${departmentName}"]`);
              checkboxes.forEach(checkbox => {
          if (checkbox) {
            checkbox.checked = true;
          }
        });
      });
       let date = editData[0].date 
        let dateArray = date.split('-')
        // console.log(dateArray);
        document.getElementById('day').value = dateArray[0]
        document.getElementById('month').value = dateArray[1]
        document.getElementById('year').value = dateArray[2]

      


        // let storedData = JSON.parse(localStorage.getItem("employeeData"));

        // if (storedData) {

        //     storedData = storedData.filter(employee => employee.name == editName);


        //     localStorage.setItem("employeeData", JSON.stringify(storedData));

        //     // localStorage.removeItem("storedData")

        
        // }

 }
});

    // }

    //  })

document.addEventListener('DOMContentLoaded', function () {
const cancel=document.getElementById('reg-action-cancel-cnf')
cancel.addEventListener('click',()=>{
    window.location.href=('http://127.0.0.1:5500/EmpDashboard.html')
    
})
const form = document.getElementById('employee-reg-data-cnf');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let existingData = JSON.parse(localStorage.getItem('employeeData'));
        
        
        if (!Array.isArray(existingData) || existingData === null) {
            existingData = []; 
        }

        const formData = {
            name: document.getElementById('name').value,
            profileImage: document.querySelector('input[name="profileImage"]:checked').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            department: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value),
            salary: document.getElementById('salaryDetail').value,  
            date: document.getElementById('day').value + '-' + document.getElementById('month').value + '-' + document.getElementById('year').value,
            note: document.getElementById('emp-reg-noteText-cnf').value
        };

        existingData.push(formData);
        console.log(formData);
        localStorage.setItem('employeeData', JSON.stringify(existingData));

        form.reset();
    });

})