const logout = async () => {
  const response = await fetch('/api/students/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const response2 = await fetch('/api/professors/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }); 
  if (response.ok || response2.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
  
  document.querySelector('#logout').addEventListener('click', logout);