"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', process.env.DATABASE_PASSWORD, {
  dialect: 'postgres'
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// MODELS GO HERE
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Post = sequelize.define('post', {
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Post.belongsTo(User);
Post.belongsTo(Post, {as:'parent'});
// Post.findAll({include: {model: Post, as: 'parent'}})
// Post.hasOne(Post, {as:'Parent', foreignKey: 'parentId'});

module.exports = {
  sequelize,
  Sequelize,
  User,
  Post,
};
