const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector('#name-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (first_name && last_name && email && password) {
      const response = await fetch('/api/students', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/studentsubject');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);