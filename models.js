"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', process.env.DATABASE_PASSWORD, {
    dialect: 'postgres'
});
// lol
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
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    karma: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

const Post = sequelize.define('post', {
    fk_author_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING(1023),
        allowNull: false
    },
    points: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    is_link: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValie: 0
    },
    image_url: {
        type: Sequelize.STRING(511),
        defaultValue: 'https://goo.gl/PrZTpL'
    }
});

const Comment = sequelize.define('comment', {
    fk_author_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    fk_post_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Post,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    content: {
        type: Sequelize.STRING(1023),
        allowNull: false
    },
    points: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

const Vote = sequelize.define('vote', {
    fk_voter_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    fk_post_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Post,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: true
    },
    fk_comment_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Comment,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        },
        allowNull: true
    },
    type: {
        type: Sequelize.STRING
    }
});

module.exports = {
    sequelize,
    User,
    Post,
    Comment,
    Vote
};
