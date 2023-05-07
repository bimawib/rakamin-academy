'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Films', {
      film_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      release_year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      language_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      rental_duration: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 3,
      },
      rental_rate: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: false,
        defaultValue: 4.99,
      },
      length: {
        type: Sequelize.SMALLINT,
        allowNull: true,
      },
      replacement_cost: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 19.99,
      },
      rating: {
        type: Sequelize.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
        allowNull: true,
      },
      last_update: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE,
      },
      special_features: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      fulltext: {
        type: Sequelize.TSVECTOR,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Films');
  }
};
