const express = require('express');
const router = express.Router();

router.use('/users', (req, res) => {
    res.json({ users: ['jeremy', 'david' ]});
});

module.exports = router;
