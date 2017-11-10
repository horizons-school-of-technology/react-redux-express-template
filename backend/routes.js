const express = require('express');
const router = express.Router();
const {Post} = require('./models');

// YOUR API ROUTES HERE
router.post('/post/new', (req, res) => {
  Post.create({userId: req.user.id, title: req.body.title, body: req.body.body})
  .then(() => res.json({msg: 'new post successful'}))
  .catch(err => res.json({err}));
});

router.get('/post/all', (req, res) => {
  Post.findAll()
  .then(resp => res.json({posts: resp}));
});

router.post('/post/:id', function(req, res){
  Post.create({userId: req.user.id, title: req.body.title, body: req.body.body, parent_id: req.params.id})
  .then( resp => res.json(resp));
})

router.get('/post/:id', function(req, res){
  Post.findAll({where: {id: req.params.id}})
  .then( resp => {
    let childrenObj = [];
    let recurseLeft = 1;

    async function find(children) {

      recurseLeft --;
      if(!children.length && !recurseLeft) {
        res.json(childrenObj);
      }
      else if(!children.length){
        return childrenObj;
      }
      children.forEach( child => {
        childrenObj.push(child.dataValues)
        recurseLeft ++;
        (async function x(){
          var resp = await Post.findAll({where: {parent_id: child.id}})
           var resp = await find(resp);
           return resp;
           console.log("here");
        })()
      })

    }
  find(resp);
})
})



module.exports = router;
