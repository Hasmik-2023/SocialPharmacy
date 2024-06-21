'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,ShopCart}) {
      this.belongsToMany(User, 
        { through: "ShopCart",
          foreignKey: 'drugsId' });
      this.hasMany(ShopCart, {foreignKey: "drugsId"})
    }
  }
  Drug.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};