const express = require('express');
const router = express.Router();


// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.post('/user/register', (req, res, next) => {
    User.create({username: req.body.username, password: req.body.password})
    .then((result) => res.json({user: result}))
    .catch((err) => res.send(404))
})

router.get('/user/logout', (req, res, next) => {
  req.logout();
});

router.get('/user/[username]', (req, res, next) => {
  User.findAll({username: req.params.username})
  .then((result) => res.json({user: result}))
  .catch((err) => res.send(404))
});

router.get('/', (req, res, next) => {
  
})



module.exports = router;
