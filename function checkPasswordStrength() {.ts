function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const feedback = document.getElementById('feedBack');
    let strength = 0;

    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#\$%\^&\*_\+\-=\{\}:;"'<>,\.\?\/\\|]/.test(password)) strength++;

    // Reset previous classes
    strengthBar.className = 'strength-bar'; // Ensure this matches your CSS
    feedback.textContent = '';

    // Update the strength bar and feedback
    if (strength === 0) {
        strengthBar.style.width = '0%';
        feedback.textContent = 'Enter your password';
    } else if (strength <= 2) {
        strengthBar.style.width = '30%';
        strengthBar.classList.add('weak');
        feedback.textContent = 'Weak password';
    } else if (strength === 3 || strength === 4) {
        strengthBar.style.width = '60%';
        strengthBar.classList.add('medium');
        feedback.textContent = 'Medium password. Add more characters or symbols.';
    } else {
        strengthBar.style.width = '100%';
        strengthBar.classList.add('strong');
        feedback.textContent = 'Strong password';
    }
}

// Example of an event listener
document.getElementById('password').addEventListener('input', checkPasswordStrength);