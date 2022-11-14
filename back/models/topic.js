"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Topic.belongsTo(models.Theme);
      Topic.hasMany(models.Reply);
    }
  }
  Topic.init(
    {
      content: DataTypes.STRING,
      repliesAmount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      themeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
