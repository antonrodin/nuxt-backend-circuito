'use strict';

const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return Promise.all([
      User.create({
        name: "Anton",
        email: "azr@azr.es",
        password: bcrypt.hashSync("123456", +authConfig.rounds),
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('users', null, {})
    ]);
  }
};
