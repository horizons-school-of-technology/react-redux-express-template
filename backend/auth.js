"use strict";
var express = require('express');
var router = express.Router();

module.exports = function (passport, Models) {
	const { User, Post, Comment, Vote } = Models;

	//testing

	router.post('/login', function (req, res, next) {
		passport.authenticate('local', function (err, user) {
			if (err) {
				return next(err);
			} else if (!user) {
				return res.json({
					success: false,
					message: 'Login failed!'
				})
			}
			req.logIn(user, function (err) {
				if (err) {
					return next(err);
				}
				return res.json({
					success: true,
					message: 'Login successful!'
				});
			});
		})(req, res, next);
	});

	router.post('/register', (req, res) => {
		let body = req.body;
		User.findAll({
			where: {
				username: body.username
			}
		})
			.then((result) => {
				console.log(result)
				if (result.length) {
					res.json({
						success: false,
						message: 'Username ' + result[0].dataValues.username + ' is taken.'
					});
				}
				else {
					User.create({
						username: body.username,
						password: body.password
					})
						.then(result2 => {
							res.json({
								success: true,
								message: 'Registered successfully!'
							});
						})
				}
			})
			.catch((err) => {
				res.send('Database error:', err)
				console.log(err);
			})
	})



	router.post('/logout', (req, res) => {
		req.logout();
	})

	return router;
};