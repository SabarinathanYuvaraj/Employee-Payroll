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