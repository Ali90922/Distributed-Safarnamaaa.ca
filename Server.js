const express = require('express');
const app = express();

// Define a route to log IP addresses
app.post('/log-ip', (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Visitor IP Address:', ipAddress);
    // You can save the IP address to a database or log it to a file
    res.status(200).send('IP address logged successfully');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
