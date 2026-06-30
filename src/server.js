const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Pipeline Project Running Successfully');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});