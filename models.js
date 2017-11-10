"use strict";

var Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);

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

const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    img_url: Sequelize.STRING
});

const Post = sequelize.define('post', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: Sequelize.STRING,
    content: { type: Sequelize.STRING(1234), allowNull: false }
});
Post.isHierarchy();

const Vote = sequelize.define('vote', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    up: {type: Sequelize.BOOLEAN, allowNull: false }
});

Post.belongsTo(User, { foreignKey: { allowNull: false} });
Post.belongsTo(Post);
Vote.belongsTo(Post, { foreignKey: { allowNull: false } });
Vote.belongsTo(User, { foreignKey: { allowNull: false } });
// Post.belongsTo(SubReddit, { foreignKey: { allowNull: false } });

module.exports = {
    User,
    Post,
    Vote,
    sequelize
};
