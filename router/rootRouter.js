const express = require('express');

const router = express.Router();

router.get('/posts/:postId/:anotherId', (req, res, next) => {
    // res.statusMessage = 'castom status message';
    // res.status(200).end('hello from router');
    const { postId, anotherId } = req.params;

    console.log(typeof postId, typeof anotherId);
    
    res.json({name: 'Olya'})
});

module.exports = {
    router
};