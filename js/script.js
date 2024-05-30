const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Serve static files from the 'contact_us' directory
app.use(express.static(path.join(__dirname)));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-feedback', (req, res) => {
    const feedback = req.body;
    // Handle the feedback (e.g., save it to a database)
    console.log('Received feedback:', feedback);

    // Send a response back to the client
    res.json({ message: 'Feedback received' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.contact-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = url('https://wa.me/1234567890'); // Replace with your WhatsApp number
        });
    });
});
