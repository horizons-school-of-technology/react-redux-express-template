"use strict";

var models = require('./models');

models.sequelize.sync({ force: true })
  .then(function() {
      console.log('Successfully updated database tables!');
      process.exit(0);
  })
  .catch(function(error) {
      console.log('Error updating database tables', error);
      process.exit(1);
  });
