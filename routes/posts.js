const express = require('express');
const router = express.Router();
const db = require('../models');
const { ensureAuthenticated } = require('../config/auth');

// Display All Posts
router.get('/posts',  (req,res) => {
    //ensureAuthenticated, (put this next to 'posts,)
    db.Post.findAll({include: db.User})
        .then(posts => {
            console.log(req.user);
            res.render('posts', {
                posts,
                               
            });
        })
        .catch(err => console.log(err));
    });

// Create Post
router.post('/posts', (req, res) => {
    // Insert into table
    const newPost = new db.Post({
        content,
        User
    });
    db.Post.create({content: newPost.content, User: newPost.db.User})
    .then(user => {
        req.flash('success_msg', 'Great Successful Post!!');
        res.redirect('/home/posts');
    }).catch(err => console.log(err))
});


module.exports = router;