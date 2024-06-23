let fields = document.getElementsByClassName("field");
let radioFields = document.getElementsByClassName("radio");
let checkField = document.querySelector('.check')
let errors = document.getElementsByClassName("error");
const form=document.getElementById("contact-form")//form
const successMessage=document.querySelector(".success-message")//car2
let formValid = false;
console.log(errors)
form.onsubmit = function(e){
    e.preventDefault()
    for(let i=0; i<fields.length; i++){
        if(fields[i].value === "" || fields[i].value === null){
                fields[i].nextElementSibling.classList.remove("d-none")
                fields[i].nextElementSibling.classList.add("d-block")
                fields[i].style.borderColor='red';
                formValid=false;
    }else{
        fields[i].nextElementSibling.classList.remove("d-block")
        fields[i].nextElementSibling.classList.add("d-none");
        fields[i].style.borderColor='green';
        formValid = true;
    }
}
for(let i=0; i<radioFields.length; i++){
    
    if(!radioFields[0].checked && !radioFields[1].checked){
            radioFields[i].nextElementSibling.classList.remove("d-none")
            radioFields[i].nextElementSibling.classList.add("d-block")
            formValid=false;
}
else{
    radioFields[i].nextElementSibling.classList.remove("d-block")
    radioFields[i].nextElementSibling.classList.add("d-none")
    formValid = true;
}
}

if(!checkField.checked){
    checkField.nextElementSibling.classList.remove("d-none")
    checkField.nextElementSibling.classList.add("d-block")
    formValid = false;
} else{
    checkField.nextElementSibling.classList.remove("d-block")
    checkField.nextElementSibling.classList.add("d-none")
    formValid = true;
}

         if(formValid==true){
            successMessage.classList.remove("d-none")
          
         }



}

























//  form.addEventListener("submit", (e) => {
   
    

// // //fname validation
// if(fname.value === "" || fname.value==null){
//   errorElement.style.display='block'
//     // error.push("this field is required");
//     fname.style.borderColor='red'
   
//   }else{
//     fname.style.borderColor = 'green';
//    errorElement.style.display='none'
   
// }

// //lname validation
// if(lname.value === "" || lname.value == null)
//   {
//     e.preventDefault()
//     errorElement.innerHTML="this field is required"
  
//   // error.push("this field is required");
//   lname.style.borderColor='red'
//   }
// else{
//   lname.style.borderColor = 'green';
//  errorElement.style.display='none';
 
// }

// //email validation

// if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){    
// //     email.style.borderColor = 'red';
// //      errorElement.style.display = 'block'
// // }else{
// //     errorElement.style.display = 'none'
// //     email.style.borderColor = 'green';
// // }
// e.preventDefault()
// errorElement.innerHTML="this field is required"

// // error.push("this field is required");
// email.style.borderColor='red'
// }else{
//   errorElement.innerHTML='';
// }

// // queryType validation

// if(!queryType){
//   queryType.style.borderColor = 'red';
//   errorElement.style.display = 'block'
// }else{
//  errorElement.style.display = 'none'
//  email.style.borderColor = 'green';
// }

// //message validation
// if(message===''){
    
//     errorElement.style.display='block';
//     message.style.display='1pa solid red';

// }else{
//   errorElement.style.display='none';
//   message.style.display='1pa solid green';

// }
    

// //consent validation
// if(!consent){
//     isValid=false
//     formAlert[5].classList.add("form-error")
// }else{
//     formAlert[5].classList.remove("form-error")

// }

// // form is valid
// if(isValid){
//     successMessage.classList.add('active')
//     btn.reset()
// }



//     container.classList.add("hide");
//     successMessage.classList.remove("hide");
// });

