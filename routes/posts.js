const express = require('express');
const router = express.Router();
const db = require('../models');
const { ensureAuthenticated } = require('../config/auth');

// Display All Posts
router.get('/posts',  (req,res) => 
    //ensureAuthenticated, (put this next to 'posts,)
    res.render('posts', {
        // name: req.user.name
    }));  
    db.Post.findAll()
        .then(post => {
            res.render('posts', {
                content,
                UserId
            });
            // console.log(posts);
            // res.sendStatus(200);
        })
        .catch(err => console.log(err));

// Create Post
router.post('/posts', (req, res) => {
    // Insert into table
    const newPost = new db.Post({
        content,
        UserId
    });
    db.User.create({content: newPost.content, UserId: newPost.UserId})
    .then(user => {
        req.flash('success_msg', 'Great Successful Post!!');
        res.redirect('/home/posts');
    }).catch(err => console.log(err))
});


module.exports = router;