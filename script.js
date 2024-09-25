function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Full Name Validation
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        document.getElementById('nameError').innerText = "Full name is required.";
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // Phone Number Validation
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = "Phone number must be 10 digits.";
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('dobError').innerText = "Please select your date of birth.";
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
    }

    // Gender Validation
    const gender = document.getElementById('gender').value;
    if (gender === "") {
        document.getElementById('genderError').innerText = "Please select your gender.";
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    return isValid; // If false, form will not be submitted
}

