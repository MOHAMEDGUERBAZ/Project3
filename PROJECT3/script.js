function validateForm() {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var placeOfBirth = document.getElementById('placeOfBirth').value;
    var studies = document.getElementById('studies').value;
    var hobbies = document.getElementById('hobbies').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var nameError = document.getElementById('nameError');
    var lastNameError = document.getElementById('lastNameError');
    var ageError = document.getElementById('ageError');
    var placeOfBirthError = document.getElementById('placeOfBirthError');
    var studiesError = document.getElementById('studiesError');
    var hobbiesError = document.getElementById('hobbiesError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    nameError.textContent = '';
    lastNameError.textContent = '';
    ageError.textContent = '';
    placeOfBirthError.textContent = '';
    studiesError.textContent = '';
    hobbiesError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name.trim() === '') {
        nameError.textContent = 'First Name is required';
    }

    if (lastName.trim() === '') {
        lastNameError.textContent = 'Last Name is required';
    }

    if (isNaN(age) || age < 1) {
        ageError.textContent = 'Invalid age';
    }

    if (placeOfBirth.trim() === '') {
        placeOfBirthError.textContent = 'Place of Birth is required';
    }


    if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Invalid email address';
    }

    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
    }

    var passwordStrength = document.getElementById('passwordStrength');
    passwordStrength.textContent = getStrength(password);

    if (nameError.textContent === '' && lastNameError.textContent === '' && ageError.textContent === ''
        && placeOfBirthError.textContent === '' && studiesError.textContent === '' && hobbiesError.textContent === ''
        && emailError.textContent === '' && passwordError.textContent === '') {
        alert('Form submitted successfully!');
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.getElementById('passwordToggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = 'Show Password';
    }
}

function getStrength(password) {
    var strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength += 1;
    }

    if (/\d/.test(password)) {
        strength += 1;
    }

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        strength += 1;
    }

    if (strength === 0) {
        return 'Weak';
    } else if (strength === 1 || strength === 2) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}
