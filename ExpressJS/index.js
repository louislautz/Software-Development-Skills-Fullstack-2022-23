const express = require('express')
const path = require('path')

const logger = require('./middleware/logger')

const app = express();

// Init middleware
// Runs after every request is received
// app.use(logger);


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`Server running on port ${PORT} ...`);});