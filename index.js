const submit = document.getElementById("submitForm");

const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const email = document.getElementById("inputEmail");
const reason = document.getElementById("inputReason");


submit.onclick = function(){
  const firstNameText = firstName.value;
  const lastNameText = lastName.value;
  const emailText = email.value;
  const reasonText = reason.value;
  
  if( firstNameText != "" && lastNameText != "" && emailText != "" && reasonText != "" ){
    alert("Form has been submitted!");
  } else {
    alert("Please fill out all fields to submit");
  }
};