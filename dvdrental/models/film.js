'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Film.belongsToMany(models.Category, {
            through: 'FilmCategory',
            foreignKey: 'film_id',
            otherKey: 'category_id',
            as: 'categories'
        });
        Film.belongsToMany(models.Actor, {
            through: FilmActor,
            foreignKey: 'film_id',
            otherKey: 'actor_id',
            as: 'actors',
        });
    }
  }
  Film.init({
    film_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    release_year: DataTypes.INTEGER,
    language_id: DataTypes.SMALLINT,
    rental_duration: DataTypes.SMALLINT,
    rental_rate: DataTypes.DECIMAL(4, 2),
    length: DataTypes.SMALLINT,
    replacement_cost: DataTypes.DECIMAL(5, 2),
    rating: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
    last_update: DataTypes.DATE,
    special_features: DataTypes.ARRAY(DataTypes.TEXT),
    fulltext: DataTypes.TSVECTOR,
  }, {
    sequelize,
    modelName: 'Film',
    tableName: 'film'
  });
  return Film;
};