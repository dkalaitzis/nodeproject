const express = require('express');
const router = express.Router();
const db = require('../models');
const { ensureAuthenticated } = require('../config/auth');

// Display All Posts
router.get('/posts',  (req,res) => 
    //ensureAuthenticated, (put this next to 'posts,)
    res.render('posts', {
        // name: req.user.name (Populate the page with posts)
    }));  
    db.Post.findAll()
        .then(post => {
            res.render('posts', {
                content,
                UserId
            });
            // console.log(posts);
        })
        .catch(err => console.log(err));

// Create Post
router.post('/posts', (req, res) => {
    // Insert into table
    const newPost = new db.Post({
        content,
        UserId
    });
    db.Post.create({content: newPost.content, UserId: newPost.req.user.id})
    .then(user => {
        req.flash('success_msg', 'Great Successful Post!!');
        res.redirect('/home/posts');
    }).catch(err => console.log(err))
});


module.exports = router;