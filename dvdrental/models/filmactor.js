'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FilmActor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FilmActor.init({
    actor_id: DataTypes.INTEGER,
    film_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FilmActor',
    tableName: 'film_actor'
  });
  return FilmActor;
};