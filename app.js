const express = require('express');
const expressLayouts = require('express-ejs-layouts');

var db = require("./models");
const PORT = process.env.PORT || 3000;
const app = express();

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    })
})

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

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
 



