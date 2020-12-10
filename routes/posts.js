const express = require('express');
const router = express.Router();
const db = require('../models');
const Post = require ('../models/Post');

// Get posts
router.get('/', (req, res) => 
    Post.findAll()
        .then(posts => {
            console.log(posts);
            res.sendStatus(200);
        })
        .cath(err => console.log(err)));

// Add Post
router.get('/add', (req, res) => {
    const data = {
        title: 'Title'
    }

    let { content, user_id } = data;

    // Insert into table
    Post.create({
        content,
        user_id
    })
        .then(post => res.redirect('/posts'))
        .catch(err => console.log(err));
});




module.exports = router;