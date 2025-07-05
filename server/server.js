const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;