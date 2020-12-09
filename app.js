const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');

var db = require("./models");
const PORT = process.env.PORT || 3000;

const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Passport config
require('./config/passport')(passport);

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function(){
//         console.log("Listening on port %s", PORT);
//     })
// })
app.listen(PORT, console.log(`Server started on ${PORT}`));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));







 







// // Static Files
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// app.get('', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html')
// })

// // Set Views
// app.set('views', './views')
// app.set('view engine')
 



