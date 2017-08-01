const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    if (!req.user) {
        res.json({success: false});
    } else {
        return next();
    }
});

router.post('/createNewBook', function(req, res) {
    // createNewBook
});

module.exports = router;
