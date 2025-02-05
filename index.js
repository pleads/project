
//alert notification 


//document.getElementById('login').addEventListener('submit', function(e){
  //e.preventDefault();// prevent page from refreshing

  //const username = document.getElementById('email').value;

  //if (Username) {
   // alert(`Welcome, ${Username}! You have successfully signed in.`);
  //} else {
   // alert('Please enter your Email to proceed.');
 // }

//} );


const notification = document.getElementById('popup');

document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault(); //prevent form submission 

  const email = document.getElementById('email').value;


  
  if(email){
    popup.textContent = `Welcome, ${email} ! you have successfully sign in.`;
    popup.style.display = 'block';

  }
    
    //hide notification after 5seconds
    popup.style.display = 'block'; // Show the notification
setTimeout(() => {
  popup.style.display = 'none'; // Hide after 5 seconds
}, 5000);
  
});


const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePassword');

togglePasswordIcon.addEventListener('click', function () {
    
  if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('fa-eye-slash'); 
        togglePasswordIcon.classList.add('fa-eye');
    } 
    else {
      passwordInput.type = 'password';
      togglePasswordIcon.classList.remove('fa-eye'); 
      togglePasswordIcon.classList.add('fa-eye-slash'); 
    }

  });
  
function checkPasswordStrength() {
  const password = document.getElementById('password').value;
  const strengthBar = document.getElementById('strengthBar');
  const feedback = document.getElementById('feedBack');
  let strength = 0;


  if(password.length >=8) strength++;
  if(/[A-Z]/.test(password)) strength++;
  if(/[a-z]/.test(password)) strength++;
  if(/[0-9]/.test(password)) strength++;
  if(/[@$!%*?&]/.test(password)) strength++;


  strengthBar.className ='strength-Bar';
  feedback.textContent = '';

  if (strength === 0){
    strengthBar.style.width = '0%';
    feedback.textContent = 'Enter your password.';
  } else if (strength <=2){
    strengthBar.style.width = '33%';
    strengthBar.classList.add('weak');
    feedback.textContent = 'Weak password';

  } else if (strength ===3 || strength === 4){
    strengthBar.style.width = '66%';
    strengthBar.classList.add('medium');
    feedback.textContent = 'Medium strength. add a little more character or symbol';

  } else {
    strengthBar.style.width = '100%';
    strengthBar.classList.add('strong');
    feedback.textContent = 'Strong Password.';
  }

}


const a = 233
const b = 100
const c = a % b