document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObj = Object.fromEntries(formData.entries());

    fetch('/submit-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('feedback-message').textContent = 'Thank you for your feedback!';
        this.reset();
    })
    .catch(error => {
        document.getElementById('feedback-message').textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});



