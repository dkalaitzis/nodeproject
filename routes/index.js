const express = require('express');
const router = express.Router();

// router.get('/', (req,res) => res.send('Welcome'));
// use render to use the view 'welcome' instead of writing welcome
router.get('/', (req,res) => res.render('welcome')); 

module.exports = router;

