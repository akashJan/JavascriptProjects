const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validatePassword()) {
        alert("Form Submitted SuccessFully");
    }
});

function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        nameError.previousElementSibling.classList.add('fa-x');
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        nameError.previousElementSibling.classList.add('fa-x');
        return false;
    }
    passError.innerHTML = "";
    nameError.previousElementSibling.classList.add("fa-check");

    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is Required";
        emailError.previousElementSibling.classList.add('fa-x');
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-x');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('check');
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passError.innerHTML = "Password is Required";
        passError.previousElementSibling.classList.add('fa-x');
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-x');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('check');
    return true;
}