function sendEmail(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const formData = new FormData();
    formData.append('email', email);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
    });
}
