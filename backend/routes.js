const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE


module.exports = function (Models) {
    const { User, Post, Comment, Vote } = Models;


    router.post('/register', (req, res) => {

    })

    router.post('/login', (req, res) => {
        res.json({
            message: 'hello'
        });
    })

    return router;
}

