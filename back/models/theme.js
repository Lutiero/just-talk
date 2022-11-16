'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Theme.belongsToMany(models.User, {through: 'ThemeUser'})
      Theme.hasMany(models.Topic)
    }
  }
  Theme.init({
    title: DataTypes.STRING,
    subscribersAmount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    smallImage: DataTypes.STRING,
    largeImage: DataTypes.STRING,
    highlighted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};