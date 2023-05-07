'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsToMany(models.Film, {
        through: 'FilmCategory',
        foreignKey: 'category_id',
        otherKey: 'film_id',
        as: 'films'
      });
    }
  }
  Category.init({
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'category'
  });
  return Category;
};