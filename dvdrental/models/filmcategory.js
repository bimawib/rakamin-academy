'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FilmCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FilmCategory.init({
    film_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FilmCategory',
    tableName: 'film_category'
  });
  return FilmCategory;
};