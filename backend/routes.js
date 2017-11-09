"use strict";

const express = require('express');
const router = express.Router();
const {
  User,
  Post,
} = require('../models');

function createRouter(passport) {
  router.post('/user/register', async (req, res, next) => {
    if (req.body.password !== req.body.password2) {
      res.status(400).json({
        success: 'false',
        message: 'password match error',
      });
    }
    else {
      try {
        let user = await User.create({
          username: req.body.username,
          password: req.body.password,
        })
        res.status(200).json(user);
      }
      catch (err) {
        res.status(400).json(err)
        console.log(err);
      }
    }
  });

  router.post('/user/login',
    passport.authenticate('local'),
    (req, res) => {
      let user = Object.assign({}, req.user.dataValues);
      delete user.password;
      res.status(200).json({
        success: 'true',
        user,
        req: req.user,
        msg: 'hi',
      })
    }
  );

  router.get('/user/logout', (req, res) => {
    req.logout();
    res.status(200).json({
      success: 'true',
      message: 'logged out',
    })
  })

  router.get('/user/:username', async (req, res) => {
    try {
      let user = await User.findOne({
        where: {
          username: req.params.username,
        },
        attributes: { exclude: ['password'] },
      })
      if (!user) {
        res.status(400).json({
          success: 'false',
          message: 'no user found',
        })
      }
      else {
        res.status(200).json({
          success: 'true',
          user,
        })
      }
    }
    catch(err) {
      res.status(400).json({
        success: 'false',
        err,
      })
    }
  })

  router.get('/user', async (req, res) => {
    if (!req.user) {
      res.status(400).json({
        success: 'false',
        message: 'not logged in',
      })
    }
    try {
      let user = await User.findById(req.user.id, {
        attributes: { exclude: ['password'] },
      })
      if (!user) {
        res.status(400).json({
          success: 'false',
          message: 'no user found',
        })
      }
      else {
        res.status(200).json({
          success: 'true',
          user,
        })
      }
    }
    catch(err) {
      res.status(400).json({
        success: 'false',
        err,
      })
    }
  })

  return router;
}

module.exports = createRouter;
