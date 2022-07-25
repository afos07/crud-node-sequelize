'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
     return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:true
      },
      nome: {
        type:Sequelize.STRING,
        allowNull:true
      },
      email: {
        type:Sequelize.STRING,
        allowNull:true
      },
      create_at: {
        type:Sequelize.DATE,
        allowNull:true
      },
      update_at: {
        type:Sequelize.DATE,
        allowNull:true
      }
      });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')  
  }
};
