const express = require('express');
const router = express.Router();
const db = require('../models');
const { ensureAuthenticated } = require('../config/auth');

// Display All Posts
router.get('/posts', ensureAuthenticated, (req,res) => {
    db.Post.findAll({include: db.User})
        .then(posts => {  
            res.render('posts', {
                posts,
                user: req.user             
            });
        })
        .catch(err => console.log(err));
    });

// Create Post
router.post('/posts', ensureAuthenticated, (req, res) => {
    const { content, user } = req.body;
    console.log(req.body)
    console.log(req.user.dataValues.id)
    // Insert into table
    const newPost = new db.Post({
        content,
        UserId: req.user.dataValues.id
    });
    console.log(newPost.dataValues)
    db.Post.create(newPost.dataValues)
    
    // newPost.save()
    .then(value => {
        req.flash('success_msg', 'Great Successful Post!!');
        res.redirect('/home/posts');
    }).catch(err => console.log(err))
});


module.exports = router;