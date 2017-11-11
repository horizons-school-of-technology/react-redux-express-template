const express = require('express');
const router = express.Router();
const {Post, Vote} = require('./models');
var sequelize = require('sequelize');

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
  Post.findAll({
    where: {id: req.params.id},
    attributes: ['id', 'title', 'body', 'createdAt', 'userId', 'parent_id', [sequelize.fn('sum', sequelize.col('votes.isUpvote')), 'votecount']],
    include: [
      { model: Vote, as: 'votes' }
    ],
    group: ['post.id','votes.id']
  })
  .then( resp => {
    let childrenObj = {}
    childrenObj[resp[0].dataValues.id] = resp[0].dataValues
    childrenObj[resp[0].dataValues.id].children = [];
    let recurseLeft = 1;
    find=(children)=>{
      recurseLeft --;
      if(!children.length && !recurseLeft) res.json(childrenObj[req.params.id]);
      children.forEach( child => {
        if(child.dataValues.id != req.params.id) {
          childrenObj[child.dataValues.parent_id].children.push(child.dataValues);
          childrenObj[child.dataValues.id] = child.dataValues;
          childrenObj[child.dataValues.id].children = [];
        }
        recurseLeft ++;
        (async function x(){
          var resp = await Post.findAll({
              where: {parent_id: child.id},
              attributes: ['id', 'title', 'body', 'createdAt', 'userId', 'parent_id', [sequelize.fn('sum', sequelize.col('votes.isUpvote')), 'votecount']],
              include: [
                { model: Vote, as: 'votes' }
              ],
              group: ['post.id','votes.id']
            })
           var resp = await find(resp);
           return resp;
           console.log("here");
        })()
      })}
    find(resp);
  })
})

router.get('/post/:id/:vote', function(req, res){
  console.log(req.user);
  Vote.findOne({where: {postId: req.params.id, userId: req.user.id}})
  .then( (resp) => {

    if(resp){
      // They upvoted an upvote --> destroy vote
      if(resp.dataValues.isUpvote && req.params.vote === 'upvote'){
        Vote.destroy({where: {postId: req.params.id, userId: req.user.id}})
        .then(() => res.json({success: 'true'}));
      }

      // They downvoted an upvote --> change isUpvote to false
      else if(resp.dataValues.isUpvote && req.params.vote === 'downvote') {
        Vote.update({isUpvote: -1}, {where: {postId: req.params.id, userId: req.user.id}})
        .then(() => res.json({success: 'true'}));
      }

      // They upvoted a downvote --> change isUpvote to true
      if(!resp.dataValues.isUpvote && req.params.vote === 'upvote'){
        Vote.update({isUpvote: 1}, {where: {postId: req.params.id, userId: req.user.id}})
        .then(() => res.json({success: 'true'}));
      }

      // They downvoted a downvote --> destroy vote
      else if(!resp.dataValues.isUpvote && req.params.vote === 'downvote') {
        Vote.destroy({where: {postId: req.params.id, userId: req.user.id}})
        .then(() => res.json({success: 'true'}));
      }
    } else {
      Vote.create({postId: req.params.id, userId: req.user.id, isUpvote: req.params.vote === 'upvote' ? 1 : -1})
      .then(() => res.json({success: 'true'}));
    }
  })
});


module.exports = router;
