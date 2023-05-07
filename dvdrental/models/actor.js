'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.belongsToMany(models.Film, { 
        through: FilmActor,
        foreignKey: 'actor_id',
        otherKey: 'film_id',
        as: 'films',
      });
    }
  }
  Actor.init({
    actor_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Actor',
    tableName: 'actor'
  });
  return Actor;
};