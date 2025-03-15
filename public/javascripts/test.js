document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const password = document.getElementById('password').value;

    // Send the password to the server via fetch
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
    .then(response => response.json())  // Assuming JSON response
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