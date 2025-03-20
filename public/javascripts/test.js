

document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash"); // Change icon
    } else {
        passwordInput.type = "password";
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye"); // Change icon back
    }
});




document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;

    
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
    .then(response => response.json())  
    .then(data => {
      if (data.success) {
        alert('Correct password! You remembered it.');
      } else {
        alert('Incorrect password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  });




