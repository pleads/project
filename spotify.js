



const notification = document.getElementById('popup');

document.getElementById('signup').addEventListener('submit', function (e){
    e.preventDefault();

    const username = document.getElementById('username').value;


    if(username){
        popup.textContent = `Welcome, ${username} ! you have successfully register.`;
        popup.style.display = 'block';
    
      }

    popup.style.display = 'block';
    setTimeout(()=>{
        popup.style.display = 'none';
    },
5000 );
});


const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById("togglePassword");

togglePasswordIcon.addEventListener('click', function (){
  if(passwordInput.type === 'password') {
    passwordInput.type = 'text'
    togglePasswordIcon.classList.remove('fa-eye-slash');
    togglePasswordIcon.classList.add('fa-eye');
  }
  else{
    passwordInput.type = 'password';
    togglePasswordIcon.classList.remove('fa-eye');
    togglePasswordIcon.classList.add('fa-eye-slash');
  }
});
//passsword strength

function checkPasswordStrength() {
  
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strengthBar');
    const feedBack = document.getElementsByClassName('feedBack')[0]; 
    
    
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$^?+=]/.test(password)) strength++;

    strengthBar.className = 'strength-Bar';

    feedBack.textContent = '';

    if(strength === 0){
      console.log('feedback == 0')
        strengthBar.style.width = '0%';
        feedBack.style.height = '30px'
        feedBack.textContent ='Enter your password';
        console.log(feedBack)
        console.log(feedBack.textContent)
      

        
    } else if(strength <=2){
        strengthBar.style.width = '30%';
        strengthBar.classList.add('weak');
        feedBack.textContent ='Weak password';

    } else if (strength ===3 || strength ===4){
        strengthBar.style.width = '60%';
        strengthBar.classList.add('medium');
        feedBack.textContent ='Medium password . add more character or symbol' ;

} else {
    strengthBar.style.width = '100%';
    strengthBar.classList.add('strong');
    feedBack.textContent ='Strong password';
}

}













// alert notification


//document.getElementById('signup').addEventListener('submit', function(e){
   // e.preventDefault();
  //  const Username = document.getElementById('username').value;

  //  if (Username) {
     //   alert(`Welcome, ${Username}!`);
  //  } else{
   //     alert('Please enter your username');
  // }
//  });