const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');


// db 
const db = require('./config/database');


// test db
db.authenticate()
    .then(() => console.log('db connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

// handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// index route view
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));