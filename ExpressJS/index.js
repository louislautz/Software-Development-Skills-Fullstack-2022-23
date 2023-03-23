const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const logger = require('./middleware/logger');
const members = require('./Members');
const exp = require('constants');

const app = express();

// Init middleware
// Runs after every request is received
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLaylout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    })
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members api routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => { console.log(`Server running on port ${PORT} ...`);});