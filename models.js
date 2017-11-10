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
var User = sequelize.define('user', {
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

var Post = sequelize.define('posts', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  content: Sequelize.STRING,
  attachment: Sequelize.STRING
});

var Vote = sequelize.define('vote', {
  vote_type: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Post.belongsTo(User, {foreignKey: 'fk_poster_id', targetKey: 'id'});
Vote.belongsTo(User, {foreignKey: 'fk_voter_id', targetKey: 'id'});
Vote.belongsTo(Post, {foreignKey: 'fk_post_id', targetKey: 'id'});
Vote.belongsTo(User, {foreignKey: 'fk_voter_id', targetKey: 'id'});
Post.belongsTo(Post, {foreignKey: 'fk_parent_post_id', targetKey: 'id'});
Post.hasMany( Post, { as: 'children', foreignKey: 'postId' } );
Post.belongsTo( Post, { as: 'parent', foreignKey: 'postId' } );

module.exports = {
    User,
    Post,
    Vote,
    Sequelize,
    sequelize
    // EXPORT models HERE
};
