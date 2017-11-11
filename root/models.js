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
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
  // ADD MORE ATTRIBUTES HERE
});

var Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postId: {
        type: Sequelize.INTEGER
    },
});

Post.hasMany( Post, { as: 'children', foreignKey: 'postId' } );
Post.belongsTo( Post, { as: 'parent', foreignKey: 'postId' } );
Post.belongsTo(User);

module.exports = {
    sequelize,
    User,
    Post,
    // EXPORT models HERE
};
