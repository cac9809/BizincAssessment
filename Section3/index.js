const express = require('express');
const app = express();

// Define the /message endpoint
app.get('/message', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});