const createAccountBtn = document.querySelector('#create-account');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const defaultStyle = passwordInput.style;
const createButtonColor = createAccountBtn.style.backgroundColor;

createAccountBtn.addEventListener('click', () => {
    let passwordText = passwordInput.value;
    let confirmPasswordText = confirmPasswordInput.value;

    if(passwordText != confirmPasswordText) {
        alert("Passwords do not match!");
    }
})

function checkPasswords() {
    let passwordText = passwordInput.value;
    let confirmPasswordText = confirmPasswordInput.value; 

    if(passwordText != confirmPasswordText) {
        passwordInput.style.border = '2px solid red'
        confirmPasswordInput.style.border = '2px solid red'
        createAccountBtn.disabled = true;
        createAccountBtn.style.backgroundColor = 'grey';
    } else {
        passwordInput.style = defaultStyle;      
        confirmPasswordInput.style = defaultStyle; 
        createAccountBtn.disabled = false;
        createAccountBtn.style.backgroundColor = createButtonColor;
    }
}

passwordInput.addEventListener('input', () => {
    checkPasswords();
});

confirmPasswordInput.addEventListener('input', () => {
    checkPasswords();
});