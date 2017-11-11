"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', null, {
  dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
  },
  parent_id: {
    type: Sequelize.INTEGER,
  },
});

const Vote = sequelize.define('vote', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  isUpvote: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Post.belongsTo(User);
Vote.belongsTo(User);
Vote.belongsTo(Post);
Post.hasMany(Vote, { as: 'votes', foreignKey: 'postId' });

module.exports = {
  sequelize,
  User,
  Post,
  Vote
};
