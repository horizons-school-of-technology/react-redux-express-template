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
		type: Sequelize.INT,
		defaultValue: 0
	}
});

const Post = sequelize.define('post', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.STRING,
		allowNull: false
	},
	points: {
		type: Sequelize.INT,
		defaultValue: 0
	},
	is_link: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	},
	image_url: {
		type: Sequelize.STRING,
		defaultValue: 
	}
});
