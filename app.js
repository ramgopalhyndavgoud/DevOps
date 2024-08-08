const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
