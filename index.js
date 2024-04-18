const button = document.querySelector('#submitButton')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword');

button.addEventListener('click', (event) => {    
    if (password.value !== confirmPassword.value){
        alert('Passwords do not match');
    } else {
        alert('Form successfully submitted')
    }
    event.preventDefault();
})

