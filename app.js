const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}` ));







 







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
 



