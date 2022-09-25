'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThemeUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ThemeUser.belongsTo(models.User)
      ThemeUser.belongsTo(models.Theme)
      
    }
  }
  ThemeUser.init({
    themeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ThemeUser',
  });
  return ThemeUser;
};