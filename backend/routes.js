const express = require('express');
const router = express.Router();
const User = require('../root/models').User;

// YOUR API ROUTES HERE
router.get('/:username', (req, res) => {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
        console.log('user when finding by username: ', user);
        res.json({success: true, user: user});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});

router.get('/', (req, res) => {
    console.log('req user is: ', req.user);
    User.findById(req.user.id)
    .then(user => {
        console.log('user when finding user on /: ', user);
        res.json({success: true, user: user});
    })
    .catch(err => {
        res.json({success: false, err: err});
    });
});


module.exports = router;
